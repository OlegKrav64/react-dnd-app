import styles from './ColumnHeader.module.scss'

export const ColumnHeader = ({title}) => {
    return (
        <div className={styles.columnHeader}>
            <h4>{title}</h4>
            <div className={styles.bottomSide}>
                <span className={styles.value}>927 kcals</span>
                <span className={styles.split}>40c/40p/20f</span>
            </div>
        </div>
    )
}