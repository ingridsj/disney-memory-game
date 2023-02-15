import React from 'react';
import { ImageSourcePropType } from 'react-native';

import {
	adormecida,
	bela,
	branca,
	cinderela,
	merida,
	mulan,
	sereia,
	sininho,
	tiana 
} from '../../assets/export'

import * as S from './styles'

enum Princess {
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

const PRINCESS_IMAGE: {[k: string]: ImageSourcePropType} = {
	adormecida,
	bela,
	branca,
	cinderela,
	merida,
	mulan,
	sereia,
	sininho,
	tiana
}

type MemoryCardProps = {
	princessName: keyof typeof Princess
	selected: boolean
	visible: boolean
}

const MemoryCard = ({ princessName, selected, visible }: MemoryCardProps) => {
	return (
		<S.Container selected={selected} visible={visible}>
			<S.Avatar
				source={PRINCESS_IMAGE[princessName]}
				selected={selected}
				visible={visible}
			/>
		</S.Container>
	)
}

export default MemoryCard;