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
            ],
            devtools:true
        });

        page=await browser.newPage();
        await page.setViewport({width:1366,height:786});
        const context=browser.defaultBrowserContext();
        await context.overridePermissions('https://pptr.dev',['geolocation'])
    });

    after(async()=>{
        // await browser.close();
    });

    it('should capture the current state',async ()=>{
        await page.goto('https://pptr.dev');
        await page.waitForSelector('title');

        await page.setGeolocation({latitude:90,longitude:0});
        

        /**
         * Type below code in the console of chromium to Check the Location coordinates
         * 
         * navigator.geolocation.getCurrentPosition(({coords})=>
         *      console.info(`Latitiude: ${coords.latitude} , Longitude: ${coords.longitude}`)
         * )
         */
       
    });
});
