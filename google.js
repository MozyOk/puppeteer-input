const puppeteer = require('puppeteer');
 
puppeteer.launch({
    headless: false,
    slowMo: 100
}).then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://www.google.co.jp/');
  const t = await page.evaluate(() => prompt('検索する文字列を入力'));
  await page.type('.gLFyf', t)
  await page.click('.UUbT9 > .aajZCb > .VlcLAe > center > input:nth-child(1)');
  await page.waitFor(1000);
  await page.evaluate(() => alert('検索結果が表示されました'));
  browser.close();
});
