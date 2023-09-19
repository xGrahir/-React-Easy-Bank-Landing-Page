import styles from './Reasons.module.css'
import Wrapper from '../utilities/Wrapper'
import Section from '../utilities/Section'
import SectionTitle from '../utilities/SectionTitle'
import Reason from './Reason'

const REASONS = [
	{
		title: 'Online Banking',
		info: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
		icon: 'icon-banking',
	},
	{
		title: 'Simple Budgeting',
		info: 'See exactly where your money goes each month. Receive notifications when you\'re close to your hitting limits.',
		icon: 'icon-budgeting',
	},
	{
		title: 'Fast Onboarding',
		info: 'We don\'t do branches. Open your account in minutes online and start taking control of your finances right away.',
		icon: 'icon-onboarding',
	},
	{
		title: 'Open API',
		info: 'Menage your savings, investments, pension, and much more from one account. Tracing your money has never been easier.',
		icon: 'icon-api',
	},
]

const Reasons = () => {

	const reasons = REASONS.map(reason => <Reason reason={reason}/>)

	return (
		<Section className={styles.reasons} id={'about'}>
			<Wrapper>
				<div className={styles.overlay}>
					<div className={`${styles['reasons-about']} ${styles['reasons-style-text']}`}>
						<SectionTitle>Why choose Easybank?</SectionTitle>
						<div className={styles['reasons-about-text']}>
							<p>We leverage Open Banking to turn your bank account into your financial hub.</p>
							<p>Control your finances like never before.</p>
						</div>
					</div>
					<div className={styles.wrapper}>
						 {reasons}
					</div>
				</div>
			</Wrapper>
		</Section>
	)
}

export default Reasons
