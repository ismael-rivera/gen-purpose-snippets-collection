<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Login Page</title>
<style type="text/css">
#loginform {
	border: 2px solid #600;
	background-color: #FFC;
	width: 280px;
}

#loginform form {
	margin: 5px;
}
label {
	display: block;
	width: 90px;
	float: left;
	clear: both;
}

label, input {
	margin-bottom: 4px;
	}
</style>
</head>

<body>
<div id="loginform">
    <form method = "post" action="checklogin.php" name="form1">
    <label for="username">Username:</label>
    <input type="text" name="myusername" id="username" />
    <label for="password">Password:</label>
    <input type="password" name="mypassword" id="password" />
    <input type="submit" name="submit" value="login" />
    </form>
</div>
</body>
</html>