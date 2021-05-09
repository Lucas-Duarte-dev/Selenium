# Selenium

## Instalação

### Ubunto
 - <strong>Chrome:</strong>

    Baixando o Chrome:
    ```
    wget -P ~/Downloads/ http://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
    ```
    Instalando o pacote do Google Chrome:
    ```
    sudo dpkg -i ~/Downloads/google-chrome*.deb
    ```
    Vamos verificar se intalou:
    ```
    google-chrome --version
    ```
 - <strong>Chrome Driver:</strong>

    Baixando o chromedriver:
    ```
    wget -P ~/    http://chromedriver.storage.googleapis.com/87.0.4280.88/chromedriver_linux64.zip
    ```
    Agora vamos descompactar o arquivo:
    ```
    unzip ~/chromedriver_linux64.zip
    ```
    Agora vamos tornar o arquivo descompactado em um executável:
    ```
    chmod +x ~/chromedriver
    ```
    Próximo passo é mover esse executável para a pasta de compartilhamento
    ```
     sudo mv ~/chromedriver /usr/local/share/chromedriver
    ```
    Agora vamos fazer uma ligação simbólica (symlink) na pasta bin:
    ```
     sudo ln -s /usr/local/share/chromedriver  /usr/local/bin/chromedriver
    ```
    Agora só mais uma vez porém vamos vincular na pasta bin do usuário:
    ```
    sudo ln -s /usr/local/share/chromedriver /usr/bin/chromedriver
    ```
    E finalmente vamos verificar se foi instalado corretamente:
    ```
    chromedriver --version
    ```
