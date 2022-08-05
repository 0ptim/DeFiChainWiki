---
title: Masternode Installation
permalink: /Masternode_Installation/
---

1.  REDIRECT [Masternode installation extended
    de](/Masternode_installation_extended_de "wikilink")

## Installation DefiChain Masternode mit einer lokalen APP-Wallet und einer Masternode in der Cloud:

*Stand: 04. März 2021*

Für diese Installation benötigst du:

- 20.011 DFI (20.000 als Collateral, 10 DFI für die Erstellung der
  Masternode und 1 DFI für anfallende Gebühren)
- Einen Windows, MacBook oder Linuxrechner mit einer installierten und
  synchronisierten Wallet.
- Ein VPS eines Providers, vorzugsweise Debian 10 (64-Bit).
- Der VPS sollte mindestens 2-4 vCPUs haben, 4 GB (besser 8) RAM und
  mindestens 120GB Festpatte mit Erweiterungsmöglichkeit

### Einrichtung deiner APP-Wallet

Wir gehen davon aus, das du bereits eine funktionierende und
synchronisierte Wallet auf deinem Rechner zu Hause laufen hast. Starte
diese und lege dir eine neue Empfangsadresse im Legacyformat an. Öffne
dazu die CLI (Kommandozeile) in der APP und setze folgenden Befehl ab:

`getnewaddress "<label>" legacy`

Als Label gibst du eine frei wählbare Bezeichnung an, z.B.
"Masternode1". Alternativ kannst du die Legacy-Adresse auch in der GUI
anlegen. Gehe dazu auf deine DFI-Wallet, wähle "Empfangen" und + Neue
Adresse. Vergiss nicht unter den erweiterten Optionen den Adresstyp
Legacy auszuwählen. Die neu erstellte Adresse beginnt dann mit einer
*8*. Bitte notiere dir diese als *"Owneradresse"*, wir brauchen diese
später.

Sende deine 20.000 DFI an diese neu erstellte Adresse in deiner Wallet.

### Konfiguration des virtuellen Servers

Nun gehts das erste mal auf den VPS (Virtual Private Server). Wir gehen
davon aus, das dieser bereits vom Provider deiner Wahl bereitgestellt
wurde.

#### System aktualisieren und absichern

Logge dich per SSH als root-User auf deinem VPS ein.

Mit diesem Befehl kannst du prüfen, welche Version dein Server
installiert hat:

`lsb_release -a`

Zeigt er dir das an, was du erwartest (z.B. Debian 10 (64-Bit)) kannst
du weiter zum nächsten Schritt.

Als Erstes prüfen wir, ob unser Betriebssystem ausstehende Updates hat.

`apt update && apt full-upgrade`

Wenn Updates anstehen, installiere diese, wenn nicht, Gratulation zum
aktuell gehaltenen System.

Wir benötigen für die weitere Vorgehensweise die Packages nano und sudo.
Ersteres ist ein Editor zur Bearbeitung von Config-Files, sudo ist die
Option, mit einem nicht root-user erweiterte Rechte zu erhalten. Da wir
unserem Root-User später den Zugriff per SSH verweigern wollen, ist auch
dieses Tool notwendig.

Mit den beiden Befehlen:

`apt install sudo`

`apt install nano`

installieren wir die benötigten Pakete, falls sie schon installiert
sind, wird uns die Kommandozeile darauf hinweisen.

#### Neuen User anlegen und Rootzugang sperren

Der nächste Schritt ist ein neuer User. Wir nennen ihn ganz kreativ
"defichain". Du kannst den Namen frei wählen, wenn du einen anderen
verwenden möchtest, passe die zwei nachfolgenden Befehlszeilen an und
trage deinen gewählten Usernamen dort ein:

`adduser defichain` *\<- hier legen wir einen User mit dem Namen
defichain an. Solltest du einen anderen Usernamen wählen, beachte das
sich nachfolgend auch dein Homeverzeichnisse ändert.*

`sudo usermod -a -G sudo defichain` *\<- Der neue User defichain bekommt
Root-Rechte im System*

Nachdem wir ein Passwort vergeben haben und die abgefragten Felder wie
Name und Firma einfach mit Enter bestätigen, ist es Zeit uns mit unserem
neu angelegten User anzumelden. Wir verlassen die Konsole mit *exit* und
starten eine neue Session per SSH (Putty) auf unseren Server. Jetzt
nicht mit root, sondern mit dem User Defichain einloggen.

Klappts? Hervorragend, dann sperren wir aus Sicherheitsgründen unseren
Root-User erstmal aus, so dass es Angreifern schwer gemacht wird, in
unser System zu kommen:

**Achtung: Vor diesem Schritt vergewissert euch, das ihr Usernamen und
Passwort des neu angelegten Users notiert habt, ihr sperrt euch sonst
selbst vom System aus!**

`sudo nano /etc/ssh/sshd_config`

Mit diesem Befehl starten wir den Editor nano und öffnen die Config
unsere Shell-Umgebung.

Sucht nach folgender Zeile:

`PermitRootLogin Yes`

und ändert diese zu:

`PermitRootLogin no`

Mit Ctrl+X verlassen wir das Programm, werden zum Speichern aufgefordert
und vergessen nicht das auch zu tun, sonst war unsere Änderung für die
Tonne.

Nun starten wir den SSh-Dienst neu und haben unser System etwas
abgesichert.

`sudo systemctl restart ssh`

Wollt ihr auf eurem System den Rootzugriff wieder aktivieren, müsst ihr
in der gerade geänderten ssh_config den Wert von *No* wieder auf *Yes*
setzen.

#### Installation der Node (AIN-Version)

Wir befinden uns standardmäßig in unserem Homeverzeichnis, wenn ihr den
gleichen Benutzernamen wie oben vorgeschlagen genommen habt, ist dieses:

*/home/defichain/*

Jetzt gehts an die Node. Ladet euch dazu die aktuelle Version direkt von
GitHub herunter. Das geht mit:

`wget `[`https://github.com/DeFiCh/ain/releases/download/v1.5.2/defichain-1.5.2-x86_64-pc-linux-gnu.tar.gz`](https://github.com/DeFiCh/ain/releases/download/v1.5.2/defichain-1.5.2-x86_64-pc-linux-gnu.tar.gz)

Danach entpacken wir das Paket mit dem Befehl:

`tar -xvzf defichain-1.5.2-x86_64-pc-linux-gnu.tar.gz`

Nun legen wir uns ein neues Verzeichnis an und kopieren die benötigten
Dateien aus dem entpackten Verzeichnis dort hinein.

`mkdir /home/defichain/.defi`

`cp ./defichain-1.5.2/bin/* /home/defichain/.defi`

Das wars schon, wir haben die Node auf unserem VPS aufgesetzt. Jetzt
kommt der langwierige Teil: Synchronisieren.

#### Synchronisation

Dazu starten wir die Node mit dem Befehl:

`/home/defichain/.defi/defid -daemon`

Der Schalter *-daemon* bewirkt, das die Node im Hintergrund ausgeführt
wird und nicht direkt in der Shell läuft und sich wieder beendet, wenn
wir uns ausloggen.

Der Sync-Vorgang dauert nun einige Zeit. Wir prüfen den Fortschritt mit:

`/home/defichain/.defi/defi-cli getblockcount`

Normal wird dir dort einige Zeit eine 0 zurückgegeben, das heißt deine
Node sucht noch nach anderen Nodes, um sich die aktuelle Blockchain
herunterzuladen. Aber wir sind ja nicht von gestern und verleihen
unserer Node einen kleinen Boost, indem wir ihr 2 bereits bekannte Nodes
mit dem Befehl addnode bekanntmachen, von der die Blockchain
heruntergeladen werden kann:

`/home/defichain/.defi/defi-cli addnode "45.157.177.82:8555" add`

`/home/defichain/.defi/defi-cli addnode "185.244.194.174:8555" add`

Nach ein paar Sekunden prüfen wir, ob unsere Node sich bereits mit
anderen Nodes verbunden hat:

`/home/defichain/.defi/defi-cli getconnectioncount`

Hier sollte dann keine 0 stehen, falls doch, mach dich bei deinem
Provider schlau, ob evtl. der Port 8555 gesperrt ist und lasse diesen
ggf. freischalten.

Nach 1-2 Minuten prüfen wir den Status erneut mit

`/home/defichain/.defi/defi-cli getblockcount`

Evtl. müssen wir den Befehl im Abstand von 1-2 Minuten wiederholt
eingeben, ehe die 0 verschwindet und die ersten Blöcke hereinprasseln.
Sobald die synchronisierte Blockanzahl steigt, können wir uns erstmal
ausgiebig selber feiern, wir sind fast am Ziel. Die Synchronisierung
dauert mehrere Stunden, also spart es euch vor dem Rechner zu sitzen und
den geblockcount-Befehl reinzuklopfen. Es dauert, das ist aber völlig
normal in einem dezentralen System.

#### Automatischen Start konfigurieren

Wir konfigurieren jetzt unseren Server noch so, das er nach einem Reboot
unsere Node direkt wieder startet:

`crontab -e`

für das automatische Ausführen von Programmen oder Scripten. Ans Ende
der vielen Kommentarzeilen schreiben wir:

`* * * * * pidof defid || /home/defichain/.defi/defid`

und springen mit der Entertaste in eine neue Zeile, das ist wichtig,
ansonsten könnt ihr nicht speichern. Diese eine Zeile bewirkt, das nach
jedem Serverneustart unsere Node auch startet und sich diese auch erneut
startet, sollte sie mal abstürzen.

Wir prüfen nochmal die Blockhöhe mit dem oben genannten Befehl (na, wer
weiß ihn noch ohne spickeln?) und sind entweder zufrieden, dass es bald
durch ist oder machen jetzt erstmal eine Pause, bis der Sync vollständig
ist.

Die aktuelle Blockhöhe könnt ihr unter <https://explorer.defichain.com>
abrufen.

#### Konfiguration und Erstellung der Masternode

Ist die Synchronisation beendet, gehts an die letzten Schritte am VPS:

Wir legen uns wie auch schon in unserer lokalen Wallet eine neue
Legacy-Adresse an. Da wir hier keine GUI haben, bleibts bei der
Kommandozeile:

`/home/defichain/.defi/defi-cli getnewaddress "MeinecooleMasternode" legacy`

Wenn ihr alles korrekt abgetippt habt, erhaltet ihr wieder eine neue
Adresse die mit einer *8* beginnt. Auch diese notieren wir uns, und zwar
als Adresse eurer *"Operatornode"*

Jetzt müssen wir noch die defi.conf anpassen.

`nano /home/defichain/.defi/defi.conf`

Da diese noch nicht existiert oder leer ist, geben wir dort ein paar
Zeilen Code ein:

```
daemon=1

gen=1

spv=1

masternode_operator=OPERATOR_ADDRESS
```

Bei OPERATOR_ADDRESS gib deine neu erstellte Adresse von oben ein (die
auf dem VPS generiert wurde), du hast sie dir extra notiert.

Damit die Config greift, müssen wir die Node neu starten. Das passiert
mit dem Befehl:

`killall defi-init`

Damit wird die Node "abgeschossen". Und wie starte ich sie wieder? Du
erinnerst dich an unseren crontab-Eintrag, die Node startet in maximal 1
Minute erneut.

Prüfen kannst du das mit dem Befehl *TOP*, unter dem User defichain muss
hier - meist an oberster Stelle - eine defi-init zu finden sein.
Alternativ kannst du auch den getblockcount-Befehl nochmals ausführen,
wenn die Node läuft, liefert sie dir ein Ergebnis.

Halleluja, das wars, unser VPS ist fertig, die Node läuft.

#### Konfiguration unserer Wallet

Jetzt fehlt noch der Schritt zur Erstellung unserer Masternode im
Netzwerk. Dazu gehen wir jetzt auf die lokale Wallet auf unserem
Rechner.

Je nach Betriebssystem, finden wir die defi.conf an anderer Stelle, die
wir ebenfalls anpassen müssen.

Windows: *%username%\\.defi\\ oder
c:\users\deinwindowsanmeldename\\.defi*

Mac: \$HOME/.defi/defi.conf

Linux: *\~/.defi/defi.conf*

Öffnet die Datei mit einem Editor eurer Wahl und trage folgenden
Einzeiler ein:

`masternode_owner=OWNER_ADDRESS`

Das Wort OWNER_ADDRESS ersetzt ihr mit eurer erstellten Legacy-Adresse,
welche die 20.000 DFI hält. Und jetzt die Erstellung, welche uns 10 DFI
kostet. Keine Sorge, mit dem ersten Reward sind diese 10 DFI um ein
vielfaches wieder drin ;-)

`createmasternode OWNER_ADDRESS OPERATOR_ADDRESS`

Die Adressen natürlich wieder ersetzen: Owner ist die der lokalen
Wallet, Operator die vom VPS.

Und aufgepasst und nicht erschrecken, wenn die Masternode mit dem Befehl
oben erstellt wurde, seht ihr ein paar Blöcke später eine Aus- und
eingehende Transaktion mit 20000 DFI auf eure Owneradresse, in der
Wallet sind diese 20000 DFI aber nicht mehr sichtbar, da sie nun
gelocked sind und erst wieder in eure Wallet kommen, wenn ihr die
Masternode auflöst.

Fertig, herzlichen Glückwunsch, geschafft.

#### Status prüfen

Warte ein paar Minuten und prüfe unter
[mydeficha.in/masternodes.php](http://mydeficha.in/masternodes.php) ob
deine Adressen dort auftauchen. Nach einiger Zeit sollte der Status von
Pre-Enabled auch auf Enabled gehen, dann hast du alles richtig gemacht.

Alternativ kannst du mit:

`getmintinginfo`

den Status abfragen, der Wert *masternodestate* sollte dabei den Wert
*"ENABLED"* haben.

#### Node updaten

`wget `[`https://github.com/DeFiCh/ain/releases/download/v1.5.2/defichain-1.5.2-x86_64-pc-linux-gnu.tar.gz`](https://github.com/DeFiCh/ain/releases/download/v1.5.2/defichain-1.5.2-x86_64-pc-linux-gnu.tar.gz)

`tar -xvzf defichain-1.5.2-x86_64-pc-linux-gnu.tar.gz`

`~/.defi/defi-cli stop`

`cp ./defichain-1.5.2/bin/* ~/.defi/`

Warte 1-2 Minuten, bis deine Node durch crontab wieder automatisch
gestartet wird. Mit dem Befehl:

`~/.defi/defi-cli getblockcount`

kannst du prüfen, ob deine Node wieder läuft und synchronisiert.