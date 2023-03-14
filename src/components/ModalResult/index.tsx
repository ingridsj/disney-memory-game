import React from 'react';
import Lottie from 'lottie-react-native';
import Button from 'components/Button';
import Label from 'components/Label';
import Modal from 'components/Modal';
import { useGame } from 'hooks/game';

import { AnimationVictoryTrophy } from 'assets/export'
import * as S from './styles'
import { useTheme } from 'hooks/theme';


type ModalResultProps = {
  open: boolean
  setOpen: (value: boolean) => void
  setOpenMenu: (value: boolean) => void
  handleClearInterval: () => void
  shuffleImages: () => void
}

const ModalResult = ({ open, setOpen, setOpenMenu, handleClearInterval, shuffleImages }: ModalResultProps) => {
  const { theme } = useTheme()
  const { movements, setMovements, time } = useGame()

  function handleCloseModal() {
    setOpen(false)
    setMovements(0)
    handleClearInterval()
  }

  function handleNew() {
    setOpen(false)
    setOpenMenu(true)
  }

  function handleContinue() {
    setOpen(false)
    shuffleImages()
  }

  return (
    <Modal open={open} onClosed={() => handleCloseModal()} > 
      <S.Container>
        <Label color={theme.colors.purple} fontSize={40} text='Vitória!' />   
        <S.VictoryWrapper>
          <S.VictoryAnimation>
            <Lottie source={AnimationVictoryTrophy} autoPlay loop />
          </S.VictoryAnimation>
          <S.VictoryLabels>
            <Label color={theme.colors.purple} fontSize={18} text={'Tempo: ' + time}/>
            <Label color={theme.colors.purple} fontSize={18} text={'Movimentos: ' + movements} />
          </S.VictoryLabels>
        </S.VictoryWrapper>
        <S.VictoryButtons>
          <Button backgroundColor={theme.colors.purple} onPress={() => handleNew()}>
            <Label text='Novo' color={theme.colors.pink} fontSize={18} />
          </Button>
          <Button backgroundColor={theme.colors.pink} onPress={() => handleContinue()}>
            <Label text='Continuar' color={theme.colors.purple} fontSize={18} />
          </Button>
        </S.VictoryButtons>
      </S.Container>
  </Modal>
  )
}

export default ModalResult;