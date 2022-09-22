import { ADD_TO_SAVED, REMOVE_FROM_SAVED } from "../actions/saveActions";
import { saveItems } from "../initialValues/saveItems";

const initialState = {
    saveItems: saveItems
}

export default function saveReducer(state = initialState, { type, payload }) {

    switch (type) {
        case ADD_TO_SAVED:
            let jobAdvertisement = state.saveItems.find(j => j.jobAdvertisement.id === payload.id)
            if (jobAdvertisement) {
                jobAdvertisement.quantity++;
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    saveItems: [...state.saveItems, { quantity: 1, product: payload }]

                }
            }

        case REMOVE_FROM_SAVED:
            return {
                ...state,
                saveItems: state.saveItems.filter(j => j.jobAdvertisement.id !== payload.id)
            }

        default:
            return state;
    }

}