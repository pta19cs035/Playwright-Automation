import {test,expect,Locator} from "@playwright/test";


test("Dynamic Table",async({page})=>{
    await page.goto("https://practice.expandtesting.com/dynamic-table");
    const table:Locator=page.locator("table.table tbody");
    await expect(table).toBeVisible();

    const rows:Locator[]=await table.locator("tr").all();
    console.log(rows.length);
    await expect(rows).toHaveLength(4);
    let cpuLoad='';

    //step1 get the chrome process
    //read each row to check chrome presence
    for(const row of rows){
        const processName:String=await row.locator("td").nth(0).innerText();//here inside the row it will be navigated to data for 1st row 1st column
        if(processName==="Chrome"){
            //cpuLoad=await row.locator('td:has-text("%)').innerText();//css syntac
            cpuLoad=await row.locator("td",{hasText:'%'}).innerText();//playwright syntax
            console.log(cpuLoad);
            break;
        }
    }
//Compare it with the value in the yellow label
let yellowValue:string=await page.locator("p#chrome-cpu").innerText();
console.log("Value of yellow box:",yellowValue);

if(yellowValue.includes(cpuLoad)){
    console.log("CPU Load is equal");
}else{
    console.log("CPU Load value is not equal");
}
expect(yellowValue).toContain(cpuLoad);




    await page.waitForTimeout(5000);
})