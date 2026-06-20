# CodeReview AI 🚀

CodeReview AI is an AI-powered code review application built using the MERN stack and Google Gemini AI. It helps developers analyze their code, identify issues, improve code quality, and receive actionable recommendations following industry best practices.

## ✨ Features

* 🤖 AI-powered code reviews using Google Gemini
* 🔍 Detects bugs and logical issues
* ⚡ Suggests performance optimizations
* 🛡️ Identifies potential security concerns
* 📚 Encourages clean code and best practices
* 🎨 Syntax-highlighted code editor
* 🔄 Real-time review generation
* 🌐 Full-stack MERN architecture

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* PrismJS
* React Simple Code Editor

### Backend

* Node.js
* Express.js
* Google Gemini API

### Development Tools

* Nodemon
* Vite
* Git & GitHub

## 📂 Project Structure

```bash
CodeReview-AI/
│
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── services/
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/TanviLokhande06/CodeReview-AI.git
cd codereview-ai
```

### 2. Install Dependencies

#### Backend

```bash
cd Backend
npm install
```

#### Frontend

```bash
cd Frontend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the Backend folder:

```env
GOOGLE_GEMINI_KEY=your_gemini_api_key
PORT=3000
```

### 4. Start Backend

```bash
npm run dev
```

### 5. Start Frontend

```bash
npm run dev
```

## 📸 Demo Workflow

1. Enter source code in the editor.
2. Click **Review**.
3. Code is sent to the backend.
4. Gemini AI analyzes the code.
5. AI-generated feedback is displayed to the user.

## 💡 Example Review

### Input

```javascript
function fetchData() {
  let data = fetch('/api/data').then(response => response.json());
  return data;
}
```

### Output

* Incorrect handling of asynchronous operations.
* Missing error handling.
* Suggested use of async/await.
* Improved readability and maintainability.

## 🔮 Future Enhancements

* Authentication and user accounts
* Review history
* Multiple programming language support
* Export reviews as PDF
* Dark/Light themes
* Monaco Editor integration
* Team collaboration features

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Built with ❤️ using React, Node.js, Express, and Google Gemini AI.
