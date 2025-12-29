import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Image
        alt="Imagem robo triste"
        height={160}
        width={160}
        src={'/assets/not-found.png'}
        className="mb-6"
      />

      <h1 className="text-9xl font-bold text-slate-700">404</h1>
      <h2 className="text-4xl text-slate-700">Página não encontrada</h2>
      <p className="mt-2 text-gray-600">Ooops! A página que você está procurando não existe.</p>
    </div>
  );
}
