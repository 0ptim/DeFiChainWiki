---
title: App auf Raspberry-Pi
permalink: /App_auf_Raspberry-Pi/
---

Mittlerweile gibt es eine grösser werdende Gruppe von Raspberry Pi
Besitzer, die den Defi Node (Kommandozeilen Client) oder die Defi Wallet
(Desktop App) nutzen bzw. nutzen wollen.

Da zur Zeit noch kein offizielles DeFiChain release für die Raspberrys
verfügbar ist, haben verschiedene Community-Mitglieder eigene
Kompilationen erstellt.

Ziel dieser Seite ist es eine Übersicht über die verschiedenen
Möglichkeiten zu geben.

## DeFiNode

Mit diesem Projekt kannst du ein 3D Gehäuse selbst drucken und eine Node
oder Wallet lokal auf einem Raspberry Pi 4 selber erstellen und laufen
lassen.

#### Links

- [DeFiNode auf Github](https://github.com/definode), da ist die gesamte
  Dokumentation vorhanden
  - Einkaufsliste für Hardware
  - Source Code für 3D-Printer
  - Raspberry OS-Installation / -Konfiguration
  - Installations-Script für die Erstellung der Defi Wallet
- [DeFiNode auf Telegram](Https://t.me/DeFi_Node), für Fragen und
  Unterstützung
- [DeFiNode Druckservice](https://www.gabrielkunzer.com/definode/), hier
  kannst du dir dein DEFI-Gehäuse bestellen

#### Pros

- Schritt für Schritt Anleitung bis zum laufenden DeFi Fullnode
- Hat die Möglichkeit für "Don't trust - verify" des Source Codes

#### Cons

- Eigene Erstellung der Defi Wallet auf dem Raspberry mit mehrstündigem
  Zeitaufwand (\~2.5h)
- Läuft als Web App im Browserfenster

## RaspberryPI Image

Das Image beinhaltet das Raspberry Pi OS und die Installation der Defi
Wallet. Nach dem kopieren des Images auf die Speicherkarte /
USB-Speicher und der Konfiguration des Betriebssystems ist die Defi
Wallet betriebsbereit. Einfacher geht's nimmer.

#### Links

- [Google
  Drive](https://drive.google.com/drive/folders/1yGWeP8gqt5JNypeeJTZ-0aqh-k04m7Jj?usp=sharing),
  da ist die Image Datei für den Download erhältlich
- [RaspberryPi Imager](https://www.raspberrypi.org/software/), für das
  Kopieren der Image auf die Speicherkarte

#### Pros

- "Normale" Raspberry Pi OS Installation mit vorinstalliertem Defi
  Wallet - schnell und unkompliziert

#### Cons

- Läuft als Web App im Browserfenster
- Da vollständig kompiliert und vorinstalliert, ist "Don't trust -
  verify" nicht gegeben

## Defi Wallet for Raspberry Pi

Diese AppImages entsprechen den Defi Wallets für Linux, Mac und Windows,
wie sie von DeFiChain offiziell angeboten werden und sind eine Ergänzung
zu dessen Angebot. Auch gibt es den Defi Node in der
Kommandozeilen-Version, d.h. den Fullnode in der Client Version. Die
AppImage und den Fullnode sind jeweils in der 32-Bit und in der 64-Bit
Version erhältlich.

#### Links

- [Defi Wallet auf
  Github](https://github.com/Martin8617/Defi-Wallet-for-Raspberry-Pi),
  da ist die AppImage für den Download erhältlich
- [Defi Node auf
  Github](https://github.com/Martin8617/Defi-Node-for-Raspberry-Pi), da
  ist die Client Version für den Download erhältlich

#### Pros

- Entspricht graphisch exakt den offiziellen Defi Wallets
- Läuft als Desktop App
- Client Version für den Betrieb ohne GUI (Graphische Oberfläche)

#### Cons

- Da vollständig kompiliert, ist "Don't trust - verify" nicht gegeben
