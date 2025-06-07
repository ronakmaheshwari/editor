
# 💻 10xdevs Editor

A blazing-fast, multi-language online code editor built for modern developers. Powered by Monaco, themed with **"Shades of Purple"**, and integrated with Judge0 API for real-time code execution — it’s your go-to playground for writing, running, and testing code on the web. 🚀


## 🚀 Features

- ✍️ **Monaco Editor** – Rich code editing with IntelliSense and syntax highlighting.  
- 🌐 **Multi-language Support** – Run code in multiple programming languages.  
- ⚙️ **Judge0 API Integration** – Seamless code compilation and execution.  
- 🎨 **Custom Themes** – Stylish UI with the "Shades of Purple" theme.  
- 📱 **Responsive Design** – Optimized for both desktop and mobile screens.  

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite  
- **Editor:** Monaco Editor  
- **Styling:** Tailwind CSS  
- **Code Execution:** Judge0 API  
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

