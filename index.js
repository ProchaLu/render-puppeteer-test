import puppeteer from 'puppeteer';

try {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  const title = await page.title();
  console.log(`Page title: ${title}`);

  await browser.close();
} catch (err) {
  console.error(err);
}
