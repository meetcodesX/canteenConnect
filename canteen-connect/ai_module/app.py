import os
import numpy as np
import cv2
from flask import Flask, request, jsonify
from ultralytics import YOLO

app = Flask(__name__)

# ------------------------------
# Load YOLO Model Once at Startup
# ------------------------------

# Load model path (default included file in repo)
MODEL_PATH = os.environ.get("MODEL_PATH", "yolov8n.pt")

print(f"Loading YOLO model from: {MODEL_PATH}")
model = YOLO(MODEL_PATH)


# ------------------------------
# Home Route (Health Check)
# ------------------------------
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "AI Module Running"}), 200


# ------------------------------
# Prediction Route
# ------------------------------
@app.route("/predict", methods=["POST"])
def predict():
    # Check if image exists
    if "image" not in request.files:
        return jsonify({"error": "No image file provided"}), 400

    file = request.files["image"]

    # Convert the image into numpy array
    img_bytes = file.read()
    np_img = np.frombuffer(img_bytes, np.uint8)
    img = cv2.imdecode(np_img, cv2.IMREAD_COLOR)

    if img is None:
        return jsonify({"error": "Invalid image"}), 400

    # Run YOLO prediction
    results = model(img)[0]

    detections = []
    for box in results.boxes:
        cls = int(box.cls[0])
        label = model.names[cls]
        conf = float(box.conf[0])

        detections.append({
            "label": label,
            "confidence": round(conf, 3)
        })

    return jsonify({
        "detections": detections,
        "total": len(detections)
    })


# ------------------------------
# Main for local testing
# ------------------------------
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
