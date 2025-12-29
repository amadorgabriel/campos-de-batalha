// Models
interface HabilidadeModel {
  titulo: string;
  descricao: string;
  idsChaves: number[] | null;
  idsTipos: number[];
}

type TipoPersonagemUnion = 1 | 2 | 3;
type CustoPersonagemUnion = 1 | 2 | 3 | 4 | 5;
type VidaPersonagemUnion = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type AtaquePersonagemUnion = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface PersonagemModel {
  codinome: string;
  alteregos: string[];
  idColecao: number;
  idTipoPersonagem: TipoPersonagemUnion;
  custo: CustoPersonagemUnion;
  ataque: AtaquePersonagemUnion;
  vida: VidaPersonagemUnion;
  idSelo: number | null;
  habilidades: HabilidadeModel[];
  idsArquetipos: number[] | null;
}

// Requests

// Responses
export type FindAllPersonagemResponse = PersonagemModel[];
