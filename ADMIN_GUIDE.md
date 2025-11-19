# 🔐 Admin Dashboard Guide

## Overview

Your portfolio now has a **dynamic project management system** with an admin dashboard. Projects are displayed in a **grid layout** and can be managed through the admin panel.

---

## 🚀 Features

### ✅ **Dynamic Projects Grid**

- Projects displayed in a **3-column responsive grid**
- Automatically loads from localStorage or default data
- Updates in real-time when you add/edit/delete projects

### ✅ **Admin Dashboard**

- Add new projects
- Edit existing projects
- Delete projects
- All changes persist in browser localStorage

### ✅ **Secure Login**

- Password stored in `.env` file
- Protected admin route
- Session persists until logout

---

## 📁 File Structure

```
src/
├── pages/
│   ├── Home.jsx              # Main portfolio page
│   ├── Login.jsx             # Admin login page
│   └── AdminDashboard.jsx    # Admin panel
├── components/
│   ├── Project.jsx           # Dynamic projects grid
│   └── ProtectedRoute.jsx    # Route protection
└── data/
    └── projects.json         # Default projects data
.env                          # Admin password (DO NOT COMMIT)
.env.example                  # Template for .env
```

---

## 🔑 Setup

### 1. **Environment Variables**

The admin password and Cloudinary credentials are stored in `.env`:

```env
VITE_ADMIN_PASSWORD=admin123
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
VITE_CLOUDINARY_API_KEY=your_api_key
VITE_CLOUDINARY_API_SECRET=your_api_secret
```

**Important:**

- Change the admin password to something secure!
- Add your Cloudinary credentials (see `CLOUDINARY_SETUP.md` for detailed instructions)
- Get API Key and API Secret from Cloudinary Dashboard → Product Environment Credentials

### 2. **Routes**

- `/` - Main portfolio (home page)
- `/login` - Admin login page
- `/admin` - Admin dashboard (protected)

---

## 🎯 How to Use

### **Access Admin Dashboard**

1. Navigate to `/login` in your browser
2. Enter the password from `.env` file (default: `admin123`)
3. Click "Login"
4. You'll be redirected to `/admin`

### **Add a Project**

1. Click "Add Project" button
2. Fill in the form:
   - **Title**: Project name
   - **Description**: Brief description
   - **Technologies**: Comma-separated (e.g., "React, Node.js, MongoDB")
   - **Project Image**: Click "Upload Image" button to upload from your computer
   - **Project Link**: Link to live demo or GitHub repo
3. Click "Add Project"

### **Edit a Project**

1. Click "Edit" button on any project card
2. Modify the fields
3. Click "Update Project"

### **Delete a Project**

1. Click "Delete" button on any project card
2. Confirm deletion

### **Logout**

Click the "Logout" button in the top-right corner

---

## 💾 Data Storage

Projects are stored in **browser localStorage** under the key `"projects"`.

- **Default data** is loaded from `src/data/projects.json`
- **Changes persist** across page refreshes
- **Clearing localStorage** will reset to default data

---

## 🎨 Project Grid Layout

The projects section now uses a **responsive grid**:

- **Desktop**: 3 columns
- **Tablet**: 2 columns
- **Mobile**: 1 column

Each project card displays:

- Project image
- Title
- Description
- Technology tags
- Project link button

---

## 🔒 Security Notes

1. **Never commit `.env`** - It's already in `.gitignore`
2. **Change the default password** immediately
3. **Admin session** is stored in localStorage
4. **Clear browser data** to force logout

---

## 🛠️ Customization

### Change Admin Password

Edit `.env`:

```env
VITE_ADMIN_PASSWORD=your_new_password
```

### Modify Default Projects

Edit `src/data/projects.json`:

```json
[
  {
    "id": 1,
    "title": "Your Project",
    "description": "Description here",
    "tech": ["React", "Node.js"],
    "image": "/image.png",
    "link": "https://your-project.com"
  }
]
```

---

## 📝 Quick Reference

| Action          | Route    | Password Required                    |
| --------------- | -------- | ------------------------------------ |
| View Portfolio  | `/`      | No                                   |
| Login           | `/login` | Yes                                  |
| Admin Dashboard | `/admin` | Yes (auto-redirect if not logged in) |

---

## 🎉 You're All Set!

Your portfolio now has a fully functional admin system. Manage your projects easily without touching the code!

**Default Login:**

- URL: `http://localhost:5173/login`
- Password: `admin123` (change this!)
