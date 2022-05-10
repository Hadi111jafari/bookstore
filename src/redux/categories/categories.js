export const categoriesCreator = {
  type: 'CHECKING_STATUS',
};

const categoriesReducer = (intialState = [], action) => {
  switch (action.type) {
    case 'CHECKING_STATUS':
      return 'Under Construction';
    default:
      return intialState;
  }
};
export default categoriesReducer();
