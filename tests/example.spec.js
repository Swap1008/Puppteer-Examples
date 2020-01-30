// const config=require('../lib/config');
const puppeteer=require('puppeteer');


describe('Demo Test', () => {
    let page;
    let browser;

    before(async ()=>{
        browser=await puppeteer.launch({
            headless:true,
            slowMo:0,
            args:[
                '--start-maximized'
            ],
            devtools:true
            
            // executablePath:"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
        });

        page = await browser.newPage();
        await page.setViewport({width:1366,height:768});
    });
    after(async()=>{
        await  browser.close();
    });

    it('First Test',async ()=>{
        // const newContext=browser.browserContexts();
        // const incog = await browser.createIncognitoBrowserContext();
        // console.info(incog.isIncognito());
        // await page.goto('https://google.com');
        // await incog.close();
        // console.info(incog.isIncognito());
        // // await page.waitFor(20000);

    });
})
