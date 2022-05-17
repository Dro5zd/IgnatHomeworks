const initState = {
    theme: 'dark' || 'red' || 'some'
};

type initStateType = typeof initState

export const themeReducer = (state: initStateType = initState, action: loadingChangeThemeACType): initStateType => { // fix any
    switch (action.type) {
        case 'CHANGE=THEME': {
            return {
                ...state,
                theme: action.theme
            }
        }
        default:
            return state;
    }
};

type loadingChangeThemeACType = ReturnType<typeof changeThemeAC>

export const changeThemeAC = (theme: string) => {
    return {type: 'CHANGE=THEME' as const, theme}
};