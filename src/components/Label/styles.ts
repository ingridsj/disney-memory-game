import styled from 'styled-components/native';

type TextProps = {
  color: string
  fontFamily: string
}

export const Text = styled.Text<TextProps>`
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => fontFamily};;
`
