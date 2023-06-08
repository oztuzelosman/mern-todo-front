import { useState } from "react";

import TodoEdit from "./TodoEdit";

function TodoShow({ todoItem, deleteById, updateById, id }) {
  const [showEdit, setShowEdit] = useState(false);

  const onDelete = () => {
    deleteById(id);
  };

  const onEdit = () => {
    setShowEdit((prevVal) => {
      return !prevVal;
    });
  };

  return (
    <div className="flex flex-col flex-wrap  h-64 w-72  mx-5 my-4 p-5 bg-orange-500 rounded-xl drop-shadow-xl text-center justify-center items-center content-center">
      {showEdit ? (
        <TodoEdit
          todoItem={todoItem}
          deleteById={deleteById}
          updateById={updateById}
          onEdit={onEdit}
          id={id}
        />
      ) : (
        <h2 className="font-mono text-xl font-bold">{todoItem.name}</h2>
      )}
      {!showEdit && (
        <p className="my-2 font-serif font-light italic tracking-widest ">
          {todoItem.completion ? "FINISHED" : "NOT FINISHED"}
        </p>
      )}

      <div className="font-mono flex flex-row flex-wrap text-l">
        <button
          className="mx-1 my-3 px-4 border-2 bg-violet-900 rounded-xl	"
          onClick={onEdit}>
          EDIT
        </button>
        <button
          className="my-3 px-4 border-2 bg-violet-900	rounded-xl"
          onClick={onDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
}
export default TodoShow;
