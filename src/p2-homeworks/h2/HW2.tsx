import React, {useState} from 'react'
import Affairs from './Affairs'
import s from "./Affairs.module.css";

// types
export type AffairPriorityType = 'low' | 'middle' | 'high'
export type AffairType = {
    _id: number,
    name: string,
    priority: string
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
    {_id: 6, name: 'porn', priority: 'low'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    if (filter === 'all') return affairs
    if (filter === 'high') return affairs.filter(affairs => affairs.priority === 'high')
    if (filter === 'middle') return affairs.filter(affairs => affairs.priority === 'middle')
    if (filter === 'low') return affairs.filter(affairs => affairs.priority === 'low')
    else return affairs
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter(affair => affair._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div >
            <hr/>
            homeworks 2
            <div className={s.container}>
                <h1>
                    'Todo List'
                    <span>Today I need To :</span>
                </h1>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter} deleteAffairCallback={deleteAffairCallback}
                />
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
