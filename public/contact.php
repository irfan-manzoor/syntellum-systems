<?php
/**
 * Syntellum Systems - Contact Form Mailer
 * Target recipient: info@syntellum.si
 */

// Handle CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

// Read raw JSON input or POST fields
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data) || empty($data)) {
    $data = $_POST;
}

$fullName = trim($data['fullName'] ?? $data['name'] ?? '');
$businessEmail = filter_var(trim($data['businessEmail'] ?? $data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$company = trim($data['company'] ?? '');
$jobTitle = trim($data['jobTitle'] ?? 'Not specified');
$areaOfInterest = trim($data['areaOfInterest'] ?? 'General Inquiry');
$projectDescription = trim($data['projectDescription'] ?? $data['message'] ?? '');
$referenceId = trim($data['referenceId'] ?? ('SYN-' . date('Y') . '-' . rand(1000, 9999)));

if (empty($fullName) || !$businessEmail || empty($projectDescription)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Please provide full name, a valid business email, and project description."
    ]);
    exit;
}

$to = "info@syntellum.si";
$subject = "New Syntellum Inquiry: " . $fullName . " (" . $company . ") [" . $referenceId . "]";

$emailBody = "========================================================\n";
$emailBody .= "SYNTELLUM SYSTEMS - PROJECT DISCOVERY INQUIRY\n";
$emailBody .= "========================================================\n\n";
$emailBody .= "Reference Token: " . $referenceId . "\n";
$emailBody .= "Timestamp:       " . date("Y-m-d H:i:s T") . "\n\n";
$emailBody .= "CLIENT INFORMATION:\n";
$emailBody .= "--------------------------------------------------------\n";
$emailBody .= "Full Name:       " . $fullName . "\n";
$emailBody .= "Business Email:  " . $businessEmail . "\n";
$emailBody .= "Company:         " . $company . "\n";
$emailBody .= "Job Title:       " . $jobTitle . "\n";
$emailBody .= "Area of Interest:" . $areaOfInterest . "\n\n";
$emailBody .= "PROJECT / OPERATIONAL CHALLENGE:\n";
$emailBody .= "--------------------------------------------------------\n";
$emailBody .= $projectDescription . "\n\n";
$emailBody .= "========================================================\n";
$emailBody .= "Source: syntellum.si contact discovery intake\n";

$headers = [];
$headers[] = "From: Syntellum Webform <webform@syntellum.si>";
$headers[] = "Reply-To: " . $fullName . " <" . $businessEmail . ">";
$headers[] = "X-Mailer: PHP/" . phpversion();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";

$mailSent = @mail($to, $subject, $emailBody, implode("\r\n", $headers));

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "referenceId" => $referenceId,
        "message" => "Inquiry sent successfully to info@syntellum.si"
    ]);
} else {
    // If local PHP mail is not configured on this host, return error status
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Host mail transport unavailable. Please reach info@syntellum.si directly."
    ]);
}
