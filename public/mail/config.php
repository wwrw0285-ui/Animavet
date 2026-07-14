<?php
/**
 * SMTP Configuration for AnimaVet
 * 
 * Fill in the password field before deploying.
 * To get SMTP password for Mail.ru:
 * 1. Go to https://mail.ru/ → Settings → Security → App passwords
 * 2. Generate app password for "External app"
 * 3. Copy and paste it below
 */
return [
    'host'       => 'smtp.mail.ru',
    'port'       => 465,
    'secure'     => 'ssl',           // 'ssl' for port 465, 'tls' for port 587

    'username'   => 'info@animavet.ru',
    'password'   => '',              // ← FILL THIS IN

    'from_email' => 'info@animavet.ru',
    'from_name'  => 'AnimaVet',

    'to_email'   => 'info@animavet.ru',  // Where to send form submissions
];
