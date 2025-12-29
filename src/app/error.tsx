'use client';

import { Button } from '@/ui/DataDisplay/Button';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-gray-900">
      <div className="text-center space-y-6 p-8">
        <div className="inline-block bg-red-600 text-white font-bold text-2xl px-6 py-2 mb-4">
          MARVEL
        </div>
        <h2
          className="text-6xl font-black text-red-500"
          style={{
            textShadow: '4px 4px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
            WebkitTextStroke: '2px white',
          }}
        >
          ERRO!
        </h2>
        <p className="text-xl text-white/90 max-w-md mx-auto">
          Algo deu errado. O Universo Marvel encontrou um problema inesperado.
        </p>
        <div className="flex gap-4 justify-center pt-8">
          <Button
            onClick={reset}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6"
          >
            TENTAR NOVAMENTE
          </Button>
          <Button
            onClick={() => (window.location.href = '/')}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6"
          >
            VOLTAR AO INÍCIO
          </Button>
        </div>
        {error.message && <p className="text-sm text-red-400 mt-4 font-mono">{error.message}</p>}
      </div>
    </div>
  );
}
