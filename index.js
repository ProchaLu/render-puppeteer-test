import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log('__dirname:', __dirname);

const path = require('path');
const puppeteerPath = require.resolve('puppeteer');
const absolutePath = path.resolve(puppeteerPath);
console.log('Absolute path to Puppeteer:', absolutePath);

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://example.com');

//   const title = await page.title();
//   console.log(`Page title: ${title}`);

//   await browser.close();
// })();
