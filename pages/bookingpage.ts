import { Page, Locator, expect } from '@playwright/test';

export class BookingPage {
  readonly page: Page;
  readonly bookNowLink: Locator;
  readonly roomSelectLink: Locator;
  readonly reserveNowButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly phoneInput: Locator;
  readonly emailError: Locator;
  readonly emailInput: Locator;
  

    
    constructor(page: Page){

    this.page = page;
    this.bookNowLink = page.getByRole('link', { name: 'Book Now', exact: true }); 
    this.bookNowLink = page.getByRole('link', { name: 'Book Now', exact: true });
    this.roomSelectLink = page.locator('div').filter({ hasText: /^£100 per nightBook now$/ }).getByRole('link');
    this.reserveNowButton = page.getByRole('button', { name: 'Reserve Now' });
    this.firstNameInput = page.getByRole('textbox', { name: 'Firstname' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Lastname' });
    this.phoneInput = page.getByRole('textbox', { name: 'Phone' });
    this.emailError = page.getByText('Must not be empty', { exact: false });
    this.emailInput = page.getByRole('textbox', { name: 'Email'})
            
    }

    async navigate() {
    await this.page.goto('https://automationintesting.online/');
    }

    async reserveRoom(firstName: string, lastName: string, phone: string) {
    await this.bookNowLink.click();
    await this.roomSelectLink.click();
    await this.reserveNowButton.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.phoneInput.fill(phone);
    await this.reserveNowButton.click(); 
    }

        async navigate2() {
    await this.page.goto('https://automationintesting.online/');
    }

    async fillBookingForm(firstName: string, lastName: string, email: string, phone: string) {
    await this.bookNowLink.click();
    await this.roomSelectLink.click();
    await this.reserveNowButton.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email)
    await this.phoneInput.fill(phone);
     
    }



    async assertEmailErrorVisible() {
    await expect(this.emailError).toBeVisible();

    }

    async submitForm(){
      await this.reserveNowButton.click()
    }
    
}