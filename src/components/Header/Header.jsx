// import React, { useState } from 'react';
import HireMeButton from '../Button/HireMeButton';
import dragon from '../../images/dragon.png';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__logoBox}>
					<img src={dragon} alt="dragon" className={styles.header__logo} />
				</div>
				<div className={styles.header__textBox}>
					<h1 className="heading-primary">
						<span className="heading-primary--main">
							Hi, my name is Mark Honsinger
						</span>
						<span className={`heading-primary--sub ${styles.test}`}>
							I'm the developer your team is looking for.
						</span>
					</h1>
					<HireMeButton />
				</div>
			</header>
		</>
	);
};

export default Header;
