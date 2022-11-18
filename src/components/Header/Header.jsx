// import React, { useState } from 'react';
import HireMeButton from '../Button/HireMeButton';
import mark from '../../assets/images/mark.png';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__textBox}>
					<h1 className="heading-primary">
						<span className="heading-primary--main">
							Hi, my name is Mark Honsinger
						</span>
						<span className={`heading-primary--sub ${styles.test}`}>
							I'm the developer your team is looking for.
						</span>
					</h1>
				</div>
				<div className={styles.header__logoBox}>
					<img src={mark} alt="profile pic" className={styles.header__logo} />
				</div>
				<HireMeButton />
			</header>
		</>
	);
};

export default Header;
