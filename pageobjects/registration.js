export class registration
{
    constructor(page)
    {
        this.page=page
        this.firstname=page.locator("//input[@id='customer.firstName']")
        this.lastname=page.locator("//input[@id='customer.lastName']")
        this.addresstreet=page.locator("//input[@id='customer.address.street']")
        this.addresscity=page.locator("//input[@id='customer.address.city']")
        this.addressstate=page.locator("//input[@id='customer.address.state']")
        this.zipcode=page.locator("//input[@id='customer.address.zipCode']")
        this.phone=page.locator("//input[@id='customer.phoneNumber']")
        this.ssn=page.locator("//input[@id='customer.ssn']")
        this.username=page.locator("//input[@id='customer.username']")
        this.password=page.locator("//input[@id='customer.password']")       
        this.confirmpwd=page.locator("//input[@id='repeatedPassword']")
        this.registration=page.locator("//input[@value='Register']")
    }
    async registeruser(fname,lname,street,city,state,zip,phnum,ssnum,user,pass)
    {
        await this.firstname.fill(fname)
        await this.lastname.fill(lname)
        await this.addresstreet.fill(street)
        await this.addresscity.fill(city)
        await this.addressstate.fill(state)
        await this.zipcode.fill(zip)
        await this.phone.fill(phnum)
        await this.ssn.fill(ssnum)
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.confirmpwd.fill(pass)

    }
    async clickonregbutton()
    {
       await this.registration.click()
    }
}