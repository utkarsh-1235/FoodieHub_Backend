// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('Foodie');

// // Create a new document in the collection.
// db.dishes.insertMany([
//     {
//       "name": "Margherita Pizza",
//       "img": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Margherita_pizza%2C_Naples%2C_Italy.jpg",
//       "price": 180,
//       "description": "Classic Margherita pizza with fresh mozzarella, tomatoes, and basil.",
//       "category": "Lunch",
//       "restaurants": ["67c85f8bacf93ea8fb97b55c", "67c8625afe0c9a05728948d0"]
//     },
//     {
//       "name": "BBQ Chicken Pizza",
//       "img": "https://upload.wikimedia.org/wikipedia/commons/d/d1/BBQ_Chicken_Pizza.jpg",
//       "price": 200,
//       "description": "A flavorful pizza topped with BBQ chicken, red onions, and cilantro.",
//       "category": "Lunch",
//       "restaurants": ["67c85f8bacf93ea8fb97b55c", "67c9c979995aace27171e96d"]
//     },
//     {
//       "name": "Beef Burger",
//       "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Hamburger_%28black_bg%29.jpg/800px-Hamburger_%28black_bg%29.jpg",
//       "price": 150,
//       "description": "Juicy beef patty in a toasted bun with lettuce, tomato, and cheese.",
//       "category": "Snacks",
//       "restaurants": ["67c8625afe0c9a05728948d0", "67c9c979995aace27171e96d"]
//     },
//     {
//       "name": "Chicken Wrap",
//       "img": "https://upload.wikimedia.org/wikipedia/commons/7/71/Chicken_wrap.jpg",
//       "price": 130,
//       "description": "Grilled chicken wrapped with fresh veggies and a creamy sauce.",
//       "category": "Snacks",
//       "restaurants": ["67c85f8bacf93ea8fb97b55c"]
//     },
//     {
//       "name": "Pancakes with Berries",
//       "img": "https://upload.wikimedia.org/wikipedia/commons/5/55/Blueberry_pancakes.jpg",
//       "price": 140,
//       "description": "Fluffy pancakes topped with fresh berries and maple syrup.",
//       "category": "Breakfast",
//       "restaurants": ["67c9c979995aace27171e96d"]
//     },
//     {
//       "name": "Eggs Benedict",
//       "img": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Eggs_Benedict%2C_Vancouver.jpg",
//       "price": 160,
//       "description": "Poached eggs on an English muffin with hollandaise sauce.",
//       "category": "Breakfast",
//       "restaurants": ["67c85f8bacf93ea8fb97b55c", "67c8625afe0c9a05728948d0"]
//     },
//     {
//       "name": "Tandoori Chicken",
//       "img": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Chicken_tandoori.jpg",
//       "price": 220,
//       "description": "Spicy and smoky Indian-style grilled chicken.",
//       "category": "Dinner",
//       "restaurants": ["67c85f8bacf93ea8fb97b55c"]
//     },
//     {
//       "name": "Sushi Platter",
//       "img": "https://upload.wikimedia.org/wikipedia/commons/d/db/Sushi_platter.jpg",
//       "price": 300,
//       "description": "An assortment of fresh sushi rolls and nigiri.",
//       "category": "Dinner",
//       "restaurants": ["67c9c979995aace27171e96d"]
//     },
//     {
//       "name": "Greek Salad",
//       "img": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Greek_Salad.jpg",
//       "price": 110,
//       "description": "A refreshing salad with feta cheese, olives, cucumbers, and tomatoes.",
//       "category": "Salad",
//       "restaurants": ["67c85f8bacf93ea8fb97b55c", "67c8625afe0c9a05728948d0"]
//     },
//     {
//       "name": "Caesar Salad",
//       "img": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Caesar_Salad_%282887793168%29.jpg",
//       "price": 120,
//       "description": "Classic Caesar salad with crispy romaine, parmesan, and croutons.",
//       "category": "Salad",
//       "restaurants": ["67c9c979995aace27171e96d"]
//     },
//     {
//       "name": "Chocolate Lava Cake",
//       "img": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Chocolate_Lava_Cake_%2825782951780%29.jpg",
//       "price": 180,
//       "description": "A warm chocolate cake with a gooey molten center.",
//       "category": "Dessert",
//       "restaurants": ["67c8625afe0c9a05728948d0"]
//     },
//     {
//       "name": "Mango Smoothie",
//       "img": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Mango_Lassi_%28sweet%29.jpg",
//       "price": 100,
//       "description": "A refreshing mango smoothie made with ripe mangoes and yogurt.",
//       "category": "Beverages",
//       "restaurants": ["67c85f8bacf93ea8fb97b55c"]
//     },
//     {
//       "name": "Iced Coffee",
//       "img": "https://upload.wikimedia.org/wikipedia/commons/2/21/Iced_coffee.jpg",
//       "price": 90,
//       "description": "Chilled coffee served over ice with a touch of milk.",
//       "category": "Beverages",
//       "restaurants": ["67c9c979995aace27171e96d"]
//     }
//   ]
//   )

db.dishes.find().sort({ _id: -1 }).limit(13).forEach(doc => {
    printjson(doc);  // This prints each document in a readable JSON format
  });
  
  db.dishes.find().sort({ _id: -1 }).limit(13).forEach(doc => {
    printjson(doc); // Print the document before deleting
    db.food_items.deleteOne({ _id: doc._id });
  });
  

db.dishes.countDocuments()

  
