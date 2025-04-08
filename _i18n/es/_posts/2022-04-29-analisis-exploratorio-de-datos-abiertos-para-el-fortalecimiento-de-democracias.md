---
layout: post
title: "Análisis exploratorio de datos abiertos para el fortalecimiento de democracias"
author: cecivieira
date: 2022-04-26 09:00
lang: es
translated-es: 
translated-en: 
translated-ptbr: /analise-exploratoria-de-dados-para-fortalecimento-de-democracias
tags: [artículo, charla]
categories: [datos abiertos, gobierno abierto, américa latina, análisis exploratorio, innovación cívica, pandas]
image: https://res.cloudinary.com/damhz6skt/image/upload/v1681494290/capas-site/24_qtancy.jpg
description: "Datos abiertos son recursos para el desarrollo de tecnologías que ayudan a solventar problemas sociales y fomentar la gestión participativa en los gobiernos locales. El artículo enseñará técnicas iniciales para explotar conjuntos de datos abiertos con la libreria Pandas."
toc: false
beforetoc:
---
> En este artículo encontrás el contenido técnico de tecnología ([notebook](https://github.com/cecivieira/cotas-genero-eleicoes-e-proposicoes-legislativas/blob/main/PyCon_US.ipynb)) y las diapositivas de la [charla "Análisis exploratorio de datos abiertos para el fortalecimiento de democracias"](https://youtu.be/AXQ7cFm9WLI) presentada en la [PyCon US 2022 (PyCon Charlas)](https://us.pycon.org/2022/schedule/presentation/97/).

Para empezar, todo el análisis de datos hay que tener un contexto. Lo nuestro es la existencia, en Brasil, de una ley que permite a las mujeres votaren y seren votadas, además las legislaciones de cuota de género (Ley 9.504/1997 y 12.034/2009) y el tema de las propuestas legislativas.

Los temas de las proposiciones son interesante porque la Organización de los Estados America (OEA) prevé que a partir de 30% de mujeres en las casas legislativas se nota aumento sustancial en proposiciones legislativas en favor de la democracia y protección de derechos de grupos históricamente marginados, ejemplo: campesinos, mujeres, población LGTQIA+, negros, ancianos, discapacitados, artistas, poblaciones económicamente vulnerables y pueblos indígenas.

Si tienes interés en el tema de datos abiertos y nivel de transparencia de datos en América Latina, invitote a leer el artículo con el [contenido teórico de la charla](www.cecivieira.com.br/es/analisis-exploratorio-de-datos-tecnologia-social-y-gobiernos-democraticos/).

## Pipeline

<img class="rounded mx-auto d-block" src="../../assets/images/2022-04-29/pipeline.png">

El pipeline de este análisis es compuesto por colecta, pre-procesamiento y análisis de datos. Todavía, antes del análisis de las proposiciones hizo falta estandarizar sus palabras claves, por lo tanto fue desarrolado un classificador (modelo de aprendizaje de máquina).

Los datos fueron colectados del [Portal de Datos Abiertos de la Cámara de Diputados de Brasil](https://dadosabertos.camara.leg.br/) y corresponden a las candidaturas electas en el periodo de 1934 y 2021. El objetivo del análisis es compreender la evolución de la cantidad de mujeres elegidas como diputadas federal, el impacto de las legislaciones de cuotas de género y si ya se nota cambio en las temáticas de las propuestas legislativas.

### Colecta de datos
Fue usada la API RestFul en Python para recolectar los datos, excepto los de las proposiciones legislativas que no estaban disponible por API, en este caso los datos fueron descargados manualmente año a año.

Es importante decir que en el [Portal de Datos Abiertos de la Cámara de Diputados de Brasil](https://dadosabertos.camara.leg.br/) no están disponibles todas las proposiciones legislativas hasta el año 2000. Entonces, puede que los resultados del análisis no refleje la realidad, todavía creo que es un buen ejercicio para tener ideas de cómo podemos manejar datos abiertos y actuar desde la sociedad civil.

### Pre procesamiento

Las seguintes etapas del *pipeline* puedes encontrar en [este notebook](https://github.com/cecivieira/cotas-genero-eleicoes-e-proposicoes-legislativas/blob/main/PyCon_US.ipynb).

## Consideraciones finales

Desde la sociedad civil, hay un montón de iniciativas que trabajan y luchan por mejoras en nuestra sociedad. Únete a una de ellas!! Nadie cambia el mundo sola, todavía puedes aportar tu granito de arena.

## Organizaciones que promueven uso de la tecnología para el fortalecimiento de democracias

- [Aúna](https://www.auna.org.mx/)
- [Cívica Digital](https://civica.digital/)
- [Codeando México](http://codeandomexico.org/)
- [Ciudadanía inteligente](https://ciudadaniai.org/)
- [Data Cívica](https://datacivica.org/)
- [ILDA](https://idatosabiertos.org/)
- [Instituto Cidade Democrática](https://cidadedemocratica.org.br)
- [Instituto de Tecnologia e Sociedade](https://itsrio.org/pt/home/)
- [Latinno](https://latinno.net/es/)
- [Open Knowledge Brasil](https://ok.org.br/)

--------------------
<img class="rounded mx-auto d-block" src="../../assets/images/2022-04-29/cartel-pycon-charlas-2022.jpg">

Este texto son los apuntes de la charla "Análisis exploratorio de datos abiertos para el fortalecimiento de democracias" presentada en la [PyCon US 2022 (PyCon Charlas)](https://us.pycon.org/2022/schedule/presentation/97/) en el 29 abr 2022 en la ciudad de Salt Lake City(EUA). 

Recursos:
- [Diapositivas](../../assets/images/2022-04-29/PyCon US - Análisis exploratorio de datos abiertos para el fortalecimiento de democracias.pdf)
- [Notebook](https://github.com/cecivieira/cotas-genero-eleicoes-e-proposicoes-legislativas/blob/main/PyCon_US.ipynb)
- [Charla en video](https://youtu.be/AXQ7cFm9WLI)
