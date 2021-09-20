import styles from './InfoBar.module.scss'
import checked from '../../assets/img/checked.svg'

export const InfoBar = () => {
    return (
        <div className={styles.infoBar}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <p className={styles.title}>Target kcals</p>
                    <p className={styles.value}>4000</p>
                </div>
                <div className={styles.column}>
                    <p className={styles.title}>Macro split</p>
                    <p className={styles.value}>40c/40p/20f</p>
                </div>
                <div className={styles.column}>
                    <p className={styles.title}>Status</p>
                    <div className={styles.bottomSide}>
                        <img src={checked} alt='Done' />
                        <p className={styles.value}>Plan is visible</p>
                    </div>
                </div>
                <div className={styles.column}>
                    <p className={styles.title}>Created</p>
                    <p className={styles.value}>26 apr. 2019</p>
                </div>
            </div>
        </div>
    )
}