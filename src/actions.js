// Action to add a new message

export const addMessage = message => {
  return {
    type: "ADD",
    message: message
  };
};
