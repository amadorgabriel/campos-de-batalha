import { Button } from '@/ui/DataDisplay/Button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800">
      <div className="text-center space-y-6 p-8">
        <div className="inline-block bg-red-600 text-white font-bold text-2xl px-6 py-2 mb-4">
          MARVEL
        </div>
        <h2
          className="text-8xl font-black text-purple-500"
          style={{
            textShadow: '4px 4px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
            WebkitTextStroke: '2px white',
          }}
        >
          404
        </h2>
        <h3 className="text-3xl font-bold text-white">PÁGINA NÃO ENCONTRADA</h3>
        <p className="text-xl text-white/90 max-w-md mx-auto">
          Esta página foi para outra dimensão do multiverso Marvel.
        </p>
        <div className="flex gap-4 justify-center pt-8">
          <Link href="/">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6">
              VOLTAR PARA HOME
            </Button>
          </Link>
          <Link href="/database">
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 bg-transparent"
            >
              IR PARA DATABASE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
