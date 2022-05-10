const intialState = {
  books: [],
};

export const addAction = {
  type: 'ADD_BOOK',
};

export const removeAction = {
  type: 'REMOVE_BOOK',
};

export const addActionCreator = (title, author) => ({
  type: 'ADD_BOOK',
  payload: {
    title,
    author,
  },
});

export function removeActionCreator(id) {
  return {
    type: 'REMOVE_BOOK',
    payload: id,
  };
}

const booksReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case 'REMOVE_BOOK':
      return state.map((book) => (book.id === action.id
        ? { ...book, author: !book.author } : book));
    default:
      return state;
  }
};

export default booksReducer;
