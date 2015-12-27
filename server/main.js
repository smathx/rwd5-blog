/* global News, Scrape */

Meteor.startup(function () {
  News.remove({});

  var nasa = Scrape.feed('https://www.nasa.gov/rss/dyn/breaking_news.rss');

  nasa.items.forEach(function (item) {
    News.insert({
      title: item.title,
      text: item.description,
      link: item.link,
      image: item.image,
      sourceName: 'NASA',
      sourceLink: nasa.link,
      pubDate: item.pubDate
    });
  });
/*
  // image links are not extracted
  
  var esa = Scrape.feed('http://www.esa.int/rssfeed/Our_Activities/Space_News');
  esa.items.forEach(function (item) {
    News.insert({
      title: item.title,
      text: item.description,
      link: item.link,
      image: item.image,
      sourceName: 'ESA',
      sourceLink: esa.link,
      pubDate: item.pubDate
    });
  });
*/  
  var phys = Scrape.feed('http://phys.org/rss-feed/breaking/space-news/');
  phys.items.forEach(function (item) {
    News.insert({
      title: item.title,
      text: item.description,
      link: item.link,
      image: item.image,
      sourceName: 'phys.org',
      sourceLink: phys.link,
      pubDate: item.pubDate
    });
  });

});