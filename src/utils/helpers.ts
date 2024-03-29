import { type ImageSourcePropType } from 'react-native'
import {
  adormecida,
  bela,
  branca,
  cinderela,
  merida,
  mulan,
  sereia,
  sininho,
  tiana,
  cruella,
  evilQueen,
  madamMedusa,
  madamMin,
  malevolent,
  motherGothel,
  queenHearts,
  stepmother,
  yzma
} from 'assets/export'

export enum Princess {
  tiana = 'tiana',
  adormecida = 'adormecida',
  bela = 'bela',
  branca = 'branca',
  cinderela = 'cinderela',
  merida = 'merida',
  mulan = 'mulan',
  sereia = 'sereia',
  sininho = 'sininho',
}

export enum Villains {
  cruella = 'cruella',
  motherGothel = 'motherGothel',
  evilQueen = 'evilQueen',
  queenHearts = 'queenHearts',
  malevolent = 'malevolent',
  madamMin = 'madamMin',
  stepmother = 'stepmother',
  yzma = 'yzma',
  madamMedusa = 'madamMedusa',
}

export const IMAGES: Record<string, ImageSourcePropType> = {
  adormecida,
  bela,
  branca,
  cinderela,
  merida,
  mulan,
  sereia,
  sininho,
  tiana,
  cruella,
  evilQueen,
  madamMedusa,
  madamMin,
  malevolent,
  motherGothel,
  queenHearts,
  stepmother,
  yzma
}

export const COLORS = {
  adormecida: '#EFCA7A',
  bela: '#F5EBAE',
  branca: '#F5A8AD',
  cinderela: '#C0DEF2',
  merida: '#F9A094',
  mulan: '#8E6E7A',
  sereia: '#9E9AB3',
  sininho: '#97B192',
  tiana: '#CAD1A5',
  cruella: '#CDC7C7',
  evilQueen: '#000000',
  madamMedusa: '#F7D0D3',
  madamMin: '#F4CAE0',
  malevolent: '#B7C6A5',
  motherGothel: '#F6CBB0',
  queenHearts: '#F7C694',
  stepmother: '#DCBEBB',
  yzma: '#B4AACD'
}
