import React from 'react';
import PropTypes from 'prop-types';

/*
 _ Render a list of items
 _
 _ @param {Object} props - List of items
 */
function List(props) {
  const { items } = props;
  if (!items.length) {
    // No Items on the list, render an empty message
    return <span className="empty-message">No items in list</span>;
  }

  return (
    <ul className="list-items">
      {items.map(item => <li key={item} className="item">{item}</li>)}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.array,
};

List.defaultProps = {
  items: [],
};

export default List;