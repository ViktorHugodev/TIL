import { useState } from 'react';
import { Provider } from 'react-redux';
import Cart from './components/Cart';
import { Catalag } from './components/Catalago';
import store from './store';
function App() {
	return (
		<Provider store={store}>
			<Catalag />
			<Cart />
		</Provider>
	);
}

export default App;
