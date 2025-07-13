import $ from 'jquery';

// jQuery istifadə edərək body-ə paragraflar əlavə edirik
$(document).ready(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<p>Copyright - Holberton School</p>');
});
