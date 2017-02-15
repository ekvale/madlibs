/**
 * Created by ekval on 2/13/2017.*/

var questions = 8;
var questionsLeft = ' [' + questions + ' questions left]';
var adjective = prompt('By Royal Decree you must answer these eight questions! First, I must request you give, in gracious charity your favorite adjective.' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb = prompt('Our kingdom is need a verb (no -ing), Sir! ' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun = prompt('The Queen has requested you guess her favorite noun! I urge you to get this correct, as an incorrect answer will of course, lead to an immediate beheading' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var color = prompt('Our plants will not grow without the name of your favorite Color!' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var warrior = prompt('Give onto me the name of the greatest Warrior ever to live!' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var enemy = prompt('What is the name of your most terrible foe?' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var color1 = prompt('When the sun sets what shade do you find most solace in?' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var yourtitle = prompt('What shall your name and title be?' + questionsLeft);
questionsLeft = ' [' + questions + ' questions left]';
questions -=1;
alert('OK Marty here we go!');
var sentence = "<h2>A long time ago in the Chaos soup of a very young Universe LOGIC had not yet formed. <br> This made our young Hero, Marty very  " + adjective;
sentence += '. He did,   ' + verb;
sentence += ' and protest but the Ether cared not. <br> From the primordial Void, the evil ' + enemy;
sentence += ' threated to devour the Milky-Way with the gnashing of his teeth. <br> and his deadly ' + color;
sentence += '  walrus army. <br> <br> But from behind the starry veil emerged   ' + warrior;
sentence += ' And the world did tremble when ' + enemy;
sentence += ' strode forth on his ' + color1;
sentence += ' comet. <br> But the world did tremble when ' + warrior;
sentence += ', Magician of Space Time and Eater of Galaxies arose out of stardust and accretion belts. You shall know me as ' + yourtitle;
sentence += ',! Marty shouted. And the world was quite, but it did still not make any damn sense.<br> Honor on to you, <br>' + yourtitle;

'</h2>';
document.write(sentence);

