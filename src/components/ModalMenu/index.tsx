import React from 'react';
import { View } from 'react-native';
import { theme } from 'utils/theme';

import Button from 'components/Button';
import Label from 'components/Label';
import Modal from 'components/Modal';
import * as S from './styles'
import { useGame } from 'hooks/game';

type ModalMenuProps = {
  open: boolean
  setOpen: (value: boolean) => void
  handleClearInterval: () => void
}

const ModalMenu = ({ open, setOpen, handleClearInterval }: ModalMenuProps) => {
  const { setSize, setTime } = useGame()

  return (
    <Modal open={open} onClosed={() => setOpen(false)}> 
      <S.Container>
        <View>
          <Label 
            text='Tamanhos:' 
            color={theme.colors.purple}
            fontSize={32}
          />
        </View>
        <Button backgroundColor='pink' 
        onPress={() => {
          setSize(3)
          setOpen(false)
          handleClearInterval()
        }}>
          <Label 
            text='3'
            color={theme.colors.purple}
            fontSize={18}
          />
        </Button>
        <Button backgroundColor='pink' 
        onPress={() => {
          setSize(6)
          setOpen(false)
          handleClearInterval()
        }}>
          <Label 
            text='6' 
            color={theme.colors.purple}
            fontSize={18}
          />
        </Button>
        <Button backgroundColor='pink' onPress={() => {
          setSize(9)
          setOpen(false)
          handleClearInterval()
        }}>
          <Label 
            text='9' 
            color={theme.colors.purple}
            fontSize={18}
          />
        </Button>
      </S.Container>
    </Modal>
  )
}

export default ModalMenu;