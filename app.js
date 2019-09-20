const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.goto("https://sports998.com/vi-vn");
    await page.type(".input-username input", "xiuchu16");
    await page.type(".input-password input", "nhacai16");
    await page.click(".toggle-login-desktop");
    await page.waitForNavigation();
    
const pagelogin = await page.evaluate(() => {
    let balance = document.querySelector('.bal').innerText
    return balance;
  });
    console.log(pagelogin);
    await page.goto("https://www.sports998.com/vi-vn/lotto/lobby?partnerId=10")
    await page.screenshot({path: 'screenshot-bet.png'})

    const page1 = await browser.newPage()
    await page1.goto("https://ng-gc-188.prdangb18a1.com/vi-vn/report/results#/keno?counterid=1");
    await page1.screenshot({path: 'screenshot-r.png'})
    const pagebet = await page1.evaluate(() => {
      let items = document.querySelectorAll('.ng-binding')
      let luotrutso = []
      items.forEach((item) => {
        luotrutso.push(item.innerText)
      })
      return luotrutso;
    });
    console.log(pagebet)
    //await browser.close();
})();