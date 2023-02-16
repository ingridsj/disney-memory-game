import React from 'react';
import { theme } from '../../utils/theme';

import * as S from './styles';

const Colors = theme.colors 

type ButtonProps = {
	children: JSX.Element
	backgroundColor: keyof typeof Colors
}

const Button = ({ children, backgroundColor }: ButtonProps) => {
	return (
		<S.Container backgroundColor={backgroundColor}>
			{children}
		</S.Container>
	);
}

export default Button;