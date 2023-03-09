import ListCard from "./ListCard";
import { addList } from "../redux/listsSlice";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";

function ListOfLists() {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);
  const [listName, setListName] = useState("");

  return (
    <div>
      <div>
        <div className="bg-white my-5 py-5 px-5 rounded">
          <h2 className="font-bold">Listas</h2>
          {/*         Input Add Item */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="pt-4 flex items-center gap-2"
          >
            <input
              onChange={(e) => setListName(e.target.value)}
              className="border rounded-lg px-3 py-2"
              placeholder="Agregar nueva lista"
              type="text"
              value={listName}
            />
            <button
              onClick={() => {
                dispatch(
                  addList({
                    listName,
                    listId: uuidv4(),
                    items: [],
                    createdAt: format(new Date(), "MM/dd/yyyy"),
                  })
                );
                setListName("");
              }}
            >
              <img
                className="w-5"
                src="http://cdn.onlinewebfonts.com/svg/img_514215.png"
                alt=""
              />
            </button>
          </form>
          {/*         List Items */}
          <div>
            <ul>
              {lists.map((list, i) => {
                return (
                  <li key={i}>
                    <ListCard list={list} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListOfLists;
