import { launch } from 'puppeteer';

(async () => {
  const browser = await launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  const title = await page.title();
  console.log(`Page title: ${title}`);

  await browser.close();
})();
