# Настройка авторизации

## JSON

Конфигурация данного метода выглядит так:

``` json
"auth": {
    "JSON": {
        "authUrl": "https://example.com/launcher/auth",
        "entryUrl": "https://example.com/launcher/entry",
        "updateServerIdUrl": "https://example.com/launcher/update/server",
        "updateAccessTokenUrl": "https://example.com/launcher/update/token",
        "apiKey": "apiKey"
    }
}
```

Значение из поля apiKey будет передаваться при каждом запросе сервера в заголовке `X-Launcher-API-Key`

На все URL посылается запрос POST методом

### AuthURL

Данный запрос используется для авторизации пользователя

Тело запроса для authUrl будет выглядеть так:

``` json
{
    "username": "SomeUser",
    "password": "SomePassword",
    "ip": "127.0.0.1"
}
```

Ожидаемый ответ в случае успешной авторизации будет UUID пользователя:

``` json
{
    "uuid": "00000000-00000000-00000000-00000000"
}
```

В случае ошибки должно быть возвращено сообщение об ошибке:

``` json
{
    "message": "Неправильный логин или пароль"
}
```

### EntryURL

Данный запрос используется для получения информации о пользователе

Тело запроса для entryUrl может в себе содержать либо uuid пользователя, либо его имя:

``` json
{
    "uuid": "00000000-00000000-00000000-00000000"
}
```

``` json
{
    "username": "SomeUser"
}
```

Ожидаемый ответ в случае если пользователь с таким именем существует:

``` json
{
    "uuid": "SomeUser",
    "username": "00000000-00000000-00000000-00000000",
    "serverId": null,
    "accessToken": null
}
```

::: warning
Если пользователь не найден рекомендуется возвращать ответ со статусом [404 (Not Found)](http://http.cat/404)
:::

### UpdateAccessTokenURL

Данный запрос используется для обновления токена авторизации пользователя

Тело запроса для updateAccessTokenUrl будет выглядеть вот так:

``` json
{
    "uuid": "00000000-00000000-00000000-00000000",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

Ожидаемый ответ в случае если обновление произошло успешно это пустое тело со статусом [200 (OK)](http://http.cat/200)

::: warning
Если обновление произошло не успешно рекомендуется возвращать ответ со статусом [400 (Bad Request)](http://http.cat/400)
:::

### UpdateServerIdURL

Данный запрос используется для обновления id сервера к которому подключается пользователь

Тело запроса для updateServerIdUrl будет выглядеть так:

``` json
{
    "uuid": "00000000-00000000-00000000-00000000",
    "serverId": "4ed1f46bbe04bc756bcb17c0c7ce3e4632f06a48"
}
```

Ожидаемый ответ в случае если обновление произошло успешно это пустое тело со статусом [200 (OK)](http://http.cat/200)

::: warning
Если обновление произошло не успешно рекомендуется возвращать ответ со статусом [400 (Bad Request)](http://http.cat/400)
:::
