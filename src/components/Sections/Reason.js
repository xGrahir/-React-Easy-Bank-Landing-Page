import styles from './Reasons.module.css'

const Reason = ({reason}) => {
	return(<div className={`${styles.reason} ${styles['reasons-style-text']}`}>
		<div className={`${styles[`${reason.icon}`]} ${styles.icon}`}></div>
		<h3>{reason.title}</h3>
		<p>
			{reason.info}
		</p>
	</div>)
}

export default Reason
