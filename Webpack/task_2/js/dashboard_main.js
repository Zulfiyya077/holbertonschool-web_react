import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
  $('body').prepend('<div id="logo"></div>');
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<div class="button-container"></div>');
  $('.button-container').append('<button id="start-button">Click here to get started</button>');
  $('.button-container').append('<span id="count"></span>');
  $('body').append('<p>Copyright - Holberton School</p>');
  
  $('#start-button').on('click', _.debounce(updateCounter, 500));
  
  console.log('Init dashboard');
});
