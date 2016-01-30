$(document).ready(function(){


		    $("#send_email").click(function(){
		        var to = "dojadeveloper@gmail.com";
						var from =document.getElementById("from").value;
		        var subject = document.getElementById("subject").value;
		        var text = document.getElementById("text").value;
						console.log(to);
		        $("#message").text("Sending E-mail...Please wait");
		        $.get("http://localhost:3000/send",{to:to,from:from,subject:subject,text:text},function(data){
		        if(data=="sent")
		        {
		            $("#message").empty().html("Email is been sent at "+to+" . Please check inbox!");
		        }
					});
		    });


		});
