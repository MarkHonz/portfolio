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
						<span className="heading-primary--main">
							Hi, my name is Mark Honsinger
						</span>
						<span className="heading-primary--sub">
							I'm the developer your team is looking for.
						</span>
					</h1>
					<a href="." className="btn btn--white btn--animated">
						Hire Me
					</a>
				</div>
			</header>
		</>
	);
};

export default Header;
