# Meu Projeto de Scraping e React Native

Este projeto consiste em um **backend em Node.js** que realiza o **scraping de dados** de uma página da web e envia essas informações por **e-mail**. Além disso, há um **app mobile** desenvolvido em **React Native com Expo** que consome e exibe dados de uma API gratuita e também da API própria desenvolvida no backend. O app também faz uso de recursos de hardware, como a câmera e a geolocalização.

## Estrutura do Projeto

A estrutura do projeto é dividida em duas partes principais:

### Backend

O backend é responsável por realizar o scraping de dados de uma página da web e enviar as informações extraídas por e-mail. Ele é desenvolvido em **Node.js** com **Express**.


### Frontend

O frontend é um **app React Native** que consome tanto uma API gratuita quanto a API do backend, e exibe os dados na tela. Além disso, o app usa **câmera** e **geolocalização** para proporcionar uma experiência mais completa.


---

## Como Rodar o Projeto

### 1. Backend

#### Requisitos

- **Node.js** (versão 14 ou superior)

#### Passos para rodar

1. Navegue até a pasta `backend`:

    ```bash
    cd backend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Rode o servidor:

    ```bash
    node server.js
    ```

Agora o backend estará rodando no endereço `http://localhost:3000`. A API para realizar o scraping está disponível em `http://localhost:3000/scrape`.

### 2. Frontend (App React Native)

#### Requisitos

- **Node.js** (versão 14 ou superior)
- **Expo CLI** (caso não tenha o Expo instalado, instale com `npm install -g expo-cli`)

#### Passos para rodar

1. Navegue até a pasta `frontend`:

    ```bash
    cd frontend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o projeto com Expo:

    ```bash
    npm start
    ```

4. O Expo abrirá uma nova página no navegador. Você pode escanear o QR code com o aplicativo Expo Go em seu dispositivo móvel ou abrir o app no simulador.

---

## Funcionalidades

### Backend

- **Scraping**: O backend utiliza a biblioteca `cheerio` para fazer o scraping de uma página da web e extrair os dados desejados.
- **Envio de E-mail**: Após o scraping, o backend utiliza `nodemailer` para enviar um e-mail com os dados extraídos.

### Frontend

- **Consumo de APIs**: O app consome dados de uma API gratuita e da API própria (backend).
- **Câmera**: O app utiliza a biblioteca `expo-camera` para capturar imagens com a câmera do dispositivo.
- **Geolocalização**: O app usa a biblioteca `expo-location` para obter a localização do dispositivo.

---

## Dependências

### Backend

- `express`: Framework minimalista para Node.js.
- `axios`: Cliente HTTP para fazer requisições.
- `cheerio`: Biblioteca para scraping de páginas HTML.
- `nodemailer`: Biblioteca para envio de e-mails.

### Frontend

- `axios`: Cliente HTTP para fazer requisições.
- `expo-camera`: Biblioteca do Expo para capturar imagens com a câmera.
- `expo-location`: Biblioteca do Expo para obter a localização do dispositivo.

---

## Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Faça suas alterações e commit (`git commit -am 'Adicionar nova feature'`).
4. Envie para a branch do seu fork (`git push origin feature/nova-feature`).
5. Crie um novo Pull Request.

---

## Licença

Este projeto é licenciado sob a **MIT License**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Considerações Finais

Este projeto oferece uma base sólida para aprender sobre integração de APIs, scraping de dados, e o uso de recursos de hardware em apps móveis. A implementação do backend e frontend em conjunto proporciona uma experiência completa para quem deseja construir um aplicativo que consome e manipula dados de diversas fontes.

--- 
