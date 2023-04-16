import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components/native';
import { useFonts, PrincessSofia_400Regular} from '@expo-google-fonts/princess-sofia';
import { GameProvider } from 'hooks/game';

import Home from 'screens/Home';

import { themeLight, themeDark, Theme } from 'utils/theme';

export default function App() {
  const [ theme, setTheme ] = useState<Theme>(themeLight)

  function toggleTheme() {
    setTheme(currentTheme => currentTheme.title === 'light' ? themeDark : themeLight)
  }

  let [fontsLoaded] = useFonts({
		PrincessSofia_400Regular,
	});

	if (!fontsLoaded) {
		return null;
	}

  return (
    <GameProvider>
      <ThemeProvider theme={theme}>
        <Home toggleTheme={toggleTheme}/>
      </ThemeProvider>
    </GameProvider>
  );
}

