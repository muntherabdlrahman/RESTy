export const initialState = {
    history: [],
  };
  
  export  const historyReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "ADD_HISTORY":
        const history = [...state.history, payload.history];
        return { history };
  
      default:
        return state;
    }
  };
  
  export const addAction = (history) => {
    return {
      type: "ADD_HISTORY",
      payload: { history },
    };
  };
  
