import React from 'react';
import { ImageSourcePropType, TouchableOpacityProps } from 'react-native';

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
} from 'assets/export'

import * as S from './styles'

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

type MemoryCardProps =  TouchableOpacityProps & {
	princessName: keyof typeof Princess
	selected: boolean
	visible: boolean
}

const MemoryCard = ({ princessName, selected, visible, ...rest }: MemoryCardProps) => {
	return (
		<S.Container {...rest} selected={selected} visible={visible}>
			{(selected || visible) && (
				<S.Avatar
					source={PRINCESS_IMAGE[princessName]}
				/>
			)}
		</S.Container>
	)
}

export default MemoryCard;