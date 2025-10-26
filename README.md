<h1 align="center">🎮 Minecraft Clone with React Three Fiber</h1>
<p align="center">Un clon de Minecraft desarrollado con React, Three.js y React Three Fiber que permite construir y explorar mundos 3D en tiempo real.</p>

<p align="center">
  <a href="https://reactjs.org"><img src="https://img.shields.io/badge/React-18-blue?logo=react" /></a>
  <a href="https://typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript" /></a>
  <a href="https://threejs.org"><img src="https://img.shields.io/badge/Three.js-0.171.0-green?logo=three.js" /></a>
  <a href="https://github.com/pmndrs/zustand"><img src="https://img.shields.io/badge/Zustand-State-yellowgreen" /></a>
  <a href="https://vitejs.dev"><img src="https://img.shields.io/badge/Vite-Build_Tool-purple?logo=vite" /></a>
</p>

<p align="center">
  <a href="https://minecraft-vite.vercel.app">🌐 Live Demo</a> •
  <a href="#-installation">⚙️ Installation</a> •
  <a href="#-features">✨ Features</a> •
  <a href="#-tech-stack">📦 Tech Stack</a>
</p>

---

## 📸 Demo

![demo](./demo.png) <!-- Replace with GIF or video if available -->

> Try the live version: [minecraft-vite.vercel.app](https://minecraft-vite.vercel.app)

---

### 📦 Tech Stack

| Technology        | Description                          |
|------------------|--------------------------------------|
| ![React](https://img.shields.io/badge/React-18-blue?logo=react) | Frontend library |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript) | Static typing |
| ![Three.js](https://img.shields.io/badge/Three.js-0.171.0-green?logo=three.js) | 3D graphics library |
| ![React Three Fiber](https://img.shields.io/badge/R3F-8.17.10-orange?logo=react) | React renderer for Three.js |
| ![Cannon.js](https://img.shields.io/badge/Cannon.js-Physics-red?logo=cannon) | Physics engine |
| ![Zustand](https://img.shields.io/badge/Zustand-State-yellowgreen) | Global state management |
| ![Vite](https://img.shields.io/badge/Vite-Build-purple?logo=vite) | Frontend build tool |

---

### ✨ Features

- 🌍 Mundo 3D interactivo con física realista
- 🧱 Construcción de bloques con múltiples texturas
- 🎮 Controles de primera persona (WASD + Espacio)
- 🎨 5 tipos de texturas diferentes (tierra, hierba, vidrio, madera, tronco)
- ⚡ Cambio de texturas con teclas numéricas (1-5)
- 🖱️ Colocación y eliminación de cubos con mouse
- 🎯 Interfaz intuitiva con indicador de textura actual
- 🚀 Rendimiento optimizado con React Three Fiber

---

### 🎯 Learnings & Challenges

- [x] Integré React Three Fiber con Cannon.js para física realista
- [x] Implementé sistema de gestión de estado con Zustand
- [x] Desarrollé controles de primera persona con PointerLockControls
- [x] Creé sistema de texturas dinámicas con Three.js TextureLoader
- [x] Optimicé rendimiento con useFrame y gestión eficiente de eventos
- [x] Implementé sistema de construcción/eliminación de cubos interactivo

---

### ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/JeremyAyza/minecraft-vite.git
cd minecraft-vite

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

---

## 🎮 Usage

### Game Controls

#### Movement
- **W** - Move forward
- **S** - Move backward  
- **A** - Move left
- **D** - Move right
- **Space** - Jump

#### Building
- **Left Click** - Place block
- **Alt + Left Click** - Remove block
- **1-5** - Change texture type:
  - **1** - Dirt
  - **2** - Grass
  - **3** - Glass
  - **4** - Wood
  - **5** - Log

### Interface
- **Texture Indicator**: Shows currently selected texture in top-left corner
- **Crosshair**: Center cross for aiming

---

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Cube.tsx        # Individual cube component
│   ├── Cubes.tsx       # All cubes rendering
│   ├── FVP.tsx         # First-person controls
│   ├── Ground.tsx      # World surface
│   └── Player.tsx      # Player and physics
├── hooks/              # Custom hooks
│   ├── useKeyboard.ts  # Keyboard event handling
│   └── useStore.ts     # Global state with Zustand
├── lib/                # Utilities and configurations
│   └── textures.ts     # Texture loading and setup
├── helpers/            # Helper functions
│   └── images.ts       # Image imports
├── types/              # TypeScript type definitions
│   └── ActionsKeboardMap.ts  # Key mapping
└── assets/             # Static resources
    └── images/         # Block textures
```

---

## 🔧 Available Scripts

```bash
# Development
pnpm dev          # Start development server

# Build
pnpm build        # Build for production
pnpm preview      # Preview build

# Code Quality
pnpm lint         # Run ESLint
```

---

## 🎨 Customization

### Adding New Textures

1. **Add image** in `src/assets/images/`
2. **Import image** in `src/helpers/images.ts`
3. **Create texture** in `src/lib/textures.ts`
4. **Add mapping** in `src/types/ActionsKeboardMap.ts`
5. **Update hook** in `src/hooks/useKeyboard.ts`

### Modifying Physics

Physics parameters can be adjusted in:
- `src/components/Player.tsx` - Player speed and jump
- `src/components/Cube.tsx` - Cube properties
- `src/components/Ground.tsx` - World surface

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build project
pnpm build

# Upload 'dist' folder to Netlify
```

### GitHub Pages
```bash
# Install gh-pages
pnpm add -D gh-pages

# Add script in package.json
"deploy": "gh-pages -d dist"

# Deploy
pnpm build && pnpm deploy
```

---

## 🤝 Contributing

Contributions are welcome. Please:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is under the MIT License. See the `LICENSE` file for more details.

---

## 👨‍💻 Author

**Jeremy Ayza**
- GitHub: [@JeremyAyza](https://github.com/JeremyAyza)

---

## 🙏 Acknowledgments

- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - For making Three.js accessible in React
- [React Three Drei](https://github.com/pmndrs/drei) - For utilities and helpers
- [Cannon.js](https://github.com/schteppe/cannon.js) - For physics engine
- [Zustand](https://github.com/pmndrs/zustand) - For state management

---

⭐ If you like this project, don't forget to give it a star!