//import{test,expect} from '@playwright/test'
// import {homepage} from '../pageobjects/homepage'
// import {registration} from '../pageobjects/registration'
import { pomanager } from '../pageobjects/pomanager'
//import testdata from '../utilities/parabank.json' assert {type:'json'}
import {customtest as test,expect} from '../fixtures/testfixture'
import {loginpage} from '../pageobjects/loginpage'
test('login',async({page,testdataForregistration})=>
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