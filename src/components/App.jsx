import "./App.css";
import { favouriteBooks } from "./data";
import { BookList } from "./BookList/BookList";
import { Alert } from "./Alert/Alert";
import { UserMenu } from "./UserMenu/UserMenu";

export const App = () => {
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
    </>
  );
};
