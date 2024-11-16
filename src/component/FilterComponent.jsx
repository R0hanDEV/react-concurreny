import React, { useState } from "react";

function FilterComponent() {
  //  this non optimise solution componnent for filter.
  const [searchItem, setSearchItem] = useState("");
  const [filterArray, setFilterArray] = useState([]);
  const itemsArray = Array(10000)
    .fill(0)
    .map((_, i) => `Item ${i}`);

  const handleChange = (e) => {
    setSearchItem(e.target.value);

    const filter = itemsArray.filter((item) => {
      return item.toLowerCase().includes(searchItem.toLowerCase());
    });
    console.log(itemsArray);
    setFilterArray(filter);
  };

  return (
    <div className="filter-component">
      <input
        name="search"
        placeholder="search items...."
        onChange={(e) => {
          handleChange(e);
        }}
      />

      {filterArray.map((item, key) => {
        return (
          <React.Fragment key={key}>
            <h6>{item}</h6>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default FilterComponent;
