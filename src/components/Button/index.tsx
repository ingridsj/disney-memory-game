import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type ButtonProps = TouchableOpacityProps & {
	children: JSX.Element
	backgroundColor: string
}

const Button = ({ children, backgroundColor, ...rest}: ButtonProps) => {
	return (
		<S.Container {...rest} backgroundColor={backgroundColor}>
			{children}
		</S.Container>
	);
}

export default Button;