const loginURL =
  "https://login.ov-chipkaart.nl/authenticationendpoint/login.do?RelayState=https%3A%2F%2Fwww.ov-chipkaart.nl%2Fmijn-ov-chip.htm&commonAuthCallerPath=%2Fsamlsso&forceAuth=false&passiveAuth=false&swfrmsig=821085bd82747c8dcde40b40fbeec9d93c0e6e9878a402716e12206481d8069160fd1564f3b6bf74da94e951a32efa794c367a3dab3f01dd372b2a11a54c008147e93948a102efd543547ac7ccf155482624f4ca18cb8733%7C567814f7f2d7ed2c4f6b819c9e9bbe997a58b5fb1c970028cfe877a3d9f774ae&tenantDomain=carbon.super&sessionDataKey=ac3d99b9-7e6f-49b7-96da-56e3d93158a2&relyingParty=www.ov-chipkaart.nl&type=samlsso&sp=nl.translink.frontoffice.fecustomerwebsite&isSaaSApp=false&authenticators=BasicAuthenticator:LOCAL"
const pptr = require("puppeteer")
const { getDocument, queries } = require("pptr-testing-library")

export default async ({ page, username, password }) => {
  const $document = await getDocument(page)
  const $nameInput = await queries.getByLabelText($document, "Gebruikersnaam *")
  await $nameInput.type(username)
  const $passwordInput = await queries.getByLabelText($document, "Wachtwoord *")
  await $passwordInput.type(password)
  const $button = await queries.getByText($document, "Log in")
  await $button.click()
}
