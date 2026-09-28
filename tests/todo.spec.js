import { test, expect } from '@playwright/test'

test('visar rubrik och tom lista från början', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: 'Att göra-lista' }),
  ).toBeVisible()
  await expect(page.getByText('Inga uppgifter än')).toBeVisible()
})

test('lägger till uppgift och syns i listan', async ({ page }) => {
  await page.goto('/')

  await page.getByLabel('Ny uppgift').fill('Städa')
  await page.getByRole('button', { name: 'Lägg till' }).click()
  await expect(page.getByRole('listitem')).toContainText('Städa')
  await expect(page.getByText('Inga uppgifter än')).toBeHidden()
})

test('lägger till och tar bort uppgift', async ({ page }) => {
  await page.goto('/')

  await page.getByLabel('Ny uppgift').fill('Städa')
  await page.getByRole('button', { name: 'Lägg till' }).click()
  await page.getByRole('button', { name: 'Ta bort' }).click()
  await expect(page.getByRole('listitem')).toHaveCount(0)
  await expect(page.getByText('Inga uppgifter än')).toBeVisible()
})
