function findAuthorById(authors, id) {
  //function that finds the author by id
  let result = authors.find((authors)=>authors.id === id);
  return result;
}

function findBookById(books, id) {
  //function that finds books by their id
  let result = books.find((books)=>books.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  //function that gathers books that have been borrowed and returned in separate arrays, then combines them into another array
let borrowed = books.filter((book) => book.borrows[0].returned === false);
let returned = books.filter((book)=>book.borrows[0].returned === true);
return [borrowed, returned];
}

function getBorrowersForBook(book, accounts) {
  //function that returns all of the accounts that have borrowed a particular book
  let borrowsArray = [];
  let borrowers = accounts.forEach((accounts)=>{
    for(let i = 0; i<book.borrows.length; i++){
      //compares account id to the borrowed instance id, and pushes the account and status to an array
      if(accounts.id === book.borrows[i].id){
        borrowsArray.push(
          {
          ...accounts, 
          returned: book.borrows[i].returned
          }
        );
      }
    }
  });
  let limit = borrowsArray.slice(0,10);
  return limit;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
