import styled, { css } from 'styled-components/native';
import { Theme } from '../../utils/theme';

type Memory = {
	selected: boolean
	visible: boolean
	theme: Theme
}

export const Avatar = styled.Image`
	width: 70px;
	height: 70px;
`

export const Container = styled.TouchableOpacity<Memory>`
	background-color: ${({ theme }) => theme.colors.gray};
	border-radius: 50px;

	align-items: center;
	justify-content: center;

	width: 75px;
	height: 75px;

	margin-bottom: 20px;
	margin-right: 6px;

	${({ selected }) => selected && css`
		background-color: ${({ theme }) => theme.colors.red};
	`}

	${({ visible }) => visible && css`
		background-color: ${({ theme }) => theme.colors.pink};
	`}
`;