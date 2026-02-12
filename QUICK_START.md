# Quick Start Guide - Chart Pattern Academy

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
# Navigate to project directory
cd chart-pattern-academy

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

---

## 🎯 Testing New Features

### 1. Search & Filter
1. Go to homepage
2. Type in search box (e.g., "double")
3. Click filter buttons (All, Reversal, Continuation)
4. Verify patterns filter correctly

### 2. Dark Mode
1. Click sun/moon icon in header
2. Verify theme changes
3. Refresh page - theme should persist
4. Check all pages for proper dark mode styling

### 3. Progress Tracking
1. Go to any pattern detail page
2. Complete a quiz with 70%+ score
3. Navigate to `/progress`
4. Verify pattern shows as completed
5. Check pattern card has green checkmark

### 4. Quiz System
1. Go to any pattern detail page
2. Scroll to "Test Your Knowledge"
3. Answer questions
4. Verify instant feedback
5. Complete quiz and check score
6. Try retaking quiz

### 5. Interactive Charts
1. Go to any pattern detail page
2. Click "Show Key Points" button
3. Verify annotations appear
4. Click "Hide Key Points"
5. Verify smooth transitions

### 6. SEO
1. View page source
2. Check `<head>` for meta tags
3. Verify title, description, OG tags
4. Check `/sitemap.xml` exists
5. Check `/robots.txt` exists

### 7. Image Optimization
1. Open DevTools Network tab
2. Navigate to homepage
3. Verify images load lazily
4. Check for loading placeholders
5. Verify smooth fade-in

### 8. Progress Dashboard
1. Navigate to `/progress`
2. Verify statistics display
3. Check pattern list
4. Click "Reset Progress"
5. Verify progress clears

---

## 📁 Project Structure

```
chart-pattern-academy/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── Header.tsx       # Navigation with theme toggle
│   │   ├── Footer.tsx
│   │   ├── PatternCard.tsx  # Pattern card with progress
│   │   ├── SearchFilter.tsx # Search and filter
│   │   ├── ThemeProvider.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ProgressIndicator.tsx
│   │   ├── Quiz.tsx         # Interactive quiz
│   │   ├── InteractiveChart.tsx
│   │   ├── SEO.tsx
│   │   └── OptimizedImage.tsx
│   ├── pages/
│   │   ├── Index.tsx        # Homepage with search
│   │   ├── PatternDetail.tsx # Pattern page with quiz
│   │   ├── Progress.tsx     # Progress dashboard
│   │   └── NotFound.tsx
│   ├── data/
│   │   ├── patterns.ts      # Pattern data
│   │   └── quiz.ts          # Quiz questions
│   ├── hooks/
│   │   ├── use-progress.ts  # Progress tracking
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── assets/
│   │   └── patterns/        # Pattern images
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   ├── sitemap.xml
│   └── robots.txt
├── FEATURES.md              # Feature documentation
├── ADDING_PATTERNS.md       # Pattern addition guide
├── IMPLEMENTATION_SUMMARY.md
├── LAYOUT_GUIDE.md
└── package.json
```

---

## 🔧 Key Technologies

- **React 18**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool
- **Tailwind CSS**: Styling
- **shadcn/ui**: Component library
- **React Router**: Navigation
- **localStorage**: Data persistence

---

## 📝 Common Tasks

### Adding a New Pattern

1. Add image to `src/assets/patterns/`
2. Import and add to `src/data/patterns.ts`
3. Add quiz questions to `src/data/quiz.ts`
4. Test on homepage and detail page

See `ADDING_PATTERNS.md` for detailed guide.

### Modifying Theme Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: "hsl(var(--primary))",
  // Add or modify colors
}
```

### Adding New Routes

1. Create page in `src/pages/`
2. Add route in `src/App.tsx`:
```typescript
<Route path="/new-page" element={<NewPage />} />
```

### Customizing Quiz Questions

Edit `src/data/quiz.ts`:
```typescript
"pattern-slug": [
  {
    question: "Your question?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 0, // Index of correct option
    explanation: "Why this is correct..."
  }
]
```

---

## 🐛 Troubleshooting

### Dark mode not working
- Check localStorage: `chart-academy-theme`
- Clear browser cache
- Verify ThemeProvider wraps app

### Progress not saving
- Check localStorage: `chart-academy-progress`
- Verify browser allows localStorage
- Check browser console for errors

### Images not loading
- Verify image paths in `patterns.ts`
- Check images exist in `src/assets/patterns/`
- Clear Vite cache: `rm -rf node_modules/.vite`

### Quiz not appearing
- Verify pattern slug matches in `quiz.ts`
- Check browser console for errors
- Ensure quiz data is properly formatted

---

## 🎨 Customization

### Change Primary Color
Edit `src/index.css`:
```css
:root {
  --primary: 142 71% 45%; /* HSL values */
}
```

### Modify Quiz Passing Score
Edit `src/components/Quiz.tsx`:
```typescript
if (finalScore >= 70) { // Change 70 to desired percentage
  markPatternComplete(patternSlug);
}
```

### Adjust Search Behavior
Edit `src/pages/Index.tsx`:
```typescript
const matchesSearch = pattern.name.toLowerCase().includes(search.toLowerCase()) ||
  pattern.shortDescription.toLowerCase().includes(search.toLowerCase());
  // Add more fields to search
```

---

## 📊 Performance Tips

1. **Image Optimization**
   - Use WebP format when possible
   - Keep images under 200KB
   - Use appropriate dimensions (1200x750px)

2. **Code Splitting**
   - Already configured with Vite
   - Lazy load routes if needed

3. **Bundle Size**
   - Run `npm run build` to check size
   - Use `npm run preview` to test production build

---

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

Output will be in `dist/` directory.

### Deploy to Netlify/Vercel
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Environment Variables
Create `.env` file if needed:
```
VITE_API_URL=your_api_url
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 📚 Documentation

- **FEATURES.md**: Complete feature documentation
- **ADDING_PATTERNS.md**: How to add new patterns
- **LAYOUT_GUIDE.md**: Visual layout reference
- **IMPLEMENTATION_SUMMARY.md**: Implementation details

---

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Test thoroughly
4. Update documentation
5. Submit pull request

---

## 📞 Support

For issues or questions:
1. Check documentation files
2. Review browser console
3. Check GitHub issues
4. Contact development team

---

## ✅ Checklist for New Features

- [ ] Code follows existing patterns
- [ ] Responsive on all devices
- [ ] Works in dark mode
- [ ] Accessible (keyboard, screen readers)
- [ ] Performance optimized
- [ ] Documentation updated
- [ ] Tested in multiple browsers

---

Happy coding! 🚀
