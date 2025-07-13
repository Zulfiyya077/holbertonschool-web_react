// task_3/modules/body/body.js
import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
  // Body content əlavə edirik
  $('body').append('<p>Dashboard data for the students</p>');
  
  // Button və counter container
  $('body').append('<div class="button-container"></div>');
  $('.button-container').append('<button id="start-button">Click here to get started</button>');
  $('.button-container').append('<span id="count"></span>');
  
  // Debounce ilə click event
  $('#start-button').on('click', _.debounce(updateCounter, 500));
  
  console.log('Init body');
});
