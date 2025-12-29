import { queryKeys } from '@/core/infra/query/query-keys';
import { HttpClientFactory } from '@/core/infra/http/http-client-factory';

import { useQuery } from '@tanstack/react-query';
import { PersonagemModel } from '@/core/domain/personagem';
import { PersonagemFindAllUseCase } from './findAll.usecase';
import { findAllPersonagensMock } from '../../mocks/personagem/findAll.mock';

// const httpClient = HttpClientFactory.create();

export function useFindAllPersonagens() {
  const mockClient = HttpClientFactory.createMock();

  mockClient.setMockResponse('/personagem', 'get', {
    statusCode: 200,
    data: { data: findAllPersonagensMock(), message: 'Personagens mockado' },
  });

  const personagemFindAllUseCase = new PersonagemFindAllUseCase(mockClient);

  return useQuery<PersonagemModel[]>({
    queryKey: queryKeys.personagem.lists(),
    queryFn: () => personagemFindAllUseCase.findAll(),
    staleTime: 5 * 60 * 1000,
  });
}
