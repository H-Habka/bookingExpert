import { useState } from "react";

let Data = [
  "asdasd",
  "asfasd",
  "sadasd",
  "rfef",
  "fref",
  "erfwed",
  "xasdasd",
  "aasfasd",
  "saadasd",
  "frfef",
  "wfref",
  "qerfwed",
];

const AutoComplete = () => {
  const [filterdData, setFilterdData] = useState([]);
  const handleInputChange = (e) => {
    if (e.target.value) {
      setFilterdData(Data.filter((item) => item.startsWith(e.target.value)));
    } else {
      setFilterdData([]);
    }
  };

  return (
    <div className="bg-red-900 relative w-fit m-10">
      <input
        type="text"
        className="p-2 outline-none border-2 border-gray-700"
        onChange={handleInputChange}
      />
      <div className="asbolute">
        {filterdData.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default AutoComplete;
