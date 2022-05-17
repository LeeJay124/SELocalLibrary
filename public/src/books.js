function findAuthorById(authors, id) {
  let result = authors.find((authors)=>authors.id === id);
  return result;
}

function findBookById(books, id) {
  let result = books.find((books)=>books.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
let borrowed = books.filter((book) => book.borrows[0].returned === false);
let returned = books.filter((book)=>book.borrows[0].returned === true);
return [borrowed, returned];
}

function getBorrowersForBook(book, accounts) {
  let borrowsArray = [];
  let borrowers = accounts.forEach((accounts)=>{
    for(let i = 0; i<book.borrows.length; i++){
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
