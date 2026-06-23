import {test,expect,Locator} from "@playwright/test";

test("xpath locators in playwright",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    //Absolute xpath
    const absolutelogo:Locator=page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await expect(absolutelogo).toBeVisible();

    //Relative Logo
    await expect(page.locator("//img[@alt='Tricentis Demo Web Shop']")).toBeVisible();

    //contains

    const products:Locator=page.locator("//h2/a[contains(@href,'computer')]");

    const productsCount:number=await products.count();
    console.log(productsCount);
    expect(productsCount).toBeGreaterThan(0);
    //console.log(await products.textContent());
    console.log("First product:",await products.first().textContent());
    console.log("Last product:",await products.last().textContent());
    console.log("Nth product:",await products.nth(3).textContent());

    const productTitle:string[]=await products.allTextContents();
    console.log(productTitle);

    for(let pt of productTitle){
        console.log(pt); 
    }


    const buildProducts:Locator=page.locator("//h2/a[starts-with(@href,'/build')]");
    const buildCount:number=await buildProducts.count();
    expect(buildCount).toBeGreaterThan(0);
    console.log(buildCount);

    //text function

    const regpagelink:Locator=page.locator("//a[text()='Register']");
    await expect(regpagelink).toBeVisible();

    //last

    const lastElement:Locator=page.locator("//div[@class='column follow-us']//li[last()]");
    await expect(lastElement).toBeVisible();
    console.log("Text content of last element:",await lastElement.textContent())

    //position

    const positionElement:Locator=page.locator("//div[@class='column follow-us']//li[position()=3]");
    await expect(positionElement).toBeVisible();
    console.log("Text content of position item",await positionElement.textContent());




})