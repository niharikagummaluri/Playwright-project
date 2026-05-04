export class homepage
{
    constructor(page)
    {
        this.page=page
        this.registerlink=page.locator("//a[normalize-space()='Register']")
    }
    async goto()
    {
       await this.page.goto('/')
    }
    async clickonregisterlink()
    {
        await this.registerlink.click()
    }
}