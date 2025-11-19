# ⚡ Cloudinary Quick Start (2024 Updated)

## 🎯 What You Need to Do

### 1️⃣ Get Your Credentials from Cloudinary

Login to [Cloudinary Dashboard](https://console.cloudinary.com/) and find:

**Product Environment Credentials** (on the main dashboard):
```
Cloud name: dxifaaxgt  ← You already have this!
API Key: _______________  ← Copy this
API Secret: _______________  ← Click 👁️ to reveal, then copy
```

### 2️⃣ Create Upload Preset

1. Click **Settings** (⚙️ gear icon)
2. Go to **Upload** tab
3. Scroll to **Upload presets**
4. Click **Add upload preset**
5. Fill in:
   - **Preset name**: `portfolio_projects`
   - **Signing Mode**: **Unsigned** ⚠️ (IMPORTANT!)
   - **Folder**: `portfolio-projects`
6. Click **Save**

### 3️⃣ Update Your .env File

Open `c:\Users\hp\Desktop\Workspace\portfolio\.env` and update:

```env
VITE_ADMIN_PASSWORD=admin123
VITE_CLOUDINARY_CLOUD_NAME=dxifaaxgt
VITE_CLOUDINARY_UPLOAD_PRESET=portfolio_projects
VITE_CLOUDINARY_API_KEY=paste_your_api_key_here
VITE_CLOUDINARY_API_SECRET=paste_your_api_secret_here
```

### 4️⃣ Restart Your Server

```bash
# Press Ctrl+C to stop current server
# Then run:
npm run dev
```

### 5️⃣ Test It!

1. Go to `http://localhost:5173/login`
2. Login with password: `admin123`
3. Click **Add Project**
4. Click **Upload Image** button
5. Upload an image!

---

## 📍 Where to Find Each Credential

| Credential | Location |
|------------|----------|
| **Cloud Name** | Dashboard → Product Environment Credentials |
| **API Key** | Dashboard → Product Environment Credentials |
| **API Secret** | Dashboard → Product Environment Credentials (click 👁️ eye icon) |
| **Upload Preset** | Settings → Upload → Upload presets (create new) |

---

## ⚠️ Common Issues

### "Cloudinary credentials not configured"
- Make sure ALL 5 lines are in `.env`
- No spaces around `=` sign
- Restart server after editing `.env`

### "Upload failed"
- Check Upload Preset is set to **Unsigned**
- Verify API Key and API Secret are correct
- Make sure image is under 5MB

### Widget doesn't open
- Check browser console (F12) for errors
- Refresh the page
- Clear browser cache

---

## ✅ Checklist

- [ ] Logged into Cloudinary
- [ ] Copied Cloud Name (you have: `dxifaaxgt`)
- [ ] Copied API Key
- [ ] Copied API Secret (revealed with 👁️ icon)
- [ ] Created Upload Preset named `portfolio_projects`
- [ ] Set Signing Mode to **Unsigned**
- [ ] Updated `.env` file with all 5 credentials
- [ ] Restarted dev server
- [ ] Tested upload in admin dashboard

---

## 🎉 Done!

Once all credentials are added and server is restarted, you can upload images directly from the admin dashboard!

**No more manual URL typing!** 🚀

