const mongoose = require('mongoose');
const MenuItem = require('./server/models/MenuItem');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/canteen-connect')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Menu items to add
const menuItems = [
  {
    name: 'Samosa',
    price: 15,
    description: 'Crispy fried pastry filled with spiced potatoes and peas',
    category: 'Snacks',
    imageUrl: '',
    isAvailable: true
  },
  {
    name: 'Dosa',
    price: 45,
    description: 'Thin, crispy crepe made from fermented rice and lentil batter',
    category: 'Breakfast',
    imageUrl: '',
    isAvailable: true
  },
  {
    name: 'Idli',
    price: 35,
    description: 'Soft, steamed rice cakes served with sambar and chutney',
    category: 'Breakfast',
    imageUrl: '',
    isAvailable: true
  },
  {
    name: 'Noodles',
    price: 60,
    description: 'Stir-fried noodles with vegetables and choice of sauce',
    category: 'Lunch',
    imageUrl: '',
    isAvailable: true
  },
  {
    name: 'Fried Rice',
    price: 55,
    description: 'Aromatic basmati rice stir-fried with vegetables and spices',
    category: 'Lunch',
    imageUrl: '',
    isAvailable: true
  },
  {
    name: 'Coke',
    price: 25,
    description: 'Refreshing cola drink',
    category: 'Beverages',
    imageUrl: '',
    isAvailable: true
  },
  {
    name: 'Poha',
    price: 30,
    description: 'Flattened rice cooked with onions, spices and herbs',
    category: 'Breakfast',
    imageUrl: '',
    isAvailable: true
  },
  {
    name: 'Vada Pav',
    price: 20,
    description: 'Spicy potato fritter served in a soft bun with chutneys',
    category: 'Snacks',
    imageUrl: '',
    isAvailable: true
  }
];

// Add menu items
async function addMenuItems() {
  try {
    // Clear existing menu items first
    await MenuItem.deleteMany({});
    console.log('Cleared existing menu items');
    
    // Add new menu items
    const createdItems = await MenuItem.insertMany(menuItems);
    console.log(`Successfully added ${createdItems.length} menu items:`);
    
    createdItems.forEach(item => {
      console.log(`- ${item.name} (₹${item.price}) - ${item.category}`);
    });
    
    process.exit(0);
  } catch (error) {
    console.error('Error adding menu items:', error);
    process.exit(1);
  }
}

addMenuItems();
