import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

type Fixtures = {
  loginPage: ReturnType<typeof LoginPage>;
  inventoryPage: ReturnType<typeof InventoryPage>;

};

export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = LoginPage(page);
        await use(loginPage);
    },
    
    inventoryPage: async ({ page }, use) => {
        const inventoryPage = InventoryPage(page);
        await use(inventoryPage);
    }
});