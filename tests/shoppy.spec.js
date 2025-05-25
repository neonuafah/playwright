const {test , expect} = require('@playwright/test')

test('shoppy test', async ({ page }) => {
  await page.goto('https://shoppy.gg/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Shoppy/);

});