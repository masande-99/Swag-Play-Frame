import {Page} from '@playwright/test';

export const LoginPage = ( page: Page ) => {
    const usernameInput = page.locator('#user-name');
    const passwordInput = page.locator('#password');
    const loginButton = page.locator('#login-button');
    
    const login = async (username: string, password: string) => {
        await usernameInput.fill(username);
        await passwordInput.fill(password);
        await loginButton.click();
    }

    return { login };
};