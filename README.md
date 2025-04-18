# MoneyChecker

MoneyChecker is a full-stack web application designed to track finances and help users manage their financial goals. It features a frontend built with React and TypeScript, while the backend is built using Go. 
Still in progress...
---

### 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine. However this won't work without having some mock data files. They mimick the database data in json format.

#### Prerequisites

- [Node.js](https://nodejs.org/) for frontend development.
- [Go](https://golang.org/) for backend development.

#### Installing Dependencies

##### Frontend

1. Navigate to the `frontend` folder:

   ```bash
   cd frontend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

##### Backend

1. Navigate to the `backend` folder:

   ```bash
   cd backend
   ```

2. Initialize Go modules (if not already done):

   ```bash
   go mod init github.com/ldtorrejon/MoneyChecker/backend
   ```

3. Install Go dependencies:
   ```bash
   go get
   ```

---

### 🏁 Running the Project

#### Running the Frontend

1. Navigate to the `frontend` folder:

   ```bash
   cd frontend
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

#### Running the Backend

1. Navigate to the `backend` folder:

   ```bash
   cd backend
   ```

2. Run the Go server:
   ```bash
   go run main.go
   ```
