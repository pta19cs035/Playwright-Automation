import {test,expect} from "@playwright/test";

//Syntax    
/*
test("title",()=>{
//step1
//step2
//step3
})

*/
test("Werify the  tilte",async ({page})=>{
    await page.goto("https://www.youtube.com/")
    let title:String=await page.title();
    console.log("Title is:",title);
    await expect(page).toHaveTitle("YouTube");
})