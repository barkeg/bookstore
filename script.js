// Click handler for search button
const captureSearchValue = () => {
    //get document element by id from 'search-bar'
    const input = document.getElementById('search-bar').value;
    //return the input Id
    return input;
  };
  
  // Filter books based on search input
  const filterBooks = (input, books) => {
    //create empty array
    const filteredBooks = [];
    // call helper fx
    let flattenedBooks = flattenObjecValuesIntoArray(books);
  };
  
  // Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
  const structureBooksAsHtml = () => {
  
  };
  
  // Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
  const searchBtnClickHandler = () => {
  
  }
  
  // Grab search button from the DOM
  
  
  // Attach an event listener to the search button
  searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });