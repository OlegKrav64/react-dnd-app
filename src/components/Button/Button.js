import styles from './Button.module.scss'

export const Button = ({imgUrl, text, clickHandler}) => {
    return (
        <button 
            className={styles.button}
            onClick={clickHandler}
        >
            { imgUrl &&
                <img src={imgUrl} alt={text} />
            }
            <p>{text}</p>
        </button>
    )
}