const puppeteer = require('puppeteer');
 
puppeteer.launch({
  headless: false,
  slowMo: 100
}).then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://iwb.jp/wp-login.php');
  await page.$eval('#user_login', e => e.value = 'foo');
  await page.$eval('#user_pass', e => e.value = 'bar');
  const result = await page.evaluate(() => {
    return confirm('認証のため5秒一時停止しますか？')
  });
  console.log(result); // true or false
  if (result) {
    await page.waitFor(5000);
  }
  browser.close();
});
