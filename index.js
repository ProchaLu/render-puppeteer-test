(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage({
    exectuablePath:
      '/opt/render/project/src/.cache/puppeteer/chrome/linux-1095492/chrome-linux/chrome',
  });
  await page.goto('https://example.com');

  const title = await page.title();
  console.log(`Page title: ${title}`);

  await browser.close();
})();
