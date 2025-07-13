import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';
// Şəkli import edirik
import logoImage from '../assets/holberton-logo.jpg';

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
  console.log('JavaScript started');
  
  // Logo elementini yaradırıq və şəkli dinamik set edirik
  const logoDiv = $('<div id="logo"></div>');
  logoDiv.css('background-image', `url(${logoImage})`);
  $('body').prepend(logoDiv);
  
  console.log('Logo div added with image:', logoImage);
  
  // Digər elementləri əlavə edirik
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  
  // Button və counter container
  $('body').append('<div class="button-container"></div>');
  $('.button-container').append('<button id="start-button">Click here to get started</button>');
  $('.button-container').append('<span id="count"></span>');
  
  $('body').append('<p>Copyright - Holberton School</p>');
  
  $('#start-button').on('click', _.debounce(updateCounter, 500));
  
  console.log('Init dashboard');
});
