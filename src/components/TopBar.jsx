import { BsPlusCircle } from "react-icons/bs";

function TopBar({
  language,
  setLanguage,
  keepFormat,
  setKeepFormat,
  handleNew
  
}) 

{
  return (
    <div className="topbar">

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="ka">ქართული</option>
        <option value="en">English</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={keepFormat}
          onChange={() => setKeepFormat(!keepFormat)}
        />
        ფორმატის შენარჩუნება
      </label>

      <button onClick={handleNew} >
         <BsPlusCircle size={13}/> ახლის გახსნა
      </button>

    </div>
  );
}

export default TopBar;