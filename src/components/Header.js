import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title , onAdd, changeAdd}) => {
  
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={changeAdd ? "Red" : "Green"} text={changeAdd ? "Close" : "Add"} onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Manager",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
