$(document).ready(function()
	{
		setInterval(function()
			{
				$("#chat-check").load("chat_refresh.php?chat=" + Math.random());
			}, 500);
	});

$(document).ready(function()
	{
		$("#message_input").keypress(function (e)
			{
				if (e.which == 13)
				{
					e.preventDefault();
					var message_input = $("#message_input").val();
					$("#message_input").val('');
					$.post(
						'chat_post.php',
						{
							'userID' : 1,
							'chatText' : message_input
						}
					);
				}
			});
	});

$(document).ready(function()
	{
		setInterval(function()
			{
				$("#users-online").load("views/users_online_refresh.php?rnd=" + Math.random());
			}, 10000);
	});