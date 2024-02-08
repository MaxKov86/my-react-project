import { useId } from "react";

export const LangSwitcher = ({ value, onChange }) => {
  const selectId = useId();

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor={selectId}>Choose language</label>
      <select id={selectId} value={value} onChange={handleChange}>
        <option value="uk">Ukrainian</option>
        <option value="en">English</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};
