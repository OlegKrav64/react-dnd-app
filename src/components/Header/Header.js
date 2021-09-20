import styles from './Header.module.scss'
import moreImg from '../../assets/img/more.svg'
import rightArrowImg from '../../assets/img/right-arrow.svg'
import { Button } from '../Button/Button'

export const Header = () => {
    return (
        <header className={styles.header}>
            <h2 className={styles.title}>Test</h2>
            <div className={styles.controls}>
                <button className={styles.more}>
                    <img src={moreImg} alt="More" />
                </button>
                <Button imgUrl={rightArrowImg} text='Details' />
            </div>
        </header>
    )
}