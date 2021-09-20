import styles from './Item.module.scss'
import { useDrag } from 'react-dnd'
import { removeItem } from '../../redux/actions/categoriesActionCreator'

export const Item = ({id, imageUrl, kcals, name, type, timestamp ,dispatch}) => {

    const [{ isDragging }, drag] = useDrag({
        item: { 
            obj: {id, name, imageUrl, kcals, timestamp}, 
            category: type 
        },
        type: 'item',
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0.4 : 1

    const removeItemHandler = () => {
        dispatch(removeItem(timestamp, type))
    } 

    return (
        <div 
            className={styles.item}
            ref={drag}
            style={{ opacity }}
        >
            <div className={styles.wrapper}>
                <img src={imageUrl} alt={name} />
            </div>
            <button 
                className={styles.btn}
                onClick={removeItemHandler}
            >&times;</button>
            <div className={styles.info}>
                <p>{kcals} kcals</p>
                <span>{name}</span>
                <span> (#{id})</span>
            </div>
        </div>
    )
}