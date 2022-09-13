$(function() {
    //hide first div or remove after append using `$(".card:first").remove()`
    $(".post_container:first").hide()
    $.ajax({
      url: "../../writeups/index.json",
      success: function(result) {
        console.log(result.posts)
        $.each(result.posts.reverse(), function(index, item) {
          var cards = $(".post_container:first").clone() //clone first divs
          var date = item.date;
          var blog = item.blog;
          var title = item.title;
          var link = item.link;
          //add values inside divs
          $(cards).find(".post-meta").html(date+" / </span><span><small>"+blog+"</small>");
          $(cards).find(".post-title").html('<a class="post-link" href="'+link+'" target="_blank">'+title+'</a>');

          $(cards).show() //show cards
          $(cards).appendTo($(".post-list")) //append to container
        });
      }
    });
  });