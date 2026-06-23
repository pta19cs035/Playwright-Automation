
/*
only
 skip 
 fail
fixme
slow
*/
import { test, expect } from '@playwright/test';
test('test1', async ({ page }) => { 
await page.goto('https://www.google.com/'); 
await expect (page).toHaveTitle('Google'); 
});
test.skip('test2', async ({ page }) => {
await page.goto('https://www.google.com/'); 
await expect (page).toHaveTitle('Google'); 
});

//fail
test.fail('test3', async ({ page }) => {
await page.goto('https://www.google.com/'); 
await expect (page).toHaveTitle('Google'); 
});

//fixme
test.fixme('test4', async ({ page }) => {
await page.goto('https://www.google.com/'); 
//no assertions
});

//slow
test('test5', async ({ page }) => {
    test.slow();//triple the default time
await page.goto('https://www.google.com/'); 
await expect(page).toHaveTitle("Google");
});