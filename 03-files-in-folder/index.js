const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'secret-folder');

fs.readdir(filePath, { withFileTypes: true }, (err, files) => {
    if (err) {
        console.error(err);
        return;
      }
      files.forEach((file) => {
        if (file.isFile()) {
            const fullPath = path.join(filePath, file.name);
            const fileName = path.parse(file.name).name;
            const fileExtension = path.extname(file.name);

            fs.stat(fullPath, (err, stats) => {
                if (err) {
                    console.error(err)
                    return
                }
                const fileSize = stats.size;
                console.log(`${fileName} - ${fileExtension.slice(1)} - ${fileSize} bytes`);
          })
        }
    })
})

