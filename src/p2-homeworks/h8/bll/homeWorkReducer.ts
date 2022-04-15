import {UserType} from '../HW8';

type SortType = {
    type: 'sort',
    payload: string
}

type CheckType = {
    type: 'check',
    payload: number
}

export type ActionType = SortType | CheckType


export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b) =>
                (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0)

            return action.payload === 'up' ? newState : newState.reverse()
    }
        case 'check': {
            return state.filter(f => f.age > action.payload)
        }
        default: return state
    }
}

