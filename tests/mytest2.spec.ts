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
    let url:String=await page.url();
    console.log("Title is:",url);
    await expect(page).toHaveURL(/youtube/);
})