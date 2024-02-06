import "./App.css";
import { LoginForm } from "./LoginForm/LoginForm";
import favouriteBooks from "./data.json";
import { BookList } from "./BookList/BookList";
import { Alert } from "./Alert/Alert";
import { UserMenu } from "./UserMenu/UserMenu";
import { Button } from "./Button/Button";
import { ClickCounter } from "./CounterClicks/CounterClicks";
import { useState, useEffect } from "react";

export const App = () => {
  const [clicks, setClicks] = useState(0);
  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });
  const [clickValue, setClickValue] = useState(0);

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };

  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  useEffect(() => {
    document.title = `You clicked ${clickValue} times`;
  });

  const handleSubmit = (userData) => {
    console.log(userData);
  };

  return (
    <>
      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
      <Alert variant="info" elevated>
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined>
        Please update your profile contact information
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <UserMenu name="Max" />
      <Button />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <p>
        x: {values.x}, y: {values.y}
      </p>
      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>

      <button onClick={() => setClickValue(clickValue + 1)}>
        You clicked {clickValue} times
      </button>
      <LoginForm submit={handleSubmit} />
    </>
  );
};
