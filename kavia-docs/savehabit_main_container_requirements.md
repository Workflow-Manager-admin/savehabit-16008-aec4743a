# SaveHabit Main Container Requirements

## Overview

The SaveHabit main container is the foundational component of a cross-platform web/mobile application simulating a digital piggy bank. It enables users to manually track savings, set goals, and view a history of their saving actions in a motivational, habit-forming environment. The application is intentionally frontend-only, with all logic and data managed on the client side, and features a modern, bright, mobile-first responsive UI.

---

## Functional Requirements

### 1. Add/Remove Savings
- Users can manually **add** amounts to their savings, simulating a deposit.
- Users can manually **remove** amounts, simulating a withdrawal from their piggy bank.
- The UI must provide clear, prominent controls (e.g., "+" or "Add" and "-" or "Remove" buttons).
- The total current savings amount must update instantly upon every action.

### 2. Savings History
- The application must display a **chronological history** of all savings actions (additions and removals).
- Each entry in the history should include:
  - The amount added/removed.
  - The action type (deposit/withdraw).
  - The timestamp of the action.
- Users can access the history via a clearly visible tab, button, or dedicated screen/section.

### 3. Set Savings Goals
- Users can define a target savings **goal** (e.g., $200 for a trip).
- The progress toward this goal is visually indicated, such as via a progress bar or percentage meter.
- When a goal is reached, the UI provides positive feedback (e.g., congratulatory message, color highlight).

### 4. Motivational UI and Habit-Building
- The interface includes motivational messages encouraging continued saving.
- Progress indicators (visual and/or textual) reinforce positive habit formation.
- All actions (add/remove, goal set/achieved) trigger positive, habit-affirming feedback.

---

## Non-Functional Requirements

### Frontend-Only Logic
- All state, logic, and data persistence are managed entirely in-browser (no backend dependencies).
- The app must not perform real money transactions or interact with any backend server.

### Responsive Design & Layout
- The interface uses a **mobile-first approach**: visually optimal and fully usable on smartphones, tablets, and desktops.
- The main UI elements (savings display, action buttons, progress/goal visuals, and navigation) are immediately visible and easily accessible.

### Usability, Accessibility, and Performance
- Large, touch-friendly buttons and intuitive navigation.
- Accessible contrast and font sizes adhering to WCAG guidelines.
- Quick initial page loads and smooth interactions.

---

## Theming and Color Palette

### Brand and UI Colors
The application's energetic and positive tone is established with a bright, cheerful palette. Based on the template:

- **Primary color:** Kavia Orange (`#E87A41`)
- **Background/Dark:** Kavia Dark (`#1A1A1A`)
- **Text (Primary):** White (`#ffffff`)
- **Text (Secondary):** Semi-transparent White (`rgba(255, 255, 255, 0.7)`)
- **Accent color (for motivational and progress highlights):** Pink (`#FF69B4`, optionally used for celebratory UI)
- **Borders:** Light (semi-transparent) white, `rgba(255, 255, 255, 0.1)`

These variables are defined in `src/App.css` as root CSS variables, supporting easy retheming.

### Common Styled Components
- `.btn`, `.btn-large`: Large, orange, rounded-button controls with white text.
- `.navbar`: Fixed top navigation for brand visibility and seamless navigation.
- `.container`: Responsive layout, with max width for comfort on large screens.
- `.hero`, `.title`, `.subtitle`, `.description`: Cohesive visual sections for positive focus and user motivation.

---

## User Interactions & Navigation

- Upon first visiting the app, users see the current savings and motivational hero message.
- The main action area includes controls to add or remove savings, goal progress indicator, and a way to access the history.
- All interactions provide immediate UI feedback (button animations, progress updates, history reflection).
- The navigation bar remains visible for easy return to the main screen or switching between app sections.

---

## Technical and Implementation Constraints

- **Framework:** React.js (Functional Components, Hooks encouraged)
- **Language:** JavaScript (ES6+)
- **Styling:** Pure CSS (no external UI libraries); branding colors and spacing standardized through CSS variables in `App.css`.
- **Folder structure:**  
  ```
  savehabit_frontend/
    src/
      App.js       # Main React component for application UI logic and structure
      App.css      # Theme, color variables, and common visual styles
      index.js     # App entry point, React bootstrap
      index.css    # Basic resets and root font styles
      setupTests.js# Test setup config (not for app functionality)
    package.json   # Project metadata and dependencies
    README.md      # User/project documentation
  ```

- **Design Simplicity:** Favor easy-to-customize, minimal dependency structure and separation of concerns.
- **No State Management Libraries:** Use React's built-in state primitives; do not introduce Redux or MobX.

---

## User Stories

1. **As a user, I want to add money to my "piggy bank" so that I can keep track of my savings progress.**
2. **As a user, I want to remove money if I spend from my savings, so my record is accurate.**
3. **As a user, I want to set a savings goal and see my progress towards it, to motivate myself to keep saving.**
4. **As a user, I want to see all my past saving actions so that I can observe my saving patterns and stay motivated.**
5. **As a user, I want the experience to be fun, cheerful, mobile-friendly, and easy to use.**

---

## Future Enhancements (Out of Scope)

- Cloud data sync or multi-device support
- Authentication or user profiles
- Real-money integrations
- Social sharing of savings milestones

---

## Summary

The SaveHabit main container provides a focused, welcoming environment promoting positive financial habits, all in a lightweight, responsive, and friendly React front-end. The project structure and styling enforce clarity, adaptability, and strong branding, ensuring a solid foundation for further feature additions and user delight.

