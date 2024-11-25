# Car Rental System

Welcome to the **Car Rental System** repository! This is a full-stack web application built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). It allows users to browse, rent, and manage cars, making it an ideal solution for car rental services.

---

## Demo

Explore the live demo of the application here: (https://mern-car-rental.netlify.app/)

---

## Features

- **User Authentication**: Sign up, log in, and manage user profiles.
- **Browse Cars**: View available cars with filters like price, model, and availability.
- **Booking System**: Reserve cars with dynamic pricing and availability updates.
- **Admin Panel**: Manage car inventory, bookings, and user data.
- **Responsive Design**: Optimized for desktop and mobile platforms.

---

## Tech Stack

### Frontend:
- **React.js**: For building a dynamic and interactive user interface.
- **Redux**: For state management.
- **React Router**: For navigation.

### Backend:
- **Node.js**: For handling server-side logic.
- **Express.js**: For creating RESTful APIs.

### Database:
- **MongoDB**: For storing user data, car inventory, and bookings.

---

## Installation Guide

Follow these steps to run the project locally:

### Prerequisites
- **Node.js** and **npm** installed.
- **MongoDB** installed and running.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Hacker-Man07/Car-Rental-MERN.git
   cd Car-Rental-MERN

2. Install dependencies for Cliend and Server:
   ```bash
   cd Car-Rental-MERN
   npm install
   cd ../backend
   npm install

3. Set up environment variables:

  - Create a .env file in the backend directory.
```bash
MONGO_URI=<Your MongoDB Connection String>
JWT_SECRET=<Your Secret Key>
PORT=5000
```
4. Start the development servers:
   - Backend :
     ```bash
     cd backend
     npm start
     ```
   - Frontend :
     ```bash
     cd Car-Rental-MERN
     npm start
     ```
5. Open the app: Navigate to http://localhost:3000 in your browser.





    






