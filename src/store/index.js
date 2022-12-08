import { createStore } from 'vuex'

import journal from './journal'
import generalView from './generalView'
import AuthenticationModule from './auth.store'
import places from './places'

const store = createStore({
    modules: {
        journal,
        generalView,
        auth: AuthenticationModule,
        places
    }
})




export default store