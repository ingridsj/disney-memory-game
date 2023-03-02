import React from 'react'
import { ThemeProvider } from 'styled-components/native';
import { useFonts, PrincessSofia_400Regular} from '@expo-google-fonts/princess-sofia';
import { AuthProvider } from 'hooks/game';

import { theme } from 'utils/theme';
import Home from 'screens/Home';

export default function App() {
  let [fontsLoaded] = useFonts({
		PrincessSofia_400Regular,
	});

	if (!fontsLoaded) {
		return null;
	}

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </AuthProvider>
  );
}

