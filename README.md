# Multi-Step Job Application Form

A React-based multi-step job application form that guides users through four stages: **Personal Information**, **Education Details**, **Skills & Experience**, and **Review & Submit**. The application validates user input at every step, preserves data while navigating between steps, and restores progress automatically after a page refresh using **LocalStorage**.

---

## 🚀 Project Overview

This project was built as part of a **2-day React sprint** to practice core React concepts used in real-world applications.

### Features

* Multi-step form navigation
* Independent validation for each step
* Controlled form components
* Reusable input and button components
* Conditional rendering for step-based UI
* LocalStorage persistence (auto-save & restore)
* Review page before final submission
* Success message after submission
* Responsive layout for desktop and mobile devices

---

## 📁 Folder Structure

```text

```

### Structure Explanation


---

## 🛠️ How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/krishansah13/Job-Application-Form.git
```

### 2. Navigate to the project folder

```bash
cd Job-Application-Form
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

Visit:

```text
http://localhost:5173
```

---

## 📋 Form Steps

### Step 1 – Personal Information

* Full Name
* Email Address
* Phone Number
* City

**Validation**

* All fields are required
* Email must be in a valid format
* Phone number must contain only digits

### Step 2 – Education Details

* Highest Qualification
* Institution Name
* Graduation Year
* Percentage / Grade

**Validation**

* No field can be empty
* Graduation year must be a valid year

### Step 3 – Skills & Experience

* Skills
* Years of Experience
* Current / Last Job Title
* Cover Note

**Validation**

* At least one skill is required
* Experience must be a valid number
* Cover note cannot be empty

### Step 4 – Review & Submit

* Displays all entered information
* Allows editing previous steps
* Final application submission

After successful submission:

* A success message is displayed
* Saved LocalStorage data is cleared

---

## ⚛️ React Concepts Used

### Functional Components

The entire application is built using **functional components**.

### Hooks

* `useState` → Manage form data and current step
* `useEffect` → Sync data with LocalStorage
* Custom hook `useLocalStorage` → Reusable persistence logic

### Controlled Components

Every input field is connected to React state, ensuring the UI is always synchronized with the application data.

### Conditional Rendering

The current step is rendered dynamically based on the active step state.

### Component Composition

The form is divided into reusable, focused components to improve maintainability and readability.

### LocalStorage Persistence

Form data is automatically saved whenever the user makes changes, allowing them to continue where they left off after refreshing the page.

---

## 🧪 Validation Strategy

Validation is handled separately for each step inside utility functions located in `utils/validators.js`.

This keeps business logic independent from UI components and makes the validation logic easier to test and maintain.

---

## 📱 Responsive Design

The application is designed to work across different screen sizes:

* Mobile devices
* Tablets
* Desktop screens

Layouts, spacing, and button placement adjust automatically for smaller screens.

---

## 🎯 Learning Outcomes

By completing this project, I practiced:

* Managing shared state across multiple components
* Building reusable form components
* Implementing step-by-step validation
* Persisting application state using LocalStorage
* Structuring a scalable React project
* Separating business logic from presentation logic
* Creating a responsive user interface

---

## 📦 Tech Stack

* **React**
* **Vite**
* **JavaScript (ES6+)**
* **CSS / Tailwind CSS** (use whichever you implemented)
* **LocalStorage API**

---

## 👨‍💻 Author

**Krishan**

This project was built as part of a React fundamentals sprint focused on reusable components, state management, validation, conditional rendering, and LocalStorage persistence.
