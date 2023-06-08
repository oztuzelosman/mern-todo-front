import { useState } from "react";
function TodoCreate({ createNew }) {
  const [inputVal, setInputVal] = useState("");

  const getInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const addOnClick = (e) => {
    e.preventDefault();
    createNew(inputVal);
    setInputVal("");
  };

  return (
    <form className="flex flex-wrap mx-3 mt-10" onSubmit={addOnClick}>
      <input
        className="py-1 px-4 border-2 rounded-xl text-gray-800"
        type="text"
        value={inputVal}
        placeholder="ADD NEW TODO"
        onChange={getInputChange}
      />
      <button className="mx-1 py-1 px-4 border-2 bg-violet-900 rounded-xl	">
        ADD
      </button>
    </form>
  );
}
export default TodoCreate;
