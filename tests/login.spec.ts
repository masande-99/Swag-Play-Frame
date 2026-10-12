import { expect } from '@playwright/test';
import { users } from '../test-data/users';
import { test } from '../fixtures/test-fixtures';

test.describe('Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('User can login with valid credentials', { tag: '@smoke' }, async ({ page, loginPage }) => {
    await loginPage.login(users.valid.username, users.valid.password);
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.getByText('Products')).toBeVisible();
  });

  test('User cannot login with invalid credentials', { tag: '@smoke' }, async ({ page, loginPage }) => {
    await loginPage.login(users.invalid.username, users.invalid.password);
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
  });

  test('locked out user cannot login', { tag: '@smoke' }, async ({ page, loginPage }) => {
    await loginPage.login(users.lockedOut.username, users.lockedOut.password);
    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
  });
});