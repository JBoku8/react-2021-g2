import { useEffect, useReducer } from 'react';

import { getFakerBooks } from '../../services';

const SET_BOOKS = 'SET_BOOKS';
const SET_FILTER = 'SET_FILTER';
const CLEAR_FILTER = 'CLEAR_FILTER';

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const bookReducer = (state, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        books: action.payload,
        oldBooks: [...action.payload],
      };
    case SET_FILTER:
      const filtered = state.books.filter((item) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        filter: action.payload,
        books: filtered,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        books: [...state.oldBooks],
        filter: '',
      };
    default:
      throw new Error('');
  }
};

const initialState = {
  error: null,
  books: [],
  oldBooks: [],
  filter: '',
};

function FakerBooks() {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  const loadBooks = async () => {
    const bookData = await getFakerBooks({ quantity: 12 });
    dispatch({
      type: SET_BOOKS,
      payload: [...bookData],
    });
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const onSearch = debounce(({ target }) => {
    if (target.value.length > 2) {
      dispatch({
        type: SET_FILTER,
        payload: target.value,
      });
    } else if (state.filter) {
      dispatch({
        type: CLEAR_FILTER,
      });
    }
  });

  return (
    <div className="row">
      <div className="col-12">
        <h2 className="text-muted">Faker Books</h2>

        <input
          className="form-control mb-3"
          placeholder="search"
          name="search"
          type="search"
          onKeyUp={onSearch}
        />
      </div>

      <div className="row border pt-3 pb-4">
        {state.books.map((item) => {
          return (
            <div
              className="card p-1 mx-1 mb-2"
              key={item.isbn}
              style={{ maxWidth: '18rem' }}>
              <h2 className="card-title text-center">{item.title}</h2>
              <img
                src={item.image}
                alt={item.title}
                className="card-image-top img-fluid w-75 align-self-center"
              />
              <div className="card-body">
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FakerBooks;
