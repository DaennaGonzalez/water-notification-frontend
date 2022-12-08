import { createStore } from 'vuex'

import journal from './journal'
import generalView from './generalView'
import AuthenticationModule from './auth.store'

const store = createStore({
    modules: {
        journal,
        generalView,
        auth: AuthenticationModule,
    }
})




export default store