import React, { createContext, useReducer, useContext } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_TASKS":
      return {
        ...state,
        notes: action.payload,
      };

    case "UPDATE_NOTES":
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };

    case "ADD_NOTE":
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };

    case "REMOVE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => {
          return note._id !== action.payload._id;
        }),
      };

    case "LOAD_LEADS":
      return {
        ...state,
        leads: action.payload,
      };

    case "ADD_LEAD":
      return {
        ...state,
        leads: [action.payload, ...state.leads],
      };

    case "UPDATE_LEAD":
      return {
        ...state,
        leads: [...state.leads],
      };

    case "REMOVE_LEAD":
      return {
        ...state,
        leads: state.leads.filter((lead) => {
          return lead._id !== action.payload._id;
        }),
      };
    case "LOAD_DATES":
      return {
        ...state,
        dates: action.payload,
      };

    case "ADD_DATE":
      return {
        ...state,
        dates: [action.payload, ...state.dates],
      };

    case "UPDATE_DATE":
      return {
        ...state,
        dates: [...state.dates],
      };

    case "REMOVE_DATE":
      return {
        ...state,
        dates: state.dates.filter((date) => {
          return date._id !== action.payload._id;
        }),
      };

    case "SELECTED_DATE":
      return {
        ...state,
        selectedDate: action.payload,
      };
      case "SET_USER":
        return {
          ...state,
          user: action.payload,
        }

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    notes: [],
    leads: [],
    dates: [],
    selectedDate: "",
    user: "",
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
