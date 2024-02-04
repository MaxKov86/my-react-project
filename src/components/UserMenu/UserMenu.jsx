import { HiUser } from "react-icons/hi";
import css from "./UserMenu.module.css";

export const UserMenu = ({ name }) => {
  return (
    <div>
      <p className={css.text}>
        <HiUser className="my-icon" size="20" /> {name}
      </p>
    </div>
  );
};
