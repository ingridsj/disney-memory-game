import styled from 'styled-components/native';
import { theme } from '../../utils/theme';

const Colors = theme.colors 

type ContainerProps = {
	backgroundColor: keyof typeof Colors
}

export const Container = styled.View<ContainerProps>`
	background-color: ${({ backgroundColor }) => backgroundColor};
	width: 130px;
	height: 30px;
	border-radius: 30px;
	justify-content: center;
	align-items: center;
`;