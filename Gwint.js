

var selectedCards = [];
var clickedIds = [];

var bramka = 0;
var tourCounter = 0;
var clickedCards = 0;
import imagesShowingC from "./imagesShowing.js";
import StopHidingEffect from "./StopHidingEffect.js";
import StopImageShowingEffect from "./StopImageShowingEffect.js";


//Event reloading all the page after the click
$(document).ready(function() {
    $("#Cards").on("click", "a.reload-link", function(event) {
        event.preventDefault();
        location.reload();
    })
});


var flag = true;

    $(document).ready(function() {
    $(".cards").each(function() {
//It refers to every clicked card
        $(this).click(function() {

            //If the card has been clicked, disable further clicking
            if ($(this).hasClass("clicked")) {
                // Card has already been clicked, do nothing
                return;
            }
            //This flag prevents discovered more cards than two at the same time
            if (flag === false){
                return;
            }

            //Add this card to class clicked in order to disable further clicking
            $(this).addClass("clicked"); // Add the 'clicked' class to the card



            flag = false;


            bramka++;

            //If two cards are discovered, add tourCounter
            if (bramka % 2 === 0) {
                tourCounter++;
                $("#Turn").html("Turn counter: " + tourCounter);
            }

                var id1 = $(this).attr("id");
            clickedIds.push(id1);

            //It helps detect which image stands for clicked card
            var newImage = $(this).data("new-image");


            //Add animation to clicked card
            const imagesShowing = new imagesShowingC(this, newImage, 150);
            imagesShowing.imagesShowingF();

            //If card 2 == card 1
            if (selectedCards.includes(newImage)) {

                clickedCards++;
                //User won the game and display score
                if (clickedCards === 6){
                    //Add padding for cards
                    $("#Cards").css("padding", "100px");
                    if (tourCounter > 5 && tourCounter < 8){
                        $("#Cards").html("Gratulacje, wygrałeś! Twój wynik jest niesamowity! <a href='#' class='reload-link'>Jeszcze raz?</a>")
                    }

                    else if (tourCounter >= 8 && tourCounter < 12){
                        $("#Cards").html("Gratulacje, wygrałeś! Twój wynik jest dobry! <a id='#Jeszcze-raz' href='#' class='reload-link'>Jeszcze raz?</a>")
                    }

                    else if (tourCounter >= 12 && tourCounter < 16){
                        $("#Cards").html("Gratulacje, wygrałeś! Niestety twój wynik jest słaby! <a href='#' class='reload-link'>Jeszcze raz?</a>")
                    }

                    else if (tourCounter >= 16 && tourCounter < 1000){
                        $("#Cards").html("Przegrałeś! Niestety twój wynik jest tragiczny! <a href='#' class='reload-link'>Jeszcze raz?</a>")
                    }


                    //Searching
                    // var $matchingCards2 = $(".cards").filter(function() {
                    //     return $(this).data("new-image") === newImage;
                    // });

                    //Hidding two the same cards in animation and disable clicking
                    // const stopEffect = new StopHidingEffect($matchingCards2, 150, 750);
                    // stopEffect.StopHidingEffectF();

                    // $matchingCards2.off("click");
                    // setTimeout(function() {
                    //     flag = true;
                    // }, 900)
                }

                else {
                    //Match cards in order to hide them and disable clicking
                    var $matchingCards = $(".cards").filter(function() {
                        return $(this).data("new-image") === newImage;
                    });
                    clickedIds.length = 0;
                    selectedCards.length = 0;
                    const stopEffect = new StopHidingEffect($matchingCards, 150, 750);
                    stopEffect.StopHidingEffectF();

                    //setTimeout in order to block clicking next cards for 0.9s
                    setTimeout(function() {
                        flag = true;
                    }, 900)
                }

            }

            //If selectedCards aren't matched reverse cards to initial state
            else if (!selectedCards.includes(newImage) && bramka % 2 === 0) {
                const cardImage = "zdjęcia/Gwint/karta.png";
                const stopImageShow = new StopImageShowingEffect("#" + clickedIds[0] + ", #" + clickedIds[1], cardImage, 150, 750);
                //removing class gives possibility next clicking these cards
                $("#" + clickedIds[0] + ",#" + clickedIds[1]).removeClass("clicked");
                clickedIds.length = 0;
                selectedCards.length = 0;
                stopImageShow.StopImageShowingEffectF();
                setTimeout(function() {
                    flag = true;
                }, 900)
            }

            //If selectedCards is empty, push newImage in selectedCards and do nothing
            else {
                selectedCards.push(newImage);
                flag = true;
            }


        });
    });
});


import GenerateUniqueRandomNumbers from './GenerateUniqueRandomNumbers.js';


// Generate cards in randomly positions
$(document).ready(function() {
    var card1 = $('#karta' + GenerateUniqueRandomNumbers.getRandomNumber(12)).prependTo('#Cards');
    var card2 =  $('#karta' + GenerateUniqueRandomNumbers.getRandomNumber(12,[card1])).insertAfter(card1);
    var card3 = $('#karta' + GenerateUniqueRandomNumbers.getRandomNumber(12,[card1, card2])).insertAfter(card2);
    var card4 = $('#karta' + GenerateUniqueRandomNumbers.getRandomNumber(12,[card1, card2, card3])).insertAfter(card3);
    var card5 = $('#karta' + GenerateUniqueRandomNumbers.getRandomNumber(12,[card1, card2, card3, card4])).insertAfter(card4);
    var card6 = $('#karta' + GenerateUniqueRandomNumbers.getRandomNumber(12,[card1, card2, card3, card4, card5])).insertAfter(card5);
    var card7 = $('#karta' + GenerateUniqueRandomNumbers.getRandomNumber(12,[card1, card2, card3, card4, card5, card6])).insertAfter(card6);
    var card8 = $('#karta' + GenerateUniqueRandomNumbers.getRandomNumber(12,[card1, card2, card3, card4, card5, card6, card7])).insertAfter(card7);
    var card9 = $('#karta' + GenerateUniqueRandomNumbers.getRandomNumber(12,[card1, card2, card3, card4, card5, card6, card7, card8])).insertAfter(card8);
    var card10 = $('#karta' + GenerateUniqueRandomNumbers.getRandomNumber(12,[card1, card2, card3, card4, card5, card6, card7, card8, card9])).insertAfter(card9);
    var card11 = $('#karta' + GenerateUniqueRandomNumbers.getRandomNumber(12,[card1, card2, card3, card4, card5, card6, card7, card8, card9, card10])).insertAfter(card10);
    $('#karta' + GenerateUniqueRandomNumbers.getRandomNumber(12,[card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11])).appendTo('#Cards');
});

