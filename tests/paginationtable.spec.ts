import {test,expect,Locator} from "@playwright/test";


test("Pagination table",async({page})=>{
    await page.goto("http://datatables.net/examples/basic_init/alt_pagination.html");

    let hasmorePages=true;
while(hasmorePages){
    const rows=await page.locator("#example tbody").all();
    for(let row of rows){
        console.log(await row.innerText());
    }

    const nextButton:Locator=await page.locator("button[aria-label='Next']");
}

})