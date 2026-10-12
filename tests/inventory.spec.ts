import { expect } from '@playwright/test';
import { users } from '../test-data/users';
import { test } from '../fixtures/test-fixtures';

test.describe('Inventory Tests', () => {
    test.beforeEach(async ({ page, loginPage }) => {
        await page.goto('/inventory.html');
    });

    test('user can add backpack to cart', async ({ page, inventoryPage }) => {
        await inventoryPage.addBackPackToCart();
        await inventoryPage.openCart();
        await expect(page).toHaveURL(/cart.html/);
        await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    });

});