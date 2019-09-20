const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.goto("https://facebook.com/");
    await page.type("#email", "test_mqyhoct_app@tfbnw.net");
    await page.type("#pass", "a123123123");
    await page.click("#loginbutton");
    await page.waitForNavigation();
/*
    const postElements = await page.evaluate(() => {
        const data = []
        let postElements = document.getElementsByClassName('._5_jv _58jw');
        postElements = [...postElements];
        postElements.forEach(e => data.push({
            name: e.getElementsByClassName("fwb")[0].innerText,
            time: e.getElementsByClassName("timestampContent")[0].innerText,
            content: e.getElementsByClassName("_5_jv _58jw")[0].innerText
        }))
        return postElements;
    });
*/

const postElements = await page.evaluate(() => {
    let items = document.querySelectorAll('._5pcb p')
    let links = []
    items.forEach((item) => {
      links.push({
        title: item.innerText,
        url: item.getAttribute('href'),
      })
    })
    return links;
  });
    console.log(postElements);
    await browser.close();
})();