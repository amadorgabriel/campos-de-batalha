'use client';

import { useFindAllPersonagens } from '@/core/services/usecases/personagem/index.hook';

export const DatabaseUI = () => {
  const { data, isPending } = useFindAllPersonagens();

  return (
    <div className="flex w-full gap-6 h-full max-xl:flex-col">
      <p>Persongens:</p>

      {isPending ? 'Carregando...' : null}

      {data?.map((personagem, index) => (
        <div key={index} className="p-4 border rounded-lg w-full">
          <h2 className="text-xl font-bold mb-2">{personagem.codinome}</h2>
        </div>
      ))}
    </div>
  );
};
