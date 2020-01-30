const puppeteer=require('puppeteer');

describe('ScreenShot Test', () => {
    let browser;
    let page;

    before(async()=>{
        browser=await puppeteer.launch({
            headless:false,
            slowMo:0,
            args:[
                '--start-maximized'
            ]
        });

        page=await browser.newPage();
        await page.setViewport({width:1366,height:786});
    });

    // after(async()=>{
    // });
    
    it('should save ScreenShot',async ()=>{
        // await page.goto('https://pptr.dev');
        // await page.screenshot({ path: 'dataFiles/page.png', fullPage: 'true' });
        
        await browser.close();
       
    });
});


