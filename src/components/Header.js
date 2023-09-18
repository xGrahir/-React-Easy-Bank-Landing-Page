import styles from './Header.module.css'
import Button from './utilities/Button'
import Wrapper from './utilities/Wrapper'

const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles['intro-mobile']}>
					<div className={styles.mockups}></div>
				</div>

				<div className={styles['header-text']}>
					<h1>Next generation digital banking</h1>
					<p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting,, investing and much more.</p>
					<Button>Request Invite</Button>
				</div>
			</header>
		</>
	)
}

export default Header
