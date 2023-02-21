(async () => {
  const browser = await puppeteer.launch({
    executablePath: '$HOME/.cache/puppeteer',
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');

  const title = await page.title();
  console.log(`Page title: ${title}`);

  await browser.close();
})();
