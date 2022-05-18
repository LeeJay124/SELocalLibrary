function getTotalBooksCount(books) {
  //function that returns the length of the objects keys as the total book count
  let result = Object.keys(books).length;
  return result;
}

function getTotalAccountsCount(accounts) {
  //function that returns the total accounts using array length
  let result= accounts.length;
  return result;
}

function getBooksBorrowedCount(books) {
  //function that returns the count of all of hte books borrowed, returned = false
  let result = 0;
  let borrowed = [];
  let filter = books.forEach((books)=>{
    for(let i = 0; i<books.borrows.length;i++){
      if(books.borrows[i].returned == false){
        borrowed.push(books.borrows[i].id);
      }
    }  });
  result = borrowed.length;

return result;
  
}

function getMostCommonGenres(books) {

  //collect the genres
  let genresArray = [];
  let genres = books.reduce((obj, item)=>{
    if(obj[item.genre]) {
      obj[item.genre]++;
    }
    else {
      obj[item.genre]=1;
    }
    return obj;
  },{});

//push items to array of object
 genresArray = mapGenreObjectToArray(genres);

//sort the genres, get the top 5
  let sorted = genresArray.sort((genre1, genre2)=>genre2.count - genre1.count);
  let sliced = sorted.slice(0,5);
  return sliced;
}
function mapGenreObjectToArray(genres){
  let genresArray=[];
//helper function that maps genres from object to array
  for(let item in genres){
    genresArray.push({
      name: item,
      count: genres[item]
    });
  }
  return genresArray;
}
function getMostPopularBooks(books) {
  let borrowedArray = [];
  //get borrows to count
  let borrowed = books.reduce((obj, item)=>{
    obj[item.title] = item.borrows.length;
    return obj;
  },{});

  //push the items to an array
  for(let item in borrowed){
    borrowedArray.push({
      name: item,
      count: borrowed[item]
    });
  }
  //sort the borrowed, get the top 5
  let sorted = borrowedArray.sort((borrow1, borrow2)=>borrow2.count - borrow1.count);
  let sliced = sorted.slice(0,5);
  return sliced;
}

// function getMostPopularAuthors(books, authors) {
//   let borrowedArray = [];
//   //let total =0;
//   //get borrows to count
//   let borrowed = authors.reduce((obj, item)=>{let total =0;
//     obj[`${item.name.first} ${item.name.last}`] = 
//       books.forEach((book)=>{
//         if(book.authorId == item.id){
//           total = total + book.borrows.length;
//           //console.log(total);
//         }
//         // console.log(total);
        
//       });
//       console.log(total);
//     return obj;
//   },{});
//     console.log(borrowed);
//   //push the items to an array
//   for(let item in borrowed){
//     borrowedArray.push({
//       name: item,
//       count: borrowed[item]
//     });
//   }
//   console.log(borrowedArray);
//   //sort the borrowed, get the top 5
//   let sorted = borrowedArray.sort((borrow1, borrow2)=>borrow2.count - borrow1.count);
//   let sliced = sorted.slice(0,5);
//   console.log(sliced);
//   return sliced;
// }
function getMostPopularAuthors(books, authors) { 
  //let borrowedArray = []; 
  // let total = 0; 
  //get borrows to count 
  // let borrowed = authors.reduce((obj, item) => { 
  //   let total = 0; books.forEach((book) => { 
  //     if (book.authorId == item.id) { 
  //       total = total + book.borrows.length; 
  //     } 
  //   }); obj[`${item.name.first} ${item.name.last}`] = total; 
  //   return obj; 
  // }, {});  

  let newBorrowed = authors.map((author)=>{
    let mapObj = {};
    let total = 0;
    books.reduce((mapObj, book)=>{
      //books.forEach((book) => { 
            if (book.authorId == author.id) { 
              total = total + book.borrows.length; 
            } 
            return total;
      //});
      
});
mapObj.name = `${author.name.first} ${author.name.last}`,
      mapObj.count = total;
  return mapObj;
});
  //push the items to an array 
  // for (let item in borrowed) { 
  //   borrowedArray.push({ name: item, count: borrowed[item], 
  //   }); 
  // } 
  //map borrowed to show just name
  // let map = borrowedArray.map((borrowed)=>`${borrowed.name}:${borrowed.count}`);
  // console.log(map);
  //sort the borrowed, get the top 5 
  let sorted = newBorrowed.sort((borrow1, borrow2) => borrow2.count - borrow1.count ); 
  console.log(sorted);
  let sliced = sorted.slice(0, 5); 
  console.log(sorted);
  return sliced; 
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
