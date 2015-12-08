<!--
author: Øyvind Malin
date: 2015-12-07 11:11:11
image: arduinoprosjekt1.png
tags: arduino,elektronikk,programmering
status: published
-->

Arduino prosjekt #1 - Blinkende led
============================
<!-- StartExcerpt -->

Det finnes etterhvert mange modeller av Telldus Tellstick på det norske markedet. De har ulike spesifikasjoner og er egnet til ulike typer bruk. I denne sammenligningen ønsker jeg å belyse forskjellene mellom de ulike modellene.

<!-- EndExcerpt -->
<div class="roundcontainer">
  <div class="round">
    <img src="/img/blog/arduinoprosjekt1.png">
  </div>
</div>

Prosjektene i denne serien kan som regel gjøres med deler fra [Arduino Starter kit](http://www.kjell.com/no/produkter/elektro/elektronikk/arduino/utviklingskort/arduino-startpakke-p87875) som du får for eksempel hos [http://www.kjell.com](Kjell & Company) eller [http://www.digitalimpuls.no](DigitalImpuls) til rett under tusenlappen. Dette er ett greit startsett for deg som har lyst å begynne å leke med Arduino og inneholder komponenter nok til en del prosjekter. Noen ganger benytter jeg andre komponenter i prosjektene, men dette vil da bli nevnt i bloggposten med lenker til hvor du kan skaffe disse.

Til dette prosjektet trenger du
* 1 Arduinokontroller
* 1 220Ω Motstand
* 1 Led
* 3 ledninger (han-han)

### Dioder

### Motstander

Vi trenger en motstand for å begrense spenningen som blir sendt til dioder. En typisk diode tåler

Du får tilstrekkelig motstand ved å utføre følgende kalkulering

![alt text](/pictures/ledresistorformula.png "")

### Skjema og Kode

<iframe frameborder='0' height='448' marginheight='0' marginwidth='0' scrolling='no' src='https://123d.circuits.io/circuits/1344627-arduinoprosjekt-1-blinkende-led/embed#breadboard' width='650'></iframe>

![alt text](/pictures/arduinoprosjekt1_schema.png "")

<script src="https://gist.github.com/oyvindmal/6ec846f7da6105ce2965.js"></script>
