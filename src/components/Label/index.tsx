import React from 'react';
import { View } from 'react-native';
import { theme } from 'utils/theme';

import * as S from './styles';

type LabelProps = {
  text: string | number
  color: string
  fontFamily?: string
  fontSize?: number
}

const Label = ({ text, color, fontFamily = theme.fonts.princessSofia, fontSize = 14 }: LabelProps) => {
  return (
		<View>
			<S.Text color={color} fontFamily={fontFamily} fontSize={fontSize}>
        {text}
      </S.Text>
		</View>
  )
}

export default Label;