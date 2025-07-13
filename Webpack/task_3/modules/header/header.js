// task_3/modules/header/header.js
import $ from 'jquery';
import './header.css';

$(document).ready(function() {
  // Logo və başlıq əlavə edirik
  $('body').append('<div id="logo"></div>');
  $('body').append('<h1>Holberton Dashboard</h1>');
  
  console.log('Init header');
});
