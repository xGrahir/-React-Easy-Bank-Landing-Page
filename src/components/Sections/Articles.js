import styles from './Articles.module.css'
import Section from '../utilities/Section'
import Wrapper from '../utilities/Wrapper'
import SectionTitle from '../utilities/SectionTitle'
import currencyImage from '../../assets/image-currency.jpg'
import restaurantImage from '../../assets/image-restaurant.jpg'
import planeImage from '../../assets/image-plane.jpg'
import confettiImage from '../../assets/image-confetti.jpg'
import Article from './Article'

const DUMMY_ARTICLES = [
	{
		author: 'Claire Robinson',
		title: 'Receive money in any currency with no fees',
		short:
			"The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
		image: currencyImage
	},
	{
		author: 'Wilson Hutton',
		title: 'Treat yourself without worrying about money',
		short:
			'Our simple budgeting feature allows you to separate out your spending and set realistics limits eachmonth. That means you...',
		image: restaurantImage
	},
	{
		author: 'Wilson Hutton',
		title: 'Take your Easybank card wherever you go',
		short:
			'We want you to enjoy your travels. This is why we don\'t charge any fees on purchases while you\'re abroad. We\'ll even show you...',
		image: planeImage
	},
	{
		author: 'Claire Robinson',
		title: 'Our invite-only Beat accounst are now live!',
		short:
			"After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy torequest an invite through the site...",
		image: confettiImage
	},
]

const Articles = () => {


	const articles = DUMMY_ARTICLES.map(article => <Article article={article}/> )

	return (
		<Section className={styles.articles} id={'blog'}>
			<Wrapper>
				<div className={styles.overlay}>
					<SectionTitle>Latest Articles</SectionTitle>
					<div className={styles.cards}>
						{articles}
					</div>
				</div>
			</Wrapper>
		</Section>
	)
}

export default Articles
