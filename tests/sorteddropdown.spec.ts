
import {test,expect,Locator} from "@playwright/test";

test("Verifying dropdown is sorted or not",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const dropdownOptions:Locator=page.locator('#animals>option');
   const optionText:String[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
   const originalList:string[]=[...optionText];
   const sortedList:string[]=[...optionText].sort();
   console.log("Original List",originalList);
   console.log("Soretd list",sortedList);

   expect(originalList).toEqual(sortedList);



 


   //  await page.waitForTimeout(5000);
})