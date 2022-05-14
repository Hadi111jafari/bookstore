const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XDKu7Go3sr9DLMP82IAq/books';

const fetchBooks = async () => {
  const result = await fetch(URL);
  const data = await result.json();
  return data;
};

const postBook = async (book) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: 'General',
    }),
  });
  const data = await response.text();
  return data;
};

const deleteBook = async (id) => {
  const response = await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  const data = await response.text();
  return data;
};

export { fetchBooks, postBook, deleteBook };
