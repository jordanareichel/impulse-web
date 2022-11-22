import '../styles/global.ts';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, Theme } from '../styles';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={Theme}>
			<Component {...pageProps} />
			<GlobalStyle />
		</ThemeProvider>
	);
};

export default App;
