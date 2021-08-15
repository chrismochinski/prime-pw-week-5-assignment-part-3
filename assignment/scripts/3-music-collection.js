console.log('***** Music Collection *****')

console.log(' '); //create space for testing - hope I remember to delete this later!

let collection = []; //create array collection which is empty (...but not for long!)

//----------building addToCollection function--------------------

function addToCollection( title, artist, yearPublished, tracks){ //begin function to add album to collection
    let album = { //creating album object
      title: title, //assign title property/dot operator title parameter/argument
      artist: artist, //assign artist property/dot operator album parameter/argument
      yearPublished: yearPublished, //assign yearPublished property/dot operator yearPublished parameter/argument
      tracks: tracks } //assign trackListing property/dot operator for "track listing" - first five only, for test sake
    collection.push(album); //push album to collection
    return album; //return the album based on the three arguments
} //end addToCollection function


console.log('Added:', addToCollection('Smash', 'Offspring', 1994, ['1. Time To Relax (0:25)', '2. Nitro(Youth Energy) (2:27)', '3. Bad Habit (3:44)', '4. Gotta Get Away (3:52)', '5. Genocide (3:33)', '6. Something To Believe In (3:17)', '7. Come Out And Play (3:17)','8. Self Esteem (4:17)', "9. It'll Be A Long Time (2:43)", '10. Killboy Powerhead (2:02)', '11. What Happened To You? (2:12)', '12. So Alone (1:17)', '13. Not The One (2:54)', '14. Smash (10:42)'])); //adding album #1
console.log('Added:', addToCollection('Dizzy Up The Girl', 'Goo Goo Dolls', 1998, ['1. Dizzy (2:43)', '2. Slide (3:34)', '3. Broadway (4:00)', '4. January Friend (2:46)', '5. Black Balloon (4:11)', '6. Bullet Proof (4:39)', '7. Amigone (3:17)', '8. All Eyes On Me (3:59)', '9. Full Forever (2:53)', '10. Acoustic #3 (1:58)', '11. Iris (4:51)', '12. Extra Pale (2:12)', '13. Hate This Place (4:24)'])); //adding album #2
console.log('Added:', addToCollection('5150', 'Van Halen', 1986, ['1. Good Enough (4:05)', "2. Why Can't This Be Love (3:48)", '3. Get Up (4:37)', '4. Dreams (4:54)', '5. Summer Nights (5:06)', '6. Best Of Both Worlds (4:49)', '7. Love Walks In (5:11)', '8. 5150 (5:44)', '9. Inside (5:02)'])); // etc for four more......
console.log('Added:', addToCollection('Diver Down', 'Van Halen', 1982, ['1. Where Have All The Good Times Gone? (3:04)', "2. Hang 'Em High (3:29)", '3. Cathedral (1:23)', '4. Secrets (3:27)', '5. Intruder (1:40)', '6. (Oh) Pretty Woman (2:55)', '7. Dancing In The Street (3:45)', '8. Little Guitars(intro) (0:42)', '9. Little Guitars (3:49)', '10. Big Bad Bill(Is Sweet William Now) (2:44)', '11. The Full Bag (3:18)', '12. Happy Trails (1:03)']));
console.log('Added:', addToCollection("This One's For You", 'Barry Manilow', 1976, ["1. This One's For You (3:28)", '2. Daybreak (3:08)', '3. You Oughta Be Home With Me (3:13)', '4. Jump Shout Boogie (3:03)', '5. Weekend In New England (3:45)', '6. Riders To The Stars (3:47)', '7. Let Me Go (3:58)', '8. Looks Like We Made It (3:33)', '9. Say The Words (2:53)', '10. All The Time (3:16)', '11. See The Show Again (4:32)']));
console.log('Added:', addToCollection('Carnival Of Carnage', 'Insane Clown Posse', 1992, ['1. (Intro) (1:22)', '2. Carnival Of Carnage (2:32)', '3. The Juggla (4:55)', '4. First Day Out (4:21)', '5. Red Neck Hoe (4:50)', '6. Wizard Of The Hood (5:24)', '7. Guts On The Ceiling (4:25)', '8. Is That You? (3:59)', '9. Night Of The Axe (4:59)', '10. Psychopathic (4:43)', "11. Blackin' Your Eyes (4:40)", '12. Never Had It Made (5:46)', '13. Your Rebel Flag (4:23)', '14. Ghetto Freak Show (3:45)', '15. Taste (5:38)']));

console.log(' '); //create space for testing - hope I remember to delete this later!

for(let items of collection){ //create quick for of loop to show albums more cleanly (hopefully that's ok)
  console.log(items); //log the array as explained
}

console.log(' '); //create space for testing - hope I remember to delete this later!

// ----------building showCollection function--------------------


function showCollection(music){ //create showCollection function with parameter music
  console.log('Number of albums:', music.length); //log out the number of albums in the collection
  for(let i=0; i < music.length; i++){ // typical loop time checking through what comes into the showCollection function as music
    // console.log('"'+music[i].title+'" by', music[i].artist ,'published in', music[i].yearPublished); // this was my first console log of the album info, using regular syntax
    console.log(' '); //add space for clarity - must find a better way!
    console.log(`"${music[i].title}" by ${music[i].artist}, published ${music[i].yearPublished}.`); //I haven't played with "template literals" much and, in this case, it felt better...right?
    for(jams of music[i].tracks){ //for of loop for "jams" of my music parameter
      console.log(jams); // log the jams!
    } // end loop to log track listing
  } // end loop to lock album info
} //end showCollection function
showCollection(collection); //send collection array to music in showCollection function

console.log(' '); //creating a little space for console clarity...need to find a better way to do this...


// ----------building findByArtist function--------------------

function findByArtist( artist ){ //create findByArtist array
  let artistSearch = []; //create artistSearch array variable
  for(let i=0; i<collection.length; i++){ //looping to check collection list for artist
    if(artist === collection[i].artist){ //if artist name is equal to any name in the a dot operator of the array...
      artistSearch.push(collection[i].artist) //...then add that artist name to the artistSearch array
      // return artistSearch;
    } //end if artist is in collection statement
  } //end loop checking if artist in collection
  return artistSearch; //return the array of matches
} //end findByArtist function

console.log(' '); //creating a little space for console clarity...need to find a better way to do this...

console.log( 'Looking for "Van Halen" -', findByArtist( 'Van Halen' ));
console.log( 'Looking for "Offspring" -', findByArtist( 'Offspring' ));
console.log( 'Looking for "Smashing Pumpkins" -', findByArtist( 'Smashing Pumpkins' ));
console.log( 'Looking for "Insane Clown Posse" -', findByArtist( 'Insane Clown Posse' ));

console.log(' '); //creating a little space for console clarity...need to find a better way to do this...

//--------------------------------------------------
//---------------STRETCH STUFF!!--------------------

function search( info ){ //create search function with info parameter
  let content = []; //create empty array called content
  for(let i=0; i<collection.length; i++){ //looping to check collection list for artist
    if(info.artist === collection[i].artist && info.year === collection[i].yearPublished){ // if the artist property of the argument object is equal to the a dot operator in [i] array of the collection AAAANNNNDDDD the year object property is equal to the y dot operator in the collection...
      content.push(info.artist, collection[i].title, info.year, collection[i].tracks); // see the *** li in index.html
    } //end conditional
    if(info.artist == null){ //if the argument is blank
      return collection; //return the original collection
    } // end if blank
  } //end for loop
  return content; //return content array
} //end search function

console.log(search({ artist: 'Ray Charles', year: 1957 })); //sending argumOkay ents as anonymous object with properties artist and year
console.log(search({ artist: 'Offspring', year: 1994 })); //sending arguments as anonymous object with properties artist and year
console.log(search({ artist: 'Tonic', year: 1998 })); //sending arguments as anonymous object with properties artist and year
console.log(search({      })); //sending argument as anonymous object with property blank
console.log(search({ artist: 'Insane Clown Posse', year: 1992 })); //sending arguments as anonymous object with properties artist and year
console.log(search({ artist: 'Van Halen', year: 1985 })); //sending arguments as anonymous object with properties artist and year
console.log(search({})); //sending argument as anonymous object with property blank

//--------------------------------------------------
//---------------STRETCH STUFF P2!------------------

// see above for changes
