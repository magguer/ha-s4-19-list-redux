import { format } from "date-fns";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addItem, removeItem, doneItem } from "../redux/listsSlice";

function Lista() {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState("");
  const { listId } = useParams();

  const list = useSelector((state) =>
    state.lists.find((list) => list.listId === listId)
  );

  return (
    <div>
      <div className="bg-white my-5 py-5 px-5 rounded relative">
        <div className="absolute">
          <Link to="/">
            <img
              className="w-5"
              src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
            />
          </Link>
        </div>
        <h2 className="text-end font-bold">{list.listName}</h2>
        {/*         Input Add Item */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="pt-4 flex items-center gap-2"
        >
          <input
            onChange={(e) => setItemName(e.target.value)}
            className="border rounded-lg px-3 py-2"
            placeholder="Agregar nuevo item"
            type="text"
            value={itemName}
          />
          <button
            onClick={() => {
              dispatch(
                addItem({
                  itemName,
                  itemId: uuidv4(),
                  done: false,
                  listId: list.listId,
                  createdAt: format(new Date(), "MM/dd/yyyy"),
                })
              );
              setItemName("");
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
            {list.items.map((item) => {
              return (
                <li
                  key={item.itemId}
                  className="flex items-center justify-between mt-4"
                >
                  <div className="flex items-center">
                    <input
                      checked={item.done}
                      type="checkbox"
                      onChange={() => {
                        dispatch(
                          doneItem({ itemId: item.itemId, listId: list.listId })
                        );
                      }}
                    />

                    <h3
                      className={`${item.done && "line-through"} ml-3 w-full`}
                    >
                      {item.itemName}
                    </h3>
                  </div>
                  <img
                    onClick={() =>
                      dispatch(
                        removeItem({ itemId: item.itemId, listId: list.listId })
                      )
                    }
                    className="w-5 cursor-pointer"
                    src="https://icons.veryicon.com/png/o/miscellaneous/easyapi-service-platform/delete-item-1.png"
                    alt=""
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Lista;
