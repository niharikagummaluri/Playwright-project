//import{test,expect} from '@playwright/test'
 import {homepage} from '../pageobjects/homepage'
// import {registration} from '../pageobjects/registration'
import { pomanager } from '../pageobjects/pomanager'
//import testdata from '../utilities/parabank.json' assert {type:'json'}
import {customtest as test,expect} from '../fixtures/testfixture'
import {loginpage} from '../pageobjects/loginpage'
//for fixurte we need to assign value to some varaible like customtest as above, if we are usgin multipl data
// test('registration',async({page})=>
// {
//        // const homePage=new homepage(page)//when we create obj of a class we should pass the parameter into the class obj
//        // await homePage.goto()
//        // await homePage.clickonregisterlink()
//        const poManager=new pomanager(page)
//       const hompg= poManager.getHomePage()
//      await hompg.goto()
//      await hompg.clickonregisterlink()
//        //  const registerpage=new registration(page)
//  //here as we are using constructor, we can directly put the value of the constructor rather than creating object for method

//        const registerpage= poManager.getregistrationpage()

//  await registerpage.registeruser('pandu3','niha','madhuranagar','hyderabad','telangan','500090','976787','7676799','pandu','harika')
//       await registerpage.clickonregbutton()
//        await page.waitForTimeout(4000)
// })
// for(const data of testdata)
// {


// test(`registration ${data.username}`,async({page})=>
// {
//        // const homePage=new homepage(page)//when we create obj of a class we should pass the parameter into the class obj
//        // await homePage.goto()
//        // await homePage.clickonregisterlink()
//        const poManager=new pomanager(page)
//       const hompg= poManager.getHomePage()
//      await hompg.goto()
//      await hompg.clickonregisterlink()
//        //  const registerpage=new registration(page)
//  //here as we are using constructor, we can directly put the value of the constructor rather than creating object for method

//        const registerpage= poManager.getregistrationpage()

//  await registerpage.registeruser(data.firstname,data.lastname,data.address,data.city,data.state,data.zipcode,data.phonenumber,data.ssn,data.username,data.password,data.confirmpassword)
//       await registerpage.clickonregbutton()
//        await page.waitForTimeout(4000)
// })
// }
// for(const data of testdata)
// {
// test.describe.parallel('parallel test',()=>
// {
test.describe.serial('serial test',()=>
 {
      


test('@smokeregistration',async({page,testdataForregistration})=>
{
       // const homePage=new homepage(page)//when we create obj of a class we should pass the parameter into the class obj
       // await homePage.goto()
       // await homePage.clickonregisterlink()
       const poManager=new pomanager(page)
      const hompg= poManager.getHomePage()
     await hompg.goto()
     await hompg.clickonregisterlink()
       //  const registerpage=new registration(page)
 //here as we are using constructor, we can directly put the value of the constructor rather than creating object for method

       const registerpage= poManager.getregistrationpage()

 await registerpage.registeruser(
testdataForregistration.firstname,
testdataForregistration.lastname,
testdataForregistration.address,
testdataForregistration.city,
testdataForregistration.state,
testdataForregistration.zipcode,
testdataForregistration.phonenumber,
testdataForregistration.ssn,
testdataForregistration.username,
testdataForregistration.password,
testdataForregistration.confirmpassword
 )
      await registerpage.clickonregbutton()
       await page.waitForTimeout(4000)
      //  await expect(page).toHaveURL("https://parabank.parasoft.com/parabank/register.htm")
      //  await page.waitForURL()
})

test('@smoke@regressionlogin',async({page,testdataForregistration})=>
{
       // const homePage=new homepage(page)//when we create obj of a class we should pass the parameter into the class obj
       // await homePage.goto()
       // await homePage.clickonregisterlink()
       const poManager=new pomanager(page)
      const hompg= poManager.getHomePage()
     await hompg.goto()
     const loginPage=poManager.getLoginpage()
     await loginPage.logintoApplication(
        testdataForregistration.username,
        testdataForregistration.password
        
     )
   await page.waitForTimeout(4000)
})
})

