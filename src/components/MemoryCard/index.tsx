import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { COLORS, IMAGES, Princess, Villains } from 'utils/helpers';

import * as S from './styles'

type MemoryCardProps =  TouchableOpacityProps & {
	princessName: keyof typeof Princess | keyof typeof Villains
	selected: boolean
	visible: boolean
}

const MemoryCard = ({ princessName, selected, visible, ...rest }: MemoryCardProps) => {
	return (
		<S.Container {...rest} selected={selected} visible={visible} backgroundColor={COLORS[princessName]}>
			{(selected || visible) && (
				<S.Avatar
					source={IMAGES[princessName]}
				/>
			)}
		</S.Container>
	)
}

export default MemoryCard;