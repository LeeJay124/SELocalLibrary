function findAccountById(accounts, id) {
  let result = accounts.find((accounts)=>accounts.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {

  let result = accounts.sort((account1, account2)=>account1.name.last.toLowerCase() < account2.name.last.toLowerCase()? -1:1);
  return result;
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0;
  let borrowed = [];
  let currentAccount = account.id;
  let filter = books.forEach((books)=>{
    for(let i = 0; i<books.borrows.length;i++){
      //console.log(books.borrows[i]);
      if(books.borrows[i].id == currentAccount){
        borrowed.push(books.borrows[i].returned);
      }
    }  });
  // console.log(borrowed);
result = borrowed.length;

return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  let borrowed = [];
  let currentAccount = account.id;
  let filter = books.forEach((books)=>{
    for(let i = 0; i<books.borrows.length;i++){
      //console.log(books.borrows[i]);
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
