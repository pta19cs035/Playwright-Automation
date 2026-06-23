
import { test, expect } from '@playwright/test';

test.beforeAll("Before All",async()=>{
    console.log("Before All");//executes before all the test for once
});

test.afterAll("After All",async()=>{
    console.log("After all");//executes after all the test for once
})

test.beforeEach("Before Test",async()=>{
    console.log("Before execution")//executes before each test
});

test.afterEach("After test",async()=>{
    console.log("After execution");//executes after each test 
});



    test('Test1', async () => {
    console.log(" this is Test1 ......")
});


test('Test2', async () => {
    console.log(" this is Test2 ......")
});





test('Test3', async () => {
console.log(" this is Test3.")
});


test('Test4', async () => {
    console.log(" this is Test4 ......")
});
