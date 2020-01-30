const puppeteer=require('puppeteer');

describe('Event Test', () => {
    let browser;
    let page;
    before(async ()=>{
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
    it('should test various page events',async()=>{

        await page.once('domcontentloaded',()=> console.info("DOM is ready"));

        await page.once('load',()=>console.log("Page is Loaded"))
        await page.goto('https://pptr.dev');

    });
})
