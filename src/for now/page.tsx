// Content of page.tsx (entry file)
// This file imports the AuthPage component and renders it as the main content.
import AuthPage from './AuthPage'; // Changed from './AuthPage.jsx' to './AuthPage' for cleaner TypeScript/Next.js import resolution

export default function Home() {
  // Renders the main authentication flow component
  return (
    <AuthPage />
  );
}