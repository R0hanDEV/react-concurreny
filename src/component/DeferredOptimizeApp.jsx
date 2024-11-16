import { useState, useDeferredValue } from "react";

function DefferedOptimizeApp() {
  const [searchTerm, setSearchTerm] = useState("");
  const deferredSearchTerm = useDeferredValue(searchTerm); // Defer rendering
  const items = Array(10000)
    .fill(0)
    .map((_, i) => `Item ${i}`);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredSearchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search items..."
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DefferedOptimizeApp;
