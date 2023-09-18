import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom'

const Navigation = ({ activity, onClick }) => {
	const links = [
		{ name: 'Home', id: 1 },
		{ name: 'About', id: 2 },
		{ name: 'Contact', id: 3 },
		{ name: 'Blog', id: 4 },
		{ name: 'Carrers', id: 5 },
	]

	const closeMenuHandler = () => {
		onClick()
	}

	const linksMobile = links.map(link => (
		<li key={link.id}>
			<Link onClick={closeMenuHandler}>{link.name}</Link>
		</li>
	))

	const linksDesktop= links.map(link => (
		<li key={link.id}>
			<Link>{link.name}</Link>
		</li>
	))

	const shadowElement = document.getElementById('shadow')
	const mobileMenu = document.getElementById('menu')
	const menu = createPortal(
		<div className={`${styles['nav-mobile']} ${activity && styles.active}`}>
			<ul className={`${styles.navigation} ${styles['navlist-mobile']}`}>{linksMobile}</ul>
		</div>,
		mobileMenu
	)
	const shadow = createPortal(
		<div onClick={closeMenuHandler} className={`${styles['nav-shadow']} ${activity && styles['active-shadow']}`}></div>,
		shadowElement
	)

	return (
		<>
			{shadow}
			{menu}
			<div className={styles['nav-desktop']}>
				<ul className={`${styles.navigation} ${styles['navlist-desktop']}`}>{linksDesktop}</ul>
			</div>
		</>
	)
}

export default Navigation
