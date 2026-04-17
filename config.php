<?php
/**
 * Portfolio Configuration File
 * Update these settings according to your needs
 */

// Site Configuration
define('SITE_NAME', 'Ankit Nayak Portfolio');
define('SITE_URL', 'http://localhost/portfolio');
define('SITE_DESCRIPTION', 'Full Stack Developer Portfolio');

// Contact Information
define('CONTACT_EMAIL', 'ankitanup9999@gmail.com');
define('CONTACT_PHONE', '+91 9337174963');
define('CONTACT_LOCATION', 'Odisha, India');

// Social Media Links
define('GITHUB_URL', 'https://github.com');
define('LINKEDIN_URL', 'https://linkedin.com/in/');
define('INSTAGRAM_URL', 'https://instagram.com/');
define('WHATSAPP_URL', 'https://wa.me/9337174963');

// Email Configuration (for contact form)
define('SMTP_HOST', 'localhost');
define('SMTP_PORT', 25);
define('SMTP_USERNAME', '');
define('SMTP_PASSWORD', '');
define('FROM_EMAIL', 'noreply@portfolio.com');
define('FROM_NAME', 'Portfolio Contact Form');

// Feature Flags
define('ENABLE_CONTACT_FORM', true);
define('ENABLE_ANALYTICS', false);
define('MAINTENANCE_MODE', false);

// Development Settings
define('DEBUG_MODE', false);
define('SHOW_ERRORS', false);

// Set error reporting based on debug mode
if (DEBUG_MODE) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
} else {
    error_reporting(0);
    ini_set('display_errors', 0);
}

// Timezone
date_default_timezone_set('Asia/Kolkata');

// Security Settings
define('ALLOWED_ORIGINS', ['http://localhost', 'http://127.0.0.1']);
define('MAX_UPLOAD_SIZE', 5242880); // 5MB in bytes

/**
 * Helper function to sanitize input
 */
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

/**
 * Helper function to validate email
 */
function is_valid_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

/**
 * Helper function to check maintenance mode
 */
function check_maintenance_mode() {
    if (MAINTENANCE_MODE && !isset($_GET['preview'])) {
        header('HTTP/1.1 503 Service Temporarily Unavailable');
        header('Status: 503 Service Temporarily Unavailable');
        header('Retry-After: 3600');
        echo '<!DOCTYPE html>
        <html>
        <head>
            <title>Maintenance Mode</title>
            <style>
                body { font-family: Arial; text-align: center; padding: 50px; background: #0f172a; color: #f1f5f9; }
                h1 { color: #6366f1; }
            </style>
        </head>
        <body>
            <h1>🔧 Under Maintenance</h1>
            <p>We are currently performing scheduled maintenance.</p>
            <p>Please check back soon!</p>
        </body>
        </html>';
        exit;
    }
}

// Check maintenance mode on every page load
check_maintenance_mode();
?>
