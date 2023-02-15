import styled, { css } from 'styled-components/native';

type Memory = {
	selected: boolean
	visible: boolean
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
	background-color: #F1F1F1;
	border-radius: 50px;

	align-items: center;
	justify-content: center;

	width: 75px;
	height: 75px;

	${({ selected }) => selected && css`
		background-color: #F18B8B;
	`}

	${({ visible }) => visible && css`
		background-color: #E4CBCB;
	`}
`;