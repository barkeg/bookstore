// Click handler for search button
const captureSearchValue = () => {
  return document.getElementById('search-bar').value.toLowerCase();
  };
  // Filter books based on search input
  const filterBooks = (searchValue, books) => {
  const sanitizedSearchValue = searchValue.toLowerCase().replace(/\s+/g, ''); // Remove spaces from search input and convert to lowercase
  const searchGenres = sanitizedSearchValue.split(','); // Split search input into individual genres
  return books.filter((book) => {
  const sanitizedTitle = book.title.toLowerCase().replace(/\s+/g, ''); // Remove spaces from book title and convert to lowercase
  const sanitizedAuthor = book.author.toLowerCase().replace(/\s+/g, ''); // Remove spaces from book author and convert to lowercase
  const sanitizedTags = book.tags.map(tag => tag.toLowerCase().replace(/\s+/g, '')); // Remove spaces from tags and convert to lowercase
  const titleMatch = searchGenres.some(genre => sanitizedTitle.includes(genre));
  const authorMatch = searchGenres.some(genre => sanitizedAuthor.includes(genre));
  const tagsMatch = searchGenres.some(genre => sanitizedTags.includes(genre));
  return titleMatch || authorMatch || tagsMatch;
  });
  };
  // Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in helper.js
  const structureBooksAsHtml = (filteredBooks) => {
  return filteredBooks.map(book => structureBookAsHtml(book));
  };
  // Handler triggered when a user clickers the “Search” button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
  const searchBtnClickHandler = () => {
  const searchValue = captureSearchValue();
  const filteredBooks = filterBooks(searchValue, books);
  const formattedBooks = structureBooksAsHtml(filteredBooks);
  renderBooksToDom(formattedBooks);
  };
  
  // Grab search button from the DOM
  const searchBtn = document.getElementById('search-btn');
  // Attach an event listener to the search button
  searchBtn.addEventListener('click', searchBtnClickHandler);