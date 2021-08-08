import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../../styles/globals.css';
import { Provider as AuthProvider } from 'next-auth/client';

// next auth sets the session to be shared by the entire app
function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider session={pageProps.session}>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</AuthProvider>
	);
}

export default MyApp;
