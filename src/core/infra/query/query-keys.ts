export const queryKeys = {
  personagem: {
    all: ['personagem'] as const,
    lists: () => [...queryKeys.personagem.all, 'list' as const],
  },
} as const;
