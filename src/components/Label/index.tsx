import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

type LabelProps = {
  text: string
  color: string
  fontFamily: string
}

const Label = ({ text, color, fontFamily}: LabelProps) => {
  return (
		<View>
			<S.Text color={color} fontFamily={fontFamily}>{text}</S.Text>
		</View>
  )
}

export default Label;