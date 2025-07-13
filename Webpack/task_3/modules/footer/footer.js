// task_3/modules/footer/footer.js
import $ from 'jquery';
import './footer.css';

$(document).ready(function() {
  // Copyright məlumatını əlavə edirik
  $('body').append('<p class="copyright">Copyright - Holberton School</p>');
  
  console.log('Init footer');
});
