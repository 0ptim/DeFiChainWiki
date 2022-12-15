---
title: Masternode installation erweitert
description: TODO - Kurze Beschreibung dieser Seite.
---

## Installation DefiChain Masternode mit einer lokalen APP-Wallet und einer Masternode in der Cloud: {#installation-defichain-masternode-mit-einer-lokalen-app-wallet-und-einer-masternode-in-der-cloud}

_Stand: 04. März 2021_

Für diese Installation benötigst du:

- 20.011 DFI (20.000 als Collateral, 10 DFI für die Erstellung der Masternode und 1 DFI für anfallende Gebühren)
- Einen Windows, MacBook oder Linuxrechner mit einer installierten und synchronisierten Wallet.
- Ein VPS eines Providers, vorzugsweise Debian 10 (64-Bit).
- Der VPS sollte mindestens 2-4 vCPUs haben, 4 GB (besser 8) RAM und mindestens 120GB Festpatte mit Erweiterungsmöglichkeit

### Einrichtung deiner APP-Wallet {#einrichtung-deiner-app-wallet}

Wir gehen davon aus, das du bereits eine funktionierende und synchronisierte Wallet auf deinem Rechner zu Hause laufen hast. Starte diese und lege dir eine neue Empfangsadresse im Legacyformat an. Öffne dazu die CLI (Kommandozeile) in der APP und setze folgenden Befehl ab:

`getnewaddress "<label>" legacy`

Als Label gibst du eine frei wählbare Bezeichnung an, z.B. "Masternode1". Alternativ kannst du die Legacy-Adresse auch in der GUI anlegen. Gehe dazu auf deine DFI-Wallet, wähle "Empfangen" und + Neue Adresse. Vergiss nicht unter den erweiterten Optionen den Adresstyp Legacy auszuwählen. Die neu erstellte Adresse beginnt dann mit einer _8_. Bitte notiere dir diese als _"Owneradresse"_, wir brauchen diese später.

Sende deine 20.000 DFI an diese neu erstellte Adresse in deiner Wallet.

### Konfiguration des virtuellen Servers {#konfiguration-des-virtuellen-servers}

Nun gehts das erste mal auf den VPS (Virtual Private Server). Wir gehen davon aus, das dieser bereits vom Provider deiner Wahl bereitgestellt wurde.

#### System aktualisieren und absichern {#system-aktualisieren-und-absichern}

Logge dich per SSH als root-User auf deinem VPS ein.

Mit diesem Befehl kannst du prüfen, welche Version dein Server installiert hat:

`lsb_release -a`

Zeigt er dir das an, was du erwartest (z.B. Debian 10 (64-Bit)) kannst du weiter zum nächsten Schritt.

Als Erstes prüfen wir, ob unser Betriebssystem ausstehende Updates hat.

`apt update && apt full-upgrade`

Wenn Updates anstehen, installiere diese, wenn nicht, Gratulation zum aktuell gehaltenen System.

Wir benötigen für die weitere Vorgehensweise die Packages nano und sudo. Ersteres ist ein Editor zur Bearbeitung von Config-Files, sudo ist die Option, mit einem nicht root-user erweiterte Rechte zu erhalten. Da wir unserem Root-User später den Zugriff per SSH verweigern wollen, ist auch dieses Tool notwendig.

Mit den beiden Befehlen:

`apt install sudo`

`apt install nano`

installieren wir die benötigten Pakete, falls sie schon installiert sind, wird uns die Kommandozeile darauf hinweisen.

#### Neuen User anlegen und Rootzugang sperren {#neuen-user-anlegen-und-rootzugang-sperren}

Der nächste Schritt ist ein neuer User. Wir nennen ihn ganz kreativ "defichain". Du kannst den Namen frei wählen, wenn du einen anderen verwenden möchtest, passe die zwei nachfolgenden Befehlszeilen an und trage deinen gewählten Usernamen dort ein:

`adduser defichain` _\<- hier legen wir einen User mit dem Namen defichain an. Solltest du einen anderen Usernamen wählen, beachte das sich nachfolgend auch dein Homeverzeichnisse ändert._

`sudo usermod -a -G sudo defichain` _\<- Der neue User defichain bekommt Root-Rechte im System_

Nachdem wir ein Passwort vergeben haben und die abgefragten Felder wie Name und Firma einfach mit Enter bestätigen, ist es Zeit uns mit unserem neu angelegten User anzumelden. Wir verlassen die Konsole mit _exit_ und starten eine neue Session per SSH (Putty) auf unseren Server. Jetzt nicht mit root, sondern mit dem User Defichain einloggen.

Klappts? Hervorragend, dann sperren wir aus Sicherheitsgründen unseren Root-User erstmal aus, so dass es Angreifern schwer gemacht wird, in unser System zu kommen:

**Achtung: Vor diesem Schritt vergewissert euch, das ihr Usernamen und Passwort des neu angelegten Users notiert habt, ihr sperrt euch sonst selbst vom System aus!**

`sudo nano /etc/ssh/sshd_config`

Mit diesem Befehl starten wir den Editor nano und öffnen die Config unsere Shell-Umgebung.

Sucht nach folgender Zeile:

`PermitRootLogin Yes`

und ändert diese zu:

`PermitRootLogin no`

Mit Ctrl+X verlassen wir das Programm, werden zum Speichern aufgefordert und vergessen nicht das auch zu tun, sonst war unsere Änderung für die Tonne.

Nun starten wir den SSh-Dienst neu und haben unser System etwas abgesichert.

`sudo systemctl restart ssh`

Wollt ihr auf eurem System den Rootzugriff wieder aktivieren, müsst ihr in der gerade geänderten ssh-config den Wert von _No_ wieder auf _Yes_ setzen.

#### Installation der Node (AIN-Version) {#installation-der-node-ain-version}

Wir befinden uns standardmäßig in unserem Homeverzeichnis, wenn ihr den gleichen Benutzernamen wie oben vorgeschlagen genommen habt, ist dieses:

_/home/defichain/_

Jetzt gehts an die Node. Ladet euch dazu die aktuelle Version direkt von GitHub herunter. Das geht mit:

`wget https://github.com/DeFiCh/ain/releases/download/v3.1.1/defichain-3.1.1-x86_64-pc-linux-gnu.tar.gz`

Danach entpacken wir das Paket mit dem Befehl:

`tar -xvzf defichain-3.1.1-x86_64-pc-linux-gnu.tar.gz`

Nun legen wir uns ein neues Verzeichnis an und kopieren die benötigten Dateien aus dem entpackten Verzeichnis dort hinein.

`mkdir /home/defichain/.defi`

`cp ./defichain-3.1.1/bin/* /home/defichain/.defi`

Das wars schon, wir haben die Node auf unserem VPS aufgesetzt. Jetzt kommt der langwierige Teil: Synchronisieren.

#### Synchronisation {#synchronisation}

Dazu starten wir die Node mit dem Befehl:

`/home/defichain/.defi/defid -daemon`

Der Schalter _-daemon_ bewirkt, das die Node im Hintergrund ausgeführt wird und nicht direkt in der Shell läuft und sich wieder beendet, wenn wir uns ausloggen.

Der Sync-Vorgang dauert nun einige Zeit. Wir prüfen den Fortschritt mit:

`/home/defichain/.defi/defi-cli getblockcount`

Normal wird dir dort einige Zeit eine 0 zurückgegeben, das heißt deine Node sucht noch nach anderen Nodes, um sich die aktuelle Blockchain herunterzuladen. Aber wir sind ja nicht von gestern und verleihen unserer Node einen kleinen Boost, indem wir ihr 2 bereits bekannte Nodes
mit dem Befehl addnode bekanntmachen, von der die Blockchain heruntergeladen werden kann:

`/home/defichain/.defi/defi-cli addnode "45.157.177.82:8555" add`

`/home/defichain/.defi/defi-cli addnode "185.244.194.174:8555" add`

Nach ein paar Sekunden prüfen wir, ob unsere Node sich bereits mit anderen Nodes verbunden hat:

`/home/defichain/.defi/defi-cli getconnectioncount`

Hier sollte dann keine 0 stehen, falls doch, mach dich bei deinem Provider schlau, ob evtl. der Port 8555 gesperrt ist und lasse diesen ggf. freischalten.

Nach 1-2 Minuten prüfen wir den Status erneut mit

`/home/defichain/.defi/defi-cli getblockcount`

Evtl. müssen wir den Befehl im Abstand von 1-2 Minuten wiederholt eingeben, ehe die 0 verschwindet und die ersten Blöcke hereinprasseln. Sobald die synchronisierte Blockanzahl steigt, können wir uns erstmal ausgiebig selber feiern, wir sind fast am Ziel. Die Synchronisierung dauert mehrere Stunden, also spart es euch vor dem Rechner zu sitzen und den geblockcount-Befehl reinzuklopfen. Es dauert, das ist aber völlig normal in einem dezentralen System.

#### Automatischen Start konfigurieren {#automatischen-start-konfigurieren}

Wir konfigurieren jetzt unseren Server noch so, das er nach einem Reboot unsere Node direkt wieder startet:

`crontab -e`

für das automatische Ausführen von Programmen oder Scripten. Ans Ende der vielen Kommentarzeilen schreiben wir:

`* * * * * pidof defid || /home/defichain/.defi/defid`

und springen mit der Entertaste in eine neue Zeile, das ist wichtig, ansonsten könnt ihr nicht speichern. Diese eine Zeile bewirkt, das nach jedem Serverneustart unsere Node auch startet und sich diese auch erneut startet, sollte sie mal abstürzen.

Wir prüfen nochmal die Blockhöhe mit dem oben genannten Befehl (na, wer weiß ihn noch ohne spickeln?) und sind entweder zufrieden, dass es bald durch ist oder machen jetzt erstmal eine Pause, bis der Sync vollständig
ist.

Die aktuelle Blockhöhe könnt ihr unter https://defiscan.live/ abrufen.

#### Konfiguration und Erstellung der Masternode {#konfiguration-und-erstellung-der-masternode}

Ist die Synchronisation beendet, gehts an die letzten Schritte am VPS:

Wir legen uns wie auch schon in unserer lokalen Wallet eine neue Legacy-Adresse an. Da wir hier keine GUI haben, bleibts bei der Kommandozeile:

`/home/defichain/.defi/defi-cli getnewaddress "MeinecooleMasternode" legacy`

Wenn ihr alles korrekt abgetippt habt, erhaltet ihr wieder eine neue Adresse die mit einer _8_ beginnt. Auch diese notieren wir uns, und zwar als Adresse eurer _"Operatornode"_

Jetzt müssen wir noch die defi.conf anpassen.

`nano /home/defichain/.defi/defi.conf`

Da diese noch nicht existiert oder leer ist, geben wir dort ein paar Zeilen Code ein:

```
daemon=1

gen=1

spv=1

masternode_operator=OPERATOR_ADDRESS
```

Bei OPERATOR_ADDRESS gib deine neu erstellte Adresse von oben ein (die auf dem VPS generiert wurde), du hast sie dir extra notiert.

Damit die Config greift, müssen wir die Node neu starten. Das passiert mit dem Befehl:

`killall defi-init`

Damit wird die Node "abgeschossen". Und wie starte ich sie wieder? Du erinnerst dich an unseren crontab-Eintrag, die Node startet in maximal 1 Minute erneut.

Prüfen kannst du das mit dem Befehl _TOP_, unter dem User defichain muss hier - meist an oberster Stelle - eine defi-init zu finden sein. Alternativ kannst du auch den getblockcount-Befehl nochmals ausführen, wenn die Node läuft, liefert sie dir ein Ergebnis.

Halleluja, das wars, unser VPS ist fertig, die Node läuft.

#### Konfiguration unserer Wallet {#konfiguration-unserer-wallet}

Jetzt fehlt noch der Schritt zur Erstellung unserer Masternode im Netzwerk. Dazu gehen wir jetzt auf die lokale Wallet auf unserem Rechner.

Und jetzt die Erstellung, welche uns 10 DFI kostet. Keine Sorge, mit dem ersten Reward sind diese 10 DFI um ein vielfaches wieder drin ;-)

Ungelockte Masternode:

`createmasternode OWNER_ADDRESS OPERATOR_ADDRESS`.

5-Jahre gelockte Masternode (1,5x Rewards):

`createmasternode OWNER_ADDRESS OPERATOR_ADDRESS [] FIVEYEARTIMELOCK`.

10-Jahre Masternode (2x Rewards):

`createmasternode OWNER_ADDRESS OPERATOR_ADDRESS [] TENYEARTIMELOCK`

Die Adressen natürlich wieder ersetzen: Owner ist die der lokalen Wallet, Operator die vom VPS.

Und aufgepasst und nicht erschrecken, wenn die Masternode mit dem Befehl oben erstellt wurde, seht ihr ein paar Blöcke später eine Aus- und eingehende Transaktion mit 20000 DFI auf eure Owneradresse, in der Wallet sind diese 20000 DFI aber nicht mehr sichtbar, da sie nun gelocked sind und erst wieder in eure Wallet kommen, wenn ihr die Masternode auflöst.

Fertig, herzlichen Glückwunsch, geschafft.

#### Status prüfen {#status-prüfen}

Warte ein paar Minuten und prüfe unter [mydeficha.in/masternodes.php](http://mydeficha.in/masternodes.php) ob deine Adressen dort auftauchen. Nach einiger Zeit (1008 Blöcke, \~8 Stunden) sollte der Status von Pre-Enabled auch auf Enabled gehen, dann hast du alles richtig gemacht.

#### Node updaten {#node-updaten}

`wget https://github.com/DeFiCh/ain/releases/download/v3.1.1/defichain-3.1.1-x86_64-pc-linux-gnu.tar.gz`

`tar -xvzf defichain-3.1.1-x86_64-pc-linux-gnu.tar.gz`

`~/.defi/defi-cli stop`

`cp ./defichain-3.1.1/bin/* ~/.defi/`

Warte 1-2 Minuten, bis deine Node durch crontab wieder automatisch gestartet wird. Mit dem Befehl:

`~/.defi/defi-cli getblockcount`

kannst du prüfen, ob deine Node wieder läuft und synchronisiert.

#### Mehrere Masternodes auf dem selben VPS {#mehrere-masternodes-auf-dem-selben-vps}

Wenn du mehr als ein vollständiges Collateral (1 Collateral = 20.000 DFI) besitzt, dann kannst du mehrere Masternodes auf dem selben System laufen lassen. Jede weitere Masternode benötigt eine eigene OPERATOR_ADDRESS und eine zugehörige OWNER_ADDRESS, die das Collateral hält.

Du musst also eine neue OPERATOR_ADDRESS auf deinem VPS erzeugen, eine neue OWNER_ADDRESS in deiner DeFiChain-Wallet anlegen und darauf das Collateral übertragen, sowie im Anschluss daran eine neue Masternode mit diesen beiden Adressen registrieren.

So wird es gemacht:

###### Auf deiner DeFiChain-Wallet: {#auf-deiner-defichain-wallet}

1.  Erzeuge eine neue Legacy-Adresse mit dem CLI-Kommando `getnewaddress "<label>" legacy` oder über die grafische Benutzeroberfläche der App (Stelle sicher, dass du "Legacy" unter "Show advance options" ausgewählt hast!)
2.  Diese neue Adresse wird in der "Receive"-Liste in deiner DeFiWallet App auftauchen. (Sie muss zwingend mit einer 8 beginnen, sonst handelt es sich nicht um eine Legacy-Adresse)
3.  Kopiere dir diese Adresse. Es ist im Folgenden die OWNER_ADDRESS.
4.  Übertrage das Collateral zu dieser Adresse (20.000 DFI + weitere 10 DFI Gebühr zur Erstellung der Masternode + 1 DFI für Transaktionsgebühren = 20.011 DFI)
5.  Warte für einige Blöcke, bis deine Übertragung ausreichend sicher verifiziert wurde.

###### Auf deinem VPS: {#auf-deinem-vps}

1.  Erzeuge eine neue OPERATOR_ADDRESS: `/home/defichain/.defi/defi-cli getnewaddress "MySecondCoolMasternode" legacy`
2.  Kopiere dir diese Adresse. Es ist im Folgenden die OPERATOR_ADDRESS.
3.  Informiere deine Node über die neu erzeugte OPERATOR_ADDRESS, indem du eine neue Zeile `masternode_operator=OPERATOR_ADDRESS` zur Datei `/home/defichain/.defi/defi.conf` hinzufügst. (Behalte dabei die bereits existierenden Zeilen mit "masternode_operator" bei! Füge einfach nur eine weitere Zeile hinzu.)
4.  Starte dein Node neu, indem du die laufenden Prozesse anhältst: `killall defi-init`

###### Noch einmal auf deiner DeFiChain-Wallet {#noch-einmal-auf-deiner-defichain-wallet}

1.  Öffne die In-App-CLI
2.  Führe aus: `createmasternode OWNER_ADDRESS OPERATOR_ADDRESS`
3.  Profit :)
