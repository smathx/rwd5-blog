/* global moment, News */

Meteor.subscribe("news");

Template.news.helpers({
  news: function () {
    return News.find({}, { sort: [[ 'pubDate', 'desc'], [ 'title', 'asc']] });
  }
});

Template.header.helpers({
  adminAllowed: function () {
    return Meteor.user() && Meteor.user().username.toUpperCase() == 'ADMIN';
  }
});

Template.registerHelper('formatDate', function (isoDate) {
  return moment(isoDate).format('D MMMM YYYY');
});
