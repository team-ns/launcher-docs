# Рантайм

Для основного рантайма используется webpack + vue.js, но вы можете использовать любые другие удобные инструменты на HTML/CSS/JS. Главное чтобы был реализован функционал приведенный ниже.

## Сообщения для лаунчера

Все сообщения для лаунчера передаются с помощью функции `window.external.invoke()` в формате JSON

### Ready

Это сообщение ожидается, когда вся внешняя часть рантайма загружена и рантайм готов получать информацию от лаунчера. Не принимает никаких параметров.

Использование:

``` js
 window.external.invoke(`"ready"`);
```

### Login

Это сообщение вызывается для авторизации пользователя в лаунчере. В параметрах принимает имя пользователя, пароль и необходимо ли запоминать информацию о нем.

Использование:

``` js
let loginMessage = {
    login: {
        login: this.login,
        password: this.password,
        rememberMe: this.rememberMe
    }   
};
window.external.invoke(JSON.stringify(loginMessage));
```

### Logout

Это сообщение вызывается для выходе пользователя в лаунчере. Не принимает никаких параметров.

Использование:

``` js
window.external.invoke(`"logout"`);
```

### Play

Это сообщение вызывается когда пользователь хочет запустить какой-либо профиль. В параметрах принимает имя профиля.

Использование:

``` js
let playMessage = {
    play: {
        profile: selectedProfileName
    }
};
window.external.invoke(JSON.stringify(playMessage));
```

### SelectDir

Это сообщение вызывается когда пользователь хочет сменить директорию лаунчера. Не принимает никаких параметров.

Использование:

``` js
window.external.invoke(`"selectGameDir"`);
```

### SaveSettings

Использование:

``` js
let saveSettingsMessage = {
  saveSettings: {
      ram: selectedRamValue
  }
};
window.external.invoke(JSON.stringify(saveSettingsMessage));
```

## Функции вызываемые лаунчером

### app.backend.ready(maxRam)

Лаунчер вызывает эту функцию после того как смог подключится к серверу, загрузил настройки и готов к приему сообщений. В параметрах указывает максимальное количество ОЗУ на компьютере клиента.

Использование:

``` js
function ready(maxRam) {
  myBigStorage.maxUserRam = maxRam
  myBigLoader.stopLoading()
}
```

### app.backend.error(errorMessage)

Лаунчер вызывает эту функцию в случае если ему не удалось удачно обработать какое-то сообщение от пользователя. В параметрах указывает строку ошибки.

Использование:

``` js
function error(errorMessage) {
  myNotifier.notifyError(errorMessage)
}
```

### app.backend.logined(profiles)

Лаунчер вызывает эту функцию при удачном заходе пользователя в свой аккаунт. В параметры передается список профилей сервера.

Использование:

``` js
function logined(profiles) {
  let profiles = JSON.parse(profiles);
  myBigStorage.profiles = profiles;
  myBigRouter.routeToMenuPage();
}
```

Объект профиля имеет такую структуру:

``` js
{
    name: "SomeProfile",
    version: "1.12.2",
    description: "Best server in the world"
}
```

### app.backend.settings(settings)

Лаунчер вызывает эту функцию при обновлени  и настроек пользователя со своей стороны. В параметрах передаются настройки

Использование:

``` js
function settings(s) {
  myBigStorage.settings = JSON.parse(s);
}
```

### app.backend.download.wait()

Лаунчер вызывает эту функцию при начале хеширования файлов. Ничего не отдает в параметры

Использование:

``` js
function wait() {
  myBigRouter.routeToStartHashPage();
}
```

### app.backend.download.setTotalSize(totalSize)

Лаунчер вызывает эту функцию при начале скачивания. В параметры передает общий вес файлов, которые необходимо будет скачать.

Использование:

``` js
function setTotalSize(totalSize) {
  myBigStorage.download.totalSize = totalSize;
  myBigRouter.routeToDownloadPage();
}
```

### app.backend.download.updateSize(size)

Лаунчер вызывает эту функцию при изменении скачаного объема данных. В параметры передает общий вес файлов, который скачан.

Использование:

``` js
function updateSize(size) {
  myBigStorage.download.currentSize = size;
}
```
