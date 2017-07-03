---
---
jQuery( document ).ready(function() {
  $('#logo, #footermenulink').click(function () {
    $('#banner-nav-container').fadeToggle();
  });
  $('#close-nav').click(function () {
    $('#banner-nav-container').fadeOut();
  });
  $('img').bind('contextmenu', function(e) {
    return false;
  });
  generateRandomPosts();
});

function generateRandomPosts() {
  $.getJSON("{{ site.baseurl }}/related-posts.json", function(data) {

    var postsCount = data.length;
    var posts = data;
    var randomIndexUsed = [];
    var counter = 0;
    var numberOfPosts = 10;
    var divRandomPosts = $("#random_posts .inner");

    while (counter < numberOfPosts) {
      var randomIndex = Math.floor(Math.random() * postsCount);

      if (randomIndexUsed.indexOf(randomIndex) == "-1") {
          var postHREF = posts[randomIndex].href;
          var postTitle = posts[randomIndex].title;
          var postImage = posts[randomIndex].image;
          var postExcerpt = posts[randomIndex].excerpt;

          if (counter == (numberOfPosts - 1)) {
            divRandomPosts.append('<article><a href="' + postHREF + '" class="image"><img alt="'+ postTitle +'" src="' + postImage + '" alt="Alternate text" class="lazyload" /></a><div class="caption"> <h3>' + postTitle + '</h3><p>' + postExcerpt + '</p></div></article>');
          } else {
            divRandomPosts.append('<article><a href="' + postHREF + '" class="image"><img alt="'+ postTitle +'" src="' + postImage + '" alt="Alternate text" class="lazyload" /></a><div class="caption"> <h3>' + postTitle + '</h3><p>' + postExcerpt + '</p></div></article>');
          }

        randomIndexUsed.push(randomIndex);
        counter++;
      }
    }
  });
}