import { createStore } from 'vuex'

import comments from './comments'
import generalView from './generalView'
import AuthenticationModule from './auth.store'
import places from './places'

const store = createStore({
    modules: {
        comments,
        generalView,
        auth: AuthenticationModule,
        places
    }
})




export default store