import { launch } from 'puppeteer';

(async () => {
  const browser = await launch();
  const page = await browser.newPage();
  await page.goto('https://www.wikipedia.org');

  // Get the page's title
  const title = await page.title();
  console.log(`Page title: ${title}`);

  // Get the page's URL
  const url = await page.url();
  console.log(`Page URL: ${url}`);

  await browser.close();
})();
