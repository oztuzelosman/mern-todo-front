import { useState, useEffect } from "react";
//extra packages
import axios from "axios";
//components
import TodoCreate from "./components/TodoCreate";
import TodoShow from "./components/TodoShow";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  //const sandboxUrl = "https://vcnkqg-8000.csb.app/api/v1/todos";
  const localUrl = "http://localhost:8000/api/v1/todos";
  /////////////////////////////////////////

  const getAllTodos = async () => {
    try {
      const allTodos = await axios.get(`${localUrl}`);
      setTodoItems(allTodos.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);
  /////////////////////////////////////////

  const createNew = async (inputVal) => {
    try {
      const createRes = await axios.post(`${localUrl}`, { name: inputVal });
      setTodoItems((prevVal) => {
        return [...prevVal, createRes.data];
      });
    } catch (err) {
      console.log(err);
    }
  };
  /////////////////////////////////////////

  const deleteById = async (deleteId) => {
    console.log(deleteId);
    try {
      await axios.delete(`${localUrl}/${deleteId}`);
      setTodoItems(() => {
        return todoItems.filter((todoItem) => {
          return todoItem._id !== deleteId;
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  /////////////////////////////////////////

  const updateById = async (updateId, editVal, checkVal) => {
    try {
      const updateRes = await axios.patch(`${localUrl}/${updateId}`, {
        name: editVal,
        completion: checkVal,
      });
      setTodoItems(() => {
        return todoItems.map((todoItem) => {
          if (todoItem._id === updateId) {
            return { ...todoItem, ...updateRes.data };
          } else {
            return todoItem;
          }
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  /////////////////////////////////////////

  return (
    <div className="font-sans box-content flex flex-col flex-wrap min-h-screen justify-center  content-center items-center mx-auto my-auto text-white bg-orange-500">
      <h1 className="mt-10 text-8xl font-mono tracking-widest italic font-bold">
        TODO APP
      </h1>

      <TodoCreate createNew={createNew} />

      <div className="TODOLIST//	 mt-10 mb-20 py-10 container flex flex-wrap justify-center  min-h-screen bg-orange-400 rounded-3xl">
        {todoItems.map((todoItem) => {
          return (
            <TodoShow
              todoItem={todoItem}
              key={todoItem._id}
              id={todoItem._id}
              deleteById={deleteById}
              updateById={updateById}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

//grid grid-flow-col gap-20 grid-cols-4
