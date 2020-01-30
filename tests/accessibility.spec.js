const puppeteer=require('puppeteer');

describe('Accessibility Test', () => {
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

        page=await browser.newPage();
        await page.setViewport({width:1366,height:786});
    });

    // after(async()=>{
    //     await browser.close();
    // });

    it('should capture the current state',async ()=>{
        await page.goto('https://pptr.dev');
        await page.waitForSelector('title');

        const snapshot=await page.accessibility.snapshot();
        await browser.close();
        // console.info(snapshot);
    });
});


