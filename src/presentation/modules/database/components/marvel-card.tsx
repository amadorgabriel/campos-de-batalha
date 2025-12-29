import { Card } from '@/ui/DataDisplay/Card';
import { Badge } from 'lucide-react';

interface Habilidade {
  titulo: string;
  descricao: string;
  idsTipos?: number[];
}

interface MarvelCardData {
  codinome: string;
  alteregos?: string[];
  idColecao?: number;
  custo: number;
  ataque: number;
  vida: number;
  habilidades: Habilidade[];
  imageUrl?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

interface MarvelCardProps {
  data: MarvelCardData;
}

export function MarvelCard({ data }: MarvelCardProps) {
  const gradientFrom = data.gradientFrom || '#10b981';
  const gradientTo = data.gradientTo || '#3b82f6';

  return (
    <Card className="relative overflow-hidden border-4 border-black shadow-2xl transform transition-all hover:scale-105 hover:shadow-3xl">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="bg-black/80 p-4 border-b-4 border-black">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-white font-black text-2xl uppercase tracking-tight leading-tight">
                {data.codinome}
              </h3>
              {data.alteregos && data.alteregos[0] && (
                <p className="text-white/80 text-xs mt-1 font-semibold">{data.alteregos[0]}</p>
              )}
            </div>
            <Badge className="bg-red-600 text-white font-bold px-2 py-1 text-xs border-2 border-white">
              MARVEL
            </Badge>
          </div>
        </div>

        <div className="relative h-48 overflow-hidden">
          {data.imageUrl ? (
            <img
              src={data.imageUrl || '/placeholder.svg'}
              alt={data.codinome}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-black/20">
              <span className="text-white/40 text-6xl font-black">{data.codinome.charAt(0)}</span>
            </div>
          )}
        </div>

        <div className="flex-1 p-4 space-y-3 bg-black/70">
          {data.habilidades.map((habilidade, index) => (
            <div key={index} className="bg-black/60 border-2 border-white/20 rounded p-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded border-2 border-white flex items-center justify-center">
                  <span className="text-black font-black text-xs">{index + 1}</span>
                </div>
                <h4 className="text-yellow-400 font-bold text-sm uppercase">{habilidade.titulo}</h4>
              </div>
              <p className="text-white text-xs leading-relaxed">{habilidade.descricao}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 p-3 border-t-4 border-black">
          <div className="flex justify-around items-center">
            <div className="text-center">
              <div className="text-black font-black text-xs uppercase">Custo</div>
              <div className="text-black font-black text-2xl">{data.custo}</div>
            </div>
            <div className="w-px h-10 bg-black/30" />
            <div className="text-center">
              <div className="text-black font-black text-xs uppercase">Ataque</div>
              <div className="text-red-700 font-black text-2xl">{data.ataque}</div>
            </div>
            <div className="w-px h-10 bg-black/30" />
            <div className="text-center">
              <div className="text-black font-black text-xs uppercase">Vida</div>
              <div className="text-green-700 font-black text-2xl">{data.vida}</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
