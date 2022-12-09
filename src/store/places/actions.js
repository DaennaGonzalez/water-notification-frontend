
export const getInitialLocation = async ({ commit }) => {

    navigator.geolocation.getCurrentPosition(
        ({ coords }) => commit('setLngLat', [coords.longitude, coords.latitude]),

        (err) => {
            console.error(err)
            throw new Error('No geolocation :c')
        }
    )
}


export const searchPlacesByTerm = async ({ commit, state }, query) => {
    console.log("vuex: ", query)
}