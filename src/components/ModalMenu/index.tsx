import React, { useContext } from 'react';
import { View } from 'react-native';

import Button from 'components/Button';
import Label from 'components/Label';
import Modal from 'components/Modal';
import { useGame } from 'hooks/game';
import { ThemeContext } from 'styled-components';

import * as S from './styles'

type ModalMenuProps = {
  open: boolean
  setOpen: (value: boolean) => void
  handleClearInterval: () => void
  shuffleImages: () => void
}

const ModalMenu = ({ open, setOpen, handleClearInterval, shuffleImages }: ModalMenuProps) => {
  const { setSize, time, defeats, setDefeats } = useGame()
  const { colors } = useContext(ThemeContext)
  
  function handlePress(size: number) {
    const emptyTime = '00:00'
    if(time !== emptyTime) {
      setDefeats(defeats + 1)
    }

    setSize(size)
    shuffleImages()
    handleClearInterval()
    setOpen(false)
  }

  function renderButtons(sizes: number[]) {
    return sizes.map(s => (
        <Button key={s} backgroundColor={colors.primary} onPress={() => handlePress(s)}>
          <Label 
            text={s.toString()} 
            color={colors.secondary}
            fontSize={18}
          />
        </Button>
      ))
  }

  return (
    <Modal open={open} onClosed={() => setOpen(false)}> 
      <S.Container>
        <View>
          <Label text='Tamanhos:' color={colors.secondary} fontSize={32} />
        </View>
        {renderButtons([ 3, 6, 9 ])}
      </S.Container>
    </Modal>
  )
}

export default ModalMenu;