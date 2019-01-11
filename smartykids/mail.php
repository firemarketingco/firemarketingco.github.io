<HTML>
<BODY>
<?php
$name = $_POST['name'];
$child_name = $_POST['child_name'];
$age = $_POST['age'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$name = htmlspecialchars($name);
$child_name = htmlspecialchars($child_name);
$age = htmlspecialchars($age);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);

$name = urldecode($name);
$child_name = urldecode($child_name);
$age = urldecode($age);
$phone = urldecode($phone);
$email = urldecode($email);

$name = trim($name);
$child_name = trim($child_name);
$age = trim($age);
$phone = trim($phone);
$email = trim($email);


mail( $admin_email, $project_name, "Ваше имя:".$name.". Имя ребенка: ".$child_name". Возраст ребенка: ".$age". Телефон: ".$phone". E-mail: ".$email". ,"From: admin@fores.com \r\n"))
?>
</BODY>
</HTML

form_subject