'use client';

import React from 'react';

export default function DiscordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-slate-700">
        <h1 className="text-2xl font-black tracking-wider uppercase">Timenite</h1>
        <nav className="flex gap-6 text-sm font-medium">
          <a href="/" className="hover:text-blue-400 transition">Inicio</a>
          <a href="/about" className="hover:text-blue-400 transition">Acerca de</a>
          <a href="https://twitter.com/alejandroher_07" className="hover:text-blue-400 transition">Twitter</a>
          <a href="/discord" className="text-blue-400">Discord</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-4 py-16 min-h-[80vh]">
        <div className="max-w-2xl w-full">
          {/* Icono Discord */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-indigo-600/20 rounded-full flex items-center justify-center border-4 border-indigo-500/30">
              <svg 
                className="w-16 h-16 text-indigo-400" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </div>
          </div>

          {/* Contenido Principal */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700 shadow-2xl text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">
              Servidor de Discord
            </h2>
            
            <div className="mb-8">
              <div className="inline-block px-6 py-2 bg-yellow-600/20 border border-yellow-500/50 rounded-lg mb-6">
                <p className="text-yellow-400 font-medium text-sm uppercase">
                  🚧 Próximamente
                </p>
              </div>
              
              <p className="text-slate-300 text-lg font-light leading-relaxed mb-6">
                Nuestro servidor de Discord está actualmente en construcción. Estamos trabajando para crear un espacio increíble donde la comunidad de Timenite pueda reunirse.
              </p>
            </div>

            {/* Características Futuras */}
            <div className="bg-slate-900/50 rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-black mb-4 uppercase text-indigo-400">
                ¿Qué Encontrarás?
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎮</span>
                  <div>
                    <p className="font-medium">Discusiones de Fortnite</p>
                    <p className="text-slate-400 text-sm font-light">Habla sobre las últimas novedades</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <p className="font-medium">Notificaciones de Temporada</p>
                    <p className="text-slate-400 text-sm font-light">Alertas de inicio y fin</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👥</span>
                  <div>
                    <p className="font-medium">Busca Compañeros</p>
                    <p className="text-slate-400 text-sm font-light">Encuentra gente para jugar</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="font-medium">Eventos y Torneos</p>
                    <p className="text-slate-400 text-sm font-light">Participa en competiciones</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <p className="text-slate-400 font-light">
                Mientras tanto, síguenos en Twitter para recibir actualizaciones sobre el lanzamiento del servidor.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/" 
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition"
                >
                  Volver al Inicio
                </a>
                <a 
                  href="https://twitter.com/alejandroher_07" 
                  className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-medium transition"
                >
                  Seguir en Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Info adicional */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm font-light">
              ¿Quieres ser notificado cuando el servidor esté disponible?<br />
              Síguenos en nuestras redes sociales para no perderte el anuncio.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-slate-400 text-sm font-light border-t border-slate-700">
        <p className="mb-2">TempNite no está afiliado con Epic Games o Fortnite</p>
        <p>© 2025 TempNite. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}