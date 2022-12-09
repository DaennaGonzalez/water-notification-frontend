export const setLngLat = ( state, coords ) => {
    console.log(coords)
    state.userLocation = coords
    state.isLoading = false;
}