---
layout: post
title: "Gerenciando versões do Python e Ruby em ambientes virtuais"
author: cecivieira
date: 2026-04-20 09:00
lang: pt-br
translated-es: 
translated-en: 
translated-ptbr: 
tags: [tutorial]
categories: [python, ruby, ambiente virtual, pyenv, rbenv]
image: https://res.cloudinary.com/damhz6skt/image/upload/v1776720930/36078005_8372017_kntffb.jpg
description: "Como criar ambientes virtuais em Python e Ruby, usando outras versões da linguagem diferente da original do seu computador."
toc: false
beforetoc: 
---
> Esse artigo pode fazer mais sentido se você já souber o básico de Python ou Ruby.

Imagina um prédio empresarial, onde cada sala é dedicada a uma atividade: com uma cor, um tipo de móvel, um layout e uma atividade comercial diferente. Nenhuma sala interfere na outra, ainda que coexistam na mesma edificação. Pronto, esse prédio comercial é o seu computador e as salas são os ambientes virtuais.

O conceito de "ambiente virtual" está presente em algumas linguagens de programação, como Python e Ruby. Eles servem para encapsular os requisitos de um determinado projeto de software, de tal maneira que possibilite em um mesmo computador haver vários sem que eles entrem em conflito.

É bem comum que cada projeto tenha os seus próprios requisitos, por exemplo: o projeto A usa a versão Python 2.0, enquanto o B usa Python 3.14. Esses requisitos costumam estar listados em um arquivo, "requirements.txt" (quando é um projeto em Python) e "Gemfile.lock" (quando é um projeto em Ruby), ou no arquivo README.md.

Pode ser que a versão da linguagem de programação requisitada, pelo projeto, seja diferente daquela que você tem instalada no computador. Nesse caso, é necessário usar um gerenciador de versões para instalar a versão necessária, em seguida criar o ambiente virtual e, por fim, instalar o projeto. 

Vou te mostrar como fazer, primeiro em Python e depois em Ruby, considerando o sistema operacional Ubuntu.

## Python: pyenv e venv

Como gerenciador de versão do Python, vamos usar o [Pyenv](https://github.com/pyenv/pyenv), que é muito popular devido a sua simplicidade para manter várias versões no mesmo local. Já para criar o ambiente virtual, usaremos o [módulo venv](https://docs.python.org/pt-br/3/library/venv.html), que é nativo do Python, ou seja, já vem junto com a linguagem de programação.


### Pyenv: gerenciador de versões

1. Atualizar o "apt";
```bash
sudo apt update
```
2. Instalar as dependências do Pyenv;
```bash
sudo apt install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev
```
3. Baixar o Pyenv;
```bash
curl https://pyenv.run | bash
```
4. Verificar o terminal que você está usando;
```bash
echo $0
```
Respostas esperadas: 
-bash
-zsh
5. Configurar o terminal de acordo com a resposta recebida;

5.1 Bash
```bash
echo -e 'export PYENV_ROOT="$HOME/.pyenv"\nexport PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo -e 'eval "$(pyenv init --path)"\neval "$(pyenv init -)"' >> ~/.bashrc
```
5.2 Zsh
```bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo '[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init - zsh)"' >> ~/.zshrc
```
6. Reiniciar o terminal;
```bash
exec "$SHELL"
```
7. Verificar se a instalação ocorreu com sucesso
```bash
pyenv --version
```
Resposta esperada: pyenv x.x.x (número da versão)

Depois que a instalação do Pyenv estiver concluída, você precisa identificar no projeto que você deseja instalar, qual é a versão do Python que ele tem como requisito. Dá uma olhadinha no README.md, lá costuma ter explícito.

Assim que tu descobrir, vamos instalar a versão necessária. Oh, das próximas vezes você não vai precisar instalar o Pyenv novamente, pois já estará no teu computador. Então, com o Pyenv instalado, segue as instruções a seguir:

1. Listar as versões do Python disponíveis para instalação;
```bash
pyenv install --list
```

Verifique se a versão desejada do Python está disponível para instalação: pyenv install --list;
Instale a versão desejada: pyenv install [versão desejada];
Configure a versão do Python no seu ambiente local: pyenv global [versão desejada];
Certifique a troca da versão do Python no ambiente local: python3 --version;
Navegue para a pasta do seu projeto;
Crie o Ambiente virtual;
Retorne a versão do Python original do seu ambiente local: pyenv global system

### Venv: módulo para ambientes virtuais

## Ruby: rbenv e bundler

## Referências
[Easy-to-Follow Guide of How to Install PyENV on Ubuntu](https://medium.com/@aashari/easy-to-follow-guide-of-how-to-install-pyenv-on-ubuntu-a3730af8d7f0)
[Pyenv](https://github.com/pyenv/pyenv)