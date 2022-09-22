
export const ADD_TO_SAVED = "ADD_TO_SAVED"
export const REMOVE_FROM_SAVED = "REMOVE_FROM_SAVED"


export function addToSaved(jobAdvertisement){
    return{
        type : ADD_TO_SAVED,
        payload: jobAdvertisement
    }
}

export function removeFromSaved(jobAdvertisement){
    return{
        type : REMOVE_FROM_SAVED,
        payload: jobAdvertisement
    }
}