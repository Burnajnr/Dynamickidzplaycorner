<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $date = htmlspecialchars($_POST['date']);
    $message = htmlspecialchars($_POST['message']);

    // Email details
    $to = "Dynamickidzplay@gmail.com"; // Replace with your Gmail address
    $subject = "New Booking Request from $name";
    $body = "You have received a new booking request:\n\n" .
            "Name: $name\n" .
            "Email: $email\n" .
            "Phone: $phone\n" .
            "Date: $date\n" .
            "Message: $message\n";

    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your booking request has been sent.";
    } else {
        echo "Sorry, there was an error sending your booking request. Please try again.";
    }
}
?>

