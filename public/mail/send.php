<?php
/**
 * Form handler for AnimaVet
 * Receives POST requests from the frontend form and sends emails via SMTP
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Honeypot check
if (!empty($_POST['website'])) {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Spam detected']);
    exit;
}

// Get and sanitize input
$name    = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
$phone   = isset($_POST['phone']) ? preg_replace('/[^0-9+]/', '', $_POST['phone']) : '';
$animal  = isset($_POST['animal']) ? trim(strip_tags($_POST['animal'])) : '';
$comment = isset($_POST['comment']) ? trim(strip_tags($_POST['comment'])) : '';

// Validate phone (minimum 10 digits)
$phoneDigits = preg_replace('/[^0-9]/', '', $phone);
if (strlen($phoneDigits) < 10) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Phone number is required']);
    exit;
}

// Load config
$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Configuration file not found']);
    exit;
}

$config = require $configPath;

// Build email content
$subject = 'Новая заявка с сайта AnimaVet';

$body = "Новая заявка с сайта AnimaVet\n\n";
$body .= "Имя: " . ($name ?: 'Не указано') . "\n";
$body .= "Телефон: " . $phone . "\n";
$body .= "Вид животного: " . ($animal ?: 'Не указано') . "\n";
$body .= "Комментарий: " . ($comment ?: 'Нет') . "\n";
$body .= "\n---\n";
$body .= "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";
$body .= "Дата: " . date('d.m.Y H:i:s') . "\n";

$htmlBody = "<html><body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>";
$htmlBody .= "<h2 style='color: #3F4E3F;'>Новая заявка с сайта AnimaVet</h2>";
$htmlBody .= "<table style='border-collapse: collapse;'>";
$htmlBody .= "<tr><td style='padding: 8px 16px 8px 0; font-weight: bold;'>Имя:</td><td>" . htmlspecialchars($name ?: 'Не указано') . "</td></tr>";
$htmlBody .= "<tr><td style='padding: 8px 16px 8px 0; font-weight: bold;'>Телефон:</td><td><a href='tel:" . $phoneDigits . "'>" . htmlspecialchars($phone) . "</a></td></tr>";
$htmlBody .= "<tr><td style='padding: 8px 16px 8px 0; font-weight: bold;'>Вид животного:</td><td>" . htmlspecialchars($animal ?: 'Не указано') . "</td></tr>";
$htmlBody .= "<tr><td style='padding: 8px 16px 8px 0; font-weight: bold;'>Комментарий:</td><td>" . nl2br(htmlspecialchars($comment)) . "</td></tr>";
$htmlBody .= "</table>";
$htmlBody .= "<hr style='margin-top: 20px; border: none; border-top: 1px solid #ddd;'>";
$htmlBody .= "<p style='color: #999; font-size: 12px;'>IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . " | Дата: " . date('d.m.Y H:i:s') . "</p>";
$htmlBody .= "</body></html>";

// Try PHPMailer first, fallback to mail()
$sent = false;

$phpmailerAutoload = __DIR__ . '/PHPMailer/src/PHPMailer.php';
if (file_exists($phpmailerAutoload)) {
    try {
        require __DIR__ . '/PHPMailer/src/Exception.php';
        require __DIR__ . '/PHPMailer/src/PHPMailer.php';
        require __DIR__ . '/PHPMailer/src/SMTP.php';

        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        $mail->isSMTP();
        $mail->Host       = $config['host'];
        $mail->SMTPAuth   = true;
        $mail->Username   = $config['username'];
        $mail->Password   = $config['password'];
        $mail->SMTPSecure = $config['secure'] === 'tls' ? PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS : PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = $config['port'];
        $mail->CharSet    = 'UTF-8';

        $mail->setFrom($config['from_email'], $config['from_name']);
        $mail->addAddress($config['to_email']);
        $mail->addReplyTo($config['from_email'], $config['from_name']);

        $mail->Subject = $subject;
        $mail->Body    = $body;
        $mail->AltBody = $body;

        $sent = $mail->send();
    } catch (Exception $e) {
        error_log('PHPMailer error: ' . $e->getMessage());
        $sent = false;
    }
}

// Fallback to PHP mail()
if (!$sent) {
    $headers = "From: {$config['from_name']} <{$config['from_email']}>\r\n";
    $headers .= "Reply-To: {$config['from_email']}\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $sent = mail($config['to_email'], $subject, $body, $headers);
}

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Message sent']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send']);
}
