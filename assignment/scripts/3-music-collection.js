console.log('***** Music Collection *****')

let collection = []; //create array collection which is empty (...but not for long!)

//----------building addToCollection function--------------------

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

console.log(' '); //create space for testing - hope I remember to delete this later!

// ----------building showCollection function--------------------

function showCollection(music){ //create showCollection function with parameter music
  console.log('Number of albums:', music.length); //log out the number of albums in the collection
  for(i=0; i < music.length; i++){
    console.log('"'+music[i].t+'" by', music[i].a ,'published in', music[i].y);
  }
}
showCollection(collection); //send collection array to music in showCollection function

// ----------building findByArtist function--------------------

function findByArtist( artist ){ //create findByArtist array
  let artistSearch = []; //create artistSearch array variable
  for(i=0; i<collection.length; i++){ //looping to check collection list for artist
    if(artist === collection[i].a){ //if artist name is equal to any name in the a dot operator of the array...
      artistSearch.push(collection[i].a) //...then add that artist name to the artistSearch array
      // return artistSearch;
    } //end if artist is in collection statement
  } //end loop checking if artist in collection
  return artistSearch;
} //end findByArtist function

console.log(' '); //creating a little space for console clarity...need to find a better way to do this...

console.log( 'Searching for "Van Halen" -', findByArtist( 'Van Halen' ));
console.log( 'Searching for "Offspring" -', findByArtist( 'Offspring' ));
console.log( 'Searching for "Smashing Pumpkins" -', findByArtist( 'Smashing Pumpkins' ));
console.log( 'Searching for "Insane Clown Posse" -', findByArtist( 'Insane Clown Posse' ));
