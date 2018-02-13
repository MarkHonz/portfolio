<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Quotes</title>
</head>
<body>
    <?php // Script 2.4 - quotes.php
        $first_name = "Mark";
        $last_name = 'Honsinger';

        $name_1 = '$first_name $last_name';
        $name_2 = "$first_name $last_name";

        echo "<h1>Double Quotes</h1>
                <p>name1 is $name_1 <br>
                name2 is $name_2</p>";
        print '<h1>Single Quotes</h1>
                <p>name1 is $name_1 <br>
                name2 is $name_2</p>';
    ?>
</body>
</html>