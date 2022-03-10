import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newName, setNewName] = useState("")
  const [newCategory, setNewCategory] = useState("Produce")

  function handleNewItem(event) {
    setNewName(event.target.value)
  }

  function handleNewCategory(event) {
    setNewCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: newName,
      category: newCategory
    }
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem">
      <label>
        Name:
        <input value={newName} onChange={handleNewItem} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleNewCategory} value={newCategory} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button onSubmit={handleSubmit} type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
