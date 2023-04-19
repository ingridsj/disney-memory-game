import React, { useContext } from 'react'

import Toggle from 'react-native-toggle-element'
import { AppleGood, AppleBad } from 'assets/export'

import Lottie from 'lottie-react-native'
import { ThemeContext } from 'styled-components/native'

type ToggleButtonArgs = {
  handleChangeTheme: () => void
  toggleValue: boolean
}

const ToggleButton = ({ toggleValue, handleChangeTheme }: ToggleButtonArgs) => {
  const { colors } = useContext(ThemeContext)

  return (
    <Toggle
      value={toggleValue}
      onPress={() => { handleChangeTheme() }}
      thumbButton={{ width: 40, height: 40 }}
      containerStyle={{ marginTop: 20, marginBottom: 20 }}
      thumbInActiveComponent={
        <Lottie
          source={AppleGood}
          autoPlay
          loop
          style={{ width: 70, height: 85, position: 'absolute', bottom: -5 }}
        />
      }
      thumbActiveComponent={
        <Lottie
          source={AppleBad}
          autoPlay
          loop
          style={{ width: 65, height: 70, position: 'absolute', bottom: -5 }}
        />
      }
      trackBar={{
        activeBackgroundColor: colors.quartenary,
        inActiveBackgroundColor: colors.secondary,
        width: 100,
        height: 30
      }}
    />
  )
}

export default ToggleButton
