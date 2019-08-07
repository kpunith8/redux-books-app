import { combineReducers } from 'redux';
import BookReducer from './reducer-books';
import ActiveBook from './reducer-active-book';

const rootReducer = combineReducers({
  books: BookReducer,
  activeBook: ActiveBook,
});

export default rootReducer;
