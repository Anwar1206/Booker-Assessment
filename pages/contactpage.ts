import { Page, Locator, expect } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly subjectInput: Locator;
  readonly descriptionInput: Locator;
  readonly submitButton: Locator;
  readonly successAlert: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.getByTestId('ContactName');
    this.emailInput = page.getByTestId('ContactEmail');
    this.phoneInput = page.getByTestId('ContactPhone');
    this.subjectInput = page.getByTestId('ContactSubject');
    this.descriptionInput = page.getByTestId('ContactDescription');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.successAlert = this.page.locator('//*[@id="contact"]/div/div/div/div/div')
    
  }

  async navigateToContactForm() {
    await this.page.goto('https://automationintesting.online/');
  }

  async fillContactForm(
    name: string,
    email: string,
    phone: string,
    subject: string,
    description: string
  ) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.subjectInput.fill(subject);
    await this.descriptionInput.fill(description);
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async assertContactSubmissionSuccessful() {
  await expect(this.successAlert).toBeVisible();
  await expect(this.successAlert).toContainText('Thanks for getting in touch Anwar Damon!');
  }

}

