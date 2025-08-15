# Plant Online Management System

A web-based system to manage your plant inventory and display detailed plant information. Built with **React**, **Node.js**, **Express**, and **MongoDB**, this platform allows you to add, update, delete, and view plants. It also includes care tips, stock management, and related products functionality.

## Features

- **User Authentication**

  - Register, login, and manage user profile
  - Protected routes for creating, updating, and deleting plants

- **Product / Plant Management**

  - Add new plants with details: name, price, category, description, stock, care tips, and image
  - Update existing plant information
  - Delete plants from the inventory
  - View a single plant with full details
  - List all plants

- **Frontend Features**

  - Responsive product grid displaying plants
  - Product details page with description, care tips, and related plants
  - Add-to-cart functionality (disabled for demo)
  - Forms with validation for creating/updating plants
  - Care tips stored as comma-separated values and displayed properly

- **Admin Features**

  - Manage plant inventory: add, update, and remove products
  - Monitor stock levels and plant categories
  - Easily update care tips for each plant

## Tech Stack

- **Frontend:** React, Tailwind CSS, Axios
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT (JSON Web Tokens)
- **API Requests:** Protected routes for CRUD operations

## Installation

1. Clone the repository:

```bash
git clone https://github.com/hamidnazar1/GreenNest.git
cd GreenNest
```

2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Install frontend dependencies:

```bash
cd ../frontend
npm install
```

4. Set up environment variables in `backend/.env`:

```env
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>
PORT=5000
```

5. Run the application:

```bash
# Start backend
cd backend
node server.js

# Start frontend
cd ../frontend
npm start
```

The application should now be running at `http://localhost:3000`.

## Usage

- Register a new user or login
- Navigate to the **Plants** section to view all plants
- Admin users can add, update, or delete plants
- Click on a plant to see its full details, including care tips and related products

## Future Improvements

- Implement shopping cart and checkout functionality
- Add plant categories filtering and search
- Integrate image upload instead of URL
- Enable live stock updates and notifications

## License

This project is licensed under the MIT License.

