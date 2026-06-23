import {test,expect,Locator} from "@playwright/test";

test("Simple Dialogue",async({page})=>{
    await page .goto("https://testautomationpractice.blogspot.com/");
    //dialog Handler
    page.on('dialog',(dialog)=>{
        console.log("Dialog Type is",dialog.type());//returns type of the dialog
        expect(dialog.type()).toContain("alert");
        console.log("Dialog Message",dialog.message());//returns the message of the dialog
        expect(dialog.message()).toContain("I am an alert box!");
        dialog.accept();
    })//fn will  take two parameters first parameter is the name of the event and second parameter is an arrow function which will take the event and perform actions
    

    page.locator("#alertBtn").click();
    await page.waitForTimeout(5000);

})

test("Confirmation Dialogue",async({page})=>{
    await page .goto("https://testautomationpractice.blogspot.com/");
    //dialog Handler
    page.on('dialog',(dialog)=>{
        console.log("Dialog Type is",dialog.type());//returns type of the dialog
        expect(dialog.type()).toContain("confirm");
        console.log("Dialog Message",dialog.message());//returns the message of the dialog
        expect(dialog.message()).toContain("Press a button!");
        dialog.accept();
        //dialog.dismiss();
    })//fn will  take two parameters first parameter is the name of the event and second parameter is an arrow function which will take the event and perform actions
    

    page.locator("#confirmBtn").click();
    const text:Locator=page.locator("#demo");
    console.log(text);
    await expect(text).toHaveText("You pressed OK!");

    await page.waitForTimeout(5000);

})

test.only("Prompt Dialogue",async({page})=>{
    await page .goto("https://testautomationpractice.blogspot.com/");
    //dialog Handler
    page.on('dialog',(dialog)=>{
        console.log("Dialog Type is",dialog.type());//returns type of the dialog
        expect(dialog.type()).toContain("prompt");
        console.log("Dialog Message",dialog.message());//returns the message of the dialog
        expect(dialog.message()).toContain("Please enter your name:");
        expect(dialog.defaultValue()).toContain("Harry Potter");//checks the default value of the dialog
        
        dialog.accept('John');//pass values through parameter and it can accessed only when we accept the prompt dialog
        //dialog.dismiss();
    })//fn will  take two parameters first parameter is the name of the event and second parameter is an arrow function which will take the event and perform actions
    

    await page.locator("#promptBtn").click();
    const text: string=await page.locator("#demo").innerText();
    console.log(text);
    await expect(page.locator("#demo")).toHaveText("Hello John! How are you today?");

    await page.waitForTimeout(5000);

})