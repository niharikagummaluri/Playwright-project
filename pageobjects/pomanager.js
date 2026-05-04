import { homepage } from "./homepage"
import { registration } from "./registration"
import {loginpage} from "./loginpage"
export class pomanager
{
    constructor(page)
    {
         this.page=page
         this.homePage=new homepage(this.page)
         this.registerpage=new registration(this.page)
         this.loginPage=new loginpage(this.page)
    }
    getHomePage()
    {
        return this.homePage

    }
    getregistrationpage()
{
   return this.registerpage
}
getLoginpage()
{
    return this.loginPage
}
}
