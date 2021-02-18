// console.log($('body'));

// const { isEmptyObject } = require("jquery");

// let p = $('#test');
// let div = $('.my-class');
// let ul = $('ul');
// let appendHere = $('#append-here');
// let tttArray = [[0,1,2],['00',11,22],['000',111,222]]
let cell00 = $('#cell00');
let cell01 = $('#cell01');
let cell02 = $('#cell02');
let cell10 = $('#cell10');
let cell11 = $('#cell11');
let cell12 = $('#cell12');
let cell20 = $('#cell20');
let cell21 = $('#cell21');
let cell22 = $('#cell22');
let mark00 = $('#mark00');
let mark01 = $('#mark01');
let mark02 = $('#mark02');
let mark10 = $('#mark10');
let mark11 = $('#mark11');
let mark12 = $('#mark12');
let mark20 = $('#mark20');
let mark21 = $('#mark21');
let mark22 = $('#mark22');
let heading = $('#heading');
let resetButton = $('#resetButton');

//Hardcode line to set the mark00 variable to 'X'
// mark00.text('X');

//command to fire the markCell function onclick
//&nbsp is required in HTML content
// cell00.on(click, markCell('O',mark00));


// cell00.on('click', () => {
//   if(mark00.text() == 'O') {
//     mark00.text('X');
//   }
//   else {
//     mark00.text('O');
//   }
// });

// cell00.on('click', markCell('X',mark01));

heading.text('X Starts First');
resetButton.text('Reset Board');
let mark = 'X';
let move = 0;
let gameOver = false;


  cell00.on('click', function() {
    checkMarkState(mark00);
  });

  cell01.on('click', function() {
    checkMarkState(mark01);
  });

  cell02.on('click', function() {
    checkMarkState(mark02);
  });

  cell10.on('click', function() {
    checkMarkState(mark10);
  });

  cell11.on('click', function() {
    checkMarkState(mark11);
  });

  cell12.on('click', function() {
    checkMarkState(mark12);
  });

  cell20.on('click', function() {
    checkMarkState(mark20);
  });

  cell21.on('click', function() {
    checkMarkState(mark21);
  });

  cell22.on('click', function() {
    checkMarkState(mark22);
  });

function checkMarkState(markxx) {
  if (!gameOver) {
    if(jQuery.isEmptyObject(markxx.text())) {
      if (move >= 0 && move <= 3) {
        markCell(markxx);
        changeMark();
        setHeadding('play');
        move++;
        //win is not possible unitl fifth or later move
      } else if (move >= 4 && move <= 8) {
        markCell(markxx);
        checkForWin();
        changeMark();
        setHeadding('play');
        move++;
      } /* else if (move == 8) {
        markCell(markxx);
        checkForWin();
        setHeadding('play');
      } */
    } else alert('Cell is occupied!');
  }
}

//function to set any cell to any mark
function markCell(cell) {
    cell.text(mark);
}

function changeMark() {
  //change mark
  if (mark == 'X') {
    mark = 'O';
  } else if (mark == 'O') {
    mark = 'X'
  }
}

function checkForWin() {
  if(
    (mark00.text() == mark && mark01.text() == mark && mark02.text() == mark) ||//top row
    (mark10.text() == mark && mark11.text() == mark && mark12.text() == mark) ||//middle row
    (mark20.text() == mark && mark21.text() == mark && mark22.text() == mark) ||//bottom row
    (mark00.text() == mark && mark10.text() == mark && mark20.text() == mark) ||//left column
    (mark01.text() == mark && mark11.text() == mark && mark21.text() == mark) ||//middle column
    (mark02.text() == mark && mark12.text() == mark && mark22.text() == mark) ||//right column
    (mark00.text() == mark && mark11.text() == mark && mark22.text() == mark) ||//top=left to bottom-right diagonal
    (mark20.text() == mark && mark11.text() == mark && mark02.text() == mark)//bottom-left to top-right diagonal    
    ) { 
      setHeadding('win');
      gameOver = true;
    } else setHeadding('win');
      gameOver = true;;
}

function setHeadding(option) {
  if (option == 'play') {
    heading.text(`${mark} - Your Turn!`);
  } else if (option == 'win') {
    heading.text(`${mark}'s win!`);
  }
}

resetButton.on('click', () => {
  mark00.text(null);
  mark01.text(null);
  mark02.text(null);
  mark10.text(null);
  mark11.text(null);
  mark12.text(null);
  mark20.text(null);
  mark21.text(null);
  mark22.text(null);
  heading.text('X Starts First');
  mark = 'X';
  move = 0;
  gameOver = false;
});

// //list of the contents of the 2d tttArray
// for (let i = 0; i < tttArray.length; i++) {
//     for (let j = 0;j < tttArray[i].length; j++) {
//         console.log(tttArray[i][j]);
//     }
// }

// //Show in console the 'p', 'div', and 'ul' jquery variable's schema
// console.log(p);
// console.log(div);
// console.log(ul);

// //Show in console the variable 'p''s content.  .text() works two ways, without and
// //argument the content value is returned, with an argument the content value is set to it
// console.log(p.text());
// p.text('New Text');

// //Set input's content value to 'New Value' (commented out so next line of code works)
// // $('input').val('New Value');
// //Set placeholder attribute to 'Placeholder Text' to only input on page
// $('input').attr('placeholder', 'Placeholder Text');

// //Place <p> text about the 'div' variable
// div.prepend('<p>prepended paragraph</p>');
// div.append('<p>appended paragraph</p>');
// div.before('<p>paragraph that was added before the div</p>');
// div.after('<p>paragraph that was added after the div</p>');

// //Empty 'div' variable of contents
// div.empty();
// //Remove 'ul variable from DOM
// ul.remove();

// //Hide input onload
// $('input').hide();
// //Show input after 2 seconds
// setTimeout(() => $('input').show(), 2000);

// //Get and post data using AJAX Asynchronous JavaScript And XML
// $.get('https://reqres.in/api/users/2', (data) => console.log(data));

// $.post('https://reqres.in/api/users', {
//     name: 'Tommy',
//     job: 'Front End software Developer'
// }, (data) => console.log(data));

// //write dynamic table into DOM
// window.onload = () => {
//     let table = document.createElement('table'),
//         tbody = document.createElement('tbody'),
//         i, rowcount;

//     table.appendChild(tbody);
//     for (i = 0; i <= 2; i++) {
//       tbody.insertRow(i);
//       for (x = 0; x <= 2; x++) {
//         tbody.rows[i].insertCell(x);
//         tbody.rows[i].cells[x].appendChild(
//             document.createTextNode(`${i}${x}`)
//         );
//       }
//     }
    
//     table.createCaption();
//     table.caption.appendChild(
//       document.createTextNode('A DOM-generated Table')
//     );
    
//     // document.body.appendChild(table);
//     appendHere.append(table);
//     };