export type Theme = {
	colors: {
		background: string
		pink: string
		purple: string
		red: string
		gray: string
	},
	fonts: {
		princessSofia: string
	}
}
export const themeLight: Theme = {
  colors: {
		background: '#FFFFFF',
		pink: '#E4CBCB',
		purple: '#75728D',
		red: '#F18B8B',
		gray: '#F1F1F1',
  },
	fonts: {
		princessSofia: 'PrincessSofia_400Regular'
	}
};

export const themeDark: Theme = {
  colors: {
		background: '#333333',
		pink: '#EEF2F1',
		purple: '#C40909',
		red: '#F18B8B',
		gray: '#F1F1F1',
	},
	fonts: {
		princessSofia: 'PrincessSofia_400Regular'
	}
};
