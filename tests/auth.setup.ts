import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { users } from '../test-data/users';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    const loginPage = LoginPage(page);

    await page.goto('/');

    await loginPage.login(
        users.valid.username,
        users.valid.password
    );

    await page.context().storageState({
        path: authFile,
    });
});