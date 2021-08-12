console.log('***** Music Collection *****')

let collection = []; //create array collection which is empty (...but not for long!)

function addToCollection( title, artist, yearPublished ){ //begin function to add album to collection
    let album = { //creating album object
      t: title, //assign t dot operator title parameter/argument
      a: artist, //assign a dot operator album parameter/argument
      y: yearPublished }; //assign y dot operator yearPublished parameter/argument
    collection.push(album); //push album to collection
    return album; //return the album based on the three arguments
} //end addToCollection function


console.log('Added:', addToCollection('Smash', 'Offspring', 1994)); //adding album #1
console.log('Added:', addToCollection('Trololo', 'Eduard Khil', 1976)); //adding album #2
console.log('Added:', addToCollection('5150', 'Van Halen', 1986)); // etc for four more......
console.log('Added:', addToCollection('Diver Down', 'Van Halen', 1982));
console.log('Added:', addToCollection("This One's For You", 'Barry Manilow', 1976));
console.log('Added:', addToCollection('Carnival Of Carnage', 'Insane Clown Posse', 1992));


for(let items of collection){ //create quick for of loop to show albums more cleanly (hopefully that's ok)
  console.log(items); //log the array as explained
}
