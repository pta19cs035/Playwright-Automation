import {test,expect,Locator} from "@playwright/test";

test("Frames",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frames=page.frames();
    console.log("Number of frames:",frames.length);

    //Approach1:using page.frame()


})