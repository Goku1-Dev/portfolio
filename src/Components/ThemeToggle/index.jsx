// import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import './index.scss';

export const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        >
            {isDarkMode ? (
                <Sun className="icon" color="var(--text-primary)" />
            ) : (
                <Moon className="icon" color="var(--text-primary)" />
            )}
        </button>
    );
};

export default ThemeToggle;