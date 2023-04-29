import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components/native'
import { useFonts, PrincessSofia_400Regular } from '@expo-google-fonts/princess-sofia'
import { GameProvider } from 'hooks/game'

import Home from 'screens/Home'

import { themeLight, themeDark, type Theme } from 'utils/theme'
import { StatusBar } from 'react-native'

export default function App () {
  const [ theme, setTheme ] = useState<Theme>(themeLight)

  function toggleTheme () {
    setTheme((currentTheme) =>
      currentTheme.title === 'light' ? themeDark : themeLight
    )
  }

  const [ fontsLoaded ] = useFonts({
    PrincessSofia_400Regular
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar
        barStyle={theme.title === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <GameProvider>
        <ThemeProvider theme={theme}>
          <Home toggleTheme={toggleTheme} />
        </ThemeProvider>
      </GameProvider>
    </>
  )
}
