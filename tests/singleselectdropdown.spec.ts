import {test,expect,Locator} from "@playwright/test";

test("SIngle Select Dropdown",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    //1.Select options from dropdown(4 different ways)
     //await page.locator("#country").selectOption("India");//visible text
     //await page.locator("#country").selectOption({value:'uk'});//using value attribute   
     //await page.locator("#country").selectOption({label:'India'});//using label   
    // await page.locator("#country").selectOption({index:2});//using index

    //2.Check number of options in the dropdown(count)
    const dropdownOptions:Locator=page.locator("#country>option");
    await expect(dropdownOptions).toHaveCount(10);

    //3.Check an option present in the dropdown
    const optionsText:String[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
    console.log(optionsText);
    expect(optionsText).toContain("Japan");


    //4.Printing options from the dropdown using for loop
    for(const option of optionsText){
        console.log(option);
    }

     await page.waitForTimeout(5000);
})