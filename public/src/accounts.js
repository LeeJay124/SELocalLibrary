function findAccountById(accounts, id) {
  //arrow function to find the account by id and return the account
  let result = accounts.find((accounts)=>accounts.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
//arrow function that sorts the accounts by lastname using a ternary operation
  let result = accounts.sort((account1, account2)=>account1.name.last.toLowerCase() < account2.name.last.toLowerCase()? -1:1);
  return result;
}

function getTotalNumberOfBorrows(account, books) {
  //loops through the books and then their borrows to gather the number of borrows for a specific account
  let result = 0;
  let borrowed = [];
  //set account id to variable
  let currentAccount = account.id;
  let filter = books.forEach((books)=>{
    for(let i = 0; i<books.borrows.length;i++){
      //use account for comparison to borrow instance id
      if(books.borrows[i].id == currentAccount){
        borrowed.push(books.borrows[i].returned);
      }
    }  });
result = borrowed.length;
return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  //function that identified all books checked out by account
  let borrowed = [];
  //set account id to variable
  let currentAccount = account.id;
  let filter = books.forEach((books)=>{
    for(let i = 0; i<books.borrows.length;i++){
      //compare id to current account and push items that have not been returned
      if(books.borrows[i].id == currentAccount && books.borrows[i].returned === false){
        borrowed.push({...books, 
          author: authors.find((author)=>author.id === books.authorId)
        });
      }
    }  });
  return borrowed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
