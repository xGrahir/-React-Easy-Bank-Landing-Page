import styles from './Articles.module.css'

const Article = ({article}) => {
	return (
		<div className={styles.card}>
			<img className={styles.image} src={article.image} alt='Banknotes Pounds' />
			<div className={styles['card-info']}>
				<p className={`${styles['card-info-author']} ${styles['card-info-margin']}`}>By {article.author}</p>
				<h4 className={`${styles['card-info-title']} ${styles['card-info-margin']}`}>
					{article.title}
				</h4>
				<p className={`${styles['card-info-short']} ${styles['card-info-margin']}`}>
					{article.short}
				</p>
			</div>
		</div>
	)
}

export default Article
