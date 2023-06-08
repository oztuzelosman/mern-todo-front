import { useState } from "react";

function TodoEdit({ todoItem, onEdit, updateById, id }) {
  const [editVal, setEditVal] = useState(todoItem.name);
  const [checkVal, setCheckVal] = useState(todoItem.completion);

  const onCheck = (e) => {
    e.preventDefault();
    setCheckVal((prevVal) => {
      return !prevVal;
    });
    console.log(checkVal);
  };

  const getEditVal = (e) => {
    setEditVal(e.target.value);
  };

  const onUpdate = (e) => {
    e.preventDefault();
    updateById(id, editVal, checkVal);
    setEditVal("");
    onEdit();
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={onUpdate}>
        <input
          className="py-1 px-4 border-2 rounded-xl text-gray-800"
          type="text"
          value={editVal}
          placeholder="edit your todo"
          onChange={getEditVal}
        />
        <div>
          <button className="mx-1 my-3 px-4 border-2 bg-violet-900	">
            UPDATE
          </button>
          <button
            className="mx-1 my-3 px-4 border-2 bg-violet-900	"
            onClick={onCheck}>
            {checkVal ? "UNCHECK" : "CHECK"}
          </button>
        </div>
      </form>
    </div>
  );
}
export default TodoEdit;
