import React, { useEffect, useRef } from 'react'
import { Modalize, type ModalizeProps } from 'react-native-modalize'

type ModalProps = ModalizeProps & {
  children: JSX.Element
  open: boolean
}

const Modal = ({ children, open, ...props }: ModalProps) => {
  const modalizeRef = useRef<Modalize>()

  useEffect(() => {
    if (open) {
      modalizeRef.current?.open()
    } else {
      modalizeRef.current?.close()
    }
  }, [ open ])

  return (
		<Modalize
			{...props}
			ref={modalizeRef}
			childrenStyle={{ height: 300 }}
      adjustToContentHeight
		>
      {children}
		</Modalize>
  )
}

export default Modal
