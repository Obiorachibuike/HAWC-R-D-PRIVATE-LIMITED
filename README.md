Here’s your updated `README.md` including:

* ✅ Table of Contents (with clickable links)
* ✅ Pros & Cons section
* ✅ All previous features like installation, usage, features, and file structure

---

````md
# React Native Login App

A clean and responsive login screen built with **React Native** using **Expo** and **Expo Router**.

---

## 📋 Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Tools & Packages Used](#tools--packages-used)
- [Pros and Cons](#pros-and-cons)
- [File Structure](#file-structure)
- [Author](#author)
- [License](#license)

---

## ✅ Features

- 📧 Email & Password input fields
- 🧪 Input validation with error messages
- 🔐 Show/Hide password toggle
- 🔁 Navigation with `expo-router`
- ⚠️ "Forgot Password?" and "Sign Up" links
- 📱 Keyboard-aware screen layout
- 🧾 Alert showing entered login data
- 📦 Lightweight and modular codebase

---

## 📸 Screenshots

| Login Screen | Dashboard (Tabs) |
| ------------ | ---------------- |
| ![Login](./assets/login-screenshot.png) | ![Dashboard](./assets/dashboard-screenshot.png) |

---

## 🚀 Getting Started

### Prerequisites

Ensure the following are installed:

- Node.js: [Download here](https://nodejs.org/)
- Expo CLI:

```bash
npm install -g expo-cli
````

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/login-app.git
cd login-app
npm install
```

---

## ▶️ Running the App

Start the development server:

```bash
expo start
```

Scan the QR code using Expo Go on your mobile device to preview the app.

---

## 🛠️ Tools & Packages Used

* **React Native**
* **Expo**
* **Expo Router**
* `Text`, `View`, `ScrollView`, `TextInput`, `TouchableOpacity`, `KeyboardAvoidingView`, etc.
* `react-native-vector-icons` (optional, for icons)

To install icons:

```bash
npm install react-native-vector-icons
```

---

## ✅ Pros and ❌ Cons

| Pros                                 | Cons                                   |
| ------------------------------------ | -------------------------------------- |
| ✅ Fast to build with Expo            | ❌ Not suitable for production auth yet |
| ✅ Responsive design on Android & iOS | ❌ Static mock data only (no backend)   |
| ✅ Simple file structure and routing  | ❌ No persistent login/token storage    |
| ✅ Clean UI with validation           | ❌ No unit tests yet                    |
| ✅ Easy to extend to Sign Up / Tabs   | ❌ Needs API integration for real login |

---

## 🗂️ File Structure

```
.
├── app/
│   ├── index.tsx         # Welcome Screen
│   ├── login.tsx         # Login Screen
│   ├── signup.tsx        # Sign Up Screen (optional)
│   └── (tabs)/           # Dashboard Tabs (optional)
├── assets/
│   └── icon.png          # App Icon
├── App.tsx               # App Entry Point
├── package.json
├── tsconfig.json
└── README.md
```

---

## 👨‍💻 Author

Built by **Your Name**
GitHub: [@yourhandle](https://github.com/yourhandle)
Twitter: [@yourhandle](https://twitter.com/yourhandle)

---

## 📄 License

This project is licensed under the MIT License.

```

---

Would you also like me to:

- Generate a sample `users.json` file for email/password backend simulation?
- Provide `signup.tsx` starter page?

Let me know!
```
