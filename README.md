
# 💻 10xdevs Editor

A blazing-fast, multi-language online code editor built for modern developers. Powered by Monaco, themed with **"Shades of Purple"** and **"Noctis"**, and integrated with Judge0 API and Piston API for real-time code execution — it’s your go-to playground for writing, running, and testing code on the web. 🚀

---

## ✨ Features

- 🧠 **User-defined interactive programs** with support for menu-driven input  
- 🔍 **Automatic language detection** and smart execution  
- 💻 **Multi-language support** — Python, C++, JavaScript, and more  
- 🎨 **Multiple editor themes** — Light, Dark, Noctis, and others  
- 🧠 **Intelligent Monaco-based editor** — Just like VS Code, right in the browser  
- 📦 **Zero setup required** — 100% browser-based  
- 🚀 **Fast and reliable code execution** with real-time output 

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite  
- **Editor:** Custom Editor  
- **Styling:** Tailwind CSS  
- **Code Execution:** Judge0 API , Piston API 
- **Deployment:** Vercel  

---

## 🧪 Getting Started

### 📋 Prerequisites

- Node.js (v14+)  
- npm or yarn  

### 🔧 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/10xdevs-code-editor.git
cd 10xdevs-code-editor
````

Install dependencies:

```bash
npm install
# or
yarn install
```

Set up environment variables:

Create a `.env` file in the root directory and add your Judge0 API credentials:

```env
VITE_API_KEY=your_judge0_api_key
VITE_API_URL=https://judge0-ce.p.rapidapi.com/submissions
```

🔐 Ensure your API key is valid and has the required permissions.

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:5173](http://localhost:5173) to access the app.

---

## 🧩 Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── CodeEditor.tsx
│   │   ├── Dropdown.tsx
│   │   └── OutputBox.tsx
│   ├── pages/
│   │   └── Code.tsx
│   ├── utils/
│   │   └── index.ts
│   └── main.tsx
├── .env
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🌐 Environment Variables

In Vite, environment variables must be prefixed with `VITE_`:

* `VITE_API_KEY` – Your Judge0 API key.
* `VITE_API_URL` – The Judge0 submission endpoint.

Access them like this:

```ts
const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 📦 Deployment

Deployed via Vercel. To deploy your own version:

1. Push your code to GitHub.
2. Import the repository into Vercel.
3. Set your environment variables in the Vercel dashboard.
4. Deploy your app 🚀

---

## 📄 License

Licensed under the MIT License.

---

## 🙌 Acknowledgements

* Monaco Editor
* Judge0 API
* Tailwind CSS
* Vite
* React

