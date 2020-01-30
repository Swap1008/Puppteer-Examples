const puppeteer=require('puppeteer');
const devices=require('puppeteer/DeviceDescriptors');

describe('Mobile Emulation', () => {
    let browser;
    let page;
    before(async()=>{
        browser=await puppeteer.launch({
            headless:true,
            slowMo:0,
            args:[
                '--start-maximized'
            ],
            devtools:true,
        });
         page = await browser.newPage();
    });
    after(async()=>{
        await browser.close();
    });
    it('Test 1',async()=>{
        await page.emulate(devices['iPhone X']);
        await page.goto('https://google.com ');
    });
})
