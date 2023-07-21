import { TOGGLE_DB_CHANGING, CHANGE_SELECTED_FILTER } from "./actions";

interface IDefaultState {
  notesCreating?: boolean;
  selectedFilters?: string[];
}

interface IAction {
  type: string;
  payload: IDefaultState;
}

const defaultState: IDefaultState = {
  notesCreating: false,
  selectedFilters: [],
};

export const reducer = (
  state: IDefaultState = defaultState,
  action: IAction
) => {
  switch (action.type) {
    case TOGGLE_DB_CHANGING:
      return { ...state, notesCreating: !state.notesCreating };
    case CHANGE_SELECTED_FILTER:
      return {
        ...state,
        selectedFilters: action.payload.selectedFilters,
      };
    default:
      return state;
  }
};
