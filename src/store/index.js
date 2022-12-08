import { createStore } from 'vuex'

import journal from '../modules/daybook/store/journal'
import AuthenticationModule from './auth.store'

const store = createStore({
    modules: {
        journal,
        auth: AuthenticationModule,
    }
})




export default store