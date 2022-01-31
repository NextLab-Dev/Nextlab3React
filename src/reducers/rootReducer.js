const initState = {
    language: true,
    navHome: 'Home',
    navTeams: 'Teams',
    navContact: 'Contact',
    navLang: 'English',
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'TOGGLE_EN_LANGUAGE':
            return {
                ...state,
                language: true,
                navHome: 'Home',
                navTeams: 'Teams',
                navContact: 'Contact',
                navLang: 'English',
            }
        case 'TOGGLE_SR_LANGUAGE':
            return {
                ...state,
                language: false,
                navHome: 'O nama',
                navTeams: 'Tim',
                navContact: 'Kontakt',
                navLang: 'Srpski',
            }

        default:
            return state;
    }
}

export default rootReducer;