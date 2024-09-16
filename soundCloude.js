const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

// Use the stealth plugin to avoid detection
puppeteer.use(StealthPlugin());

const Username = "ameerzaibduet@gmail.com";  // Updated to include domain
const Password = "Memesgurooo2";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ],
  });
  

  try {
    const loginUrl = "https://soundcloud.com/discover";
    

    const page = await browser.newPage();


    await page.goto(loginUrl, { waitUntil: 'networkidle2' });
    const cookieButton = await page.$('#onetrust-accept-btn-handler');
    if (cookieButton) {
      await cookieButton.click({ delay: 100 });
    }
    //await page.waitForSelector('input[type="email"]');
    await page.Click('[aria-label="House"]', googleUsername);
  
   // await page.keyboard.press('Enter');
    

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
