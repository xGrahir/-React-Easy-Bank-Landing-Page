import styles from './SectionTitle.module.css'

const SectionTitle = (props) => {
    return <h2 className={styles['section-title']}>{props.children}</h2>
}

export default SectionTitle