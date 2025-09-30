'use client';

import { useState, useEffect } from 'react';
import { Sun } from 'lucide-react';

export default function TimeWeatherWidget() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateClock();
    const timerId = setInterval(updateClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  // Placeholder for weather data.
  // In a real app, you would fetch this from a weather API.
  const weather = {
    temperature: '25',
    icon: <Sun className="h-5 w-5" />,
  };

  return (
    <div className="inline-flex items-center gap-4 rounded-full bg-secondary/80 backdrop-blur-sm border border-border px-4 py-2 text-sm text-secondary-foreground shadow-lg">
      <span>{time}</span>
      <div className="h-4 w-px bg-muted-foreground/50"></div>
      <div className="flex items-center gap-2">
        {weather.icon}
        <span>{weather.temperature}°C</span>
      </div>
    </div>
  );
}
