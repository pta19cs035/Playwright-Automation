import {test,expect} from "@playwright/test";

test("Screenshot",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    const timestamp=Date.now();
    //page screenshot
    //await page.screenshot({path:'screenshots/'+'homepage'+timestamp+'.png'});
    
    //full page screenshot
    //await page.screenshot({path:'screenshots/'+'fullpage'+timestamp+'.png',fullPage:true});

    //capture the screenshot of particular element
   // const logo=page.locator("//img[@alt='Tricentis Demo Web Shop']");
    //await logo.screenshot({path:'screenshots/'+'logo'+timestamp+'.png'});

    const feature=page.locator(".product-grid.home-page-product-grid");
    await feature.screenshot({path:'screenshots/'+'feature'+timestamp+'.png'});


})


test('screenshots from config', async ({page})=>{

await page.goto('https://www.demoblaze.com/index.html'); 
await page.getByRole('link', { name: 'Log in' }).click(); 
await page.locator ('#loginusername').fill('pavanol');
await page.locator ('#loginpassword').fill('test@123..'); //password incorrect 
await page.getByRole('button', { name: 'Log in' }).click();
await expect (page.getByRole('link', { name: 'Log out' })).toBeVisible(); 
await expect (page.locator ('#nameofuser')).toContainText('Welcome pavanol');

})