import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log('main.tsx: Starting render...');

try {
  const root = document.getElementById('root');
  console.log('main.tsx: Root element:', root);
  
  if (!root) {
    console.error('main.tsx: No root element found!');
  } else {
    createRoot(root).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    console.log('main.tsx: Render completed');
  }
} catch (error) {
  console.error('main.tsx: Render error:', error);
}