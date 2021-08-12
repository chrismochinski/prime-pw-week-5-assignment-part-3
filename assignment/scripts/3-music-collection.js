console.log('***** Music Collection *****')

let collection = [];

function addToCollection( title, artist, yearPublished ){ //begin function to add album to collection
    let album = { //creating album object
      t: title, //assign t dot operator title parameter/argument
      a: artist, //assign a dot operator album parameter/argument
      y: yearPublished }; //assign y dot operator yearPublished parameter/argument
    collection.push(album); //push album to collection
    return album; //return the album based on the three arguments
} //end addToCollection function


addToCollection('Smash', 'Offspring', 1994); //adding album
addToCollection('Trololo', 'Eduard Khil', 1976); //adding another album
addToCollection('5150', 'Van Halen', 1986); // etc for four more
addToCollection('Diver Down', 'Van Halen', 1982);
addToCollection("This One's For You", 'Barry Manilow', 1976);
addToCollection('Carnival Of Carnage', 'Insane Clown Posse', 1992);

console.log(collection);



// for(let items of collection)
//   console.log(items);
