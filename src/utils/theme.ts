export type Theme = {
	colors: {
		background: string
		primary: string
		secondary: string
		tertiary: string
		quaternary: string
	},
	fonts: {
		princessSofia: string
	}
}
export const themeLight: Theme = {
  colors: {
		background: '#FFFFFF',
		primary: '#E4CBCB',
		secondary: '#75728D',
		tertiary: '#F18B8B',
		quaternary: '#F1F1F1',
  },
	fonts: {
		princessSofia: 'PrincessSofia_400Regular'
	}
};

export const themeDark: Theme = {
  colors: {
		background: '#333333',
		primary: '#EEF2F1',
		secondary: '#C40909',
		tertiary: '#F18B8B',
		quaternary: '#F1F1F1',
	},
	fonts: {
		princessSofia: 'PrincessSofia_400Regular'
	}
};
