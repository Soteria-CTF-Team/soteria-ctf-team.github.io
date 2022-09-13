/*$(function() {
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
*/

var posts="";

function template(data) {
  var html = '<ul class="post-list row" style="padding-left:0">';
  $.each(data, function(index, item){
      var date = item.date;
      var blog = item.blog;
      var title = item.title;
      var link = item.link;
      html += '<li class="post_container col-xs-12 col-sm-6" data-aos="fade-up" data-aos-delay="100"><span class="post-meta"><small>'+date+' / '+blog+'</small></span><h3 class="post-title" style="margin-top:12px"><a class="post-link" href="'+link+'" target="_blank">'+title+'</a></h3></li>';
  });
  html += '</ul>';
  return html;

  

                  
        

}

$.ajax({
    url: "../../writeups/index.json",
    success: function(result) {
      posts=(result.posts.reverse())
    },
    async: false
  });

  
  $(function(){
    console.log(posts);
    var container = $('#pagination-bar');
    container.pagination({
        dataSource: posts,
        pageSize: 4,
        autoHidePrevious: true,
        autoHideNext: true,
        callback: function(data, pagination) {


          var html = template(data);
          $('#pagination-data-container').html(html);

        }
    });
    
  });


