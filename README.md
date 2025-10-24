
# Pinoy Wallet — Mobile-first Multipage Site

This package contains a simple **mobile-first** multipage static website for *Pinoy Wallet*.  
Files included:

- `index.html` — Home / Hero / Calculator / Login
- `how-it-works.html` — Step-by-step flow + payment link
- `rates.html` — Rates & Fees table
- `about.html` — About / mission / compliance
- `contact.html` — Contact & support
- `styles.css` — Styling (blue/white gradient; mobile-friendly)
- `scripts.js` — Interactive calculator, falling currency background, simple login handler

Notes:
- The site is intentionally built to be **mobile-first** and should display best on Android and iOS devices.
- The logo is referenced from the GitHub raw URL you provided. If you'd prefer the image bundled locally, place the PNG into the same folder and update `index.html`/other pages accordingly.
- Payment link opens: https://www.paypal.com/ncp/payment/26F4WX6TFQ4DY
- The calculator uses the two fee-lines you gave (0.594% and 0.612%) and shows a combined fee.
- This is a static front-end demo — server-side validation, KYC, and secure production payment integration are not included. For production, do not open payment links via client-side only flows; integrate with a server and licensed payment processors and follow BSP/AMLA rules.

How to use:
1. Unzip into a folder and host on GitHub Pages (or your static host).
2. Ensure the logo path is accessible (or replace with local file).
3. For production payments and transfers, integrate a backend that handles card tokenization and compliance.

