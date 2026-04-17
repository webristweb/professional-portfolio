<?php
// Include configuration
require_once 'config.php';

header('Content-Type: application/json');

// Check if contact form is enabled
if (!ENABLE_CONTACT_FORM) {
    echo json_encode([
        'success' => false,
        'errors' => ['Contact form is currently disabled']
    ]);
    exit;
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get and sanitize form data
    $name = isset($_POST['name']) ? sanitize_input($_POST['name']) : '';
    $email = isset($_POST['email']) ? sanitize_input($_POST['email']) : '';
    $subject = isset($_POST['subject']) ? sanitize_input($_POST['subject']) : '';
    $message = isset($_POST['message']) ? sanitize_input($_POST['message']) : '';
    
    // Validation
    $errors = [];
    
    if (empty($name)) {
        $errors[] = "Name is required";
    } elseif (strlen($name) < 2) {
        $errors[] = "Name must be at least 2 characters";
    }
    
    if (empty($email)) {
        $errors[] = "Email is required";
    } elseif (!is_valid_email($email)) {
        $errors[] = "Invalid email format";
    }
    
    if (empty($subject)) {
        $errors[] = "Subject is required";
    } elseif (strlen($subject) < 3) {
        $errors[] = "Subject must be at least 3 characters";
    }
    
    if (empty($message)) {
        $errors[] = "Message is required";
    } elseif (strlen($message) < 10) {
        $errors[] = "Message must be at least 10 characters";
    }
    
    // If there are errors, return them
    if (!empty($errors)) {
        echo json_encode([
            'success' => false,
            'errors' => $errors
        ]);
        exit;
    }
    
    // Email configuration
    $to = CONTACT_EMAIL;
    $email_subject = "Portfolio Contact: " . $subject;
    
    // Email body
    $email_body = "You have received a new message from your portfolio contact form.\n\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Subject: $subject\n\n";
    $email_body .= "Message:\n$message\n";
    
    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo json_encode([
            'success' => true,
            'message' => 'Thank you! Your message has been sent successfully.'
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'errors' => ['Failed to send email. Please try again later.']
        ]);
    }
    
} else {
    echo json_encode([
        'success' => false,
        'errors' => ['Invalid request method']
    ]);
}
?>
