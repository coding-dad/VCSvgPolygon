---
title: Herausforderung
layout: page
---

## Ausgangssituation

Die Komponente `components/Challenge.vue` enthält eine statische Version einer SVG-Grafik, die ein n-Eck rendert.
Die Anzahl der Ecken/Kreispunkte ist dabei in der Variable `numPoints` mit dem Wert 8 derzeit hart kodiert.

Darunter befindet sich ein Slider, mit dessen Hilfe die Anzahl der Ecken dynamisch eingestellbar sein sollen.

## Deine Aufgabe

Erweitere die Funktionalität in der Datei `components/Challenge.vue` dahingehend, dass das Verschieben des Sliders unmittelbar Auswirkung auf die Darstellung der SVG-Grafik hat und ein Polygon mit der im Slider eingestellten Anzahl an Kreispunkte darstellt.

Gegeben sei dabei die Funktion zum Berechnen des Polygons basierend auf der Anzahle der Kreispunkte

```js
theFunction() {
	const points = [];
	const radius = 125;
	const angle = (Math.PI * 2) / this.numPoints;

	for (let a = 0; a < Math.PI * 2; a += angle) {
		const x = 250 + Math.cos(a) * radius;
		const y = 250 + Math.sin(a) * radius;
		points.push(`${x}, ${y}`);
	}

	return points.join(" ");
}
```

...

## Geschätzter Zeitaufwand zur Implementierung

_Ca. 15 Minuten_

**Happy coding 8-)**
