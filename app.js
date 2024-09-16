const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

// Use the stealth plugin to avoid detection
puppeteer.use(StealthPlugin());

const googleUsername = "ameerzaibduet@gmail.com";  // Updated to include domain
const googlePassword = "Memesgurooo2";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ],
  });
  

  try {
    const loginUrl = "https://accounts.google.com/signin";
    

    const page = await browser.newPage();


    await page.goto(loginUrl, { waitUntil: 'networkidle2' });
    const cookieButton = await page.$('#onetrust-accept-btn-handler');
    if (cookieButton) {
      await cookieButton.click({ delay: 100 });
    }
    await page.waitForSelector('input[type="email"]');
    await page.type('input[type="email"]', googleUsername);
  
    await page.keyboard.press('Enter');
    

   // await page.waitForSelector('input[type="password"]', { visible: true });


   // await page.type('input[type="password"]', googlePassword);
    //await page.keyboard.press('Enter');


    //await page.waitForNavigation({ waitUntil: 'networkidle2' });

   // console.log("Login successful!");

  } catch (error) {
    console.error("An error occurred:", error);
  } finally {

    // await browser.close();
  }
})();
