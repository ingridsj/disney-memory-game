import React from 'react';
import { View } from 'react-native';

import Button from 'components/Button';
import Label from 'components/Label';
import Modal from 'components/Modal';
import * as S from './styles'
import { useGame } from 'hooks/game';
import { useTheme } from 'hooks/theme';

type ModalMenuProps = {
  open: boolean
  setOpen: (value: boolean) => void
  handleClearInterval: () => void
  shuffleImages: () => void
}

const ModalMenu = ({ open, setOpen, handleClearInterval, shuffleImages }: ModalMenuProps) => {
  const { setSize, time, defeats, setDefeats } = useGame()
  const { theme } = useTheme()
  
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
        <Button key={s} backgroundColor={theme.colors.pink} onPress={() => handlePress(s)}>
          <Label 
            text={s.toString()} 
            color={theme.colors.purple}
            fontSize={18}
          />
        </Button>
      ))
  }

  return (
    <Modal open={open} onClosed={() => setOpen(false)}> 
      <S.Container>
        <View>
          <Label text='Tamanhos:' color={theme.colors.purple} fontSize={32} />
        </View>
        {renderButtons([ 3, 6, 9 ])}
      </S.Container>
    </Modal>
  )
}

export default ModalMenu;