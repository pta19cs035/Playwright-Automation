import{test,expect,Locator} from '@playwright/test';

test('Autosuggest drop[down',async({page})=>{
    await page.goto("https://www.flipkart.com/");
      await page.waitForTimeout(5000);

    await page.locator("input[name='q']:not([readonly])").fill("smart");
     await page.waitForTimeout(5000);
    //get all suggested options-->ctrl+shift+p-->emaluate a focused page

    const options:Locator=page .locator("ul>li");
   
    const count=await options.count();
    console.log(count);

    //Printing all the suggested dropdowns in the console by using looping statments
    console.log(await options.nth(5).innerText());
    console.log("Printing all the options");

    for(let i=0;i<count;i++){
        console.log(i,await options.nth(i).innerText());
    }

    //click on the smart phone option
      for(let i=0;i<count;i++){
        const text=await options.nth(i).innerText();
        if(text==='smartphone'){
            options.nth(i).click();
            break;
        }
    }
    await page.waitForTimeout(5000);

})