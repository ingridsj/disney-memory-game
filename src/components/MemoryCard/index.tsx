import React from 'react'
import { type TouchableOpacityProps } from 'react-native'
import { COLORS, IMAGES, type Princess, type Villains } from 'utils/helpers'

import * as S from './styles'

type MemoryCardProps = TouchableOpacityProps & {
  character: keyof typeof Princess | keyof typeof Villains
  selected: boolean
  visible: boolean
}

const MemoryCard = ({ character, selected, visible, ...rest }: MemoryCardProps) => {
  return (
		<S.Container {...rest} selected={selected} visible={visible} backgroundColor={COLORS[character]}>
			{(selected || visible) && (
				<S.Avatar
					source={IMAGES[character]}
				/>
			)}
		</S.Container>
  )
}

export default MemoryCard
