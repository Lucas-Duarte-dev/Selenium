# Selenium

## Instalação

### Ubunto
 - <strong>Chrome:</strong>

    Baixando o Chrome:
    ```powershell
    wget -P ~/Downloads/ http://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
    ```
    Instalando o pacote do Google Chrome:
    ```powershell
    sudo dpkg -i ~/Downloads/google-chrome*.deb
    ```
    Vamos verificar se intalou:
    ```powershell
    google-chrome --version
    ```
 - <strong>Chrome Driver:</strong>

    Baixando o chromedriver:
    ```powershell
    wget -P ~/    http://chromedriver.storage.googleapis.com/87.0.4280.88/chromedriver_linux64.zip
    ```
    Agora vamos descompactar o arquivo:
    ```powershell
    unzip ~/chromedriver_linux64.zip
    ```
    Agora vamos tornar o arquivo descompactado em um executável:
    ```powershell
    chmod +x ~/chromedriver
    ```
    Próximo passo é mover esse executável para a pasta de compartilhamento
    ```powershell
     sudo mv ~/chromedriver /usr/local/share/chromedriver
    ```
    Agora vamos fazer uma ligação simbólica (symlink) na pasta bin:
    ```powershell
     sudo ln -s /usr/local/share/chromedriver  /usr/local/bin/chromedriver
    ```
    Agora só mais uma vez porém vamos vincular na pasta bin do usuário:
    ```powershell
    sudo ln -s /usr/local/share/chromedriver /usr/bin/chromedriver
    ```
    E finalmente vamos verificar se foi instalado corretamente:
    ```powershell
    chromedriver --version
    ```
### Windows
- <strong>Firefox:</strong>
Baixando o chocolatey:
> **Site para download: [Chocolatey](https://chocolatey.org/install)**

Rode o comando no modo administrador do powershell:
``` powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```
Caso tenha atualize o chocolatey: `choco upgrade chocolatey
`

Vamos instalar o firefox, selenium e os drivers de navegador:
```
choco install firefox selenium selenium-all-drivers
```
