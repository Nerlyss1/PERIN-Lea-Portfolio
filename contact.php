<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once(__DIR__ . '/vendor/autoload.php');
use \Mailjet\Resources;

define('API_PUBLIC_KEY', 'a4bda0c23e44e9a6c06a1b04b7e9a314');
define('API_PRIVATE_KEY', '8f66d54c11cdb7016861802b4619912b');
$mj = new \Mailjet\Client(API_PUBLIC_KEY, API_PRIVATE_KEY, true, ['version' => 'v3.1']);

if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['telephone']) && !empty($_POST['message'])) {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $telephone = htmlspecialchars($_POST['telephone']);
    $message = htmlspecialchars($_POST['message']);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $contenu = "Nom : $name\nEmail : $email\nTélephone : $telephone\nMessage : $message";

        $body = [
            'Messages' => [
                [
                    'From' => [
                        'Email' => "lea.perin@ynov.com",
                        'Name' => "Léa PERIN"
                    ],
                    'To' => [
                        [
                            'Email' => "lea.perin@ynov.com",
                            'Name' => "Léa PERIN"
                        ]
                    ],
                    'Subject' => "Mail entrant de mon site",
                    'TextPart' => $contenu,
                ]
            ]
        ];

        $response = $mj->post(Resources::$Email, ['body' => $body]);
        $response->success();

        // Envoi réussi, redirection vers une autre page (par exemple, success.html)
        header('Location: contact-error-or-success/success.html');
        die();
    } else {
        // Email non valide, redirection vers une autre page d'erreur (par exemple, error.html)
        header('Location: contact-error-or-success/error.html');
        die();
    }
} else {
    // Données du formulaire incomplètes, redirection vers une autre page d'erreur (par exemple, error.html)
    header('Location: contact-error-or-success/error.html');
    die();
}
?>
