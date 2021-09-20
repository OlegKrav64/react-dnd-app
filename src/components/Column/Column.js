import styles from './Column.module.scss'
import { useDrop } from 'react-dnd';
import { ColumnHeader } from './ColumnHeader/ColumnHeader';
import { Button } from '../Button/Button';
import plusImg from '../../assets/img/plus.svg'
import { useDispatch, useSelector } from 'react-redux';
import { setModalListVisibility } from '../../redux/actions/modalListActionCreator';
import { getItemsByType } from '../../redux/selectors/categoriesSelector';
import { Item } from '../Item/Item'
import { addItem, removeItem } from '../../redux/actions/categoriesActionCreator';

export const Column = ({title, type}) => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: 'item',
        drop: (data) => changeItemCategory(data),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    const dispatch = useDispatch()

    const items = useSelector(state => getItemsByType(state, type))

    const changeModalVisibility = () => {
        dispatch(setModalListVisibility(true, type))
    }

    const changeItemCategory = (data) => {
        dispatch(removeItem(data.obj.timestamp, data.category))
        dispatch(addItem(data.obj, type))
    }

    const isActive = canDrop && isOver;
    let backgroundColor = '#fff';
    if (isActive) {
        backgroundColor = 'rgba(157, 209, 237, 0.1)';
    }
    else if (canDrop) {
        backgroundColor = 'rgba(164, 237, 157, 0.1)';
    }

    return (
        <div 
            className={styles.column}
            style={{backgroundColor}}
        >
            <ColumnHeader title={title} />
            <div
                className={styles.list}
                ref={drop}
            >
                {
                    items.map(item => <Item 
                        {...item} 
                        key={`${item.id}__${item.timestamp}`} 
                        type={type} 
                        dispatch={dispatch} 
                    />)
                }
            </div>
            <div className={styles.btn}>
                <Button 
                    imgUrl={plusImg} 
                    text='Add alternative' 
                    clickHandler={changeModalVisibility} 
                />
            </div>
        </div>
    )
}