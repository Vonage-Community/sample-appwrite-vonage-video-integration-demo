<?php

use Appwrite\AppwriteException;
use Appwrite\Client;
use Appwrite\Services\Databases;
use OpenTok\OpenTok;
use OpenTok\Role;

require_once __DIR__ . '/vendor/autoload.php';

return function ($req, $res) {
    $appwrite = new Client();
    $appwrite
      ->setEndpoint('https://cloud.appwrite.io/v1')
      ->setProject($req['variables']['APPWRITE_FUNCTION_PROJECT_ID'])
      ->setKey($req['variables']['APPWRITE_FUNCTION_API_KEY'])
      ->setSelfSigned(true);

    $appwriteDatabases = new Databases($appwrite);
    $opentok = new OpenTok($req['variables']['VONAGE_VIDEO_API_KEY'], $req['variables']['VONAGE_VIDEO_API_SECRET']);

    try {
        $document = $appwriteDatabases->getDocument('video-demo', 'sessions', 'video-session');
    } catch (AppwriteException $e) {
        $session = $opentok->createSession();
        $document = ['session_id' => $session->getSessionId()];
        $appwriteDatabases->createDocument('video-demo', 'sessions', 'video-session', $document);
    }
    
    $token = $opentok->generateToken($document['session_id'], [
        'role' => Role::PUBLISHER
    ]);

    $res->json([
        'token' => $token,
        'session_id' => $document['session_id'],
        'apiKey' => $req['variables']['VONAGE_VIDEO_API_KEY'],
    ]);
};