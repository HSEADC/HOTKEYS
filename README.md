# HOT KEYS - архив сочетаний клавиш

Учебный проект студентов ОП «Дизайн и Программирование» НИУ ВШЭ <kbd>[B21DZ09-Project-4-2]</kbd>

## Начало работы

1. Клонируйте репозиторий

```bash
git clone https://github.com/HSEADC/HOTKEYS.git
```

2. Зайдите в папку проекта

```bash
cd HOTKEYS
```

3. Установите зависимости

```bash
pnpm i
```

3. Запустите сервер для разработки

```bash
pnpm start
```

4. Сделайте билд

```bash
pnpm build
```

5. При изменении файла <kbd>hotkeys.json</kbd> запустите пре-рендер и генерацию страниц шорткатов <kbd>shortcuts.html</kbd>

```bash
pnpm render && pnpm generate
```

</br>

## Добавление шорткатов

### Описание

Файл <kbd>hotkeys.json</kbd> содержит данные о шорткатах для проекта. Каждый шорткат представлен в формате JSON и содержит информацию о его свойствах и использовании.

### Расположение файла

Файл hotkeys.json находится в папке <kbd>/src/lib/data/</kbd> в корневой директории проекта.

### Добавление новых шорткатов
Чтобы добавить новые шорткаты в файл <kbd>hotkeys.json</kbd>, выполните следующие шаги:

1. Откройте файл <kbd>hotkeys.json</kbd>, расположенный в папке <kbd>/src/lib/data/</kbd> проекта.
2. Создайте новый ключ для <kbd>JSON</kbd> объекта, используя приведенную выше структуру шортката.
 
```json
{
  "link": "new-shortcut",
  "selected": "Новая категория",
  "text": "Описание нового шортката",
  "windows": "Ctrl+N",
  "macos": "Cmd+N",
  "popular": true,
  "useful": true,
  "simple": true,
  "complex": false,
  "target": "application",
  "page_title": "Название нового шортката",
  "page_win": "Описание для Windows на странице",
  "page_mac": "Описание для macOS на странице",
  "page_xl_span": "Крупный текст",
  "page_xl": "Описание крупного текста на странице",
  "page_l_start": "Начало описания длинного текста",
  "page_l_center": "Середина описания длинного текста",
  "page_l_end": "Окончание описания длинного текста",
  "page_l_win_first": "Ctrl",
  "page_l_win_second": "N",
  "page_l_mac_first": "Cmd",
  "page_l_mac_second": "N"
}

```


