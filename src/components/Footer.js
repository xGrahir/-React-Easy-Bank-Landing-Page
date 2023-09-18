import styles from './Footer.module.css'
import Wrapper from './utilities/Wrapper'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Wrapper>
				<div className={styles.wrapper}>
					<div className={styles.logo}></div>
				</div>
			</Wrapper>
		</footer>
	)
}

export default Footer
