import styled from 'styled-components/native';

type TextProps = {
  color: string
}

export const Text = styled.Text<TextProps>`
  color: ${({ color }) => color};
`
