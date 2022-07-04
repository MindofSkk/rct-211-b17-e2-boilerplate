import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory= searchParams.getAll('category')
  const [category, setCategory] = useState(initialCategory||[]);



  const handleCheck = (e) => {
    const option = e.target.value;
    let newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    }else {
       newCategory.push(option);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    if (category) {
      let params={};
        category && (params.category=category)
      setSearchParams(params);
    }
  }, [category, setSearchParams]);



  return (
    <div style={{width:"15%"}}>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input
           type="checkbox"
            value="Sneakers" 
            onChange={handleCheck}
            defaultChecked={category.includes("Sneakers")}/>
          <label>Sneakers</label>
        </div>
        <div>
          <input 
          type="checkbox"
           value="Loafers" 
           onChange={handleCheck}
           defaultChecked={category.includes("Loafers")}
           />
          <label>Loafers</label>
        </div>
        <div>
          <input
           type="checkbox"
            value="Canvas" 
            onChange={handleCheck}
            defaultChecked={category.includes("Canvas")}
            />
          <label>Canvas</label>
        </div>
        <div>
          <input
           type="checkbox"
            value="Boots"
            onChange={handleCheck}
            defaultChecked={category.includes("Boots")}
             />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;