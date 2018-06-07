# iOS Service Worker Cookies Demo

This project was built to demonstrate an issue with the Service Worker on iOS 11.4 in Private Browsing mode. Based on my tests, it appears that, when in Private Browsing, files served by the Service Worker will not set any cookies specified by the Set-Cookie header in the browser. This is true both of files served from the cache and from the network.

## Setup

```
// Install dependencies
npm i

// Build the worker
npm run build

// Start the express server
node index.js
```

## To reproduce the issue
- Start the express server
- On an iOS Simulator or real device running iOS 11.4, open Safari
- Open Private Browsing
- Open localhost:3000
- Open the Safari Web Inspector for the localhost:3000
- Check if the Service Worker installed properly. You should see "Service worker is ready" in the console
- In the Web Inspector, check the cookies. You should see a cookie called `test-cookie` with a value of `val`.
- Delete that cookie
- Tap the `Fetch /` button
- Refresh the cookies. You should again see a cookie called `test-cookie` with a value of `val`.
- Delete that cookie
- Refresh the page
- Open the network tab. You should now see that localhost:3000 is being served from the Service Worker. You should also see that the Set-Cookie header is present
- Check your cookies. You will not see the cookie `test-cookie`
- Tap the `Fetch /` button
- Refresh the cookies. The `test-cookie` will still be missing
