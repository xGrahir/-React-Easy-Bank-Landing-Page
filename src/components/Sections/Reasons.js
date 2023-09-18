import styles from './Reasons.module.css'
import Wrapper from '../utilities/Wrapper'
import Section from '../utilities/Section'
import SectionTitle from '../utilities/SectionTitle'

const Reasons = () => {
	return (
		<Section className={styles.reasons}>
			<Wrapper>
				<div className={`${styles['reasons-about']} ${styles['reasons-style-text']}`}>
					<SectionTitle>Why choose Easybank?</SectionTitle>
					<div className={styles['reasons-about-text']}>
						<p>We leverage Open Banking to turn your bank account into your financial hub.</p>
						<p>Control your finances like never before.</p>
					</div>
				</div>
				<div className={styles.wrapper}>
					<div className={`${styles.reason} ${styles['reasons-style-text']}`}>
						<div className={`${styles['icon-banking']} ${styles.icon}`}></div>
						<h3>Online Banking</h3>
						<p>
							Our modern web and mobile applications allow you to keep track of your finances wherever you are in the
							world.
						</p>
					</div>
					<div className={`${styles.reason} ${styles['reasons-style-text']}`}>
						<div className={`${styles['icon-budgeting']} ${styles.icon}`}></div>
						<h3>Simple Budgeting</h3>
						<p>
							See exactly where your money goes each month. Receive notifications when you're close to your hitting
							limits.
						</p>
					</div>
					<div className={`${styles.reason} ${styles['reasons-style-text']}`}>
						<div className={`${styles['icon-onboarding']} ${styles.icon}`}></div>
						<h3>Fast Onboarding</h3>
						<p>
							We don't do branches. Open your account in minutes online and start taking control of your finances right
							away.
						</p>
					</div>
					<div className={`${styles.reason} ${styles['reasons-style-text']}`}>
						<div className={`${styles['icon-online']} ${styles.icon}`}></div>
						<h3>Open API</h3>
						<p>
							Menage your savings, investments, pension, and much more from one account. Tracing your money has never
							been easier.
						</p>
					</div>
				</div>
			</Wrapper>
		</Section>
	)
}

export default Reasons
