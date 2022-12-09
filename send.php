<?php
$link = mysqli_connect("localhost", "v-11973_nurtay", "Atyrau2030", "v-11973_bcoc_test");

if ($link == false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
}
else {
    print("Соединение установлено успешно");
}

if (isset($_POST['button_id'])) {
    $a = $_POST['name'];
    $b = $_POST['password'];
    $sql = "INSERT INTO instatest VALUES ('$a', '$b')";
    $result = mysqli_query($link, $sql);
}

if ($result == false) {
    print("Произошла ошибка при выполнении запроса");
} else {
	print("Success");	
}