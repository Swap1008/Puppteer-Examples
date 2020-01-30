const puppeteer=require('puppeteer');

describe('Performance Test', () => {
    let browser;
    let page;

    before(async()=>{
        browser=await puppeteer.launch({
            headless:true,
            slowMo:0,
            args:[
                '--start-maximized'
            ]
        });
        page = await browser.newPage();
        await page.setViewport({width:1366,height:768});
    });
    after(async()=>{

    });

    it('should show the performance',async()=>{
        await page.goto('https://pptr.dev');
        await page.waitForSelector('title');

        const metrics=await page.evaluate(() =>JSON.stringify(window.performance));

        // console.info(JSON.parse(metrics));

        const met=await page.metrics();
        // console.log(met);
    })
});
