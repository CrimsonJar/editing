import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeService, startEditingService } from "../redux/actionCreators";

const ServiceList = () => {
  const items = useSelector((state) => state.serviceList.list);
  const dispatch = useDispatch();
  const handleEdit = (id) => {
    dispatch(startEditingService(id));
  };

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  return (
    <ul>
      {items.map((o) => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleRemove(o.id)}>✕</button>
          <button onClick={() => handleEdit(o.id)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
