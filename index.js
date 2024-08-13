const Tesseract = require('tesseract.js');

Tesseract.recognize(
  'path/to/your/image.png',
  'eng',
  {
    logger: m => console.log(m) // Log progress messages
  }
).then(({ data: { text } }) => {
  console.log(text);
});
