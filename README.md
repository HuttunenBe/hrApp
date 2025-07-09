# 🧑‍🤝‍🧑 HR App

A human resources management app built as the final project for the React course at Business College Helsinki. The app lets you manage employee profiles, view about page and add and edit new employees.

---

### ✅ Features
#### Employee List:
- Display a list of employees
- Detailed employee information including years of service, department images and personalized reminders
- Edit employee details
- Form to add new employees
- Information page about the app
- Header and footer with navigation links to different pages
- Department images that change based on the department
- Desktop and mobile friendly menu
- Responsive design for different screen sizes
- Moving logo that takes you back to about page
- Back to top button
- Vercel link https://vercel.com/beniittas-projects/hr-app

---


### 💻 What I learned 

I learned so much through this project. I got to experience what it’s like to work with the React framework and manage multiple files. It really makes things easier especially when it comes to keeping the code clean. I spent a lot of time on CSS and I’m pretty happy how it turned out. 

* UseState : Adding state to components
* UseEffect: Running side effects like fetching employee data when the app loads
* UseNavigate:  Navigating after adding an employee
* Routes, BrowserRouter: Switching between pages
* Conditional rendering: Show or hide components like mobile menu
* Date and time calculator: Calculating years of service from start date
* Date.now():  Generating unique IDs
* Props:  Pass data to components
* Event handling: Handling input changes and form submission
* State lifting: Sharing data from child to parent component

---


### 🛠️ Tech Stack
* React 
* JavaScript 
* CSS
* HTML
* Backend files: https://github.com/HuttunenBe/hrAppBackend
_____

## Setup Guide
### 📦 Clone the Repository
- git clone https://github.com/HuttunenBe/eventsApp.git
- cd eventsApp
  
### 🔧 Laravel Setup
- composer install
- cp .env.example .env
- php artisan key:generate

### 🛠 MySQL Database Setup
#### Create a MySQL database
#### Update the .env file with your credentials:
- DB_CONNECTION=mysql
- DB_HOST=127.0.0.1
- DB_PORT=3306
- DB_DATABASE=your_db
- DB_USERNAME=your_username
- DB_PASSWORD=your_password
  
### Run migrations:
- php artisan migrate
- php artisan config:clear
- php artisan serve
- 
### ⚙️ CORS Configuration (Laravel)
- In cors.php file allowed origin add your own React URL: 'allowed_origins' => [ 'http://localhost:5176' ]
  
#### After run:
- php artisan config:clear

### ⚛️ React Setup
- npm install
- npm run dev

### 🌍 React .env Setup
- Create a .env file in the root of your React app:
- Add your Laravel url: VITE_BASE_URL=http://127.0.0.1:8000/
  
### ➕ React Packages
- npm install axios
- npm install react-spinners
- npm install react-toggle-dark-mode
- npm install react-scroll-to-top
- npm install @fullcalendar/react @fullcalendar/daygrid
- npm install @fullcalendar/timegrid @fullcalendar/interaction
