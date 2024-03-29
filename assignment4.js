//Filtering and Capitalizing: Books Published After 2010 with Author Names.

let books = [
    { title: "Book 1", author: "author 1", year: 2008 },
    { title: "Book 2", author: "author 2", year: 2012 },
    { title: "Book 3", author: "author 3", year: 2009 },
    { title: "Book 4", author: "author 4", year: 2015 },
    { title: "Book 5", author: "author 5", year: 2005 }
  ];
  
  let filteredBooks = books.filter(book => book.year >= 2010)
                            .map(book => ({title: book.title, author: book.author.toUpperCase()}));
  
  console.log(filteredBooks);
  