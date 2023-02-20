import { launch } from 'puppeteer';

(async () => {
  const browser = await launch({
    executablePath:
      '/opt/render/.cache/puppeteer/chrome/linux-1095492/chrome-linux/chrome',
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');

  const title = await page.title();
  console.log(`Page title: ${title}`);

  await browser.close();
})();
