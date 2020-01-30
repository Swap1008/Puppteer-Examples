const puppeteer=require('puppeteer');

describe('PDF Test', () => {
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
    // });
    
    it('should generate PDF',async ()=>{
        // await page.goto('https://github.com/GoogleChrome/puppeteer/blob/master/README.md');
        // await page.pdf({ path: 'dataFiles/readmepage.pdf', format: 'A4' });
        
        // await browser.close();
       
    });
});


