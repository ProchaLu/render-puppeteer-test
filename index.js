import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log('__dirname:', __dirname);

fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Contents of ${__dirname}:`);
  console.log(files);
});

fs.readdir('/opt/render/project/src/.cache', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Contents of .cache:`);
  console.log(files);
});

function findChromePath() {
  return new Promise((resolve, reject) => {
    let command;
    if (process.platform === 'win32') {
      command = 'where chrome';
    } else {
      command = 'which google-chrome || which chromium-browser';
    }
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else if (stderr) {
        reject(stderr);
      } else {
        const path = stdout.trim();
        if (path) {
          resolve(path);
        } else {
          reject('Chrome or Chromium not found.');
        }
      }
    });
  });
}

findChromePath()
  .then((chromePath) => {
    console.log(`Chrome or Chromium is installed at: ${chromePath}`);
  })
  .catch((err) => {
    console.error(err);
  });

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://example.com');

//   const title = await page.title();
//   console.log(`Page title: ${title}`);

//   await browser.close();
// })();
