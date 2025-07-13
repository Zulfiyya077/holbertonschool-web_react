import $ from 'jquery';
import _ from 'lodash';

// Click sayğacı üçün dəyişən
let count = 0;

// Click sayını artıran funksiya
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Səhifə yükləndikdə işləyən kod
$(document).ready(function() {
  // Elementləri ardıcıllıqla əlavə edirik
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="start-button">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');
  
  // Debounce funksiyası ilə button click event-i əlavə edirik
  // 500ms gözləmə müddəti ilə spam-i önləyirik
  $('#start-button').on('click', _.debounce(updateCounter, 500));
  
  console.log('Init dashboard');
});
