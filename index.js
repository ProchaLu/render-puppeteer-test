(async () => {
  const browser = await puppeteer.launch({
    // Changes the cache location for Puppeteer.
    // cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
    executablePath: '$HOME/.cache/puppeteer',
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');

  const title = await page.title();
  console.log(`Page title: ${title}`);

  await browser.close();
})();
