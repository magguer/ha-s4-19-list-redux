import { format } from "date-fns";

export const ExampleList = [
    {
        listName: "Comprar",
        listId: "1",
        items: [{ itemName: "Zanahorias", itemId: 1, done: true }, { itemName: "Manzanas", itemId: 2, done: true }, { itemName: "Leche", itemId: 3, done: false }],
        createdAt: format(new Date(), "MM/dd/yyyy")
    },

    {
        listName: "Tareas",
        listId: "2",
        items: [{ itemName: "Barrer", itemId: 1, done: false }, { itemName: "Comprar", itemId: 2, done: false }, { itemName: "Programar", itemId: 3, done: true }],
        createdAt: format(new Date(), "MM/dd/yyyy")
    }
]
