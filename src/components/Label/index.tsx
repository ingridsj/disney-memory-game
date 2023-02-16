import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

type LabelProps = {
  text: string
  color: string
  fontFamily: string
  fontSize?: number
}

const Label = ({ text, color, fontFamily, fontSize = 14 }: LabelProps) => {
  return (
		<View>
			<S.Text color={color} fontFamily={fontFamily} fontSize={fontSize}>
        {text}
      </S.Text>
		</View>
  )
}

export default Label;