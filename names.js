const fs = require('fs');

function getFileNames(folderPath) {
  return fs.readdirSync(folderPath)
    .filter(file => fs.statSync(`${folderPath}/${file}`).isFile())
    .map(file => file);
}

// Example usage:
const folderPath = 'roms';  // Replace with the actual folder path
const fileNames = getFileNames(folderPath);

// Print the file names
fileNames.forEach(fileName => {
  console.log(fileName);
});
