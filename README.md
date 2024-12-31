# 🌟 Address Management System 🌟

🚀 **A full-stack application for managing addresses with the ability to add, update, delete, and view addresses**. This system utilizes Google Maps API and Navigator Geolocation API to enable easy address management and location-based features.

## ✨ Features

### 📍 Address Management

- **Add New Address**: Users can add new addresses, including name, street, city, state, postal code, and country.
- **Current Location**: Users can automatically fetch their current location using **Google Maps API** and **Navigator Geolocation API**.
- **View Address List**: Displays all saved addresses in a list format.
- **Delete Address**: Remove any saved address.
- **Responsive UI**: Fully responsive design with **Tailwind CSS** for an intuitive and seamless experience across devices.

### 🔒 Authentication

- 🛡️ JWT-based authentication (Signup, Login, Logout).
- 📧 Email verification using **Nodemailer**.
- 🔄 Refresh tokens for seamless session management.
- 🔐 Two-factor authentication (optional).

### 👥 User Management

- ✏️ Profile CRUD operations.
- 📸 Profile picture upload and management using **Cloudinary**.
- 🧑‍💻 Role-based access control (Admin, User, etc.).

### 📡 Backend API Features

- 🌐 RESTful API with controllers, routes, and service-based architecture.
- ⚙️ Middleware for authentication, validation, and error handling.
- 🔓 CORS setup for cross-origin requests.

### 🖥️ Frontend Features

- ⚛️ React components with **Redux** for state management.
- 📱 Responsive UI built with **Tailwind CSS**.
- 🔒 Private and public routes for secure navigation.

### 🔔 Notifications

- 📤 Email notifications for key actions (Password Reset, Verification).
- 🛎️ In-app notification support.

### 🛠️ Admin Panel

- 👨‍💼 Manage users (Create, Block/Unblock, Verify).
- 📨 View and respond to support tickets.

### 📈 Logging and Error Handling

- 📝 Centralized logging using **Winston** and **Morgan**.
- ❌ Error handling with descriptive messages and status codes.

### 📂 Additional Utilities

- 🖊️ Dynamic form validation.
- 🔑 Forgot password and change password functionality.
- 📂 File uploads and management using **Cloudinary**.

---

## 🗂️ Project Structure

### ⚙️ Backend

```
/backend  
  /controllers      # API controllers  
  /models           # Data models  
  /routes           # API routes  
  /config           # Database and external service configs  
```

### 💻 Frontend

```
/frontend  
  /src  
    /components    # Reusable UI components  
    /redux         # State management  
    /pages         # React pages  
    /utils         # Utility functions  
  App.js            # Main React application  
```

## 🛠️ Installation

### ✅ Prerequisites

- 📦 Node.js (v14+)
- 🍃 MongoDB (locally or using a cloud service like Atlas)
- ☁️ Cloudinary account

### 📋 Steps

1. Clone the repository:

```bash
   git clone https://github.com/vipindagar7/address-management-system.git
   cd address-management-system  
```

2. Install dependencies for both backend and frontend:

   ```bash
   cd backend  
   npm install  
   cd ../frontend  
   npm install  
   ```
3. Set up environment variables: Create a `.env` file in the `backend` folder with the following keys:

   ```env
   MONGO_URI=<Your MongoDB URI>  
   JWT_SECRET=<Your JWT Secret>  
   ACCESS_TOKEN_SECRET=<Your Access Token Secret>  
   REFRESH_TOKEN_SECRET=<Your Refresh Token Secret>  
   ACCESS_TOKEN_LIFETIME=10m
   REFRESH_TOKEN_LIFETIME=15d
   EMAIL=<Your Email Address>  
   EMAIL_PASSWORD=<Your Email Password>  
   CLOUDINARY_CLOUD_NAME=<Your Cloudinary Cloud Name>  
   CLOUDINARY_API_KEY=<Your Cloudinary API Key>  
   CLOUDINARY_API_SECRET=<Your Cloudinary API Secret>  
   GOOGLE_MAPS_API_KEY=<Your Google Maps API Key>  
   ```
4. Start the development server:

   - Backend:
     ```bash
     cd backend  
     npm start  
     ```
   - Frontend:
     ```bash
     cd frontend  
     npm run dev
     ```
5. **Open your browser at** `http://localhost:3000`. 🎉

## ☁️ Cloudinary Integration

**Cloudinary** is used for managing image and file uploads.

### 🌟 Key Features:

* 📤 Image and file uploads stored in the cloud.
* 🔗 Automatically generated URLs for media access.
* 🛡️ Secure and scalable file handling.

### 🛠️ Usage in Backend:

1. Install Cloudinary and Multer:

```bash
   npm install cloudinary multer multer-storage-cloudinary  
```

2. Set up Cloudinary in the `/backend/config/cloudinary.js` file:

   ```javascript
   const cloudinary = require('cloudinary').v2;  

   cloudinary.config({  
     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  
     api_key: process.env.CLOUDINARY_API_KEY,  
     api_secret: process.env.CLOUDINARY_API_SECRET,  
   });  

   module.exports = cloudinary;  
   ```
3. Use `multer-storage-cloudinary` for file uploads.

## 📍 Google Maps API Integration

**Google Maps API** is used to fetch the user's current location for easy address entry.

### 🌟 Key Features:

- Automatically fetch the current location of the user.
- Display a map to search and select addresses.

### 🛠️ Usage in Frontend:

1. Install necessary libraries:

```bash
   npm install @vis.gl/react-google-maps
```

2. Set up the Google Maps component and implement location fetching:

```javascript
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';

const MapComponent = () => {
     const [position, setPosition] = useState({ lat: 53.54, lng: 10 })

  if (!isLoaded) return <div>Loading...</div>;

  return (
     <APIProvider apiKey='AIzaSyCU6GSTPOury1JIldE1M0OOWUP--Ni4Wec'>
                            <div style={{ height: '400px', width: '100%' }}>
                                <Map zoom={9} center={position} mapId={'6a9f749601193c06'}>
                                    <AdvancedMarker position={position}>
                                        <Pin />
                                    </AdvancedMarker>
                                </Map>
                            </div>

                        </APIProvider>
  );
};

export default MapComponent;
```

## 💻 Tech Stack

- **Frontend:** React.js, Redux, Tailwind CSS, Google Maps API
- **Backend:** Node.js, Express.js, MongoDB
- **Utilities:** Nodemailer, Multer, Winston, Morgan, Cloudinary

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository.**
2. **Create a new branch:**

```bash
   git checkout -b feature-name  
```

3. **Commit your changes:**

```bash
   git commit -m "Add your message"  
```

4. **Push to the branch:**

```bash
   git push origin feature-name  
```

5. **Open a pull request.**

## 📜 License

This project is licensed under the **MIT License**.
