import styled from 'styled-components/native'

type TextProps = {
  color: string
  fontFamily: string
  fontSize: number
}

export const Text = styled.Text<TextProps>`
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}px;
`
