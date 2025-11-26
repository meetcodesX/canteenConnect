from flask import Flask, request, jsonify
from ultralytics import YOLO
import numpy as np
import cv2
import io
from PIL import Image
import os

app = Flask(__name__)

# Path to model file (either in repo or downloaded)
MODEL_PATH = os.environ.get("MODEL_PATH", "yolov8n.pt")

# Load model once at startup
model = YOLO(MODEL_PATH)

@app.route("/", methods=["GET"])
def home():
    return "AI Module running"

@app.route("/predict", methods=["POST"])
def predict():
    # Expecting multipart/form-data with key 'image'
    if 'image' not in request.files:
        return jsonify({"error": "No image file provided"}), 400

    file = request.files['image'].read()
    # Convert binary to BGR image for OpenCV
    npimg = np.frombuffer(file, np.uint8)
    img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)
    if img is None:
        return jsonify({"error": "Invalid image"}), 400

    # Run detection
    results = model(img)           # returns Results object list
    res0 = results[0]
    boxes = res0.boxes             # Boxes object
    count = 0
    if boxes is not None:
        count = boxes.shape[0] if hasattr(boxes, "shape") else len(boxes)

    # Example: return count and raw boxes coordinates
    bboxes = []
    if boxes is not None:
        for box in boxes:
            x1, y1, x2, y2 = box.xyxy[0].tolist()  # box coordinates
            conf = float(box.conf[0]) if hasattr(box, "conf") else None
            cls = int(box.cls[0]) if hasattr(box, "cls") else None
            bboxes.append({"x1": x1, "y1": y1, "x2": x2, "y2": y2, "conf": conf, "cls": cls})

    return jsonify({
        "crowd_count": int(count),
        "boxes": bboxes
    })


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    # For local dev only; Railway will use Procfile/gunicorn
    app.run(host="0.0.0.0", port=port)
