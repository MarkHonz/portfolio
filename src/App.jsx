import React, { useState } from 'react';
import 'normalize.css';
import Header from './components/Header/Header';

const App = () => {
	const [isDark, setDark] = useState(true);
	const dayNightModeSwitcher = () => {};
	return (
		<>
			<Header className="" />
		</>
	);
};

export default App;
