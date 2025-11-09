'use client';

import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function FortniteSeasonTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [progress, setProgress] = useState<number>(0);

  // Configura aquí la fecha de inicio y fin de la temporada
  const seasonStart = new Date('2025-09-06T00:00:00');
  const seasonEnd = new Date('2025-11-29T07:30:00');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = seasonEnd.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });

        // Calcular progreso de la temporada
        const totalDuration = seasonEnd.getTime() - seasonStart.getTime();
        const elapsed = now.getTime() - seasonStart.getTime();
        const progressPercent = Math.min((elapsed / totalDuration) * 100, 100);
        setProgress(progressPercent);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setProgress(100);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider">TempNite</h1>
        <nav className="flex gap-6 text-sm">
          <a href="#" className="hover:text-blue-400 transition">Inicio</a>
          <a href="/about" className="hover:text-blue-400 transition">Acerca de</a>
          <a href="https://x.com/alejandroher_07" className="hover:text-blue-400 transition">Twitter</a>
          <a href="/discord" className="hover:text-blue-400 transition">Discord</a>
        
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Capítulo 7 Temporada 1
        </h2>

        {/* Countdown Display */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8 border border-slate-700 shadow-2xl max-w-3xl w-full">
          <div className="text-center mb-4">
            <div className="text-5xl md:text-7xl font-bold tracking-tight mb-4 flex justify-center gap-2 md:gap-4 flex-wrap">
              <span>{timeLeft.days}d</span>
              <span>{timeLeft.hours}h</span>
              <span>{timeLeft.minutes}m</span>
              <span>{timeLeft.seconds}s</span>
            </div>
            <p className="text-slate-300 text-lg">
              {timeLeft.days} días hasta que termine la temporada
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-3xl mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span>Progreso de Temporada</span>
            <span className="font-semibold">{progress.toFixed(2)}%</span>
          </div>
          <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Season Info */}
        <div className="text-center text-slate-300 space-y-2">
          <p className="text-sm">
            La Temporada 1 del Capítulo 7 de Fortnite comenzó el {formatDate(seasonStart)}
          </p>
          <p className="text-sm">
            Termina el {formatDate(seasonEnd)} a las {formatTime(seasonEnd)} GMT+1
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full p-6 text-center text-slate-400 text-sm">
        <p className="mb-2">Sigue el contador en vivo de la temporada actual de Fortnite</p>
        <p>© 2025 TempNite. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}