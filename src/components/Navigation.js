import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom'

const Navigation = ({ activity, onClick }) => {
	const links = [
		{ name: 'Home', id: 1, to: '#home' },
		{ name: 'About', id: 2, to: '#about' },
		{ name: 'Contact', id: 3, to: '#contact' },
		{ name: 'Blog', id: 4, to: '#blog' },
		{ name: 'Carrers', id: 5, to: '#carrers' },
	]

	const closeMenuHandler = (e) => {
		const link = document.getElementById(e.target.textContent.toLowerCase())
		if(link) {
			link.scrollIntoView({ behavior: 'smooth' })
		}
		onClick()
	}

	const goToSectionHandler = (e) => {
		const link = document.getElementById(e.target.textContent.toLowerCase())
		if(link) {
			link.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const linksMobile = links.map(link => (
		<li key={link.id}>
			<Link to={link.to} onClick={closeMenuHandler}>
				{link.name}
			</Link>
		</li>
	))

	const linksDesktop = links.map(link => (
		<li key={link.id}>
			<Link to={link.to} onClick={goToSectionHandler}>{link.name}</Link>
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
