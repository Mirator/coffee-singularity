# ☕ Brew App

A beautiful React + TypeScript application featuring an interactive coffee brewing experience with a modern "Brew" button.

## Features

- **Interactive Brew Button**: Click to start the brewing process
- **Progress Animation**: Watch the coffee brew with a smooth progress bar
- **Brewing States**: Button changes appearance during brewing, completion, and idle states
- **Steam Animation**: Animated steam effects during brewing
- **Brew Counter**: Tracks how many cups you've brewed
- **Modern UI**: Beautiful coffee-themed gradient design with glassmorphism effects
- **Responsive Design**: Works perfectly on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

## Technology Stack

- **React 19**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast development and build tool
- **CSS3**: Modern styling with animations and gradients

## Project Structure

```
src/
├── App.tsx          # Main brewing component with state management
├── App.css          # Beautiful coffee-themed styling
├── index.css        # Global styles
└── main.tsx         # Application entry point
```

## Development

The app uses modern React hooks including:
- `useState` for managing brewing state, progress, and counter
- `useEffect` for handling brewing timer and animations
- TypeScript for type safety and better development experience

## Brewing Process

1. **Idle State**: Ready to brew (brown gradient button)
2. **Brewing State**: Active brewing with progress bar (orange gradient, pulsing animation)
3. **Complete State**: Coffee is ready! (green gradient with celebration animation)
4. **Auto Reset**: Returns to idle state after 2 seconds

Enjoy your virtual coffee brewing experience! ☕


