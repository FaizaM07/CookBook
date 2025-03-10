# 🍲 Recipe Manager Application - CookBook

An application to save, organize, and manage own favorite recipes. Perfect for personal use, it allows user to store all recipe details, including ingredients, preparation steps, and tags.

## 🎨 Features

### 🔒 Core Features
- **➕ Add New Recipes**: Save recipes with a title and an optional image.
- **🔍 See Recipe Details**: Whole recipe in a detailed way with all ingredients, steps along with others comments.
- **🔍 View Recipe List**: Browse saved recipes with search and filter options.
- **✏️ Edit Recipes**: Update recipe details like ingredients or preparation steps.
- **❌ Delete Recipes**: Remove recipes user no longer want to keep.
- **⭐ Add to Favorite List**: Mark recipes as favorites for quick access.
- **🌟 My Recipe List**: Maintain a personalized list of recipes created by user.
- **✏️ Multi Layer Comments**: User can comment on any recipe and also add reply to any comments. Multi Level .

### 💬 Additional Features
- **🔗 Review Recipes**: User can add review to the recipe.
- **🔗 AI Suggetion**: Customized AI suggetion for new recipe with same ingredients and so on .

## 🚀 Tools & Technologies

### 🔧 Frontend
- **⚛ React.js**: For building an interactive user interface.
- **👗 Tailwind CSS**: For responsive and beautiful design.

### 🛠️ Backend
- **🧰 Node.js with Express.js**: To handle server-side operations.
- **🍒 MongoDB**: For storing recipe data.

### ✉️ Authentication
- **🔑 JWT**: Secure token-based authentication.
- **⚡ OAuth**: Sign in with third-party services(Google and GitHub)
- **🛠️ Email/Password**: Classic authentication method.

## 📔 Installation

### Prerequisites
- 🛠 Node.js installed
- 🍒 MongoDB instance running

### Steps
1. 🗒 Clone the repository:
   ```bash
   git clone https://github.com/FaizaM07/CookBook.git
   ```
2. 🔍 Navigate to the project folder:
   ```bash
   cd CB_APP
   ```
3. 🛠️ Install dependencies:
   ```bash
   npm install
   ```
4. 🔐 Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add necessary commands.
  
5. 🌄 Start the development server:
   ```bash
   npm run dev
   ```
6. 🔄 Open your browser and navigate to `http://localhost:5000`.

## 🔐 Project Structure

```
CB_APP/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   ├── tailwind.config.js
├── .env
├── package.json
```


## 📢 Contact

For any questions or suggestions, feel free to reach out.

---

🍽️ Enjoy managing your recipes effortlessly!

