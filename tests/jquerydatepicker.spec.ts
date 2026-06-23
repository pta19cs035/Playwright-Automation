import {test,expect,Locator, Page} from '@playwright/test';

async function selectDate(targetYear:string, targetMonth:string, targetDate:string, page:Page, isFuture:boolean){
     while(true){
        const currentMonth= await page.locator(".ui-datepicker-month").textContent();
        const currentYear=await page.locator(".ui-datepicker-year").textContent();

        if(currentYear===targetYear && currentMonth===targetMonth){
            break; 
        }
        if(isFuture==true){
        //Future date
        await page.locator(".ui-datepicker-next").click();
        }else{
        
        //Past date
        await page.locator(".ui-datepicker-prev").click();
        }
    }
        const allDates=await page.locator(".ui-datepicker-calendar td").all();
        for(let dt of allDates){
            const dateText=await dt.textContent();
            if(dateText===targetDate){
                await dt.click();
                break;
            }
        }

await page.waitForTimeout(5000);
}

test("Date Picker",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dateInput:Locator=page.locator("#datepicker");
    await expect(dateInput).toBeVisible();

    //Approach 1-fill() method
    dateInput.fill("01/03/2003");
    //Approach 2-using datepicker
    dateInput.click();//opens the date picker
    //select target date
    const year='2021';
    const month='June';
    const date="25";
    selectDate(year,month,date,page,false);

    const expectedDate='06/25/2027';
    await expect(dateInput).toHaveValue(expectedDate);

   



  

    await page.waitForTimeout(5000);
})