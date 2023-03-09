import React from 'react';
import Button from 'components/Button';
import Label from 'components/Label';
import Modal from 'components/Modal';
import { theme } from 'utils/theme';

import * as S from './styles'
import { useGame } from 'hooks/game';


type ModalResultProps = {
  open: boolean
  setOpen: (value: boolean) => void
  setOpenMenu: (value: boolean) => void
  handleClearInterval: () => void
  shuffleImages: () => void
}

const ModalResult = ({ open, setOpen, setOpenMenu, handleClearInterval, shuffleImages }: ModalResultProps) => {
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
        <Label color={theme.colors.purple} fontSize={18} text={'Tempo: ' + time}/>
        <Label color={theme.colors.purple} fontSize={18} text={'Movimentos: ' + movements} />
        <Button backgroundColor='purple' onPress={() => handleNew()}>
          <Label text='Novo' color={theme.colors.pink} fontSize={18} />
        </Button>
        <Button backgroundColor='pink' onPress={() => handleContinue()}>
          <Label text='Continuar' color={theme.colors.purple} fontSize={18} />
        </Button>
      </S.Container>
  </Modal>
  )
}

export default ModalResult;