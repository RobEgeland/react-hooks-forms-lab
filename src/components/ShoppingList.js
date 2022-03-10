import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import itemData from "../data/items";


function ShoppingList() {
  const [items, setItems] = useState(itemData);
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event) {
    setSearch(event.target.value)
  }

  function onItemFormSubmit(newItem) {
    setItems([...items, newItem]) 
  }



  const itemsToDisplay = items
  .filter((item) => item.name.includes(search))
  .filter((item) => {
    if (selectedCategory === "All") {
      return true;
    }

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter search = {search} onSearchChange={onSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
