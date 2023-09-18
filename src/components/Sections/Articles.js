import styles from './Articles.module.css'
import Section from '../utilities/Section'
import Wrapper from '../utilities/Wrapper'
import SectionTitle from '../utilities/SectionTitle'
import currencyImage from '../../assets/image-currency.jpg'
import restaurantImage from '../../assets/image-restaurant.jpg'
import planeImage from '../../assets/image-plane.jpg'
import confettiImage from '../../assets/image-confetti.jpg'

const Articles = () => {
	return (
		<Section className={styles.articles} id={'blog'}>
			<Wrapper>
				<SectionTitle>Latest Articles</SectionTitle>
				<div className={styles.cards}>
					<div className={styles.card}>
						<img className={styles.image} src={currencyImage} alt="Banknotes Pounds" />
						<div className={styles['card-info']}>
							<p className={`${styles['card-info-author']} ${styles['card-info-margin']}`}>By Claire Robinson</p>
							<h4 className={`${styles['card-info-title']} ${styles['card-info-margin']}`}>Receive money in any currency with no fees</h4>
							<p className={`${styles['card-info-short']} ${styles['card-info-margin']}`}>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single... </p>
						</div>
					</div>
					<div className={styles.card}>
						<img className={styles.image} src={restaurantImage} alt="Dishes with food on the table in restaurant" />
						<div className={styles['card-info']}>
							<p className={`${styles['card-info-author']} ${styles['card-info-margin']}`}>By Wilson Hutton</p>
							<h4 className={`${styles['card-info-title']} ${styles['card-info-margin']}`}>Treat yourself without worrying about money</h4>
							<p className={`${styles['card-info-short']} ${styles['card-info-margin']}`}>Our simple budgeting feature allows you to separate out your spending and set realistics limits each month. That means you...  </p>
						</div>
					</div>
					<div className={styles.card}>
						<img className={styles.image} src={planeImage} alt="Airplane's wing against the background of clouds" />
						<div className={styles['card-info']}>
							<p className={`${styles['card-info-author']} ${styles['card-info-margin']}`}>By Wilson Hutton</p>
							<h4 className={`${styles['card-info-title']} ${styles['card-info-margin']}`}>Take your Easybank card wherever you go</h4>
							<p className={`${styles['card-info-short']} ${styles['card-info-margin']}`}>We want you to enjoy  your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you... </p>
						</div>
					</div>
					<div className={styles.card}>
						<img className={styles.image} src={confettiImage} alt="Confetti on a blue background" />
						<div className={styles['card-info']}>
							<p className={`${styles['card-info-author']} ${styles['card-info-margin']}`}>By Claire Robinson</p>
							<h4 className={`${styles['card-info-title']} ${styles['card-info-margin']}`}>Our invite-only Beat accounst are now live!</h4>
							<p className={`${styles['card-info-short']} ${styles['card-info-margin']}`}>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...</p>
						</div>
					</div>
				</div>
			</Wrapper>
		</Section>
	)
}

export default Articles
