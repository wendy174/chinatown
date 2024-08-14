const Tesseract = require('tesseract.js');

function parseMenuTextToJson(text) {
  const menuJson = {
      "menu": {
          "Appetizers": [], 
          "Soup": [], 
          "Egg Foo Young": [], 
          "Lo Mein": [], 
          "Chop Suey": [],
          "Fried Rice": [], 
          "Combination Plates": [], 
          "Chow Mein": [], 
          "Vegetables": [], 
          "Sweet & Sour": [], 
          "Poultry": [], 
          "Pork": [], 
          "Beef": [], 
          "Seafood": [], 
          "House Specialties": [], 
          "Special Diet Menu": []
      }
  };

  const lines = text.split('\n');
  let currentCategory = null;

  lines.forEach(line => {
      line = line.trim();

      // Detect categories
      if (line.includes("Appetizers")) {
          currentCategory = "Appetizers";
      } else if (line.includes("Soup")) {
          currentCategory = "Soup";
      } else if (line.includes("Egg Foo Young")) {
          currentCategory = "Egg Foo Young";
      } else if (line.includes("Lo Mein")) {
          currentCategory = "Lo Mein";
      } else if (line.includes("Chop Suey")) {
          currentCategory = "Chop Suey";
      } else if (line.includes("Fried Rice")) {
          currentCategory = "Fried Rice";
      } else if (line.includes("Combination Plates")) {
          currentCategory = "Combination Plates";
      } else if (line.includes("Chow Mein")) {
          currentCategory = "Chow Mein";
      } else if (line.includes("Vegetables")) {
          currentCategory = "Vegetables";
      } else if (line.includes("Sweet & Sour")) {
          currentCategory = "Sweet & Sour";
      } else if (line.includes("Poultry")) {
          currentCategory = "Poultry";
      } else if (line.includes("Pork")) {
          currentCategory = "Pork";
      } else if (line.includes("Beef")) {
          currentCategory = "Beef";
      } else if (line.includes("Seafood")) {
          currentCategory = "Seafood";
      } else if (line.includes("House Specialties")) {
          currentCategory = "House Specialties";
      } else if (line.includes("Special Diet Menu")) {
          currentCategory = "Special Diet Menu";
      }

      if (currentCategory) {
          const match = line.match(/^(.*?)\s+(\d+\.\d{2})$/);
          if (match) {
              const name = match[1].trim();
              const price = parseFloat(match[2]);
              menuJson.menu[currentCategory].push({
                  name: name,
                  price: price
              });
          }
      }
  });

  return menuJson;
}

Tesseract.recognize(
  './main.jpg',
  'eng',
  {
    logger: m => console.log(m) // Log progress messages
  }
).then(({ data: { text } }) => {
  // After the text is recognized, parse it into JSON
  const menuJson = parseMenuTextToJson(text);

  // Output the JSON structure
  console.log(JSON.stringify(menuJson, null, 2));
}).catch(err => {
  console.error('Error:', err);
});
