import React from 'react';
import Colors from '../../utils/colors';

import * as S from './styles';

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