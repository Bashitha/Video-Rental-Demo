import React from "react";
const ListGroup = ({
  items,
  selectedItem,
  textProperty,
  valueProperty,
  onItemSelect,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          className={
            selectedItem && item[textProperty] === selectedItem[textProperty]
              ? "list-group-item active"
              : "list-group-item"
          }
          style={{ cursor: "pointer" }}
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
