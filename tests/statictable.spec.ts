import {test,expect,Locator} from "@playwright/test";

test("Static Table",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const table:Locator=page.locator("table[name='BookTable'] tbody");
    //count the number of rows in s table
    const rows:Locator=table.locator("tr");
    await expect(rows).toHaveCount(7);

    const rowCount:number=await rows.count();
    console.log(rowCount);
    expect(rowCount).toBe(7);

    //count the number of headers/columns in a table
    const columns:Locator=rows.locator('th');//chaining of locators
    await expect(columns).toHaveCount(4);

    const columncount:number=await columns.count();
    console.log(columncount);
    expect(columncount).toBe(4);
    
    //Read all the data from 2nd row(index 2 means 3rd row including header)
    const secondrowcells:Locator=rows.nth(2).locator("td");
    const secondrowtexts:string[]=await secondrowcells.allInnerTexts();
    console.log(secondrowtexts);
    await expect(secondrowcells).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]);

    //Printong second row data
    for(let text of secondrowtexts){
        console.log(text);
    }
    
    //Read all data from table excluding header
    console.log("Printing all the data in the table");
    const rowData=await rows.all();//get all row locators//all() returns array of locators
     for(let row of rowData.slice(1)){//skips the first row that is the header row
        const col=await rows.locator("td").allInnerTexts();
        console.log(col.join('\t'));
     }
    
   //Print book names whether author is mukesh

     console.log("Books written by mukesh");
     const mukeshbooks:string[]=[];
      for(let row of rowData.slice(1)){
       const cells=await row.locator("td").allInnerTexts();
       const author=cells[1];
       const book=cells[0];
       if(author==='Mukesh'){
        console.log(`${author} \t ${book}`);
        //console.log(author,book);
        mukeshbooks.push(book);

       }

     }
     await expect(mukeshbooks).toHaveLength(2);

     //Calculate the total price of all the books
     let totalPrice:number=0;
     for(let row of rowData.slice(1)){
        const cell=await row.locator("td").allInnerTexts();
        const price=cell[3];
        totalPrice=totalPrice+parseInt(price);
        
     }
    

console.log(totalPrice);
await expect(totalPrice).toBe(7100);


})