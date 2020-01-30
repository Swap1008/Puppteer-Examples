const puppeteer=require('puppeteer');

describe('Tracing Test', () => {
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
        await browser.close();
    });

    it('should trace the events',async()=>{
        await page.tracing.start({path:'jsonData/trace.json'});
        await page.goto('https://pptr.dev');
        await page.waitForSelector('title');

        await page.tracing.stop();
        
    })
});
