import {Page} from "@playwright/test";

export const InventoryPage = ( page: Page ) => {
    const shoppingCart = page.locator('.shopping_cart_link');
    const backPack = page.locator('#add-to-cart-sauce-labs-backpack');

    const addBackPackToCart = async () => {
        await backPack.click();
    }

    const openCart = async () => {
        await shoppingCart.click();
    }

    return {
         addBackPackToCart, 
         openCart 
        };
};
