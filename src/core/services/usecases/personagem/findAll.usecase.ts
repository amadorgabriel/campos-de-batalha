import { FindAllPersonagemResponse } from '@/core/domain/personagem';
import { IPersonagem } from '@/core/domain/personagem/index.contract';

import { IHttpClient } from '@/core/infra/http/index.types';

export class PersonagemFindAllUseCase implements IPersonagem {
  constructor(private readonly httpClient: IHttpClient) {}

  async findAll(): Promise<FindAllPersonagemResponse> {
    try {
      const response = await this.httpClient.request<FindAllPersonagemResponse>({
        method: 'get',
        url: `/personagem`,
      });

      return response.data.data;
    } catch (error: any) {
      if (error.statusCode === 401) {
        throw new Error('Credenciais inválidas');
      }

      throw new Error('Falha ao buscar personagem.');
    }
  }
}
