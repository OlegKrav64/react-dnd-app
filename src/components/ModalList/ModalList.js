import { useDispatch, useSelector } from 'react-redux'
import styles from './ModalList.module.scss'
import { ModalListItem } from './ModalListItem/ModalListItem'
import { getItems } from '../../redux/selectors/mealsSelector'
import { setModalListVisibility } from '../../redux/actions/modalListActionCreator'
import { getModalListActiveCategory } from '../../redux/selectors/modalListSelector'
import { useEffect, useRef } from 'react'

export const ModalList = () => {
    const {isLoaded, items} = useSelector(getItems)
    const activeCategory = useSelector(getModalListActiveCategory)
    
    const dispatch = useDispatch()

    const modalRef = useRef(null)

    const changeModalVisibility = () => {
        dispatch(setModalListVisibility(false, null))
    }

    const handleClickOutside = e => {
        const path = e.path || (e.composedPath && e.composedPath())
        if(!path.includes(modalRef.current)) {
            dispatch(setModalListVisibility(false, null))
        }
    }

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside)
        return () => {
            window.removeEventListener('mousedown', handleClickOutside)
        }
        //eslint-disable-next-line
    }, [])

    return (
        <div className={styles.overlay}>
            <div 
                className={styles.modalList}
                ref={modalRef}
            >
                <div className={styles.topSide}>
                    <h3>Recipes</h3>
                    <button
                        onClick={changeModalVisibility}
                    >&times;</button>
                </div>
                <ul className={styles.list}>
                    { isLoaded ?
                        items.map(item => <ModalListItem {...item} key={item.id} activeCategory={activeCategory} dispatch={dispatch} />) :
                        <div className={styles.loader}>
                            <h3>Loading...</h3>
                        </div>
                    }
                </ul>
            </div>
        </div>
    )
}