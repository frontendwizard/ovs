const loginURL = "https://www.ov-chipkaart.nl/mijn-ov-chip.htm"
const { getDocument, queries } = require("pptr-testing-library")

module.exports = async ({ page, username, password }) => {
  await page.goto(loginURL, { waitUntil: 'networkidle0' })

  const $document = await getDocument(page)
  const $nameInput = await queries.getByLabelText($document, "Gebruikersnaam *")
  await $nameInput.type(username)
  const $passwordInput = await queries.getByLabelText($document, "Wachtwoord *")
  await $passwordInput.type(password)
  const $button = await queries.getByText($document, "Log in")
  await $button.click()
}
