import { FindAllPersonagemResponse } from '.';

export interface IPersonagem {
  findAll?(): Promise<FindAllPersonagemResponse>;
}
