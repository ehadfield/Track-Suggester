

$(document).ready(function(){
  $("form#whatlanguage").submit(function(event){
    var question1 = $("select#question1").val();
    var question2 = $("select#question2").val();
    var question3 = $("select#question3").val();
    var question4 = $("select#question4").val();
    var question5 = $("select#question5").val();

    if(question5 === "15"){
      $("#other").show();
      $("#javascript").hide();
      $("#python").hide();
      $("#ruby").hide();
      $("#php").hide();
      $("#whatlanguage").hide();
    }else if(question1 === "2" && question3 === "8"){
      $("#javascript").show();
      $("#csharp").show();
      $("#whatlanguage").hide();
    }else if(question1 === "2"){
      $("#javascript").show();
      $("#whatlanguage").hide();
    }else if(question2 === "4"){
      $("#php").show();
      $("#whatlanguage").hide();
    }else if(question3 === "7"){
      $("#ruby").show();
      $("#whatlanguage").hide();
    }else if(question4 === "11"){
      $("#python").show();
      $("#whatlanguage").hide();
    }else if(question3 === "8"){
      $("#csharp").show();
      $("#whatlanguage").hide();
    }
    event.preventDefault();
  });
});
