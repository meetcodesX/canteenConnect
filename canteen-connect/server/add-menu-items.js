// Seed or replace menu items with images and INR prices
const mongoose = require('mongoose');
const path = require('path');
const MenuItem = require('./models/MenuItem');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/canteen-connect';

const items = [
  { name: 'Samosa', price: 15, description: 'Crispy fried pastry with savory filling', category: 'Snacks', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Samosachutney.jpg' },
  { name: 'Dosa', price: 45, description: 'Thin, crispy crepe made from fermented rice and lentil batter', category: 'Breakfast', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Dosa_and_ghee.jpg' },
  { name: 'Idli', price: 35, description: 'Soft, fluffy steamed rice cakes', category: 'Breakfast', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Idli_Sambar.jpg' },
  { name: 'Noodles', price: 60, description: 'Stir-fried noodles with vegetables', category: 'Lunch', imageUrl: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Fried Rice', price: 55, description: 'Aromatic rice stir-fried with vegetables and sauces', category: 'Lunch', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Coke', price: 25, description: 'Refreshing carbonated drink', category: 'Beverages', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Coca-Cola_Glas_mit_Eis.jpg' },
  { name: 'Poha', price: 30, description: 'Flattened rice with spices and vegetables', category: 'Breakfast', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Poha%2C_Indore.jpg' },
  { name: 'Vada Pav', price: 20, description: 'Spicy potato fritter in a bun', category: 'Snacks', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Vada_Paav.JPG' },
  { name: 'Cold Coffee', price: 40, description: 'Chilled creamy coffee', category: 'Beverages', imageUrl: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Ice Cream', price: 35, description: 'Scoops of assorted flavors', category: 'Dessert', imageUrl: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Pizza', price: 120, description: 'Cheesy veggie pizza slice', category: 'Lunch', imageUrl: 'https://images.unsplash.com/photo-1548365328-9f547fb0953f?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Burger', price: 80, description: 'Veg burger with fries', category: 'Snacks', imageUrl: 'https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Chole Bhature', price: 90, description: 'Spicy chickpeas with fried bread', category: 'Lunch', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Chole_Bhature_from_India.jpg' },
  { name: 'Upma', price: 35, description: 'Savory semolina breakfast', category: 'Breakfast', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Upma_with_coconut_chutney.jpg' },
  { name: 'Sprite', price: 25, description: 'Lemon-lime soft drink', category: 'Beverages', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Sprite_Zero_bottle.jpg' },
  { name: 'Campa', price: 20, description: 'Orange flavored fizzy drink', category: 'Beverages', imageUrl: 'https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1200&auto=format&fit=crop' }
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    await MenuItem.deleteMany({});
    console.log('Cleared existing menu items');

    const created = await MenuItem.insertMany(items);
    console.log(`Inserted ${created.length} items.`);

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();


