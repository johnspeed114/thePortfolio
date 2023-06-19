export const errorReducer = (state, action) => {
  if (action.type === '@_MISSING') {
    return { error: 'Missing @ in your email' };
  }
};

export const formReducer = (state, action) => {
  //[To Do] once we establish this reducer, we will change conditionals to switch
  switch (action.type) {
    case 'USERNAME': {
      return {
        ...state,
        username: action.value,
      };
    }
    case 'EMAIL': {
      return { ...state, email: action.value };
    }
    case 'PASSWORD': {
      return { ...state, password: action.value };
    }
    case 'CONFIRM_PASSWORD': {
      return { ...state, confirmPassword: action.value };
    }
    default: {
      throw Error('Unknown Error: ' + action.type);
    }
  }
};
