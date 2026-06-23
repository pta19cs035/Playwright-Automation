import {test,expect,Locator} from "@playwright/test";

test("Hidden Bootstrap", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(5000);
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click();
    await page.waitForTimeout(5000);
    await page.getByText("PIM").click();
    await page.waitForTimeout(5000);

    await page.locator("form i").nth(2).click(); 
    await page.waitForTimeout(5000);

    //capture all hidden options from the dropdown
    const options:Locator=page.locator("div[role='listbox'] span");
    const count:number=await options.count();
    console.log(count);

    //Print all the options
    for(let i=0;i<count;i++){
        console.log(await options.nth(i).innerText());
    }

    //select or click on an option
    for(let i=0;i<count;i++){
        const text=await options.nth(i).innerText();
        if(text==='Automaton Tester'){
           options.nth(i).click();
            break;
        }
    
    }
    await page.waitForTimeout(2000);
})