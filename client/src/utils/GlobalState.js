import React, { createContext, useReducer, useContext } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NOTES":
      return {
        ...state,
        notes: [...action.notes],
      };

    case "ADD_NOTE":
      return {
        ...state,
        notes: [action.note, ...state.notes],
      };

    case "REMOVE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => {
          return note._id !== action._id;
        }),
      };

    case "ADD_LEAD":
      return {
        ...state,
        leads: [action.note, ...state.leads],
      };

    case "UPDATE_LEAD":
      return {
        ...state,
        leads: [...state.leads],
      };

    case "REMOVE_LEAD":
      return {
        ...state,
        leads: state.leads.filter((note) => {
          return note._id !== action._id;
        }),
      };
    case "CHANGE_VIEW":
      return {
        ...state,
        view: action.payload
      };
      
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    notes: [],
    leads: [],
    view: "",
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
