import useLocalStorage from 'use-local-storage';
import styles from './Login.module.scss';
import {
	FaSun,
	FaMoon,
	FaGoogle,
	FaFacebookSquare,
	FaLinkedin,
	FaTwitterSquare,
	FaApple,
	FaToggleOn,
} from 'react-icons/fa';

const Login = () => {
	const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

	const switchTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
	};

	return (
		<>
			<section className={styles.app} data-theme={theme}>
				<div className={styles.login}>
					<h2 className={styles.login__h1}>Login</h2>
					<div className={styles.container}>
						<div className={styles.top}>
							<FaGoogle className={styles.top__icon} />
							<FaFacebookSquare className={styles.top__icon} />
							<FaLinkedin className={styles.top__icon} />
							<FaTwitterSquare className={styles.top__icon} />
							<FaApple className={styles.top__icon} />
						</div>
						<p className={styles.divider}>
							<span className={styles.divider__text}>Or</span>
						</p>
						<form className={styles.form} action="">
							<label className={styles.form__label} htmlFor="">
								Email
							</label>
							<input
								className={styles.form__input}
								type="email"
								name="email"
								id="email"
								placeholder="Enter your email"
							/>
							<label className={styles.form__label} htmlFor="">
								Password
							</label>
							<input
								className={styles.form__input}
								type="password"
								name="password"
								id="password"
								placeholder="Enter your password"
							/>
							<div className={styles.remember}>
								<input
									className={styles.remember__input}
									type="checkbox"
									name="rememberId"
									id="rememberId"
									checked="checked"
								/>
								<p className={styles.remember__text}>Remember Me</p>
							</div>
							<button className={styles.loginButton}>Login</button>
						</form>
						<div className={styles.bottom}>
							<p>Forgot your password ?</p>
							<a href="/" className={styles.a}>
								Reset Password
							</a>
						</div>
						<p className={styles.create}>Create Account</p>
					</div>
					<div className={styles.themeToggle}>
						<p className={styles.themeToggle__text}>Light Theme</p>
						<div className={styles.themeToggle__row}>
							<FaMoon className={styles.themeToggle__faMoon} />
							<FaToggleOn
								className={styles.themeToggle__switch}
								onClick={switchTheme}
							/>
							<FaSun className={styles.themeToggle__faSun} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
