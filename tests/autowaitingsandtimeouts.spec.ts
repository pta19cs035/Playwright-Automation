import{test,expect,Locator} from '@playwright/test';

test('Autowaiting and timeouts',async({page})=>{
    //test.setTimeout(6000);//60 seconds and this timeout is applicable for only this test
    test.slow();//triples the default time
    await page.goto("https://demowebshop.tricentis.com/");
    
    //Assertion-auto waits works
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/",{timeout:10000});
    await expect(page.locator('text=Welcome to our store')).toBeVisible({timeout:10000});
    //Actions-auto waits works
    await page.locator("#small-searchterms").fill("Laptop",{force:true});//Force Action:it will not perform actionability checks
    await page.locator(".button-1.search-box-button").click();

    //Timeouts are also applicable for assertions and actions

});