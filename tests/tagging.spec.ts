import {test,expect} from "@playwright/test";


test(' @sanity test5', async ({ page }) => {
await page.goto('https://www.google.com/'); 
await expect(page).toHaveTitle("Google");
});

test('test6',{tag:'@regression'},async({page}) => {
await page.goto('https://www.google.com/'); 
await expect(page).toHaveTitle("Google");
});


test('test7',{tag:['@sanity','@regression']}, async ({ page }) => {
await page.goto('https://www.google.com/'); 
await expect(page).toHaveTitle("Google");
});