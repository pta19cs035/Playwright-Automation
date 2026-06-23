import { test, expect } from '@playwright/test';

test('Playwright Assertions Demo', async ({ page })=>{
await page.goto('https://demowebshop.tricentis.com/');
//Hard Assertions-if any assertion is failed it will terminate the test immediately
//these are auto reteriving assertions
/*
await expect(page).toHaveTitle("Demo Web Shop");
await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
const logo= page.locator("img[alt='Tricentis Demo Web Shop']");
expect(logo).toBeVisible();
*/
//Soft Assertions
await expect.soft(page).toHaveTitle("Demo Web Shopsss");
await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/");
const logo= page.locator("img[alt='Tricentis Demo Web Shop']");
expect.soft(logo).toBeVisible();

await page.waitForTimeout(5000);


});