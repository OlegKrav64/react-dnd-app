import { Column } from '../Column/Column'
import styles from './Container.module.scss'
import { Header } from '../Header/Header'
import { InfoBar } from '../InfoBar/InfoBar'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchItems } from '../../redux/actions/mealsActionCreator'

const categories = [
    {
        title: "Breakfast",
        type: 'breakfast',
    },
    {
        title: "Morning Snack",
        type: 'morningSnack',
    },
    {
        title: "Lunch",
        type: 'lunch',
    },
    {
        title: "Afternoon Snack",
        type: 'afternoonSnack',
    },
    {
        title: "Dinner",
        type: 'dinner',
    },
]

export const Container = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchItems())
        //eslint-disable-next-line
    }, [])

    return (
        <div className={styles.container}>
            <Header />
            <InfoBar />
            <div className={styles.row}>
                {
                    categories.map(item => <Column {...item} key={item.type} />)
                }
            </div>
        </div>
    )
}