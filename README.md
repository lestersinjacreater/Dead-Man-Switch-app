{# Guardian Angel

## Overview

Guardian Angel is a "dead man's switch" application. It allows users to set up a system that automatically sends messages or performs actions if they become incapacitated or pass away. This can include sending emails to loved ones, sharing important documents, or notifying designated contacts.

## Key Features

*   **User Authentication:** Secure sign-up and sign-in using Firebase Auth.
*   **Dashboard:** A central hub for managing your Guardian Angel settings.
*   **Automated Actions:** Define specific actions to be taken if the user becomes inactive.
*   **Email Notifications:** Send email messages to designated contacts.
*   **SMS Notifications:** Send SMS messages to designated phone numbers.
*   **Account Management:** Ability to update account information and manage settings.

## Architecture

This application is built using the following technologies:

*   **Next.js:** A React framework for building server-rendered and static web applications.
*   **Firebase:** A suite of cloud computing services, including authentication, database, and hosting.
*   **Tailwind CSS:** A utility-first CSS framework for styling the user interface.
*   **ShadCN UI:** A collection of accessible and reusable UI components built with Radix UI and Tailwind CSS.
*   **Genkit:** A framework for building generative AI applications.
*   **Lucide React:** A library of beautiful and consistent icons.

The application follows a component-based architecture, with each UI element and functionality encapsulated in reusable components.

### Next.js App Router

The application uses the Next.js App Router, which provides several advantages:

*   **Nested Layouts:** Create complex UI structures with shared layouts.
*   **Route Groups:** Organize routes logically.
*   **Server Components:** Render components on the server to improve performance.
*   **Server Actions:** Handle form submissions and data mutations directly on the server.

### Server Components

Server Components are used extensively to reduce the amount of client-side JavaScript and improve initial load times. Components that fetch data or perform server-side logic are implemented as Server Components.

### TypeScript

TypeScript is used throughout the application to enhance code quality and type safety. Import types are used for type imports to improve performance.

### ShadCN Components

ShadCN components are used for the majority of the UI elements. These components are accessible, reusable, and styled with Tailwind CSS. They are located in the `components/ui` directory.

### Firebase Services

Firebase is used for the following services:

*   **Authentication:** Firebase Auth is used for user sign-up, sign-in, and account management.
*   **Firestore:** Firestore is used as the application's database to store user data, settings, and messages.

### Genkit Flows

Genkit Flows are used to implement any GenAI related functionality. Genkit allows the application to use LLMs (Large Language Models).

## Project Structure

The project directory is structured as follows:

```
.
├── .env                           # Environment variables
├── .vscode/                      # VS Code settings
├── README.md                      # This file
├── components.json                # ShadCN UI configuration
├── next.config.ts                 # Next.js configuration
├── package.json                   # Project dependencies and scripts
├── src/
│   ├── ai/                        # Genkit AI flows and prompts
│   │   ├── ai-instance.ts         # Genkit AI instance configuration
│   │   └── dev.ts                 # Development-related AI code
│   ├── app/                       # Next.js application routes and pages
│   │   ├── dashboard/             # Dashboard page
│   │   │   └── page.tsx           # Dashboard component
│   │   ├── sign-in/               # Sign-in page
│   │   │   └── page.tsx           # Sign-in component
│   │   ├── sign-up/               # Sign-up page
│   │   │   └── page.tsx           # Sign-up component
│   │   ├── globals.css            # Global CSS styles
│   │   ├── layout.tsx             # Root layout component
│   │   └── page.tsx               # Home page component
│   ├── components/                # React components
│   │   ├── icons.ts               # Icon definitions
│   │   └── ui/                    # ShadCN UI components
│   ├── hooks/                     # Custom React hooks
│   │   └── use-toast.ts           # Toast hook
│   ├── lib/                       # Utility functions and Firebase configuration
│   │   ├── firebase.ts            # Firebase initialization
│   │   └── utils.ts               # Utility functions
│   ├── services/                  # External services (e.g., SendGrid, Twilio)
│   │   ├── sendgrid.ts            # SendGrid email service
│   │   └── twilio.ts              # Twilio SMS service
│   ├── tailwind.config.ts         # Tailwind CSS configuration
│   └── tsconfig.json              # TypeScript configuration
├── tailwind.config.js           # Tailwind CSS configuration file
└── tsconfig.json                # TypeScript configuration file
```

## Setting Up the Development Environment

### Prerequisites

Make sure you have the following tools installed:

*   [Node.js](https://nodejs.org/) (v18 or later)
*   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
*   [Firebase account](https://firebase.google.com/)

### Installation

1.  Clone the repository:

    ```bash
    git clone [repository-url]
    cd [repository-name]
    ```

2.  Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  Configure Firebase:

    *   Create a new project in the [Firebase Console](https://console.firebase.google.com/).
    *   Enable Email/Password authentication in the Firebase Console.
    *   Obtain the Firebase configuration object.
    *   Create a `.env` file in the project root directory.
    *   Add the Firebase configuration values to the `.env` file:

        ```
        NEXT_PUBLIC_FIREBASE_API_KEY=[your-api-key]
        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=[your-auth-domain]
        NEXT_PUBLIC_FIREBASE_PROJECT_ID=[your-project-id]
        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=[your-storage-bucket]
        NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=[your-messaging-sender-id]
        NEXT_PUBLIC_FIREBASE_APP_ID=[your-app-id]
        NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=[your-measurement-id]
        ```

4.  Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open your browser and navigate to `http://localhost:9002` to view the application.

## Deployment

To deploy the application to a production environment, follow these steps:

1.  Build the application:

    ```bash
    npm run build
    # or
    yarn build
    ```

2.  Deploy the application to a hosting provider of your choice. Ensure that the environment variables are properly configured in the production environment.

## Technologies Used

### Next.js

Next.js is a React framework that enables server-side rendering, static site generation, and other advanced features. It simplifies the development process and improves application performance.

### Firebase

Firebase is a suite of cloud computing services that provides authentication, database, hosting, and other essential tools. It enables developers to build and scale applications quickly.

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework that allows developers to style HTML elements directly using pre-defined classes. It promotes consistency and speeds up the styling process.

### ShadCN UI

ShadCN UI is a collection of accessible and reusable UI components built with Radix UI and Tailwind CSS. These components provide a solid foundation for building modern web applications.

### Genkit

Genkit is a framework for building generative AI applications.

### Lucide React

Lucide React is a library of beautiful and consistent icons that enhance the user interface.

## Future Enhancements

*   **Advanced Action Types:** Implement more action types, such as sending messages via other platforms or triggering external services.
*   **Customizable Schedules:** Allow users to define custom schedules for inactivity checks.
*   **Emergency Contacts:** Add a feature to notify emergency contacts in case of inactivity.
*   **Data Encryption:** Encrypt sensitive user data to enhance security.
*   **Activity Monitoring:** Provide users with insights into their activity patterns.
*   **AI Powered message customization:** Leverage Genkit and LLMs to generate email and SMS messages.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.
