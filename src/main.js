// 1. Import your SCSS file
// Vite detects the .scss extension and compiles it automatically
import './styles.scss';

// 2. Optional: Add global logic (like a scroll effect for your header)
window.addEventListener('scroll', () => {
  const header = document.querySelector('.main-header');
  if (window.scrollY > 50) {
    header.style.background = '#0a0a0a'; // Turns solid "Noir" ink on scroll
  } else {
    header.style.background = 'transparent';
  }
});

console.log('Noir Landing Page Loaded Successfully.');