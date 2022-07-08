import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = (event) => {
    setNewItem(event.target.value);
  };

  const clickHandeler = () => {
    setItems((perv) => {
      return [...perv, newItem];
    });

    setNewItem("");
  };

  const change = () => {
    setNewItem("");
  };

  const deleteHandeler = (id) => {
    setItems((prev) => {
      return prev.filter((value, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input placeholder="Add Item" onChange={addItem} value={newItem} />
      <button onClick={clickHandeler}>Add</button>
      <ol>
        {items.map((value, index) => {
          return (
            <li key={index} id={index}>
              {value}
              <button
                onClick={() => {
                  deleteHandeler(index);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
