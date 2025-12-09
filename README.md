# 📱 Projeto Mobile com Expo -- Catálogo de Pokémon

Este repositório contém o desenvolvimento de um aplicativo mobile criado
com **React Native + Expo**, seguindo os requisitos do projeto final da
disciplina.\
O app utiliza múltiplas telas, componentes personalizados, consumo de
API, pesquisa dinâmica e interface responsiva. Ele foi totalmente
desenvolvido no **Expo.dev**.

------------------------------------------------------------------------

## 📘 Funcionalidades do App

-   Exibição de uma lista de Pokémon consumidos da **PokeAPI**\
-   Pesquisa por nome com atualização dinâmica da lista\
-   Tela de detalhes com informações específicas\
-   Navegação entre telas com react-navigation\
-   Componentes reutilizáveis como cards, header e input de busca\
-   Interface limpa, organizada e responsiva

------------------------------------------------------------------------

## 🏗️ Organização das Pastas

    ProjetoMobile/
    │-- app/
    │   │-- navigation/
    │   │   └── AppNavigator.jsx
    |   |
    │   │-- context/
    │   │   └── FavoritesContext.jsx
    |   |
    │   │-- screens/
    │   │   ├── HomeScreen.jsx
    │   │   ├── DetailsScreen.jsx
    │   │   └── FavoritesScreen.jsx
    │   │   └── SplashScreen.jsx
    |   |
    |   |-- _layout.jsx
    |   |
    │   │-- assets/
    │   │   └── icon/
    │   │   └── img/
    |   |
    │   │-- components/
    │   │   └── Header.jsx
    │   │   └── PokemonCard.jsx
    │   │   └── SearchBar.jsx
    |   |
    │   │-- hooks/
    │   │   └── useFetch.js
    |   |
    │   │-- constants/
    │   │   └── api.js
    |   |

------------------------------------------------------------------------

## 🔌 API Utilizada

**PokeAPI:**\
https://pokeapi.co/

Arquivo de constantes (`src/constants/api.js`):

``` js
export const API_URL = "https://pokeapi.co/api/v2/pokemon";
```

------------------------------------------------------------------------

## 🎨 Interface

O layout foi desenvolvido com foco em:

-   Legibilidade e simplicidade\
-   Cards organizados e padronizados\
-   Layout responsivo para diferentes resoluções\
-   Navegação clara e intuitiva

------------------------------------------------------------------------

## 🧰 Tecnologias Utilizadas

-   React Native\
-   Expo\
-   React Navigation\
-   PokeAPI\
-   JavaScript (ES6+)

------------------------------------------------------------------------

## 🧪 Como Rodar o Projeto

1.  Instale as dependências:

``` bash
npm install
```

2.  Inicie o ambiente do Expo:

``` bash
npx expo start
```

3.  Abra o aplicativo **Expo Go** no celular e escaneie o QR Code.

------------------------------------------------------------------------

## 📌 Notas Finais

Este projeto foi desenvolvido aplicando componentização, organização de
pastas, navegação, integração com API e boas práticas de desenvolvimento
mobile utilizando Expo.\
O README serve como documentação oficial do projeto.
