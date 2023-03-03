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
}

const ModalResult = ({ open, setOpen, setOpenMenu, handleClearInterval }: ModalResultProps) => {
  const { movements, setMovements, time } = useGame()

  return (
    <Modal 
      open={open} 
      onClosed={() => {
        setOpen(false)
        setMovements(0)
        handleClearInterval()
      }}
      > 
    <S.Container>
      <Label color={theme.colors.purple} fontSize={40} text='Vitória!' />   
      <Label color={theme.colors.purple} fontSize={18} text={'Tempo: ' + time}/>
      <Label color={theme.colors.purple} fontSize={18} text={'Movimentos: ' + movements} />
      <Button
        backgroundColor='purple'
        onPress={() => {
        setOpen(false)
        setOpenMenu(true)
        }}
      >
      <Label text='Novo' color={theme.colors.pink} fontSize={18} />
      </Button>
    </S.Container>
  </Modal>
  )
}

export default ModalResult;