const fs = require('fs/promises');
const path = require('path');

const filePath = path.join(__dirname, 'files');
const filePathCopy = path.join(__dirname, 'files-copy');

async function copyFilesfromFolder(filePath, filePathCopy) {
  await fs.mkdir(filePathCopy, { recursive: true });

  const items = await fs.readdir(filePath, { withFileTypes: true });

  for (const item of items) {
    const sourcePath = path.join(filePath, item.name);
    const destinationPath = path.join(filePathCopy, item.name);

    if (item.isDirectory()) {
        await copyFilesfromFolder(sourcePath, destinationPath);
    } else if (item.isFile()) {
        await fs.copyFile(sourcePath, destinationPath);
      }
  }
}

copyFilesfromFolder(filePath, filePathCopy)
  .then(() => console.log('Copying is complete'))
  .catch(console.error);