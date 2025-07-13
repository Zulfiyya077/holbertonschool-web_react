# Webpack Learning Project

This project demonstrates fundamental Webpack concepts through progressive tasks.

## Tasks Overview

### Task 0: Basic Setup
- Basic Webpack installation and configuration
- jQuery integration
- Simple bundle creation

**Files:** `task_0/package.json`, `task_0/src/index.js`, `task_0/dist/index.html`

### Task 1: Config File Usage
- Custom Webpack configuration
- Lodash integration for debouncing
- Multiple dependencies management
- Production mode setup

**Files:** `task_1/js/dashboard_main.js`, `task_1/package.json`, `task_1/webpack.config.js`, `task_1/public/index.html`

### Task 2: CSS & Images
- CSS and image loader integration
- Asset optimization
- Style injection
- Background image handling

**Files:** `task_2/package.json`, `task_2/css/main.css`, `task_2/webpack.config.js`, `task_2/js/dashboard_main.js`, `task_2/public/index.html`

### Task 3: Dev Server & Modules
- Development server setup
- Module splitting (header, body, footer)
- Multiple entry points
- Code splitting and tree shaking
- Hot Module Replacement

**Files:** `task_3/modules/*/`, `task_3/package.json`, `task_3/webpack.config.js`

## Technologies Used

- **Webpack 5** - Module bundler
- **jQuery** - DOM manipulation
- **Lodash** - Utility functions
- **CSS Loader** - CSS processing
- **Image Optimization** - Asset management
- **Webpack Dev Server** - Development environment

## Installation & Usage

### Individual Task Setup:
```bash
cd task_X
npm install
```

### Development:
```bash
# Task 0, 1, 2
npm run build

# Task 3 (includes dev server)
npm run start-dev  # Opens http://localhost:8564
```

### Production Build:
```bash
npm run build
```

## Learning Objectives

- ✅ Basic Webpack setup and configuration
- ✅ Entry points, output, and loaders
- ✅ Plugin system integration
- ✅ Code splitting and chunk optimization
- ✅ Development server configuration
- ✅ Module organization and bundling
- ✅ Asset optimization and processing

## Author

Holberton School Project
