# Todo Gallery 🚀

A full-stack MERN application for managing tasks with image upload capabilities. This project features a React-based frontend and a Node.js/Express backend, providing a seamless gallery experience for your tasks.

## 📁 Project Structure

* **`client/`**: Frontend built with React, Vite, and CSS.
* **`server/`**: Backend API using Node.js, Express, and MongoDB.

## 🛠️ Features

* **User Authentication**: Secure Login and Registration using JWT.
* **Task Management**: Full CRUD functionality (Create, Read, Update, Delete) for personal tasks.
* **Image Storage**: Integrated with **Cloudinary** for efficient image handling and storage.
* **Responsive Design**: A clean UI that works across different screen sizes.

## ⚙️ Setup & Installation

### 1. Prerequisites
* **Node.js** (v16 or higher)
* **MongoDB Atlas** account
* **Cloudinary** account

### 2. Backend Setup
1.  Navigate to the server folder:
    ```bash
    cd server
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `server` folder. Add your credentials:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    ```
4.  Start the server:
    ```bash
    npm run dev
    ```

### 3. Frontend Setup
1.  Navigate to the client folder:
    ```bash
    cd ../client
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

---

## 🛡️ Environment Variables
**Note:** The `.env` file is excluded from version control for security. Refer to the setup steps above to configure your local environment variables.