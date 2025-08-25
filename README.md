# Products API

A simple Express.js API built with TypeScript that serves product data.

## Features

- GET all products
- GET specific product by ID
- TypeScript implementation
- In-memory data storage (JavaScript array)
- Error handling and validation
- CORS support

## 🚀 Quick Start Guide for Windows Users

### Prerequisites

Before running this project, make sure you have the following installed on your Windows machine:

1. **Node.js** (version 16 or higher)
   - Download from: https://nodejs.org/
   - Choose the "LTS" version for Windows
   - Follow the installation wizard (accept all default settings)

2. **Git** (optional, for cloning)
   - Download from: https://git-scm.com/download/win
   - Or use GitHub Desktop: https://desktop.github.com/

### Step-by-Step Installation & Running Process

#### Method 1: Download as ZIP (Recommended for beginners)

1. **Download the Project**
   - Go to the GitHub repository page
   - Click the green "Code" button
   - Select "Download ZIP"
   - Extract the ZIP file to your desired location (e.g., `C:\Users\YourName\Desktop\express-api`)

2. **Open Command Prompt or PowerShell**
   - Press `Windows + R`, type `cmd`, and press Enter
   - Or search for "Command Prompt" in the Start menu
   - Navigate to your project folder:
     ```cmd
     cd C:\Users\YourName\Desktop\express-api
     ```
     *(Replace with your actual path)*

3. **Install Dependencies**
   ```cmd
   npm install
   ```
   - This will download all required packages (may take 2-3 minutes)
   - You should see a `node_modules` folder created

4. **Start the Development Server**
   ```cmd
   npm run dev
   ```
   - You should see output similar to:
     ```
     🚀 Server is running on port 3000
     📝 API Documentation:
        GET http://localhost:3000/api/products - Get all products
        GET http://localhost:3000/api/products/:id - Get product by ID
        GET http://localhost:3000/health - Health check
     ```

5. **Test the API**
   - Open your web browser
   - Visit: http://localhost:3000/api/products
   - You should see JSON data with all products

#### Method 2: Clone with Git

1. **Clone the Repository**
   ```cmd
   git clone https://github.com/Abhinivesh2729/express-api-example
   cd express-api
   ```

2. **Follow steps 3-5 from Method 1 above**

### 🔧 Troubleshooting

**If you get "npm command not found":**
- Node.js is not installed or not in PATH
- Restart your command prompt after installing Node.js
- Try: `node --version` to verify installation

**If you get permission errors:**
- Run Command Prompt as Administrator
- Or use PowerShell with: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

**If port 3000 is already in use:**
- Close other applications using port 3000
- Or change the port in `src/app.ts` (line with `PORT = process.env.PORT || 3000`)

### 📱 Available Commands

```cmd
npm run dev         # Start development server with hot reloading
npm run build       # Build TypeScript code for production
npm start           # Start production server
npm run clean       # Clean build directory
```

### 🌐 Testing the API

Once the server is running, you can test these endpoints:

1. **Get All Products:**
   - URL: http://localhost:3000/api/products
   - Method: GET

2. **Get Single Product:**
   - URL: http://localhost:3000/api/products/1
   - Method: GET

3. **Health Check:**
   - URL: http://localhost:3000/health
   - Method: GET

### 💡 Tips for Windows Users

- Use **Windows Terminal** or **PowerShell** for better experience
- Keep the command prompt open while developing
- Press `Ctrl + C` to stop the server
- Use `cls` to clear the command prompt screen

## 📚 API Documentation

### Base URL
`http://localhost:3000`

### Available Endpoints

#### 1. Get All Products
- **URL:** `/api/products`
- **Method:** `GET`
- **Description:** Returns a list of all available products
- **Example:** Open http://localhost:3000/api/products in your browser
- **Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Wireless Bluetooth Headphones",
      "price": 1299,
      "images": ["headphones.jpg"]
    },
    {
      "id": 2,
      "title": "Smartphone Case",
      "price": 599,
      "images": ["phone-case.jpg"]
    }
  ],
  "count": 5
}
```

#### 2. Get Product by ID
- **URL:** `/api/products/:id`
- **Method:** `GET`
- **Description:** Returns details of a specific product
- **Example:** Open http://localhost:3000/api/products/1 in your browser
- **Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Wireless Bluetooth Headphones",
    "price": 1299,
    "images": ["headphones.jpg"]
  }
}
```

#### 3. Health Check
- **URL:** `/health`
- **Method:** `GET`
- **Description:** Checks if the server is running properly
- **Example:** Open http://localhost:3000/health in your browser
- **Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2025-08-25T10:30:00.000Z"
}
```

#### 4. Welcome Page
- **URL:** `/`
- **Method:** `GET`
- **Description:** Shows API information and available endpoints
- **Example:** Open http://localhost:3000 in your browser

## 📦 Sample Data

The API includes 5 sample products stored in memory:

| ID | Product Name | Price | Image |
|----|--------------|-------|-------|
| 1 | Wireless Bluetooth Headphones | ₹1,299 | headphones.jpg |
| 2 | Smartphone Case | ₹599 | phone-case.jpg |
| 3 | Laptop Backpack | ₹2,499 | backpack.jpg |
| 4 | Wireless Mouse | ₹899 | mouse.jpg |
| 5 | USB-C Charging Cable | ₹399 | usb-cable.jpg |

*Note: This data is stored in memory and will reset when you restart the server.*

## 📁 Project Structure

```
express-api/
├── src/
│   ├── app.ts              # Main application file
│   ├── types/
│   │   └── Product.ts      # TypeScript interface for Product
│   ├── data/
│   │   └── products.ts     # Sample product data array
│   └── routes/
│       └── products.ts     # API route handlers
├── dist/                   # Compiled JavaScript files (after build)
├── node_modules/           # Dependencies (created after npm install)
├── package.json           # Project configuration and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime for the server
- **Express.js** - Web framework for Node.js
- **TypeScript** - Type-safe JavaScript
- **ts-node** - Run TypeScript directly (for development)
- **nodemon** - Auto-restart server when files change

## 🎯 What You Can Do Next

1. **Modify the data** - Edit `src/data/products.ts` to add/remove products
2. **Add new endpoints** - Create new routes in `src/routes/`
3. **Change the port** - Modify the PORT variable in `src/app.ts`
4. **Add a database** - Replace the in-memory array with a real database
5. **Deploy online** - Host on platforms like Heroku, Vercel, or Railway

## 📞 Need Help?

If you encounter any issues:
1. Make sure Node.js is properly installed: `node --version`
2. Ensure you're in the correct project directory
3. Try deleting `node_modules` folder and running `npm install` again
4. Check that no other application is using port 3000
5. Restart your command prompt and try again

Happy coding! 🚀
