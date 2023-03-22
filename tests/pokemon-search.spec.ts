import { test, expect } from '@playwright/test';

test('visit the Pokemon page and have a search input', async ({ page }) => {
  await page.goto('/pokemon-search');

  const searchInput = page.getByPlaceholder('Search Pokémon…');
  await searchInput.type('Pika');

  const link = page.getByRole('link', { name: 'Pikachu' });

  await link.click();

  expect(page.url()).toContain('/25');
});

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Pokémon Search' }).click();
  await page.getByTestId('search').click();
  await page.getByTestId('search').type('Bulba');
  await page.getByTestId('1').click();
  const heading = page.getByRole('heading', { name: 'Bulbasaur' });
  await expect(heading).toHaveScreenshot('heading.png', { maxDiffPixels: 100 });
  await page.getByRole('cell', { name: 'Pokédex Number' }).click();
  const label = page.getByTestId('search-label');
  await expect(await label.textContent()).toMatchSnapshot();
});
