import { Button } from '@/ui/DataDisplay/Button';
import Link from 'next/link';

export const HomeUI = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-600 via-red-700 to-gray-900">
      <div className="text-center space-y-8 p-8">
        <h1 className="text-6xl font-bold text-white tracking-wider">MARVEL</h1>
        <h2 className="text-4xl font-bold text-yellow-400 tracking-wide">CAMPOS DE BATALHA</h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Explore o universo Marvel e descubra todos os cards, habilidades e arquétipos disponíveis
        </p>

        <div className="flex gap-4 justify-center pt-8">
          <Link href="/database">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6"
            >
              Ver personagens
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
