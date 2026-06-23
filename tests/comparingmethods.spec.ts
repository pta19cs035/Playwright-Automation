import {test,expect,Locator} from "@playwright/test";

test("Comparing Methods",async({page})=>{
await page.goto("https://demowebshop.tricentis.com/");
const products:Locator=page.locator(".product-title");

//1) innertext vs textcontent
//console.log(await products.nth(2).innerText());
//console.log(await products.nth(2).textContent());
//using traditional for loop because products type is locator
//const count=await products.count();

/*for(let i=0;i<count;i++){
    const productName=await products.nth(i).textContent();
    console.log(productName?.trim());
}
*/

//2) allinnerText and alltextContent
/*console.log("Difference between allinnerText() and alltextContent()");
const productNames: string[]=await products.allTextContents();
const productNametrimmed: string[]=productNames.map(text=>text.trim());
console.log(productNametrimmed);
*/


//3) all()-converts locator to locator Array(Locator->Locator[]) and it returns an array of locators
const productsLocator:Locator[]=await products.all();//products contain web elements
console.log(productsLocator);
console.log(await productsLocator[1].innerText());

for(let productl of productsLocator){
    console.log(productl.innerText());
}


})