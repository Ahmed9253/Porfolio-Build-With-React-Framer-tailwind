# ☁️ Cloudinary Setup Guide (Updated 2024)

## What You Need

To upload images to Cloudinary, you need **4 credentials**:

1. **Cloud Name**
2. **API Key**
3. **API Secret**
4. **Upload Preset**

---

## 📝 Step-by-Step Setup

### **Step 1: Create Cloudinary Account**

1. Go to [https://cloudinary.com/](https://cloudinary.com/)
2. Click **"Sign Up for Free"**
3. Create your account (free tier is enough)
4. Verify your email

---

### **Step 2: Get Your API Credentials**

1. After logging in, you'll see your **Dashboard**
2. Look for the **"Product Environment Credentials"** section
3. You'll see three important values:
   - **Cloud Name** (e.g., `dxifaaxgt`)
   - **API Key** (e.g., `123456789012345`)
   - **API Secret** (e.g., `abcdefghijklmnopqrstuvwxyz123`)
4. **Copy all three values** - you'll need them in Step 4

**⚠️ Important:** Keep your **API Secret** private! Never share it or commit it to GitHub.

---

### **Step 3: Create Upload Preset**

1. In your Cloudinary dashboard, click **Settings** (gear icon)
2. Go to **"Upload"** tab
3. Scroll down to **"Upload presets"**
4. Click **"Add upload preset"**
5. Configure the preset:
   - **Preset name**: `portfolio_projects` (or any name you like)
   - **Signing Mode**: Select **"Unsigned"** (important!)
   - **Folder**: `portfolio-projects` (optional, for organization)
   - **Allowed formats**: `png, jpg, jpeg, webp, gif`
6. Click **"Save"**
7. Copy the **preset name** you just created

---

### **Step 4: Add Credentials to .env**

Open your `.env` file and add **all credentials**:

```env
VITE_ADMIN_PASSWORD=admin123
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
VITE_CLOUDINARY_UPLOAD_PRESET=portfolio_projects
VITE_CLOUDINARY_API_KEY=your_api_key_here
VITE_CLOUDINARY_API_SECRET=your_api_secret_here
```

**Example with real values:**

```env
VITE_ADMIN_PASSWORD=admin123
VITE_CLOUDINARY_CLOUD_NAME=dxifaaxgt
VITE_CLOUDINARY_UPLOAD_PRESET=portfolio_projects
VITE_CLOUDINARY_API_KEY=123456789012345
VITE_CLOUDINARY_API_SECRET=abcdefghijklmnopqrstuvwxyz123
```

**Where to find each value:**

- **Cloud Name**: Dashboard → Product Environment Credentials
- **API Key**: Dashboard → Product Environment Credentials
- **API Secret**: Dashboard → Product Environment Credentials (click "👁️" to reveal)
- **Upload Preset**: Settings → Upload → Upload presets (name you created in Step 3)

---

### **Step 5: Restart Dev Server**

After updating `.env`, restart your development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

---

## ✅ You're Done!

Now when you go to the admin dashboard and add/edit a project, you'll see:

- **Upload Image** button instead of URL input
- Click it to open Cloudinary upload widget
- Upload from:
  - 📁 Your computer
  - 🔗 URL
  - 📷 Camera (on mobile)

---

## 🎯 How It Works

1. Click **"Upload Image"** button in admin dashboard
2. Cloudinary widget opens
3. Select image from your computer
4. Image uploads to Cloudinary
5. Cloudinary returns a secure URL
6. URL is automatically saved to your project

---

## 📸 Image Guidelines

- **Formats**: PNG, JPG, JPEG, WEBP, GIF
- **Max Size**: 5MB per image
- **Recommended Size**: 1200x800px for best quality
- **Aspect Ratio**: 3:2 works best for the grid layout

---

## 🔒 Security Notes

1. **Upload Preset** must be **"Unsigned"** for client-side uploads
2. Never commit `.env` file (already in `.gitignore`)
3. Free tier includes:
   - 25 GB storage
   - 25 GB bandwidth/month
   - More than enough for a portfolio!

---

## 🛠️ Troubleshooting

### **"Cloudinary credentials not configured"**

- Check that `.env` has **all 4 credentials**:
  - `VITE_CLOUDINARY_CLOUD_NAME`
  - `VITE_CLOUDINARY_UPLOAD_PRESET`
  - `VITE_CLOUDINARY_API_KEY`
  - `VITE_CLOUDINARY_API_SECRET`
- Restart dev server after updating `.env`

### **"Upload failed"**

- Make sure upload preset is set to **"Unsigned"**
- Check image size (must be under 5MB)
- Verify image format is supported

### **Widget doesn't open**

- Check browser console for errors
- Make sure you have internet connection
- Try refreshing the page

---

## 📚 Quick Reference

| Setting         | Value                                       |
| --------------- | ------------------------------------------- |
| Cloud Name      | Dashboard → Product Environment Credentials |
| API Key         | Dashboard → Product Environment Credentials |
| API Secret      | Dashboard → Product Environment Credentials |
| Upload Preset   | Settings → Upload → Upload presets          |
| Signing Mode    | **Unsigned** (important!)                   |
| Max File Size   | 5MB                                         |
| Allowed Formats | PNG, JPG, JPEG, WEBP, GIF                   |

---

## 🎉 Benefits

✅ **No manual URL management**
✅ **Automatic image optimization**
✅ **CDN delivery** (fast loading worldwide)
✅ **Automatic backups**
✅ **Free tier** (25GB storage + bandwidth)
✅ **Professional image hosting**

---

**Need help?** Check [Cloudinary Documentation](https://cloudinary.com/documentation)
