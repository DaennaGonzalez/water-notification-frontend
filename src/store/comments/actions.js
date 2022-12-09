import journalApi from '@/api/journalApi'


export const loadEntries = async ({ commit }) => {

    const { data } = await journalApi.get('/entries.json')

    if ( !data ){
        commit('setEntries', [] )
        return
    }

    const entries = []
    for( let id of Object.keys( data ) ) {
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries )
}

export const createEntry = async ({ commit }, entry ) => {

    // dataToSave
    const { date, text, checked } = entry


    console.log(entry);
    const dataToSave = { date, text, checked }

    const { data } = await journalApi.post( `entries.json`, dataToSave )

    dataToSave.id = data.name

    commit('addEntry', dataToSave )

    return data.name
}


export const deleteEntry = async ({ commit }, id ) => {

    await journalApi.delete(`/entries/${ id }.json`)
    commit('deleteEntry', id)

    return id
}