import { test } from '@playwright/test';
import { BookingPage } from '../pages/bookingpage';

test('Should display error when email is missing', async ({ page }) => {
  const bookingPage = new BookingPage(page);

  await bookingPage.navigate();
  await bookingPage.reserveRoom('Anwar', 'Damon', '+27 847468657');
  await bookingPage.assertEmailErrorVisible();
});

test('User can book a room with all details filled', async ({ page }) => {
  const bookingPage = new BookingPage(page);

  await bookingPage.navigate2();
  await bookingPage.fillBookingForm('Peter','James', 'peterjames@gmail.com', '+27 847468657');
  await bookingPage.submitForm();
  
});




