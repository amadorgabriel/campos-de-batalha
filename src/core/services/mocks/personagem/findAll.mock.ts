import { FindAllPersonagemResponse } from '@/core/domain/personagem';

export function findAllPersonagensMock(): FindAllPersonagemResponse {
  return [
    {
      codinome: 'Homem-Aranha',
      alteregos: ['Peter Benjamin Parker (Earth-1610) (v.01)'],
      idColecao: 14,
      idTipoPersonagem: 1,
      custo: 2,
      ataque: 2,
      vida: 7,
      idSelo: 8,
      habilidades: [
        {
          titulo: 'Teia Na Cara',
          descricao:
            'Quando Homem-Aranha entra em campo de batalha, até dois inimigos alvo ficam Imobilizados.',
          idsChaves: null,
          idsTipos: [1],
        },
        {
          titulo: 'Combo Parker',
          descricao:
            'Sempre que atacar um inimigo, Homem-Aranha recebe +X/+0 até o final da fase, sendo X igual a quantidade de marcadores de condições negativas que estiverem sobre aquele inimigo.',
          idsChaves: null,
          idsTipos: [1],
        },
      ],
      idsArquetipos: null,
    },
  ];
}
