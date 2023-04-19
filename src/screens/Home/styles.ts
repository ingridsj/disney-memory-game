import { GestureHandlerRootView } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled(GestureHandlerRootView)`
	flex: 1;
	align-items: center;
	justify-content: flex-start;
	background-color: ${({ theme }) => theme.colors.background};
`

export const Board = styled.ScrollView<{ size: number }>`
	width: 75%;
	align-self: center;
	height: ${({ size }) => size * 100}px;
	align-content: center;
	padding-top: 20px;
`

export const Header = styled.View`
	margin-top: 20px;
	justify-content: center;
	align-items: center;
  padding-top: 20px;
`

export const HeaderButtons = styled.View`
	flex-direction: row;
	justify-content: space-around;
	width: 80%;
	margin-top: 20px;
`

export const ContainerMemoryCard = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Footer = styled.View`
	flex-direction: row;
	align-items: center;
	width: 85%;
	justify-content: space-between;
`
