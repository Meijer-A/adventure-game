var title = document.getElementById('title');
var image = document.getElementById('image');
var text = document.getElementById('text');
var extraText = document.getElementById('extraText');
var options = document.getElementById('options');
var option1 = document.createElement("li");
var option2 = document.createElement("li");
var option3 = document.createElement("li");
var option4 = document.createElement("li");

var pryer = false;
var knife = false;
var key = false;

var searchBedroom = false;
var searchLivingRoom = false;
var searchAttic = false;
var searchBasement = false;

// var showText = function(target, message, index, interval) {
//     if (index < message.length) {
//         $(target).append(message[index++]);
//         setTimeout(function() { showText(target, message, index, interval); }, interval);
//     }
// }  showText("#text",  " it’s Saturday evening, your friends (john, ally and kate) and u just came out of a bar and ally and kate decided to go home.", 0, 10);


function start() {
  pryer = false;
  knife = false;
  key = false;

  searchBedroom = false;
  searchLivingRoom = false;
  searchAttic = false;
  searchBasement = false;

  title.innerHTML = "welkom";
  image.src = "img/stage1.jpg";
  text.innerHTML =   " it’s Saturday evening, your name is Pete and you and your friends (john, ally and kate) and u just came out of a bar and ally and kate decided to go home.";

  options.innerHTML = "";
  option1.innerHTML = "Start the game.";
  option1.setAttribute("onclick", "barOutside();");
  options.appendChild(option1);

}

start();

function barOutside() {
  title.innerHTML = "Bar outside";
  image.src = "img/stage1.jpg";

  options.innerHTML = "";
  text.innerHTML = "kate: 	it was a fun night!<br>ally: 	yeah we should tottaly do it next week.<br>john: 	that sounds great.<br>kate:	ally and I are going to the train station the last train leaves in a few minutes. Bye Pete and john.<br>ally:	bye guys.<br>kate, ally: *walk away*<br>john:	later. So Pete , we should probable head home too don’t you think Pete.<br>";

  option1.innerHTML = "*walk home*";
  option1.setAttribute("onclick", "street();");
  options.appendChild(option1);
}

function street() {
  title.innerHTML = "Street";
  image.src = "img/stage2.jpg";

  options.innerHTML = "";
  text.innerHTML = "John: 	Pete should we take a shortcut through the abandoned rail yard or take the normal route.?";

  option1.innerHTML = "i'm in for a shortcut.<br>";
  option1.setAttribute("onclick", "shortcut();");
  options.appendChild(option1);

  option2.innerHTML = "i'm fine with the normal route.";
  option2.setAttribute("onclick", "normalRoute();");
  options.appendChild(option2);
}

function shortcut() {
  title.innerHTML = "abandoned rail yard";
  image.src = "img/stage3a.jpg";

  options.innerHTML = "";
  text.innerHTML = "John: 	do you see that guy over there he is just standing over there.<br> What is he doing over there?<br> HEY IS EVERYTHING ALRIGHT?!<br>Stranger: ..........<br>  Pete: I don’t trust this we should go.<br>John: 	your right this is creepy let’s go.<br>John Pete: *walking back*<br>Stranger:  *walking towards john and you*<br>John: do you hear that Pete he is walking towards us let’s run.<br>John, Pete: *starting to run*<br>Stranger: *starts to run*<br>..........<br>*BANG*";

  option1.innerHTML = "next";
  option1.setAttribute("onclick", "bedroomCabin();");
  options.appendChild(option1);
}

function normalRoute() {
  title.innerHTML = "underpass";
  image.src = "img/stage3b.jpg";

  options.innerHTML = "";
  text.innerHTML = "john:  	hey Pete do you notice the guy behind us?<br> he’s been behind us for a couple minutes now.<br>Pete: 	let’s go to the right into the alley and go through the underpass to lose him.<br>john:	that’s a good idea follow me.<br>john: 	I think we lost him.<br> Maybe he wasn’t following us after al.<br>Pete:	it could be at least he’s gone.<br> He freaked me out.<br>john:	Pete……. He’s standing in the underpass.<br> What should we do?<br>Pete: 	I think we should go.<br>john: 	yeah that’s smart let’s get out of here.<br>john, Pete: *walking back*<br>stranger:  *walking towards john and you*<br>john: 	do you hear that Pete he is walking towards us let’s run.<br>john Pete: *starting to run*<br>stranger: *starts to run*<br>..........<br>*BANG*";

  option1.innerHTML = "next";
  option1.setAttribute("onclick", "bedroomCabin();");
  options.appendChild(option1);
}

function rooms() {
  extraText.innerHTML = "";
  text.innerHTML = "John: where do you wanna go?";

  option1.innerHTML = "let's got to the bedroom.";
  option1.setAttribute("onclick", "bedroomCabin();");
  options.appendChild(option1);

  option2.innerHTML = "let's got to the living room.";
  option2.setAttribute("onclick", "livingRoomCabin();");
  options.appendChild(option2);

  option3.innerHTML = "let's got to the attic";
  option3.setAttribute("onclick", "atticCabin();");
  options.appendChild(option3);

  option4.innerHTML = "let's got to the basement";
  option4.setAttribute("onclick", "basementCabin();");
  options.appendChild(option4);
}

function searchingBedroom() {
  if (searchBedroom === true) {
    alert("you\'ve already searched the room.");
  } else {
    pryer = true;
    bedroomCabin();
    searchBedroom = true;
    extraText.innerHTML = "*YOU'VE FOUND A PRYER*";
  }
}
function bedroomCabin() {
  title.innerHTML = "Bedroom";
  image.src = "img/stage4bedroom.jpg";

  options.innerHTML = "";
  text.innerHTML = "John:	Pete are u awake. Pete?<br>Pete: 	I’m awake.<br> What happened John?<br>John: 	that guy hit you on the head, I tried to help but he was too strong and knocked me out as well.<br>Pete:	are u alright?<br>John: 	I’m alright.<br>Pete:  Let’s try to find our way out of here.<br>";

  option1.innerHTML = "Check the room for usable objects.";
  option1.setAttribute("onclick", "searchingBedroom()");
  options.appendChild(option1);

  option2.innerHTML = "Go to another room.";
  option2.setAttribute("onclick", "");
  if(pryer === true){
    option2.setAttribute("onclick", "rooms();");
  } else {
    option2.setAttribute("onclick", "alert('The door is locked. You need something to open it.')" );
  }
  options.appendChild(option2);
}

function searchingLivingRoom() {
  if (searchLivingRoom === true) {
  alert('you\'ve already searched the room.');
  } else {
    searchLivingRoom = true;
    livingRoomCabin();
    extraText.innerHTML = "*there seems to be nothing usefull in this room.*";
  }
}
function livingRoomCabin() {
  title.innerHTML = "Living room";
  image.src = "img/stage4livingroom.jpg";

  options.innerHTML = "";
  text.innerHTML = "";

  option1.innerHTML = "Check the room for usable objects.";
  option1.setAttribute("onclick", "searchingLivingRoom();");
  options.appendChild(option1);

  option2.innerHTML = "Go to another room.";
  option2.setAttribute("onclick", "rooms();");
  options.appendChild(option2);

  option3.innerHTML = "Open the front door.";
  option3.setAttribute("onclick", "");
  if(key === true){
    option3.setAttribute("onclick", "outsideCabin();");
  } else {
    option3.setAttribute("onclick", "alert('The door is locked.')" );
  }
  options.appendChild(option3);
}
function searchingAttic() {
  if (searchAttic === true) {
    alert('you\'ve already searched the room.');
  } else {
    knife = true;
    atticCabin();
    searchAttic = true;
    extraText.innerHTML = "*YOU FOUND A KNIFE*";
  }
}
function atticCabin() {
  title.innerHTML = "attic";
  image.src = "img/stage4attic.jpg";

  options.innerHTML = "";
  text.innerHTML = "";

  option1.innerHTML = "Check the room for usable objects.";
  option1.setAttribute("onclick", "searchingAttic();");
  options.appendChild(option1);

  option2.innerHTML = "Go to another room.";
  option2.setAttribute("onclick", "rooms();");
  options.appendChild(option2);
}

function searchingBasement() {
  if (searchBasement === true) {
    alert('you\'ve already searched the room.');
  } else {
    key = true;
    basementCabin();
    searchBasement = true;
    extraText.innerHTML = "*YOU FOUND A KEY*<br>John: That looks like the key for the front door.";
  }
}
function basementCabin() {
  title.innerHTML = "basement";
  image.src = "img/stage4basement.jpg";

  options.innerHTML = "";
  text.innerHTML = "";

  option1.innerHTML = "Check the room for usable objects.";
  option1.setAttribute("onclick", "searchingBasement();");
  options.appendChild(option1);

  option2.innerHTML = "Go to another room.";
  option2.setAttribute("onclick", "rooms();");
  options.appendChild(option2);
}


function outsideCabin() {
  title.innerHTML = "Outside cabin";
  image.src = "img/stage5.jpg";

  options.innerHTML = "";
  text.innerHTML = "John: 	finally were outside I hope that guy won’t show up.<br>I think it’s best that we go to find a town or a road nearby.<br>Pete:	yeah that’s the best idea<br>*leaves breaking in the distance*<br>John: 	Do you hear that Pete.<br> I think that the  guy is coming back.<br>Pete:	we need to make a run for it!<br>Stranger:  Get back here you two!<br> You can’t leave yet we need you for the ritual!<br>*stranger runs towards you*<br>John: look out Pete .<br>";

  option1.innerHTML = "*RUN AWAY*";
  option1.setAttribute("onclick", "strangerHit();");
  options.appendChild(option1);
  if (knife === true) {
    option2.innerHTML = "*STAB THE STRANGER*";
    option2.setAttribute("onclick", "strangerKil();");
    options.appendChild(option2);
  }
}
function dead() {
  title.innerHTML = "YOU DEAD";
  image.src = "img/died.jpg";

  options.innerHTML = "";
  text.innerHTML = "";

  option1.innerHTML = "Restart";
  option1.setAttribute("onclick", "start(); ");
  options.appendChild(option1);
}
function strangerHit() {
  dead();
  text.innerHTML = "the stranger ran faster, he hit you over the head and you died."
}
function strangerKil() {
  outsideCabin();
  text.innerHTML = "John:	you killed him! At least he can’t kill us now let’s go now there could be more people nearby."

  options.innerHTML = "";

  option2.innerHTML = "next";
  option2.setAttribute("onclick", "outsideRoad();");
  options.appendChild(option2);
}
function outsideRoad() {
  title.innerHTML = "A road";
  image.src = "img/stage6.jpg";

  options.innerHTML = "";
  text.innerHTML = "John: 	finally we found a road I think we should wait for car to come by don’t you think Pete?";

  option1.innerHTML = "We should stand on the road so cars can see us better.";
  option1.setAttribute("onclick", "standOnRoad(); ");
  options.appendChild(option1);

  option2.innerHTML = "that’s smart we should do that.";
  option2.setAttribute("onclick", "standNextRoad();");
  options.appendChild(option2);
}

function standOnRoad() {
  dead();
  text.innerHTML = "John: Look Pete there is a car coming.<br> Stranger in a car: *hits the break*<br> .........<br> *BAM*"
}
function standNextRoad() {
  outsideRoad();
  options.innerHTML = "";
  text.innerHTML = "John: Look Pete there is a car coming.<br>Pete: STOP THE CAR WE NEED HELP!<br>Stranger in a car:  *hits the break*<br>What is going on with the two of you?<br> "

  option1.innerHTML = "A stranger kidnaped us and locked us up in a cabin we barely got out.";
  option1.setAttribute("onclick", "roadEnding();");
  options.appendChild(option1);

  option2.innerHTML = "we got lost in the woods and decided to wait here  .";
  option2.setAttribute("onclick", "roadEnding();");
  options.appendChild(option2);


}

function roadEnding() {
  title.innerHTML = "you've won";
  image.src = "img/winner.gif ";

  options.innerHTML = "";
  text.innerHTML = "Stranger in car: get in car guy’s I will drive you two home.<br>John Pete: thank you so much sir.<br> The stranger brought you and John home and you both had a great story to tell.";

  option1.innerHTML = "Restart";
  option1.setAttribute("onclick", "start(); ");
  options.appendChild(option1);


}
//
// function onTheRoad() {
//   title.innerHTML = "A highway";
//   image.src = "img/stage7.jpg";
//
//   options.innerHTML = "";
//   text.innerHTML = "";
//
//   option1.innerHTML = "We should stand on the road so cars can see us better.";
//   option1.setAttribute("onclick", "(); ");
//   options.appendChild(option1);
//
//   option2.innerHTML = "that’s smart we should do that.";
//   option2.setAttribute("onclick", "();");
//   options.appendChild(option2);
// }
