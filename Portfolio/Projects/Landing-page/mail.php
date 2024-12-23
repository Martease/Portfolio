<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "your_email@example.com"; // Replace with your email address
  $subject = "Contact Form Submission";
  $body = "Name: " . $name . "\n" . 
          "Email: " . $email . "\n" . 
          "Message: " . $message;
  $headers = "From: " . $email;

  if (mail($to, $subject, $body, $headers)) {
    echo "Thank you for your message!";
  } else {
    echo "An error occurred while sending the email.";
  }
}
?>
