<!doctype html>
<html>

<head>
	<meta charset="utf-8">
	<title>Email Submitted</title>
</head>

<body>

	<?php
	$visitor = $_POST[ "visitorEmail" ];
	$message = $_POST["visitorMessage"];
	$replyWanted = false;
	if (isset($_POST["replyRequest"])) $replyWanted = true;
	$emailTo = "jdonaher21@shawtech.org";
	
	$msgText = "An email has been recieved from " . $visitor . " :\n";
	$msgText = $t . $message . "\n";
	if ($replyWanted) $text = $msgText . "A reply is required for this message.";
	else $msgText . "No reply is required for this message.";
		
	mail($emailTo, "Visitor Message", $t);
	
	echo("Thank you, your message has been sent.")
	?>
</body>

</html>