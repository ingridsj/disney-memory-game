import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

type LabelProps = {
  text: string
  color: string
}

const Label = ({ text, color}: LabelProps) => {
  return (
		<View>
			<S.Text color={color}>{text}</S.Text>
		</View>
  )
}

export default Label;