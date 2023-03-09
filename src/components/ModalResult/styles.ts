import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 280px;
  padding: 24px;
`

export const VictoryWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
`

export const VictoryAnimation = styled.View`
  flex: 1;
  width: 50%;
  height: 140px;
`

export const VictoryLabels = styled.View`
	flex-direction: column;
	width: 50%;
	justify-content: space-evenly;
	align-items: center;
`

export const VictoryButtons = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  width: 85%;
`