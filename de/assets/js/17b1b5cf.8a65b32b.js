"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7227],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},o=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),h=u(t),m=r,c=h["".concat(s,".").concat(m)]||h[m]||p[m]||a;return t?i.createElement(c,l(l({ref:n},o),{},{components:t})):i.createElement(c,l({ref:n},o))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=h;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var u=2;u<a;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4220:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var i=t(7462),r=(t(7294),t(3905));const a={title:"Masternode installation erweitert",description:"TODO - Kurze Beschreibung dieser Seite."},l=void 0,d={unversionedId:"auto/Masternode_installation_extended",id:"auto/Masternode_installation_extended",title:"Masternode installation erweitert",description:"TODO - Kurze Beschreibung dieser Seite.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/auto/Masternode_installation_extended.md",sourceDirName:"auto",slug:"/auto/Masternode_installation_extended",permalink:"/DeFiChain-Wiki/de/docs/auto/Masternode_installation_extended",draft:!1,editUrl:"https://github.com/0ptim/DeFiChain-Wiki/tree/main/i18n/de/docusaurus-plugin-content-docs/current/auto/Masternode_installation_extended.md",tags:[],version:"current",lastUpdatedAt:1663004835,formattedLastUpdatedAt:"12. Sept. 2022",frontMatter:{title:"Masternode installation erweitert",description:"TODO - Kurze Beschreibung dieser Seite."},sidebar:"tutorialSidebar",previous:{title:"Kritik",permalink:"/DeFiChain-Wiki/de/docs/auto/Criticism"},next:{title:"Privatkey auslesen",permalink:"/DeFiChain-Wiki/de/docs/auto/Read_out_private_key"}},s={},u=[{value:"Installation DefiChain Masternode mit einer lokalen APP-Wallet und einer Masternode in der Cloud:",id:"installation-defichain-masternode-mit-einer-lokalen-app-wallet-und-einer-masternode-in-der-cloud",level:2},{value:"Einrichtung deiner APP-Wallet",id:"einrichtung-deiner-app-wallet",level:3},{value:"Konfiguration des virtuellen Servers",id:"konfiguration-des-virtuellen-servers",level:3},{value:"System aktualisieren und absichern",id:"system-aktualisieren-und-absichern",level:4},{value:"Neuen User anlegen und Rootzugang sperren",id:"neuen-user-anlegen-und-rootzugang-sperren",level:4},{value:"Installation der Node (AIN-Version)",id:"installation-der-node-ain-version",level:4},{value:"Synchronisation",id:"synchronisation",level:4},{value:"Automatischen Start konfigurieren",id:"automatischen-start-konfigurieren",level:4},{value:"Konfiguration und Erstellung der Masternode",id:"konfiguration-und-erstellung-der-masternode",level:4},{value:"Konfiguration unserer Wallet",id:"konfiguration-unserer-wallet",level:4},{value:"Status pr\xfcfen",id:"status-pr\xfcfen",level:4},{value:"Node updaten",id:"node-updaten",level:4},{value:"Mehrere Masternodes auf dem selben VPS",id:"mehrere-masternodes-auf-dem-selben-vps",level:4},{value:"Auf deiner DeFiChain-Wallet:",id:"auf-deiner-defichain-wallet",level:6},{value:"Auf deinem VPS:",id:"auf-deinem-vps",level:6},{value:"Noch einmal auf deiner DeFiChain-Wallet",id:"noch-einmal-auf-deiner-defichain-wallet",level:6}],o={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installation-defichain-masternode-mit-einer-lokalen-app-wallet-und-einer-masternode-in-der-cloud"},"Installation DefiChain Masternode mit einer lokalen APP-Wallet und einer Masternode in der Cloud:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Stand: 04. M\xe4rz 2021")),(0,r.kt)("p",null,"F\xfcr diese Installation ben\xf6tigst du:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"20.011 DFI (20.000 als Collateral, 10 DFI f\xfcr die Erstellung der Masternode und 1 DFI f\xfcr anfallende Geb\xfchren)"),(0,r.kt)("li",{parentName:"ul"},"Einen Windows, MacBook oder Linuxrechner mit einer installierten und synchronisierten Wallet."),(0,r.kt)("li",{parentName:"ul"},"Ein VPS eines Providers, vorzugsweise Debian 10 (64-Bit)."),(0,r.kt)("li",{parentName:"ul"},"Der VPS sollte mindestens 2-4 vCPUs haben, 4 GB (besser 8) RAM und mindestens 120GB Festpatte mit Erweiterungsm\xf6glichkeit")),(0,r.kt)("h3",{id:"einrichtung-deiner-app-wallet"},"Einrichtung deiner APP-Wallet"),(0,r.kt)("p",null,"Wir gehen davon aus, das du bereits eine funktionierende und synchronisierte Wallet auf deinem Rechner zu Hause laufen hast. Starte diese und lege dir eine neue Empfangsadresse im Legacyformat an. \xd6ffne dazu die CLI (Kommandozeile) in der APP und setze folgenden Befehl ab:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'getnewaddress "<label>" legacy')),(0,r.kt)("p",null,'Als Label gibst du eine frei w\xe4hlbare Bezeichnung an, z.B. "Masternode1". Alternativ kannst du die Legacy-Adresse auch in der GUI anlegen. Gehe dazu auf deine DFI-Wallet, w\xe4hle "Empfangen" und + Neue Adresse. Vergiss nicht unter den erweiterten Optionen den Adresstyp Legacy auszuw\xe4hlen. Die neu erstellte Adresse beginnt dann mit einer ',(0,r.kt)("em",{parentName:"p"},"8"),". Bitte notiere dir diese als ",(0,r.kt)("em",{parentName:"p"},'"Owneradresse"'),", wir brauchen diese sp\xe4ter."),(0,r.kt)("p",null,"Sende deine 20.000 DFI an diese neu erstellte Adresse in deiner Wallet."),(0,r.kt)("h3",{id:"konfiguration-des-virtuellen-servers"},"Konfiguration des virtuellen Servers"),(0,r.kt)("p",null,"Nun gehts das erste mal auf den VPS (Virtual Private Server). Wir gehen davon aus, das dieser bereits vom Provider deiner Wahl bereitgestellt wurde."),(0,r.kt)("h4",{id:"system-aktualisieren-und-absichern"},"System aktualisieren und absichern"),(0,r.kt)("p",null,"Logge dich per SSH als root-User auf deinem VPS ein."),(0,r.kt)("p",null,"Mit diesem Befehl kannst du pr\xfcfen, welche Version dein Server installiert hat:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lsb_release -a")),(0,r.kt)("p",null,"Zeigt er dir das an, was du erwartest (z.B. Debian 10 (64-Bit)) kannst du weiter zum n\xe4chsten Schritt."),(0,r.kt)("p",null,"Als Erstes pr\xfcfen wir, ob unser Betriebssystem ausstehende Updates hat."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"apt update && apt full-upgrade")),(0,r.kt)("p",null,"Wenn Updates anstehen, installiere diese, wenn nicht, Gratulation zum aktuell gehaltenen System."),(0,r.kt)("p",null,"Wir ben\xf6tigen f\xfcr die weitere Vorgehensweise die Packages nano und sudo. Ersteres ist ein Editor zur Bearbeitung von Config-Files, sudo ist die Option, mit einem nicht root-user erweiterte Rechte zu erhalten. Da wir unserem Root-User sp\xe4ter den Zugriff per SSH verweigern wollen, ist auch dieses Tool notwendig."),(0,r.kt)("p",null,"Mit den beiden Befehlen:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"apt install sudo")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"apt install nano")),(0,r.kt)("p",null,"installieren wir die ben\xf6tigten Pakete, falls sie schon installiert sind, wird uns die Kommandozeile darauf hinweisen."),(0,r.kt)("h4",{id:"neuen-user-anlegen-und-rootzugang-sperren"},"Neuen User anlegen und Rootzugang sperren"),(0,r.kt)("p",null,'Der n\xe4chste Schritt ist ein neuer User. Wir nennen ihn ganz kreativ "defichain". Du kannst den Namen frei w\xe4hlen, wenn du einen anderen verwenden m\xf6chtest, passe die zwei nachfolgenden Befehlszeilen an und trage deinen gew\xe4hlten Usernamen dort ein:'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"adduser defichain")," ",(0,r.kt)("em",{parentName:"p"},"\\<- hier legen wir einen User mit dem Namen defichain an. Solltest du einen anderen Usernamen w\xe4hlen, beachte das sich nachfolgend auch dein Homeverzeichnisse \xe4ndert.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo usermod -a -G sudo defichain")," ",(0,r.kt)("em",{parentName:"p"},"\\<- Der neue User defichain bekommt Root-Rechte im System")),(0,r.kt)("p",null,"Nachdem wir ein Passwort vergeben haben und die abgefragten Felder wie Name und Firma einfach mit Enter best\xe4tigen, ist es Zeit uns mit unserem neu angelegten User anzumelden. Wir verlassen die Konsole mit ",(0,r.kt)("em",{parentName:"p"},"exit")," und starten eine neue Session per SSH (Putty) auf unseren Server. Jetzt nicht mit root, sondern mit dem User Defichain einloggen."),(0,r.kt)("p",null,"Klappts? Hervorragend, dann sperren wir aus Sicherheitsgr\xfcnden unseren Root-User erstmal aus, so dass es Angreifern schwer gemacht wird, in unser System zu kommen:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Achtung: Vor diesem Schritt vergewissert euch, das ihr Usernamen und Passwort des neu angelegten Users notiert habt, ihr sperrt euch sonst selbst vom System aus!")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo nano /etc/ssh/sshd_config")),(0,r.kt)("p",null,"Mit diesem Befehl starten wir den Editor nano und \xf6ffnen die Config unsere Shell-Umgebung."),(0,r.kt)("p",null,"Sucht nach folgender Zeile:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PermitRootLogin Yes")),(0,r.kt)("p",null,"und \xe4ndert diese zu:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PermitRootLogin no")),(0,r.kt)("p",null,"Mit Ctrl+X verlassen wir das Programm, werden zum Speichern aufgefordert und vergessen nicht das auch zu tun, sonst war unsere \xc4nderung f\xfcr die Tonne."),(0,r.kt)("p",null,"Nun starten wir den SSh-Dienst neu und haben unser System etwas abgesichert."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo systemctl restart ssh")),(0,r.kt)("p",null,"Wollt ihr auf eurem System den Rootzugriff wieder aktivieren, m\xfcsst ihr in der gerade ge\xe4nderten ssh_config den Wert von ",(0,r.kt)("em",{parentName:"p"},"No")," wieder auf ",(0,r.kt)("em",{parentName:"p"},"Yes")," setzen."),(0,r.kt)("h4",{id:"installation-der-node-ain-version"},"Installation der Node (AIN-Version)"),(0,r.kt)("p",null,"Wir befinden uns standardm\xe4\xdfig in unserem Homeverzeichnis, wenn ihr den gleichen Benutzernamen wie oben vorgeschlagen genommen habt, ist dieses:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"/home/defichain/")),(0,r.kt)("p",null,"Jetzt gehts an die Node. Ladet euch dazu die aktuelle Version direkt von GitHub herunter. Das geht mit:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wget https://github.com/DeFiCh/ain/releases/download/v2.6.1/defichain-2.6.1-x86_64-pc-linux-gnu.tar.gz")),(0,r.kt)("p",null,"Danach entpacken wir das Paket mit dem Befehl:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tar -xvzf defichain-2.6.1-x86_64-pc-linux-gnu.tar.gz")),(0,r.kt)("p",null,"Nun legen wir uns ein neues Verzeichnis an und kopieren die ben\xf6tigten Dateien aus dem entpackten Verzeichnis dort hinein."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mkdir /home/defichain/.defi")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cp ./defichain-2.6.1/bin/* /home/defichain/.defi")),(0,r.kt)("p",null,"Das wars schon, wir haben die Node auf unserem VPS aufgesetzt. Jetzt kommt der langwierige Teil: Synchronisieren."),(0,r.kt)("h4",{id:"synchronisation"},"Synchronisation"),(0,r.kt)("p",null,"Dazu starten wir die Node mit dem Befehl:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/home/defichain/.defi/defid -daemon")),(0,r.kt)("p",null,"Der Schalter ",(0,r.kt)("em",{parentName:"p"},"-daemon")," bewirkt, das die Node im Hintergrund ausgef\xfchrt wird und nicht direkt in der Shell l\xe4uft und sich wieder beendet, wenn wir uns ausloggen."),(0,r.kt)("p",null,"Der Sync-Vorgang dauert nun einige Zeit. Wir pr\xfcfen den Fortschritt mit:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/home/defichain/.defi/defi-cli getblockcount")),(0,r.kt)("p",null,"Normal wird dir dort einige Zeit eine 0 zur\xfcckgegeben, das hei\xdft deine Node sucht noch nach anderen Nodes, um sich die aktuelle Blockchain herunterzuladen. Aber wir sind ja nicht von gestern und verleihen unserer Node einen kleinen Boost, indem wir ihr 2 bereits bekannte Nodes\nmit dem Befehl addnode bekanntmachen, von der die Blockchain heruntergeladen werden kann:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'/home/defichain/.defi/defi-cli addnode "45.157.177.82:8555" add')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'/home/defichain/.defi/defi-cli addnode "185.244.194.174:8555" add')),(0,r.kt)("p",null,"Nach ein paar Sekunden pr\xfcfen wir, ob unsere Node sich bereits mit anderen Nodes verbunden hat:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/home/defichain/.defi/defi-cli getconnectioncount")),(0,r.kt)("p",null,"Hier sollte dann keine 0 stehen, falls doch, mach dich bei deinem Provider schlau, ob evtl. der Port 8555 gesperrt ist und lasse diesen ggf. freischalten."),(0,r.kt)("p",null,"Nach 1-2 Minuten pr\xfcfen wir den Status erneut mit"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/home/defichain/.defi/defi-cli getblockcount")),(0,r.kt)("p",null,"Evtl. m\xfcssen wir den Befehl im Abstand von 1-2 Minuten wiederholt eingeben, ehe die 0 verschwindet und die ersten Bl\xf6cke hereinprasseln. Sobald die synchronisierte Blockanzahl steigt, k\xf6nnen wir uns erstmal ausgiebig selber feiern, wir sind fast am Ziel. Die Synchronisierung dauert mehrere Stunden, also spart es euch vor dem Rechner zu sitzen und den geblockcount-Befehl reinzuklopfen. Es dauert, das ist aber v\xf6llig normal in einem dezentralen System."),(0,r.kt)("h4",{id:"automatischen-start-konfigurieren"},"Automatischen Start konfigurieren"),(0,r.kt)("p",null,"Wir konfigurieren jetzt unseren Server noch so, das er nach einem Reboot unsere Node direkt wieder startet:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"crontab -e")),(0,r.kt)("p",null,"f\xfcr das automatische Ausf\xfchren von Programmen oder Scripten. Ans Ende der vielen Kommentarzeilen schreiben wir:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"* * * * * pidof defid || /home/defichain/.defi/defid")),(0,r.kt)("p",null,"und springen mit der Entertaste in eine neue Zeile, das ist wichtig, ansonsten k\xf6nnt ihr nicht speichern. Diese eine Zeile bewirkt, das nach jedem Serverneustart unsere Node auch startet und sich diese auch erneut startet, sollte sie mal abst\xfcrzen."),(0,r.kt)("p",null,"Wir pr\xfcfen nochmal die Blockh\xf6he mit dem oben genannten Befehl (na, wer wei\xdf ihn noch ohne spickeln?) und sind entweder zufrieden, dass es bald durch ist oder machen jetzt erstmal eine Pause, bis der Sync vollst\xe4ndig\nist."),(0,r.kt)("p",null,"Die aktuelle Blockh\xf6he k\xf6nnt ihr unter ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.defichain.com"},"https://explorer.defichain.com")," abrufen."),(0,r.kt)("h4",{id:"konfiguration-und-erstellung-der-masternode"},"Konfiguration und Erstellung der Masternode"),(0,r.kt)("p",null,"Ist die Synchronisation beendet, gehts an die letzten Schritte am VPS:"),(0,r.kt)("p",null,"Wir legen uns wie auch schon in unserer lokalen Wallet eine neue Legacy-Adresse an. Da wir hier keine GUI haben, bleibts bei der Kommandozeile:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'/home/defichain/.defi/defi-cli getnewaddress "MeinecooleMasternode" legacy')),(0,r.kt)("p",null,"Wenn ihr alles korrekt abgetippt habt, erhaltet ihr wieder eine neue Adresse die mit einer ",(0,r.kt)("em",{parentName:"p"},"8")," beginnt. Auch diese notieren wir uns, und zwar als Adresse eurer ",(0,r.kt)("em",{parentName:"p"},'"Operatornode"')),(0,r.kt)("p",null,"Jetzt m\xfcssen wir noch die defi.conf anpassen."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nano /home/defichain/.defi/defi.conf")),(0,r.kt)("p",null,"Da diese noch nicht existiert oder leer ist, geben wir dort ein paar Zeilen Code ein:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"daemon=1\n\ngen=1\n\nspv=1\n\nmasternode_operator=OPERATOR_ADDRESS\n")),(0,r.kt)("p",null,"Bei OPERATOR_ADDRESS gib deine neu erstellte Adresse von oben ein (die auf dem VPS generiert wurde), du hast sie dir extra notiert."),(0,r.kt)("p",null,"Damit die Config greift, m\xfcssen wir die Node neu starten. Das passiert mit dem Befehl:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"killall defi-init")),(0,r.kt)("p",null,'Damit wird die Node "abgeschossen". Und wie starte ich sie wieder? Du erinnerst dich an unseren crontab-Eintrag, die Node startet in maximal 1 Minute erneut.'),(0,r.kt)("p",null,"Pr\xfcfen kannst du das mit dem Befehl ",(0,r.kt)("em",{parentName:"p"},"TOP"),", unter dem User defichain muss hier - meist an oberster Stelle - eine defi-init zu finden sein. Alternativ kannst du auch den getblockcount-Befehl nochmals ausf\xfchren, wenn die Node l\xe4uft, liefert sie dir ein Ergebnis."),(0,r.kt)("p",null,"Halleluja, das wars, unser VPS ist fertig, die Node l\xe4uft."),(0,r.kt)("h4",{id:"konfiguration-unserer-wallet"},"Konfiguration unserer Wallet"),(0,r.kt)("p",null,"Jetzt fehlt noch der Schritt zur Erstellung unserer Masternode im Netzwerk. Dazu gehen wir jetzt auf die lokale Wallet auf unserem Rechner."),(0,r.kt)("p",null,"Und jetzt die Erstellung, welche uns 10 DFI kostet. Keine Sorge, mit dem ersten Reward sind diese 10 DFI um ein vielfaches wieder drin ;-)"),(0,r.kt)("p",null,"Ungelockte Masternode:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createmasternode OWNER_ADDRESS OPERATOR_ADDRESS"),"."),(0,r.kt)("p",null,"5-Jahre gelockte Masternode (1,5x Rewards):"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createmasternode OWNER_ADDRESS OPERATOR_ADDRESS [] FIVEYEARTIMELOCK"),"."),(0,r.kt)("p",null,"10-Jahre Masternode (2x Rewards):"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createmasternode OWNER_ADDRESS OPERATOR_ADDRESS [] TENYEARTIMELOCK")),(0,r.kt)("p",null,"Die Adressen nat\xfcrlich wieder ersetzen: Owner ist die der lokalen Wallet, Operator die vom VPS."),(0,r.kt)("p",null,"Und aufgepasst und nicht erschrecken, wenn die Masternode mit dem Befehl oben erstellt wurde, seht ihr ein paar Bl\xf6cke sp\xe4ter eine Aus- und eingehende Transaktion mit 20000 DFI auf eure Owneradresse, in der Wallet sind diese 20000 DFI aber nicht mehr sichtbar, da sie nun gelocked sind und erst wieder in eure Wallet kommen, wenn ihr die Masternode aufl\xf6st."),(0,r.kt)("p",null,"Fertig, herzlichen Gl\xfcckwunsch, geschafft."),(0,r.kt)("h4",{id:"status-pr\xfcfen"},"Status pr\xfcfen"),(0,r.kt)("p",null,"Warte ein paar Minuten und pr\xfcfe unter ",(0,r.kt)("a",{parentName:"p",href:"http://mydeficha.in/masternodes.php"},"mydeficha.in/masternodes.php")," ob deine Adressen dort auftauchen. Nach einiger Zeit (1008 Bl\xf6cke, ","~","8 Stunden) sollte der Status von Pre-Enabled auch auf Enabled gehen, dann hast du alles richtig gemacht."),(0,r.kt)("h4",{id:"node-updaten"},"Node updaten"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wget https://github.com/DeFiCh/ain/releases/download/v2.6.1/defichain-2.6.1-x86_64-pc-linux-gnu.tar.gz")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tar -xvzf defichain-2.6.1-x86_64-pc-linux-gnu.tar.gz")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"~/.defi/defi-cli stop")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cp ./defichain-2.6.1/bin/* ~/.defi/")),(0,r.kt)("p",null,"Warte 1-2 Minuten, bis deine Node durch crontab wieder automatisch gestartet wird. Mit dem Befehl:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"~/.defi/defi-cli getblockcount")),(0,r.kt)("p",null,"kannst du pr\xfcfen, ob deine Node wieder l\xe4uft und synchronisiert."),(0,r.kt)("h4",{id:"mehrere-masternodes-auf-dem-selben-vps"},"Mehrere Masternodes auf dem selben VPS"),(0,r.kt)("p",null,"Wenn du mehr als ein vollst\xe4ndiges Collateral (1 Collateral = 20.000 DFI) besitzt, dann kannst du mehrere Masternodes auf dem selben System laufen lassen. Jede weitere Masternode ben\xf6tigt eine eigene OPERATOR_ADDRESS und eine zugeh\xf6rige OWNER_ADDRESS, die das Collateral h\xe4lt."),(0,r.kt)("p",null,"Du musst also eine neue OPERATOR_ADDRESS auf deinem VPS erzeugen, eine neue OWNER_ADDRESS in deiner DeFiChain-Wallet anlegen und darauf das Collateral \xfcbertragen, sowie im Anschluss daran eine neue Masternode mit diesen beiden Adressen registrieren."),(0,r.kt)("p",null,"So wird es gemacht:"),(0,r.kt)("h6",{id:"auf-deiner-defichain-wallet"},"Auf deiner DeFiChain-Wallet:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Erzeuge eine neue Legacy-Adresse mit dem CLI-Kommando     ",(0,r.kt)("inlineCode",{parentName:"li"},'getnewaddress "<label>" legacy'),' oder \xfcber die grafische Benutzeroberfl\xe4che der App (Stelle sicher, dass du "Legacy" unter "Show advance options" ausgew\xe4hlt hast!)'),(0,r.kt)("li",{parentName:"ol"},'Diese neue Adresse wird in der "Receive"-Liste in deiner DeFiWallet App auftauchen. (Sie muss zwingend mit einer 8 beginnen, sonst handelt es sich nicht um eine Legacy-Adresse)'),(0,r.kt)("li",{parentName:"ol"},"Kopiere dir diese Adresse. Es ist im Folgenden die OWNER_ADDRESS."),(0,r.kt)("li",{parentName:"ol"},"\xdcbertrage das Collateral zu dieser Adresse (20.000 DFI + weitere 10 DFI Geb\xfchr zur Erstellung der Masternode + 1 DFI f\xfcr Transaktionsgeb\xfchren = 20.011 DFI)"),(0,r.kt)("li",{parentName:"ol"},"Warte f\xfcr einige Bl\xf6cke, bis deine \xdcbertragung ausreichend sicher verifiziert wurde.")),(0,r.kt)("h6",{id:"auf-deinem-vps"},"Auf deinem VPS:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Erzeuge eine neue OPERATOR_ADDRESS: ",(0,r.kt)("inlineCode",{parentName:"li"},'/home/defichain/.defi/defi-cli getnewaddress "MySecondCoolMasternode" legacy')),(0,r.kt)("li",{parentName:"ol"},"Kopiere dir diese Adresse. Es ist im Folgenden die OPERATOR_ADDRESS."),(0,r.kt)("li",{parentName:"ol"},"Informiere deine Node \xfcber die neu erzeugte OPERATOR_ADDRESS, indem du eine neue Zeile ",(0,r.kt)("inlineCode",{parentName:"li"},"masternode_operator=OPERATOR_ADDRESS")," zur Datei ",(0,r.kt)("inlineCode",{parentName:"li"},"/home/defichain/.defi/defi.conf"),' hinzuf\xfcgst. (Behalte dabei die bereits existierenden Zeilen mit "masternode_operator" bei! F\xfcge einfach nur eine weitere Zeile hinzu.)'),(0,r.kt)("li",{parentName:"ol"},"Starte dein Node neu, indem du die laufenden Prozesse anh\xe4ltst: ",(0,r.kt)("inlineCode",{parentName:"li"},"killall defi-init"))),(0,r.kt)("h6",{id:"noch-einmal-auf-deiner-defichain-wallet"},"Noch einmal auf deiner DeFiChain-Wallet"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\xd6ffne die In-App-CLI"),(0,r.kt)("li",{parentName:"ol"},"F\xfchre aus: ",(0,r.kt)("inlineCode",{parentName:"li"},"createmasternode OWNER_ADDRESS OPERATOR_ADDRESS")),(0,r.kt)("li",{parentName:"ol"},"Profit :)")))}p.isMDXComponent=!0}}]);