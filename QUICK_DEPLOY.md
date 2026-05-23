# ⚡ Quick Deploy Reference

## 🎯 This is a Monorepo

Deploy individual artifacts, not the root!

---

## 🌐 Netlify Deployment

### Hamza Portfolio
```
Base Directory:    artifacts/hamza-portfolio
Build Command:     corepack enable && pnpm install --no-frozen-lockfile && pnpm run build
Publish Directory: artifacts/hamza-portfolio/dist
Node Version:      20
```

### Mockup Sandbox
```
Base Directory:    artifacts/mockup-sandbox
Build Command:     corepack enable && pnpm install --no-frozen-lockfile && pnpm run build
Publish Directory: artifacts/mockup-sandbox/dist
Node Version:      20
```

---

## ⚡ Vercel Deployment

### Hamza Portfolio
```
Root Directory:    artifacts/hamza-portfolio
Framework:         Vite
Build Command:     pnpm run build
Output Directory:  dist
Install Command:   corepack enable && pnpm install --no-frozen-lockfile
Node Version:      20.x
```

### Mockup Sandbox
```
Root Directory:    artifacts/mockup-sandbox
Framework:         Vite
Build Command:     pnpm run build
Output Directory:  dist
Install Command:   corepack enable && pnpm install --no-frozen-lockfile
Node Version:      20.x
```

---

## 💻 Local Development

```bash
# Install pnpm
npm install -g pnpm@9.0.0

# Install dependencies
pnpm install

# Run hamza-portfolio
cd artifacts/hamza-portfolio
pnpm run dev

# Run mockup-sandbox
cd artifacts/mockup-sandbox
pnpm run dev
```

---

## ✅ Pre-Deploy Checklist

- [ ] Node.js 20+ installed
- [ ] pnpm 9.0.0+ installed
- [ ] `pnpm install` runs successfully
- [ ] `pnpm run build` succeeds in target artifact
- [ ] No TypeScript errors
- [ ] Correct base/root directory configured

---

## 🔧 Troubleshooting

**Build fails with "catalog:" error**
→ ✅ FIXED - All catalog references removed

**"pnpm not found" error**
→ Add `corepack enable` to build command

**"PORT is required" error**
→ ✅ FIXED - Vite configs now have defaults

**Wrong files deployed**
→ Check base/root directory is set to artifact folder, not root

---

**Status:** 🟢 READY TO DEPLOY
