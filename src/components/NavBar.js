import styles from './NavBar.module.css'
import Navigation from './Navigation'
import Button from './utilities/Button'
import {useState} from 'react'

const NavBar = () => {

    const [isActive, setActivity] = useState(false)

    const activateMenuHandler = () => {
        setActivity(prev => !prev)
    }

	return (
		<nav className={styles.bar}>
			<div className={styles.wrapper}>
				<div className={styles['logo-section']}>
					<div className={styles.logo}></div>
				</div>
				<Navigation activity={isActive} onClick={activateMenuHandler}/>
				<div className={styles.actions}>
					<button className={styles['navbar-burger']} onClick={activateMenuHandler}>
						<div className={`${styles['navbar-burger-icon']} ${isActive && styles['navbar-close-icon']}`}></div>
					</button>
					<Button className={styles['navbar-button']}>Request Invite</Button>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
