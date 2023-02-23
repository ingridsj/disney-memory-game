import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { theme } from 'utils/theme';

import * as S from './styles';

const Colors = theme.colors 

type ButtonProps = TouchableOpacityProps & {
	children: JSX.Element
	backgroundColor: keyof typeof Colors
}

const Button = ({ children, backgroundColor, ...rest}: ButtonProps) => {
	return (
		<S.Container {...rest} backgroundColor={backgroundColor}>
			{children}
		</S.Container>
	);
}

export default Button;