import { useState } from "react";
import "../App.css";

function Menubar() {
  const [option, setOption] = useState("compare");

  return (
    <div className="menubar">
      {/* Mobile dropdown */}
      <select
        className="mobile-dropdown"
        value={option}
        onChange={(e) => setOption(e.target.value)}
      >
        <option value="spell">მართლმწერი</option>
        <option value="compare">Aa ტექსტის შედარება</option>
        <option value="audio">ხმა → ტექსტი</option>
        <option value="text-audio">ტექსტი → ხმა</option>
        <option value="pdf">PDF</option>
      </select>
    </div>
  );
}

export default Menubar;
