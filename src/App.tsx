/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './i18n/config';
import { useAppStore } from './store/appStore';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { language, setLanguage, theme, toggleTheme } = useAppStore();
  const { i18n } = useTranslation();

  // Handle RTL and Language changes
  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, i18n]);

  // Handle Theme
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* Minimal Header */}
        <header className="py-4 px-6 flex justify-end items-center gap-4 border-b border-black/5 dark:border-white/5">
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value as any)}
            className="bg-transparent border border-black/10 dark:border-white/10 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-utility-accent"
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
            <option value="fr">Français</option>
          </select>
          <button 
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-sm"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
