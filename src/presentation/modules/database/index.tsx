'use client';

import { useFindAllPersonagens } from '@/core/services/usecases/personagem/index.hook';
import { Button } from '@/ui/DataDisplay/Button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/ui/DataEntry/Select';
import { useState } from 'react';
import { MarvelCard } from './components/marvel-card';

export const DatabaseUI = () => {
  const { data, isPending } = useFindAllPersonagens();

  const [colecao, setColecao] = useState('');
  const [tipoCard, setTipoCard] = useState('');
  const [custo, setCusto] = useState('');
  const [pontosAtaque, setPontosAtaque] = useState('');
  const [pontosVida, setPontosVida] = useState('');
  const [tiposHabilidades, setTiposHabilidades] = useState('');
  const [habilidadesChave, setHabilidadesChave] = useState('');
  const [arquetipo, setArquetipo] = useState('');

  const resetFilters = () => {
    setColecao('');
    setTipoCard('');
    setCusto('');
    setPontosAtaque('');
    setPontosVida('');
    setTiposHabilidades('');
    setHabilidadesChave('');
    setArquetipo('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-red-600 text-white font-bold text-2xl px-6 py-2 mb-4">
            MARVEL
          </div>
          <h1
            className="text-6xl font-bold text-white mb-2"
            style={{
              textShadow:
                '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 4px 4px 8px rgba(0,0,0,0.5)',
            }}
          >
            CAMPOS DE BATALHA
          </h1>
          <h2
            className="text-7xl font-black text-yellow-400"
            style={{
              textShadow:
                '4px 4px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 6px 6px 12px rgba(0,0,0,0.7)',
              WebkitTextStroke: '2px white',
            }}
          >
            DATABASE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-white font-bold text-xl mb-2 uppercase">Coleção</label>
            <Select value={colecao} onValueChange={setColecao}>
              <SelectTrigger className="w-full bg-yellow-400 border-2 border-black text-black font-bold h-14 text-lg hover:bg-yellow-500">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="base">Base</SelectItem>
                <SelectItem value="expansao1">Expansão 1</SelectItem>
                <SelectItem value="expansao2">Expansão 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-white font-bold text-xl mb-2 uppercase">
              Tipo do Card
            </label>
            <Select value={tipoCard} onValueChange={setTipoCard}>
              <SelectTrigger className="w-full bg-yellow-400 border-2 border-black text-black font-bold h-14 text-lg hover:bg-yellow-500">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="heroi">Herói</SelectItem>
                <SelectItem value="vilao">Vilão</SelectItem>
                <SelectItem value="suporte">Suporte</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-white font-bold text-xl mb-2 uppercase">Custo</label>
            <Select value={custo} onValueChange={setCusto}>
              <SelectTrigger className="w-full bg-yellow-400 border-2 border-black text-black font-bold h-14 text-lg hover:bg-yellow-500">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-white font-bold text-xl mb-2 uppercase">
              Pontos de Ataque
            </label>
            <Select value={pontosAtaque} onValueChange={setPontosAtaque}>
              <SelectTrigger className="w-full bg-yellow-400 border-2 border-black text-black font-bold h-14 text-lg hover:bg-yellow-500">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-2">0-2</SelectItem>
                <SelectItem value="3-5">3-5</SelectItem>
                <SelectItem value="6+">6+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-white font-bold text-xl mb-2 uppercase">
              Pontos de Vida
            </label>
            <Select value={pontosVida} onValueChange={setPontosVida}>
              <SelectTrigger className="w-full bg-yellow-400 border-2 border-black text-black font-bold h-14 text-lg hover:bg-yellow-500">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-3">0-3</SelectItem>
                <SelectItem value="4-6">4-6</SelectItem>
                <SelectItem value="7+">7+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-white font-bold text-xl mb-2 uppercase">
              Tipos de Habilidades
            </label>
            <Select value={tiposHabilidades} onValueChange={setTiposHabilidades}>
              <SelectTrigger className="w-full bg-yellow-400 border-2 border-black text-black font-bold h-14 text-lg hover:bg-yellow-500">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ataque">Ataque</SelectItem>
                <SelectItem value="defesa">Defesa</SelectItem>
                <SelectItem value="suporte">Suporte</SelectItem>
                <SelectItem value="especial">Especial</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-white font-bold text-xl mb-2 uppercase">
              Habilidades Chave
            </label>
            <Select value={habilidadesChave} onValueChange={setHabilidadesChave}>
              <SelectTrigger className="w-full bg-yellow-400 border-2 border-black text-black font-bold h-14 text-lg hover:bg-yellow-500">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="voo">Voo</SelectItem>
                <SelectItem value="regeneracao">Regeneração</SelectItem>
                <SelectItem value="escudo">Escudo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-blue-400 font-bold text-xl mb-2 uppercase">
              Arquétipo
            </label>
            <Select value={arquetipo} onValueChange={setArquetipo}>
              <SelectTrigger className="w-full bg-blue-500 border-2 border-black text-white font-bold h-14 text-lg hover:bg-blue-600">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="agressivo">Agressivo</SelectItem>
                <SelectItem value="controle">Controle</SelectItem>
                <SelectItem value="combo">Combo</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-center mb-16">
          <Button
            onClick={resetFilters}
            className="bg-red-600 hover:bg-red-700 text-white font-black text-xl px-12 py-6 rounded-full border-4 border-white shadow-lg uppercase"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            Resetar Filtros!
          </Button>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-white text-3xl font-black uppercase">Resultados</h3>
            <div className="text-yellow-400 text-xl font-bold">
              {data?.length || 0} cards encontrados
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data?.map((card, index) => (
              <MarvelCard key={index} data={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
