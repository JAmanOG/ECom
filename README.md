# Footwear E-Commerce Website

The **Footwear E-Commerce Website** is an innovative online platform tailored to enhance the shopping experience in the footwear industry. This project is built with modern web technologies to provide a seamless, secure, and responsive shopping experience. It caters to footwear enthusiasts, offering features such as product cataloging, secure payment gateways, user-friendly dashboards, and robust backend integration.

---

## Website Link
[www.Footdise.live](http://www.footdise.live)

---

## Purpose
The primary objective of this website is to create an efficient online shopping platform for footwear enthusiasts. By leveraging cutting-edge web technologies and prioritizing user experience, the platform aims to:

- Provide a modern, responsive, and secure shopping experience.
- Simplify product browsing with advanced search and filtering capabilities.
- Ensure seamless order processing and secure online payments.
- Empower administrators with tools to manage products and customer orders efficiently.

---

## Key Features

### Single Page Application (SPA)
- Efficiently manages bandwidth by loading the application once, ensuring a faster and more responsive user experience.

### Product Catalog and Search Functionality
- Comprehensive product catalog with filtering and navigation options for easy product discovery.

### Authentication and Authorization
- Secure authentication system using **Appwrite**, ensuring role-based access for customers and administrators.

### User Dashboards
- **Customer Dashboard:** Manage orders, wishlists, and personal information.
- **Administrator Dashboard:** Manage products, orders, and user data.

### Order Management
- Streamlined order processing, including status tracking (e.g., Processing, Delivered, Cancelled) and viewing order history.

### Shopping Cart and Wishlist
- Intuitive shopping cart with support for simultaneous logins and wishlist functionality for saving favorite products.

### Backend and Frontend Separation
- Built on the MERN-like stack (without MongoDB, using Appwrite), ensuring scalability and maintainability.

### Secure Payment Gateway
- Integrated with **Razorpay** to handle online transactions securely.

---

## Tools and Technologies

The website is developed using the following technologies and tools:

### Backend
- **Appwrite**: Backend-as-a-Service for authentication, database management, and serverless functions.
- **Express.js**: Framework for handling server-side logic and HTTP requests for the payment gateway.
- **Node.js**: Server-side runtime for executing JavaScript code.

### Frontend
- **React**: Library for building an interactive and dynamic user interface.
- **React Router**: Efficient routing and navigation between frontend pages.
- **Vite**: Modern bundler and development server for optimized builds.
- **Create React App**: For initial setup of the React application.

### Payment Gateway
- **Razorpay**: Secure payment processing for online transactions.

### Supporting Packages
- **body-parser**: v1.20.2 - Parse incoming request bodies.
- **cookie-parser**: v1.4.6 - Parse cookie headers for session management.
- **cors**: v2.8.5 - Enable Cross-Origin Resource Sharing.
- **dotenv**: v16.3.1 - Load environment variables from `.env` files.
- **nodemon**: v2.0.14 - Automatically restart the server on code changes.

### Development and Design Tools
- **Eraser.io**: For designing wireframes and UI layouts.
- **Visual Studio Code**: IDE for writing and managing code.
- **Git & GitHub**: Version control and repository hosting.
- **Azure**: Hosting and server infrastructure management.

---

## Installation and Setup

### Prerequisites
- Node.js: v21.0.0 or higher
- npm: v21.0.0 or higher
- Git: For version control

### Clone the Repository
```bash
$ git clone https://github.com/JAmanOG/Ecom.git
$ cd Ecom
```

### Install Dependencies
```bash
$ npm install
```

### Environment Variables
Create a `.env` file in the root directory with the following variables:
```env
APPWRITE_ENDPOINT=<your-appwrite-endpoint>
APPWRITE_PROJECT_ID=<your-appwrite-project-id>
RAZORPAY_KEY_ID=<your-razorpay-key-id>
RAZORPAY_KEY_SECRET=<your-razorpay-key-secret>
```

### Start the Application
```bash
# Start the backend
$ cd backend
$ npm run dev

# Start the frontend
$ cd frontend
$ npm start
```

### Build for Production
```bash
$ cd frontend
$ npm run build
```

---

## Deployment

The website is deployed using **Azure** for hosting both the frontend and backend services. Follow these steps:

1. **Frontend Deployment:**
   - Build the frontend using Vite.
   - Deploy the build directory to Azure Static Web Apps.

2. **Backend Deployment:**
   - Use Azure App Service to host the Node.js backend and integrate with Appwrite functions.

3. **Payment Gateway:**
   - Deploy the payment gateway separately on Azure Functions.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to the branch.
5. Open a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contact
For any inquiries or feedback, please reach out at:

- Email: jaman0120@gmail.com
- GitHub: [github.com/JAmanOG](https://github.com/JAmanOG)

