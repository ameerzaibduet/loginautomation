
# Puppeteer Login Automation

This is a Node.js application that automates the login process for Gmail, SoundCloud, and Spotify using Puppeteer. 

## Prerequisites

Node.js: Ensure you have [Node.js](https://nodejs.org/) installed on your system. You can verify the installation by running:
  ```bash
  node -v   # Check Node.js version
  npm -v    # Check npm version
  ```

## Setup Instructions

### 1. Download Project Files

```bash

cd loginautomation
```

### 2. Install Dependencies

Run the following command to install Puppeteer and other necessary packages:

```bash
npm install
```

### 3. Add Login Credentials

Fill out your login credentials in the file (credentials.json). The file should look like this:

```json
{
  "gmail": {
    "email": "your-gmail@example.com",
    "password": "your-gmail-password"
  },
  "soundcloud": {
    "email": "your-soundcloud@example.com",
    "password": "your-soundcloud-password"
  },
  "spotify": {
    "email": "your-spotify@example.com",
    "password": "your-spotify-password"
  }
}
```

Replace the values with your credentials.

> Note: For Gmail, you might need to enable [less secure apps](https://myaccount.google.com/lesssecureapps) or use an app-specific password if you have two-factor authentication enabled.

## Running the Application

To run the login automation script, use the following command:

```bash
node index.js
```

The script will launch a browser window and attempt to log in to Gmail, SoundCloud, and Spotify using the credentials provided in the `credentials.json` file.

## Error Handling

The script includes basic error handling for common issues such as:

- Incorrect login credentials.
- Network issues.
- Missing or incorrect HTML elements on the page.

## Notes

- Ensure that you have an active internet connection while running the script.
- The script opens a visible browser (non-headless mode) to show the login process. 


## Troubleshooting

If you encounter any issues, here are some possible fixes:

- **Gmail login issues**: Ensure that you have enabled less secure apps or use an app-specific password if two-factor authentication (2FA) is enabled.
- **Network errors**: Ensure you have a stable internet connection.
- **Puppeteer browser issues**: Sometimes Puppeteer may fail to launch a browser due to missing dependencies. You can try reinstalling Puppeteer or running it with the `--no-sandbox` flag:

  ```javascript
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  ```

  
