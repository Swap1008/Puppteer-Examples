const puppeteer=require('puppeteer');

describe('Code Coverage Test', () => {
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
        await Promise.all([page.coverage.startJSCoverage(),page.coverage.startCSSCoverage()]);
    });
    after(async()=>{
        await browser.close();
    });
    it('should use code coverage',async()=>{

        await page.goto('https://pptr.dev');
        await page.waitForSelector('title');

        const[jsCoverage,cssCoverage]=await Promise.all([
            page.coverage.stopJSCoverage(),
            page.coverage.stopCSSCoverage()
        ]);

        const calculateUsedBytes=(type,coverage)=>
            coverage.map(({url,ranges,text})=>{
                let usedBytes=0;
                ranges.forEach(range => (usedBytes += range.end -range.start -1));

                return{
                    url,
                    type,
                    usedBytes,
                    totalBytes:text.length
                };
            });
        
        // // console.info(
        //     [
        //         ...calculateUsedBytes('js',jsCoverage),
        //         ...calculateUsedBytes('css',cssCoverage)
        //     ]
        // )

    });
})
