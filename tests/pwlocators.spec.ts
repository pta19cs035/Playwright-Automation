import {test,expect,Locator} from "@playwright/test"

test("Verify locatos on playwright",async ({page})=>{
    await page.goto("https://demo.nopcommerce.com/");
   const logo:Locator= page.getByAltText("nopCommerce demo store");
   await expect(logo).toBeVisible();

   //await expect(page.getByText("Welcome to our store")).toBeVisible(); 
      await expect(page.getByText(/welcome to our store/i)).toBeVisible();

      await page.getByRole("link",{name:"Register"}).click();

      await expect(page.getByRole("heading",{name:"Register"})).toBeVisible();//also use get byy text method

       await page.getByLabel("First name:").fill("Abin");
        await page.getByLabel("Last name:").fill("Abin");
        await page.getByLabel("Email:").fill("abin123@gmail.com");

        await page.getByPlaceholder("Search store").fill("Applw");






})
