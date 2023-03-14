import styled from 'styled-components/native';

type ContainerProps = {
	backgroundColor: string
}

export const Container = styled.TouchableOpacity<ContainerProps>`
	background-color: ${({ backgroundColor }) => backgroundColor};
	width: 130px;
	height: 30px;
	border-radius: 30px;
	justify-content: center;
	align-items: center;
`;