export class loginpage
{
    constructor(page)
    {
        this.page=page
        this.userName=page.locator("//input[@name='username']")
        this.passWord=page.locator("//input[@name='password']")
        this.loginButton=page.locator("//input[@value='Log In']")
    }
    async logintoApplication(username,password)
    {
        await this.userName.fill(username)
        await this.passWord.fill(password)
        await this.loginButton.click()
    }
}