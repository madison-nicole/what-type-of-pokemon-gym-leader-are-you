var data = {
    "title": "What Type of Pokemon Gym Leader are You?",
    "header_image": "media/pokemon-header.jpg",
    "outcomes": {
            "normal":   {
                            "img": "media/outcome-normal.jpg", 
                            "type": "Normal",
                            "text": "You are a normal type gym leader, like the legendary Whitney of Johto and the overworked, underpaid Larry of Paldea. You are friendly and approachable, like the designs of your team of normal types. You have common interests and enjoy the basics in life. As a normal type leader, you are liked by most without many enemies. While you are strong against most adversities, you often avoid controversy and fighting. Deep down, you disregard superficialities and care most about the things that really matter."
                        },
            "fire":     {
                            "img": "media/outcome-fire.jpg", 
                            "type": "Fire",
                            "text": "You are a fire type gym leader, like our fiery girl Mela of Paldea and the powerful Kabu of Galar. You love the summer sunshine and the latest fashion trends, but even without the trends, your aesthetic is usually pretty fire, no pun intended. You might be feisty, but we know that feistiness comes from spirit and true passion. You will achieve your dreams."
                        },
            "water":    {
                            "img": "media/outcome-water.jpg", 
                            "type": "Water",
                            "text": "You are a water type gym leader—like Nessa the mermaid model of Galar, our best girl Misty of Kanto, the dangerous Crasher Wake of Sinnoh, and the hilarious Kofu of Paldea. You thrive near the water, of course, whether it be the beach, the swim club, or the hot tub. You're bubbly and outgoing with a group of friends that love your energy. While being chill most of the time, you still lead your team to victory with fierce determination. I'll see you at the Pokemon League this year for sure! "
                        },
            "grass":    {
                            "img": "media/outcome-grass.jpg", 
                            "type": "Grass",
                            "text": "You are."
                        },
            "electric": {
                            "img": "media/outcome-electric.jpg", 
                            "type": "Electric",
                            "text": "You are."
                        },
            "ice":      {
                            "img": "media/outcome-ice.jpg", 
                            "type": "Ice",
                            "text": "You are."
                        },
            "fighting": {
                            "img": "media/outcome-fighting.jpg", 
                            "type": "Fighting",
                            "text": "You are."
                        },
            "poison":   {
                            "img": "media/outcome-poison.jpg", 
                            "type": "Poison",
                            "text": "You are."
                        },
            "ground":   {
                            "img": "media/outcome-ground.jpg", 
                            "type": "Ground",
                            "text": "You are."
                        },
            "flying":   {
                            "img": "media/outcome-flying.jpg", 
                            "type": "Flying",
                            "text": "You are."
                        },
            "psychic":  {
                            "img": "media/outcome-psychic.jpg", 
                            "type": "Psychic",
                            "text": "You are."
                        },
            "bug":      {
                            "img": "media/outcome-bug.jpg", 
                            "type": "Bug",
                            "text": "You are."
                        },
            "rock":     {
                            "img": "media/outcome-rock.jpg", 
                            "type": "Rock",
                            "text": "You are."
                        },
            "ghost":    {
                            "img": "media/outcome-ghost.jpg", 
                            "type": "Ghost",
                            "text": "You are."
                        },
            "dragon":   {
                            "img": "media/outcome-dragon.jpg", 
                            "type": "Dragon",
                            "text": "You are."
                        },
            "dark":     {
                            "img": "media/outcome-dark.jpg", 
                            "type": "Dark",
                            "text": "You are."
                        },
            "steel":    {
                            "img": "media/outcome-steel.jpg", 
                            "type": "Steel",
                            "text": "You are."
                        },
            "fairy":    {
                            "img": "media/outcome-fairy.jpg", 
                            "type": "Fairy",
                            "text": "You are."
                        }
    },
    "questions": [
        {
            "question": "Pick a Pokemon for your team!",
            "answer_style": "img-only",
            "answers": [
                {
                    "text": "pikachu",
                    "img_url": "media/pikachu.png",
                    "outcome": ["electric"]
                },
                {
                    "text": "charizard",
                    "img_url": "media/charizard.png",
                    "outcome": ["fire", "flying"]
                },
                {
                    "text": "greninja",
                    "img_url": "media/greninja.png",
                    "outcome": ["dark", "water"]
                },
                {
                    "text": "snorlax",
                    "img_url": "media/snorlax.png",
                    "outcome": ["normal"]
                },
                {
                    "text": "lucario",
                    "img_url": "media/lucario.png",
                    "outcome": ["fighting", "steel"]
                },
                {
                    "text": "mamoswine",
                    "img_url": "media/mamoswine.png",
                    "outcome": ["ice", "ground"]
                },  
                {
                    "text": "dragapult",
                    "img_url": "media/dragapult.png",
                    "outcome": ["dragon", "ghost"]
                },
                {
                    "text": "gengar",
                    "img_url": "media/gengar.png",
                    "outcome": ["poison", "ghost"]
                },
                {
                    "text": "umbreon",
                    "img_url": "media/umbreon.png",
                    "outcome": ["dark"]
                },
                {
                    "text": "gardevoir",
                    "img_url": "media/gardevoir.png",
                    "outcome": ["psychic", "fairy"]
                },
                {
                    "text": "venusaur",
                    "img_url": "media/venusaur.png",
                    "outcome": ["poison", "grass"]
                },
                {
                    "text": "shuckle",
                    "img_url": "media/shuckle.png",
                    "outcome": ["bug", "rock"]
                },
                {
                    "text": "tyranitar",
                    "img_url": "media/tyranitar.png",
                    "outcome": ["dark", "rock"]
                },
                {
                    "text": "scizor",
                    "img_url": "media/scizor.png",
                    "outcome": ["bug", "steel"]
                },
                {
                    "text": "clefable",
                    "img_url": "media/clefable.png",
                    "outcome": ["fairy"]
                }
            ]
        },

        {
            "question": "Where would you prefer to live?",
            "answer_style": "img-text",
            "answers": [
                {
                    "text": "The Beach",
                    "img_url": "media/beach.jpg",
                    "outcome": ["water"]
                },
                {
                    "text": "The Misty Mountains",
                    "img_url": "media/misty-mountains.jpeg",
                    "outcome": ["grass", "dragon", "fairy"]
                },
                {
                    "text": "The Desert",
                    "img_url": "media/desert.jpeg",
                    "outcome": ["ground", "fire"]
                },
                {
                    "text": "A Winter Wonderland",
                    "img_url": "media/winter-wonderland.jpeg",
                    "outcome": ["ice", "rock"]
                },
                {
                    "text": "The Big City",
                    "img_url": "media/big-city.jpeg",
                    "outcome": ["steel", "electric", "fighting"]
                },
                {
                    "text": "The Forest",
                    "img_url": "media/forest.jpeg",
                    "outcome": ["fairy", "poison", "grass"]
                },
                {
                    "text": "A Haunted Village",
                    "img_url": "media/haunted-village.jpeg",
                    "outcome": ["dark", "ghost", "psychic"]
                },
                {
                    "text": "A Small Town",
                    "img_url": "media/small-town.jpg",
                    "outcome": ["normal"]
                },
                {
                    "text": "A Butterfly Garden",
                    "img_url": "media/butterfly-garden.jpeg",
                    "outcome": ["flying", "bug"]
                },
                {
                    "text": "Always Traveling!",
                    "img_url": "media/traveling.gif",
                    "outcome": ["flying", "electric"]
                }
            ]
        },
        {
            "question": "Which is your favorite activity?",
            "answer_style": "text-only",
            "answers": [
                {
                    "text": "working out",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["fighting"]
                },
                {
                    "text": "swimming",
                    "answer_bg": "rgb(204, 191, 82)",
                    "outcome": ["water"]
                },
                {
                    "text": "reading a fantasy book",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["fairy"]
                },
                {
                    "text": "hiking",
                    "answer_bg": "rgb(176, 163, 51)",
                    "outcome": ["grass"]
                },
                {
                    "text": "rock climbing",
                    "answer_bg": "rgb(233, 184, 169)",
                    "outcome": ["rock"]
                },
                {
                    "text": "sunbathing",
                    "answer_bg": "rgb(176, 163, 51)",
                    "outcome": ["fire"]
                },
                {
                    "text": "studying chemistry",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["poison"]
                },
                {
                    "text": "just chilling with friends",
                    "answer_bg": "rgb(204, 191, 82)",
                    "outcome": ["normal"]
                },
                {
                    "text": "ziplining",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["flying"]
                },
                {
                    "text": "playing any and all video games",
                    "answer_bg": "rgb(176, 163, 51)",
                    "outcome": ["electric"]
                },
                {
                    "text": "catching fireflies",
                    "answer_bg": "rgb(233, 184, 169)",
                    "outcome": ["bug"]
                },
                {
                    "text": "accidentally staying up all night long",
                    "answer_bg": "rgb(176, 163, 51)",
                    "outcome": ["dark"]
                },
                {
                    "text": "horror games with friends",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["ghost"]
                },
                {
                    "text": "reading tarot cards",
                    "answer_bg": "rgb(204, 191, 82)",
                    "outcome": ["psychic"]
                },
                {
                    "text": "slaying monsters in an RPG",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["dragon"]
                },
                {
                    "text": "hanging in discord vc",
                    "answer_bg": "rgb(176, 163, 51)",
                    "outcome": ["electric"]
                },
                {
                    "text": "gardening",
                    "answer_bg": "rgb(233, 184, 169)",
                    "outcome": ["ground"]
                },
                {
                    "text": "walking downtown in the city",
                    "answer_bg": "rgb(176, 163, 51)",
                    "outcome": ["steel"]
                },
                {
                    "text": "skiing",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["ice"]
                },
                {
                    "text": "traveling to new places",
                    "answer_bg": "rgb(204, 191, 82)",
                    "outcome": ["flying"]
                },
                {
                    "text": "cooking",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["poison"]
                }
            ]
        },
        {
            "question": "Which of these best describes your aesthetic?",
            "answer_style": "bg-img-text",
            "answers": [
                {
                    "text": "fairycore",
                    "img_url": "media/fairycore.jpg",
                    "outcome": ["fairy"]
                },
                {
                    "text": "egirl ~ eboy",
                    "img_url": "media/egirl.JPG",
                    "outcome": ["electric"]
                },
                {
                    "text": "alternative",
                    "img_url": "media/alternative.jpg",
                    "outcome": ["dark"]
                },
                {
                    "text": "indie",
                    "img_url": "media/indie.jpg",
                    "outcome": ["psychic", "poison"]
                },
                {
                    "text": "goth",
                    "img_url": "TBD",
                    "outcome": ["dark", "ghost"]
                },
                {
                    "text": "sporty",
                    "img_url": "TBD",
                    "outcome": ["fighting", "flying"]
                },
                {
                    "text": "streetwear",
                    "img_url": "TBD",
                    "outcome": ["fire"]
                },
                {
                    "text": "cottagecore",
                    "img_url": "TBD",
                    "outcome": ["grass"]
                },
                {
                    "text": "beachy",
                    "img_url": "TBD",
                    "outcome": ["water"]
                },
                {
                    "text": "cyberpunk",
                    "img_url": "TBD",
                    "outcome": ["steel", "electric"]
                },
                {
                    "text": "casual",
                    "img_url": "TBD",
                    "outcome": ["normal"]
                },
                {
                    "text": "lots of neutrals",
                    "img_url": "TBD",
                    "outcome": ["ground"]
                },
                {
                    "text": "outdoorsy",
                    "img_url": "TBD",
                    "outcome": ["grass", "ground", "rock"]
                },
                {
                    "text": "lots of bling",
                    "img_url": "TBD",
                    "outcome": ["rock"]
                }
            ]
        },
        {
            "question": "What are you most afraid of?",
            "answer_style": "text-only",
            "answers": [
                {
                    "text": "heights",
                    "answer_bg": "",
                    "outcome": ["grass", "poison", "bug"]
                },
                {
                    "text": "the ocean",
                    "answer_bg": "rgb(202, 227, 253)",
                    "outcome": ["fire", "ground", "rock"]
                },
                {
                    "text": "the dark",
                    "answer_bg": "",
                    "outcome": ["psychic", "ghost"]
                },
                {
                    "text": "the wilderness",
                    "answer_bg": "rgb(212, 228, 50)",
                    "outcome": ["water", "ground", "rock"]
                },
                {
                    "text": "spiders",
                    "answer_bg": "",
                    "outcome": ["grass", "psychic", "dark"]
                },
                {
                    "text": "ghosts",
                    "answer_bg": "",
                    "outcome": ["flying", "ghost"]
                },
                {
                    "text": "earthquakes",
                    "answer_bg": "",
                    "outcome": ["fire", "electric", "poison", "rock", "steel"]
                },
                {
                    "text": "rockslide",
                    "answer_bg": "",
                    "outcome": ["fire", "ice", "flying", "bug"]
                },
                {
                    "text": "being poisoned",
                    "answer_bg": "rgb(212, 228, 50)",
                    "outcome": ["grass", "fairy"]
                },
                {
                    "text": "indsutrialization",
                    "answer_bg": "",
                    "outcome": ["ice", "rock", "fairy"]
                },
                {
                    "text": "lightning",
                    "answer_bg": "rgb(255, 239, 103)",
                    "outcome": ["water", "flying"]
                },
                {
                    "text": "mythical creatures",
                    "answer_bg": "",
                    "outcome": ["dragon"]
                },
                {
                    "text": "the cold",
                    "answer_bg": "rgb(202, 227, 253)",
                    "outcome": ["grass", "ground", "flying", "dragon"]
                },
                {
                    "text": "normies",
                    "answer_bg": "",
                    "outcome": []
                },
                {
                    "text": "pretty girls",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["fighting", "dragon", "dark"]
                },
                {
                    "text": "fighting",
                    "answer_bg": "",
                    "outcome": ["normal", "ice", "rock", "dark", "steel"]
                },
                {
                    "text": "the future",
                    "answer_bg": "",
                    "outcome": ["fighting", "poison"]
                },
                {
                    "text": "volcanic eruptions",
                    "answer_bg": "",
                    "outcome": ["grass", "ice", "bug", "steel"]
                }
            ]
        },
        {
            "question": "What's your favorite game franchise?",
            "answer_style": "img-text",
            "answers": [
                {
                    "text": "Kirby",
                    "img_url": "media/kirby.jpg",
                    "outcome": ["fairy", "flying"]
                },
                {
                    "text": "The Legend of Zelda",
                    "img_url": "media/zelda.jpg",
                    "outcome": ["fairy", "grass", "dragon"]
                },
                {
                    "text": "Super Mario",
                    "img_url": "media/mario.jpg",
                    "outcome": ["normal", "ground"]
                },
                {
                    "text": "Minecraft",
                    "img_url": "media/minecraft.jpg",
                    "outcome": ["grass", "ground", "rock"]
                },
                {
                    "text": "Metroid",
                    "img_url": "media/metroid.jpeg",
                    "outcome": ["steel", "electric"]
                },
                {
                    "text": "Donkey Kong",
                    "img_url": "media/donkey-kong.jpg",
                    "outcome": ["fighting", "grass", "ground"]
                },
                {
                    "text": "Animal Crossing",
                    "img_url": "media/animal-crossing.jpg",
                    "outcome": ["grass", "bug", "water"]
                },
                {
                    "text": "Street Fighter",
                    "img_url": "media/street-fighter.jpg",
                    "outcome": ["fighting"]
                },
                {
                    "text": "Spyro",
                    "img_url": "media/spyro.jpg",
                    "outcome": ["dragon"]
                },
                {
                    "text": "Resident Evil",
                    "img_url": "media/resident-evil.jpg",
                    "outcome": ["dark", "ghost"]
                },
                {
                    "text": "Diablo",
                    "img_url": "media/diablo.png",
                    "outcome": ["fire"]
                },
                {
                    "text": "Dark Souls",
                    "img_url": "media/dark-souls.jpg",
                    "outcome": ["dark", "fairy"]
                },
                {
                    "text": "Splatoon",
                    "img_url": "media/splatoon.jpg",
                    "outcome": ["water", "fighting"]
                },
                {
                    "text": "The Sims",
                    "img_url": "media/sims.png",
                    "outcome": ["normal"]
                }
            ]
        },
        {
            "question": "What's your personality like?",
            "answer_style": "text-only",
            "answers": [
                {
                    "text": "chill",
                    "answer_bg": "rgb(202, 227, 253)",
                    "outcome": ["ice", "normal"]
                },
                {
                    "text": "feisty",
                    "answer_bg": "rgb(255, 239, 103)",
                    "outcome": ["fire"]
                },
                {
                    "text": "bubbly",
                    "answer_bg": "rgb(202, 227, 253)",
                    "outcome": ["water", "electric", "fairy"]
                },
                {
                    "text": "outspoken",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["fighting"]
                },
                {
                    "text": "mysterious",
                    "answer_bg": "rgb(202, 187, 255)",
                    "outcome": ["dark", "ghost"]
                },
                {
                    "text": "toxic",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["poison"]
                },
                {
                    "text": "enchanting",
                    "answer_bg": "rgb(255, 239, 103)",
                    "outcome": ["dragon", "fairy"]
                },
                {
                    "text": "clever",
                    "answer_bg": "rgb(202, 227, 253)",
                    "outcome": ["psychic"]
                },
                {
                    "text": "daydreamer",
                    "answer_bg": "rgb(255, 239, 103)",
                    "outcome": ["flying", "fairy"]
                },
                {
                    "text": "dependable",
                    "answer_bg": "rgb(202, 187, 255)",
                    "outcome": ["rock", "steel"]
                },
                {
                    "text": "outdoorsy",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["grass", "bug"]
                },
                {
                    "text": "down to earth",
                    "answer_bg": "rgb(202, 187, 255)",
                    "outcome": ["ground"]
                }
            ]
        }
    ]
}
// retrieve the data
// used https://api.jquery.com/jquery.getjson/ as a resource

//append the data
// retrieves and appends header
$('title').append(data.title);
$('header').append(`<h1>${data.title}</h1>`);
$('header').append(`<img class="background-img" src="${data.header_image}"/>`);

// retrieves the questions
for (var i = 0, n = data.questions.length; i < n; i++)
{
  var q = data.questions[i];
  var question = q.question;
  var image = question.img_url;
  var background = question.answer_background;

  // appends the questions to the html structure + opening answer container tag
  $(".questions").append("<div class='question-container'>" + "<div class='question'>" + question + "</div>" + 
  "<div class='answer-container' id='a" + i + "'>");

  // retrieve the question's answers
  var answers = q.answers;
  var n = answers.length;
  for (var j = 0; j < n; j++)
  {
    // retrieve the style of the answer button
    var answerStyle = q.answer_style;
    var img = answers[j].img_url;
    
    // set up each answer button
    if (answerStyle === 'img-only') 
    {
        var answerButton = `<label><img src="${answers[j].img_url}"/><input type="radio" name="${i}" value="${answers[j].text}"/></label>`;
        var answerId = `img${i}${j}`;
    }
    else if (answerStyle === 'img-text')
    {
        var answerButton = `<label><img src="${answers[j].img_url}"/><span>${answers[j].text}</span><input type="radio" name="${i}" value="${answers[j].text}"/></label>`;
        var answerId = `imgtext${i}${j}`;
    }
    else if (answerStyle === 'bg-img-text')
    {
        var answerButton = `<label><span>${answers[j].text}</span><input type="radio" name="${i}" value="${answers[j].text}"/></label>`;
        var answerId = `bgimgtext${i}${j}`;
    }
    else 
    {
        var answerButton = `<label>${answers[j].text}<input type="radio" name="${i}" value="${answers[j].text}"/></label>`; // text-only
        var answerId = `text${i}${j}`;
    }
    
    // append the answer to the html structure answer container
    $(`#a${i}`).append("<div class='answer " + answerStyle + "' id='" + answerId + "'>" + answerButton + "</div>");

    // add background images and colors
    if (answerStyle === 'bg-img-text')
    {
        $("#" + answerId).css({"background-image": "url(" + answers[j].img_url + ")"});
    }
    else if (answerStyle === 'text-only')
    {
        $("#" + answerId).css({"background-color": answers[j].answer_bg});
    }

  // close the answer container and question container
  $(".questions").append("</div>" + "</div>");
  }
}

// create a class for unselected answers
$(".answer").on("click", function(e) {
    $(this).removeClass('not-selected');
    $(this).siblings().addClass('not-selected');
    console.log("hello world");
  });
  
// retrieves the outcomes
results = data.outcomes;

// retrieve the modal, button, and span to close
var modal = document.getElementById("myModal");
var submit = document.getElementById("submit");


  $('#submit').on('click', function(e) {
    // unblock the modal display
    modal.style.display = "block";
    
    // ensure all of the questions are answered
    if(choices.length !== data.questions.length) 
    {
        document.getElementById("modal-content").textContent = "Answer all of the questions before submitting!";
    }
    else
    {
        var c = calculateResults(choices);
    }

    // display the result
    var outcomeTitle = data.outcomes.c.text;
    $("modal-content").append("<h3>" + outcomeTitle  + "</h3>");

    var outcomeImg = data.outcomes.c.img;
    $("modal-content").append("<img class='outcome-img' src='" + outcomeTitle + "'/>");

    // gather all checked radio-button values
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
      return $(radio).val();
    }).toArray(choices);
    // creates an array of choices = ["valueofradiobox1", "valueofradiobox2", "valueofradiobox2"]
  
    }
 );

  function calculateResults(choices) {
    var results = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // 

    for (var i = 0; i < choices.length; i++)
    {
      // store the array of outcomes
      var outcomes = choices[i];

      // if there is more than one possible outcome
      if (choices[i].length > 1) 
      {

      }
      // if there is only one 
      else
      {
        return outcomes;
      }
    }
  };