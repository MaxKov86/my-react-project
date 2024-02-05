export const ClickCounter = ({ value, onUpdate }) => {
  return <button onClick={onUpdate}>Current: {value}</button>;
};
