// src/redux/serviceListReducer.js
import { nanoid } from "nanoid";
import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  START_EDITING_SERVICE,
  UPDATE_SERVICE,
} from "./actionTypes";

const initialState = {
  list: [
    { id: nanoid(), name: "Замена стекла", price: 21000 },
    { id: nanoid(), name: "Замена дисплея", price: 25000 },
  ],
  editing: null, // состояние для редактируемой услуги
};

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      return {
        ...state,
        list: [...state.list, { id: nanoid(), name, price: Number(price) }],
      };
    case REMOVE_SERVICE:
      const { id } = action.payload;
      return {
        ...state,
        list: state.list.filter((service) => service.id !== id),
      };
    case START_EDITING_SERVICE:
      return {
        ...state,
        editing: state.list.find((service) => service.id === action.payload.id),
      };
    case UPDATE_SERVICE:
      const {
        id: updateId,
        name: updateName,
        price: updatePrice,
      } = action.payload;
      return {
        ...state,
        list: state.list.map((service) =>
          service.id === updateId
            ? { ...service, name: updateName, price: Number(updatePrice) }
            : service
        ),
        editing: null,
      };
    default:
      return state;
  }
}
