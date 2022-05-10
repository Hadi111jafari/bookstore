import { configureStore, combineReducers } from 'redux';
import categoriesReducer, { categoriesCreator } from './categories/categories';
import booksReducer, { addActionCreator, removeActionCreator } from './books/books';

const rootReducer = combineReducers({ books: booksReducer, categories: categoriesReducer });

const store = configureStore(rootReducer);
store.dispatch(categoriesCreator());
store.dispatch(addActionCreator());
store.dispatch(removeActionCreator());
