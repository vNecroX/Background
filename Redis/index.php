<?php
    session_start();

    // Connect to Redis
    $redis = new Redis();
    $redis->connect('redis', 6379); // Use the service name as the host

    // Handle user registration
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["register"])) {
        $username = $_POST["username"];
        $password = $_POST["password"];

        // Hash the password (you should use a more secure hashing method in production)
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Store the user credentials in Redis
        $redis->hSet("users", $username, $hashedPassword);

        echo "User registered successfully!";
    }

    // Close the connection
    $redis->close();
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User Registration</title>
    </head>

    <body>
        <h1>User Registration</h1>

        <!-- Registration Form -->
        <form method="post" action="">
            <label for="username">Username:</label>
            <input type="text" name="username" required>
            <br>
            <label for="password">Password:</label>
            <input type="password" name="password" required>
            <br>
            <input type="submit" name="register" value="Register">
        </form>

        <!-- Display User Data -->
        <h2>Registered Users</h2>
        <?php
            // Retrieve and display registered users
            $users = $redis->hGetAll("users");

            echo "<ul>";
            foreach ($users as $username => $hashedPassword) {
                echo "<li>$username</li>";
            }
            echo "</ul>";
        ?>
    </body>
</html>