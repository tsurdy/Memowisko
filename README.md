# Memowisko 

Aplikacja Memowisko została napisana przy użyciu React. Zadaniem aplikacji jest wyświetlanie memów oraz możliwość ich oceny za pomocą Like i Dislike.

## Instrukcja uruchomienia aplikacji

Po pobraniu repozytorium projektu musimy wykonać w terminalu polecenie:

### `npm install`

Sprawi to ,że zostaną zainstalowane potrzebne pakiety z pliku 'package.json'.

Następnie do uruchomienia aplikacji w terminalu wpisujemy polecenie:

### `npm start`

## Opis głównych plików aplikacji 

### `App.js`

Plik główny aplikacji.

Opis kodu:

Stała `memesArray` zawiera tablicę obiektów reprezentujących memy w aplikacji, z polami takimi jak "id", "name", "image", "likes", "dislikes" i "favorite".

Wykorzystywany jest hook `useState`, umożliwia on przechowywanie i aktualizowanie memów wyświetlanych na stronie.
 
Funkcje do obsługi przycisków na stronie:
- `handleLike` - zwiększanie liczby "polubień" wybranego mema
- `handleDislike` - zwiększanie liczby "nie polubień" wybranego mema
- `handleCreateMeme`- dodanie nowego mema
- `handleFavoriteClick` - zmiana czy mem jest ulubiony czy nie

### `Memes.js`

Komponent `Memes`, tworzy listę memów. W komponencie wykorzystywany jest `map` do wygenerowania listy elementów zawierających informacje o każdym memie, w tym jego nazwę, obrazek, przyciski `Like` i `Dislike` oraz przycisk `Gwiazdka`. Przycisk `Gwiazdka` wykorzystuje SVG, dzięki temu wypełnienie zmienia się w zależności od tego, czy mem jest ulubiony czy nie. Po kliknięciu w gwiazdkę, wywoływana jest funkcja `handleFavoriteClick`. Po kliknięciu na przycisk 'like' wywoływana jest funkcja `handleLike`, a po kliknięciu na przycisk `dislike` wywoływana jest funkcja `handleDislike`.

### `CreateMeme.js`

 Komponent `CreateMeme`, tworzy formularz pozwalający użytkownikowi na utworzenie nowego mema. Komponent ten używa hooka useState do śledzenia wartości pola `name` oraz `imageUrl`. Po zatwierdzeniu formularza przyciskiem `Stwórz`, komponent wywołuje funkcję `handleSubmit`, która wywołuje funkcję przekazaną przez props `handleCreateMeme` i przekazuje obiekt reprezentujący nowego mema. Ostatecznie, pola formularza są wyczyszczane za pomocą `setName` i `setImageUrl`.