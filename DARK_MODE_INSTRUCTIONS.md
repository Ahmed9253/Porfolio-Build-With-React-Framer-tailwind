# 🌓 Dark Mode Implementation Guide

## How to Use Dark Mode

### Toggle Button Location
- **Desktop**: Top-right corner of the navbar, next to the navigation links
- **Mobile**: Top-right corner, next to the menu button

### Icons
- 🌙 **Moon Icon** = Currently in Light Mode (click to switch to Dark)
- ☀️ **Sun Icon** = Currently in Dark Mode (click to switch to Light)

## Implementation Details

### Files Modified

1. **src/context/ThemeContext.jsx** - Theme state management
2. **src/main.jsx** - Wrapped app with ThemeProvider
3. **src/index.css** - Added dark mode styles for body and scrollbar
4. **src/components/Navbar.jsx** - Added theme toggle button
5. **All Components** - Added `dark:` variant classes

### How It Works

1. **ThemeContext** manages the global theme state
2. **localStorage** persists your theme preference
3. **Clicking the toggle** adds/removes the `dark` class on `<html>`
4. **Tailwind's `dark:` variants** automatically apply dark styles

### Testing Dark Mode

1. Open your portfolio in the browser
2. Look for the moon/sun icon in the navbar
3. Click it to toggle between light and dark modes
4. Refresh the page - your preference should be saved!

### Troubleshooting

If dark mode isn't working:

1. **Check browser console** for errors
2. **Inspect the `<html>` element** - it should have `class="dark"` when in dark mode
3. **Clear localStorage** and try again:
   ```javascript
   localStorage.removeItem('theme')
   ```
4. **Hard refresh** the page (Ctrl+Shift+R or Cmd+Shift+R)

### Color Scheme

**Light Mode:**
- Backgrounds: White, Slate-50, Slate-100
- Text: Slate-900, Slate-700, Slate-600
- Accents: Blue-600

**Dark Mode:**
- Backgrounds: Slate-900, Slate-800
- Text: White, Slate-200, Slate-300
- Accents: Blue-500, Blue-400

## Components with Dark Mode

✅ Navbar
✅ Hero
✅ About
✅ Journey
✅ TechStack
✅ Project
✅ Contact
✅ Loading
✅ Copywrite (Footer)

All components have smooth color transitions!

