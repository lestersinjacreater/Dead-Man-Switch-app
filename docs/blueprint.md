# **App Name**: Guardian Angel

## Core Features:

- User Authentication: Allow users to authenticate using email/password. Implement 2-factor authentication (TOTP or email codes).
- Create Switch: Enable users to create a new switch, and define a title, check-in interval (hours/days) and trigger channels (email).
- List Switches: Allow users to view a list of their active switches, including countdown timers until the next check-in.
- Check-In: Provide a button labeled 'Check In Now' to reset the timer for a switch.
- Background Trigger: Implement background trigger to scan for expired switches.

## Style Guidelines:

- Primary color: Use Material UI's primary color palette for main elements.
- Secondary color: Use Material UI's secondary color palette for accents and highlights.
- Accent color: Teal (#008080) for interactive elements and important actions.
- Use Material UI's grid system for a responsive and organized layout.
- Use Material UI icons for common actions and states.

## Original User Request:
Build a “Dead‑Man’s Switch” MVP as a Next.js + Firebase web app with the following features:
1. **Authentication**  
   - Email/password sign‑in via Firebase Auth.  
   - 2‑factor support (TOTP or email codes).

2. **Encrypted Message Storage**  
   - On the client, encrypt switch payloads (messages, files, or URLs) with AES (via Web Crypto API) using a passphrase derived from the user’s password (e.g. PBKDF2).  
   - Store only ciphertext and metadata in Firestore.

3. **Switch Management Dashboard**  
   - **Create Switch**: Form to enter title, encryption passphrase, check‑in interval (hours/days), trigger channels (email, SMS via Twilio), and list of trusted contacts.  
   - **List Switches**: Show active switches with next‑check‑in countdown timers.  
   - **Edit/Delete**: Allow modifying or canceling a switch at any time.

4. **Check‑In Flow**  
   - Button to “Check In Now” that resets the timer.  
   - Countdown component showing time left until trigger.

5. **Background Trigger**  
   - A Firebase Cloud Function scheduled every hour (via Pub/Sub) to scan for expired switches.  
   - For each due switch, retrieve ciphertext, decrypt on the client side only if needed, or just send the stored encrypted payload to contacts with instructions to decrypt locally using the user’s passphrase.

6. **Notifications & Actions**  
   - Send emails via SendGrid and SMS via Twilio when a switch fires.  
   - Include encrypted payload and decryption instructions.

7. **Security & Rules**  
   - Firestore security rules that restrict read/write to the owning user’s UID only.  
   - No admin‑side decryption keys—zero‑knowledge design.

8. **Deployment**  
   - Deploy frontend to Firebase Hosting.  
   - Deploy Cloud Functions to Firebase Functions.  
   - Configure environment variables (Twilio, SendGrid API keys) via Studio’s secrets manager.

Use Material UI for a clean, modern look, leverage React Context for global state, and include README instructions on how to set up Twilio, SendGrid, and derive encryption keys.
  