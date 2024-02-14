import React, { useEffect, useState } from 'react';
import './ThemeDemo.css';
export default function ThemeDemo() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDark])

    return <>
        <h2>Toggle Dark/Light Mode</h2>
        <div>This page is in <b>{isDark ? 'Dark' : 'Light'}</b> Mode</div>
        <button onClick={() => setIsDark(!isDark)}>Go To {!isDark ? 'Dark' : 'Light'} Mode</button>
    </>
}
