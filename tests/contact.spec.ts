import { test } from '@playwright/test';
import { ContactPage } from '../pages/contactpage';

test('User can submit contact form', async ({ page }) => {
  const contactPage = new ContactPage(page);

  await contactPage.navigateToContactForm();
  await contactPage.fillContactForm(
    'Anwar Damon',
    'anwardamon@gmail.com',
    '+27 847468657',
    'Booking',
    'I would like to book a room in Cape Town'
  );
  await contactPage.submitForm();
  await contactPage.assertContactSubmissionSuccessful();
});