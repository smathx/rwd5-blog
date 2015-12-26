/* global Router */

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/news', function () {
  this.render('news');
});

Router.route('/projects', function () {
  this.render('projects');
});
