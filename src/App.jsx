// import React, { useState } from 'react';
import 'normalize.css';
import Header from './components/Header/Header';
// import Login from './components/Login/Login';
import Projects from './components/Projects/Projects';

const App = () => {
	return (
		<>
			<main>
				<Header />
				<Projects />
				{/* <Login /> */}
			</main>
		</>
	);
};

export default App;
