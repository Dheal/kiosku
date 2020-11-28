const initalState = {
    isLogin: false,   
    
  };
  
  const userReducer = (state = initalState, action) => {
    switch (action.type) {
      case "CHANGE_USER_LOGIN_STATUS":
        return {
          ...state,
          isLogin: action.payload.loginStatus,
        };
      // case "ADD_USER":
      //   return{
      //     isLogin: [...state.isLogin, action.payload.newtodo],
      //   };

      default:
        return state;
    }
  };
  
  export default userReducer;
  