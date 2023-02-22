import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../utils/theme';
import Button from '../Button';
import Label from '../Label';
import Modal from '../Modal';

import * as S from './styles'


type ModalResultProps = {
  open: boolean
  setOpen: (value: boolean) => void
  setOpenMenu: (value: boolean) => void
}

const ModalResult = ({ open, setOpen, setOpenMenu }: ModalResultProps) => {
  return (
    <Modal 
      open={open} 
      onClosed={() => setOpen(false)}
      > 
    <S.Container>
      <Label color={theme.colors.purple} fontSize={40} text='Vitória!' />   
      <Label color={theme.colors.purple} fontSize={18} text='Tempo: 0:00' />
      <Label color={theme.colors.purple} fontSize={18} text='Movimentos: 6' />
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