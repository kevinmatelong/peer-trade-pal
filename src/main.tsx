
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// No longer using Capacitor's PWA elements
createRoot(document.getElementById("root")!).render(<App />);
