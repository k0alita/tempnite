'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-slate-700">
        <h1 className="text-2xl font-black tracking-wider uppercase">TempNite</h1>
        <nav className="flex gap-6 text-sm font-medium">
          <a href="/" className="hover:text-blue-400 transition">Inicio</a>
          <a href="/about" className="text-blue-400">Acerca de</a>
          <a href="https://twitter.com/alejandroher_07" className="hover:text-blue-400 transition">Twitter</a>
          <a href="/discord" className="hover:text-blue-400 transition">Discord</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-5xl md:text-6xl font-black mb-8 text-center uppercase">
          Acerca de Tempnite
        </h2>

        <div className="space-y-8">
          {/* Sección: Qué es */}
          <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h3 className="text-3xl font-black mb-4 uppercase text-purple-400">
              ¿Qué es TempNite?
            </h3>
            <p className="text-slate-300 text-lg font-light leading-relaxed">
              TempNite es un contador en tiempo real que te permite hacer seguimiento de cuánto tiempo queda para que termine la temporada actual de Fortnite. Nunca más te perderás el momento final de una temporada o te preguntarás cuándo llegarán las nuevas actualizaciones.
            </p>
          </section>

          {/* Sección: Características */}
          <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h3 className="text-3xl font-black mb-4 uppercase text-pink-400">
              Características
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-lg">Contador en Tiempo Real</h4>
                    <p className="text-slate-400 font-light">Actualización cada segundo para máxima precisión</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-lg">Barra de Progreso</h4>
                    <p className="text-slate-400 font-light">Visualiza cuánto ha avanzado la temporada</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-lg">Diseño Responsivo</h4>
                    <p className="text-slate-400 font-light">Funciona perfectamente en móviles y escritorio</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-lg">Información Clara</h4>
                    <p className="text-slate-400 font-light">Fechas de inicio y fin siempre visibles</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sección: Por qué Timenite */}
          <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h3 className="text-3xl font-black mb-4 uppercase text-blue-400">
              ¿Por qué TempNite?
            </h3>
            <p className="text-slate-300 text-lg font-light leading-relaxed mb-4">
              Como jugadores apasionados de Fortnite, sabemos lo importante que es estar al tanto de las temporadas. Cada temporada trae nuevas armas, skins exclusivas, desafíos y eventos especiales que no querrás perderte.
            </p>
            <p className="text-slate-300 text-lg font-light leading-relaxed">
              TempNite fue creado para ayudar a la comunidad a planificar mejor su tiempo de juego, asegurarse de completar el pase de batalla y estar listos para los eventos de fin de temporada.
            </p>
          </section>

          {/* Sección: Tecnología */}
          <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h3 className="text-3xl font-black mb-4 uppercase text-purple-400">
              Tecnología
            </h3>
            <p className="text-slate-300 text-lg font-light leading-relaxed mb-4">
              TempNite está construido con las últimas tecnologías web para garantizar una experiencia rápida y fluida:
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-slate-700/50 rounded-lg font-medium text-sm">Next.js 16</span>
              <span className="px-4 py-2 bg-slate-700/50 rounded-lg font-medium text-sm">React 19</span>
              <span className="px-4 py-2 bg-slate-700/50 rounded-lg font-medium text-sm">Tailwind CSS 4</span>
              <span className="px-4 py-2 bg-slate-700/50 rounded-lg font-medium text-sm">TypeScript</span>
            </div>
          </section>

          {/* Sección: Contacto */}
          <section className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-black mb-4 uppercase text-center">
              Únete a la Comunidad
            </h3>
            <p className="text-slate-300 text-lg font-light leading-relaxed text-center mb-6">
              Síguenos en nuestras redes sociales para recibir notificaciones sobre nuevas temporadas y actualizaciones.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://twitter.com/alejandroher_07" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition">
                Twitter
              </a>
              <a href="/discord" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition">
                Discord
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 p-6 text-center text-slate-400 text-sm font-light border-t border-slate-700">
        <p className="mb-2">TempNite no está afiliado con Epic Games o Fortnite</p>
        <p>© 2025 TempNite. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}