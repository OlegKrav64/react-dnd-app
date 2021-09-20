import { addItem } from '../../../redux/actions/categoriesActionCreator'
import { Button } from '../../Button/Button'
import styles from './ModalListItem.module.scss'

export const ModalListItem = ({name, imageUrl, kcals, id, activeCategory, dispatch}) => {

    const addItemToCategory = () => {
        const obj = {id, name, imageUrl, kcals, timestamp: Date.now()}
        dispatch(addItem(obj, activeCategory))
    }

    return (
        <li className={styles.item}>
            <div className={styles.item__info}>
                <div className={styles.img}>
                    <img src={imageUrl} alt={name} />
                </div>
                <p>{name}</p>
            </div>
            <Button 
                text='Select' 
                clickHandler={addItemToCategory} 
            />
        </li>
    )
}