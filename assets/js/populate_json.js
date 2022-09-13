$(function() {
    //hide first div or remove after append using `$(".card:first").remove()`
    $(".card:first").hide()
    $.ajax({
      url: "../../output/194091.json",
      success: function(result) {
        $.each(result.seasons[0].ctfs, function(index, item) {
          var cards = $(".card:first").clone() //clone first divs
          var ctfname = item.name;
          var score = item.points;
          var weight = item.ratings;
          var rank = item.place;
          //add values inside divs
          var rankclass = rank == 1 ? "rank first" : "rank";
          $(cards).find(".card-title").html("<h2>"+ctfname+"<span><small>Points: "+score+"</small><small>Weight: "+weight+"</></span> </h2> <div class='"+rankclass+"'><h4>"+rank+"</h4></div>");
          $(cards).show() //show cards
          $(cards).appendTo($(".dashboard-cards")) //append to container
        });
      }
    });
  });