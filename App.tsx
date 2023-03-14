import React from 'react'
import { ThemeProvider } from 'styled-components/native';
import { useFonts, PrincessSofia_400Regular} from '@expo-google-fonts/princess-sofia';
import { GameProvider, useGame } from 'hooks/game';

import { ThemeProviderContext, useTheme } from 'hooks/theme';
import { themeLight, themeDark } from 'utils/theme';
import Home from 'screens/Home';

export default function App() {
  const { themeState } = useTheme()

  const themeProvider = themeState === 'light' ? themeDark : themeLight

  let [fontsLoaded] = useFonts({
		PrincessSofia_400Regular,
	});

	if (!fontsLoaded) {
		return null;
	}

  return (
    <GameProvider>
      <ThemeProviderContext>
        <ThemeProvider theme={themeProvider}>
          <Home />
        </ThemeProvider>
      </ThemeProviderContext>
    </GameProvider>
  );
}

