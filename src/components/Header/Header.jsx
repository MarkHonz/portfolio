import React, { useState } from 'react';
import dragon from '../../images/dragon.png';
import './Header.module.scss';

const Header = () => {
	return (
		<>
			<header className="header">
				<div className="header__logo-box">
					<img src={dragon} alt="dragon" className="header__logo" />
				</div>
				<div className="header__text-box">
					<h1 className="heading-primary">
						<span className="heading-primary--main">Outdoors</span>
						<span className="heading-primary--sub">is where life happens</span>
					</h1>
					<a href="#" className="btn btn--white btn--animated">
						discover our tours
					</a>
				</div>
			</header>
		</>
	);
};

export default Header;
