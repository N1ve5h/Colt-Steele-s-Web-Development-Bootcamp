import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router";

export default function Header({ title,onAdd,showAddTask }) {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button  color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'Close' : 'Add'} onAdd={onAdd}/>
      )}
      
    </header>
  );
}

Header.propTypes = {
  /* propTypes and NOT PropType */ title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: "Task Tracker",
};
