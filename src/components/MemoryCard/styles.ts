import styled, { css } from 'styled-components/native';
import { Theme } from '../../utils/theme';

type Memory = {
	selected: boolean
	visible: boolean
	theme: Theme
}

type AvatarType = {
	selected: boolean
	visible: boolean
}

export const Avatar = styled.Image<AvatarType>`
	width: 70px;
	height: 70px;

	display: none;

	${({ visible, selected }) => (visible || selected) && css`
		display: flex;
	`}
`

export const Container = styled.View<Memory>`
	background-color: ${({ theme }) => theme.colors.gray};
	border-radius: 50px;

	align-items: center;
	justify-content: center;

	width: 75px;
	height: 75px;

	${({ selected }) => selected && css`
		background-color: ${({ theme }) => theme.colors.red};
	`}

	${({ visible }) => visible && css`
		background-color: ${({ theme }) => theme.colors.pink};
	`}
`;