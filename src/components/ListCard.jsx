import { removeList } from "../redux/listsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function ListCard({ list }) {
  const dispatch = useDispatch();
  const itemsCheked = list.items.filter((item) => item.done);

  return (
    <div className="flex w-full items-center">
      <Link
        to={`/list/${list.listId}`}
        className="border text-start w-full my-2 mr-2 py-2 px-4 rounded flex items-center justify-between"
      >
        <div className="flex flex-col">
          <div>
            <h2 className="font-semibold">{list.listName}</h2>
          </div>
          <div>
            <h3 className="text-xs">{list.createdAt}</h3>
          </div>
        </div>
        <div>
          {itemsCheked.length}/{list.items.length}
        </div>
      </Link>
      <img
        onClick={() => dispatch(removeList(list.listId))}
        className="w-5 cursor-pointer"
        src="https://icons.veryicon.com/png/o/miscellaneous/easyapi-service-platform/delete-item-1.png"
        alt=""
      />
    </div>
  );
}

export default ListCard;
