import {test,expect,chromium} from "@playwright/test";


test("Tabs allocation",async({page})=>{

    const browser=await chromium.launch();
    const context=await browser.newContext();

    //creating 2 pages
    const parentPage=await context.newPage();
    
    console.log("No of pages created:",context.pages().length);

    await parentPage.goto("https://testautomationpractice.blogspot.com/");
    const [childPage]=await Promise.all([context.waitForEvent("page"),parentPage.locator('button:has-text("New Tab")').click()]);
    //context.waitForEvent("page");//promise will be returned
    //parentPage.locator('button:has-text("New Tab")').click();//opens new tab


})