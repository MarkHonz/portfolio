import React, { useState } from 'react';
import 'normalize.css';
import Header from './components/Header/Header';
import './styles/global.scss';

const App = () => {
	const [isDark, setDark] = useState(true);
	const dayNightModeSwitcher = () => {};
	return (
		<>
			<Header />
		</>
	);
};

export default App;
