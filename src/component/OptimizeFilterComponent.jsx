import { useState, useTransition } from "react";
function OptimizeFilterComponent() {
  //  this optimise solution componnent for filter using transition to filter after some delay.
  const [searchItem, setSearchItem] = useState("");
  const [filterArray, setFilterArray] = useState([]);
  const [isPending, startTransition] = useTransition();
  const itemsArray = Array(10000)
    .fill(0)
    .map((_, i) => `Item ${i}`);

  const handleChange = (e) => {
    //priority task
    setSearchItem(e.target.value);

    startTransition(() => {
      // less prioiry
      const filter = itemsArray.filter((item) => {
        return item.toLowerCase().includes(searchItem.toLowerCase());
      });
      setFilterArray(filter);
    });
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

      {isPending && <p>Updating...</p>}
      <ul>
        {!isPending &&
          filterArray.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default OptimizeFilterComponent;
