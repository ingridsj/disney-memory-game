import styled from 'styled-components/native'
import { type Theme } from '../../utils/theme'

type Memory = {
  selected: boolean
  visible: boolean
  backgroundColor: string
  theme: Theme
}

const getBackgroundColor = (props: Memory) => {
  if (props.selected || props.visible) {
    return props.backgroundColor
  }

  return props.theme.colors.quaternary
}

export const Avatar = styled.Image`
	width: 70px;
	height: 70px;
`

export const Container = styled.TouchableOpacity<Memory>`
	background-color: ${props => getBackgroundColor(props)};
	border-radius: 50px;

	align-items: center;
	justify-content: center;

	width: 75px;
	height: 75px;

	margin-bottom: 20px;
	margin-right: 6px;
`
