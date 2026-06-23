import{test,expect,Locator} from '@playwright/test';


test("Verify the dropdown options are duplicated or not",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const dropdownOptions:Locator=page.locator('#colors>option');//duplicates
    //const dropdownOptions:Locator=page.locator('#animals>option');//no duplicates
    const optionText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());

    const myset=new Set<string>();
    const duplicates:String[]=[];

    for(const text of optionText){
        if(myset.has(text)){
            duplicates.push(text);
        }
        else{
            myset.add(text);

        }
    }
    console.log(duplicates);
    expect (duplicates.length).toBe(0);
})