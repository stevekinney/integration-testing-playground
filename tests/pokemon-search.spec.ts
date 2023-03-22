import { test, expect } from '@playwright/test';

test('visit the Pokemon page and have a search input', async ({ page }) => {
  await page.goto('/pokemon-search');

  const searchInput = page.getByPlaceholder('Search Pokémon…');
  await searchInput.type('Pika');

  const link = page.getByRole('link', { name: 'Pikachu' });

  await link.click();

  expect(page.url()).toContain('/25');
});
