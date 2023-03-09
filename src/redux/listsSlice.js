import { createSlice } from '@reduxjs/toolkit';
import { format } from 'date-fns'
import { ExampleList } from './ExampleList';


const listsSlice = createSlice({
    name: "listOfLists",
    initialState: ExampleList,
    reducers: {
        addList(state, action) {
            state.push(action.payload)
        },
        removeList(state, action) {
            return state.filter(list => list.listId !== action.payload)
        },
        addItem(state, action) {
            const list = state.find((list) => list.listId === action.payload.listId)
            list.items.push(action.payload)
        },
        removeItem(state, action) {
            state.map((list) => {
                if (list.listId === action.payload.listId) {
                    list.items = list.items.filter((item) => item.itemId !== action.payload.itemId)
                }
                return list
            })
        },
        doneItem(state, action) {
            state.map((list) => {
                if (list.listId === action.payload.listId) {
                    list.items.map((item) => {
                        if (item.itemId === action.payload.itemId) {
                            item.done = !item.done
                        }
                    })
                }
                return list
            })
        }
    }
})

const { reducer, actions } = listsSlice
export const { addList, removeList, addItem, removeItem, doneItem } = actions
export default reducer