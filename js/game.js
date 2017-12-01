var title = document.getElementById('title');
var image = document.getElementById('image');
var text = document.getElementById('text');
var extraText = document.getElementById('extraText')
var options = document.getElementById('options');
var option1 = document.createElement("li");
var option2 = document.createElement("li");
var option3 = document.createElement("li");
var option4 = document.createElement("li");
var pryer = false;
var knife = false;
var key = false;
var showText = function(target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function() { showText(target, message, index, interval); }, interval);
    }
}


function start() {
  title.innerHTML = "welkom";
  image.src = "img/stage1.jpg";
  showText("#text",  " it’s Saturday evening, your friends (john, ally and kate) and u just came out of a bar and ally and kate decided to go home.", 0, 10);

  options.innerHTML = "";
  text.innerHTML = "";

  option1.innerHTML = "Start the game.";
  option1.setAttribute("onclick", "barOutside();");
  options.appendChild(option1);

}

start();

function barOutside() {
  title.innerHTML = "Bar outside";
  image.src = "img/stage1.jpg";

  options.innerHTML = "";
  text.innerHTML = "<b>kate</b>: 	it was a fun night!<br><b>ally</b>: 	yeah we should tottaly do it next week.<br><b>john</b>: 	that sounds great.<br><b>kate</b>:	ally and I are going to the train station the last train leaves in a few minutes. Bye (....) and john.<br><b>ally</b>:	bye guys.<br><b>kate</b>, <b>ally</b>: *walk away*<br><b>john</b>:	later. So (....) , we should probable head home too don’t you think (....).<br>";

  option1.innerHTML = "*walk home*";
  option1.setAttribute("onclick", "street();");
  options.appendChild(option1);
}

function street() {
  title.innerHTML = "Street";
  image.src = "img/stage2.jpg";

  options.innerHTML = "";
  text.innerHTML = "John: 	(....) should we take a shortcut through the abandoned rail yard or take the normal route.?";

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
  text.innerHTML = "<b>John</b>: 	do you see that guy over there he is just standing over there.<br> What is he doing over there?<br> HEY IS EVERYTHING ALRIGHT?!<br><b>Stranger</b>: ..........<br>  <b>(....)</b>: I don’t trust this we should go.<br><b>John</b>: 	your right this is creepy let’s go.<br><b>John</b> (....): *walking back*<br><b>Stranger</b>:  *walking towards john and you*<br><b>John</b>: do you hear that (....) he is walking towards us let’s run.<br><b>John</b>, <b>(....)</b>: *starting to run*<br><b>Stranger</b>: *starts to run*<br>..........<br>*BANG*";

  option1.innerHTML = "next";
  option1.setAttribute("onclick", "bedroomCabin();");
  options.appendChild(option1);
}

function normalRoute() {
  title.innerHTML = "underpass";
  image.src = "img/stage3b.jpg";

  options.innerHTML = "";
  text.innerHTML = "<b>john</b>:  	hey (....) do you notice the guy behind us?<br> he’s been behind us for a couple minutes now.<br><b>(....)</b>: 	let’s go to the right into the alley and go through the underpass to lose him.<br><b>john</b>:	that’s a good idea follow me.<br><b>john</b>: 	I think we lost him.<br> Maybe he wasn’t following us after al.<br><b>(....)</b>:	it could be at least he’s gone.<br> He freaked me out.<br><b>john</b>:	(....)……. He’s standing in the underpass.<br> What should we do?<br><b>(....)</b>: 	I think we should go.<br><b>john</b>: 	yeah that’s smart let’s get out of here.<br><b>john</b>, <b>(....)</b>: *walking back*<br><b>stranger</b>:  *walking towards john and you*<br><b>john</b>: 	do you hear that (....) he is walking towards us let’s run.<br><b>john</b> (....): *starting to run*<br><b>stranger</b>: *starts to run*<br>..........<br>*BANG*";

  option1.innerHTML = "next";
  option1.setAttribute("onclick", "bedroomCabin();");
  options.appendChild(option1);
}

function setPryerTrue() {
  pryer = true;
  bedroomCabin();
  extraText.innerHTML = "*<b>YOU'VE FOUND A PRYER</b>*";
}
function bedroomCabin() {
  title.innerHTML = "Bedroom";
  image.src = "img/stage4bedroom.jpg";

  options.innerHTML = "";
  text.innerHTML = "";

  option1.innerHTML = "Check the room for usable objects.";
  option1.setAttribute("onclick", "setPryerTrue()");
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
function rooms() {
  extraText.innerHTML = "";
  text.innerHTML = "<b>John</b>: where do you wanna go?";

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

function livingRoomCabin() {
  title.innerHTML = "Living room";
  image.src = "img/stage4livingroom.jpg";

  options.innerHTML = "";
  text.innerHTML = "";

  option1.innerHTML = "Check the room for usable objects.";
  option1.setAttribute("onclick", "");
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
function setKnifeTrue() {
  knife = true;
  atticCabin();
  extraText.innerHTML = "*<b>YOU FOUND A KNIFE</b>*";
}
function atticCabin() {
  title.innerHTML = "attic";
  image.src = "img/stage4attic.jpg";

  options.innerHTML = "";
  text.innerHTML = "";

  option1.innerHTML = "Check the room for usable objects.";
  option1.setAttribute("onclick", "setKnifeTrue();");
  options.appendChild(option1);

  option2.innerHTML = "Go to another room.";
  option2.setAttribute("onclick", "rooms();");
  options.appendChild(option2);
}

function setKeyTrue() {
  key = true;
  basementCabin();
  extraText.innerHTML = "*<b>YOU FOUND A KEY</b><br><b>John</b>: That looks like *";
}
function basementCabin() {
  title.innerHTML = "basement";
  image.src = "img/stage4basement.jpg";

  options.innerHTML = "";
  text.innerHTML = "";

  option1.innerHTML = "Check the room for usable objects.";
  option1.setAttribute("onclick", "setKeyTrue();");
  options.appendChild(option1);

  option2.innerHTML = "Go to another room.";
  option2.setAttribute("onclick", "rooms();");
  options.appendChild(option2);
}


function outsideCabin() {
  title.innerHTML = "Outside cabin";
  image.src = "img/stage5.jpg";

  options.innerHTML = "";
  text.innerHTML = "John: 	finally were outside I hope that guy won’t show up.<br>I think it’s best that we go to find a town or a road nearby.<br>(….):	yeah that’s the best idea<br>*leaves breaking in the distance*<br>John: 	Do you hear that (….).<br> I think that the  guy is coming back.<br>(….):	we need to make a run for it!<br>Stranger:  Get back here you two!<br> You can’t leave yet we need you for the ritual!<br>*stranger runs towards you*<br>John: look out (….) .<br>";

  option1.innerHTML = "*RUN AWAY";
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
  text.innerHTML = "John: 	finally we found a road I think we should wait for car to come by don’t you think (….)?";

  option1.innerHTML = "We should stand on the road so cars can see us better.";
  option1.setAttribute("onclick", "standOnRoad(); ");
  options.appendChild(option1);

  option2.innerHTML = "that’s smart we should do that.";
  option2.setAttribute("onclick", "standNextRoad();");
  options.appendChild(option2);
}

function standOnRoad() {
  dead();
  text.innerHTML = "John: Look (….) there is a car coming.<br> Stranger in a car: *hits the break*<br> .........<br> *BAM*"
}
function standNextRoad() {
  outsideRoad();
  options.innerHTML = "";
  text.innerHTML = "John: Look (….) there is a car coming.<br>(….): STOP THE CAR WE NEED HELP!<br>Stranger in a car:  *hits the break*<br>What is going on with the two of you?<br> "

  option1.innerHTML = "A stranger kidnaped us and locked us up in a cabin we barely got out.";
  option1.setAttribute("onclick", "(); ");
  options.appendChild(option1);

  option2.innerHTML = "we got lost in the woods and decided to stand by the road waiting for someone to pas by.";
  option2.setAttribute("onclick", "();");
  options.appendChild(option2);



}
