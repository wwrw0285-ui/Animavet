# Установка PHPMailer

Для отправки писем через SMTP необходимо установить библиотеку PHPMailer.

## Способ 1: Через Composer (рекомендуется)

```bash
cd mail/
composer require phpmailer/phpmailer
```

## Способ 2: Ручная установка

1. Скачайте PHPMailer: https://github.com/PHPMailer/PHPMailer/releases
2. Распакуйте содержимое папки `src/` в `mail/PHPMailer/src/`

## Настройка SMTP

1. Откройте `config.php`
2. Заполните поле `'password'` паролем SMTP для info@animavet.ru
3. Чтобы получить пароль SMTP для Mail.ru:
   - Зайдите в настройки почты
   - Раздел "Безопасность" → "Пароли приложений"
   - Создайте пароль для внешнего приложения
   - Скопируйте и вставьте в config.php

## Параметры Mail.ru SMTP

- Сервер: smtp.mail.ru
- Порт: 465 (SSL) или 587 (TLS)
- Логин: info@animavet.ru
- Пароль: [пароль приложения]
