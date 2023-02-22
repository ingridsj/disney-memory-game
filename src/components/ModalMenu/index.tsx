import React from 'react';
import { View } from 'react-native';
import { theme } from '../../utils/theme';
import Button from '../Button';
import Label from '../Label';
import Modal from '../Modal';

import * as S from './styles'

type ModalMenuProps = {
  open: boolean
  setOpen: (value: boolean) => void
}

const ModalMenu = ({ open, setOpen }: ModalMenuProps) => {
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
        <Button backgroundColor='pink'>
          <Label 
            text='3' 
            color={theme.colors.purple}
            fontSize={18}
          />
        </Button>
        <Button backgroundColor='pink'>
          <Label 
            text='6' 
            color={theme.colors.purple}
            fontSize={18}
          />
        </Button>
        <Button backgroundColor='pink'>
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