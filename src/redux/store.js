
import listsReducer from './listsSlice';
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({

    reducer: {
        lists: listsReducer
    }
})

export default store