// 1. Assign the message "Hello, World!" to a variable.
  let x = "Hello, World"
  console.log(x)

// 2. Assign a different string to a different variable.
  let y = "Goodbye"
  console.log(y)

// 3. Assign a number to a variable.
  let z = 10
  console.log(z)

// 4. Use string concatenation to display the number from #3 in a string.
  console.log(x + z)


// 5. Make an array of at least four of your favorite movies or books or bands.
  const books = ["The Poisonwood Bible", "Sick Puppy", "The Velveteen Rabit", "A Sick Day for Amos McGee"]
  console.log(books)

// 6. Make a object of information about yourself with at least four properties.
  const info = {Name: "Melissa Wykell", Age: "35 Years Old", Born: "From Ohio", Loves: "I Love Dogs!"}
  console.log(info)

//7.

const movies = [
  {Title: "American Beauty",
  Year: 1929,
  Rating: 10
},
  {Title: "Finding Nemo",
  Year: 2014,
  Rating: 10
},
  {Title: "The Notebook",
  Year: 2016,
  Rating: 5
},
  {Title: "Moana",
  Year: 2016,
  Rating: 8
}
]

//8. Use `for` to loop through the answer from exercise #7 and print only one property from the object. i.e., given `{ title: "Gone with the Wind" }` you print "Gone with the Wind".

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i].Title)
}
