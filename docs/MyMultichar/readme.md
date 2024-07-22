### Willkommen bei der myMulticharV3 Readme

**myMulticharV3** ist ein Multichar-System, erstellt von Luiis und Ludaro. Es wurde ursprünglich mit NativeUI implementiert, und es gibt Pläne, in naher Zukunft zu einem umfassenderen NUI-System zu wechseln.

# Das System verstehen

## Befehle

Dieses System führt neue Befehle ein, um die Funktionalität zu erweitern.

### /editmultichar [ID]

Dieser Befehl öffnet ein NativeUI-Menü, das eine umfassende Anpassung von Charakteren ermöglicht, egal ob sie dir oder anderen Benutzern gehören.

### /openpedmenu und /openpedmenuothers [ID]

Diese Befehle ermöglichen das Öffnen des Ped-Menüs, sofern die entsprechenden Berechtigungen vorliegen. Es ist auch möglich, das Ped-Menü für andere zu öffnen, ohne deren Erlaubnis einzuholen. Beachte jedoch, dass dies eine einmalige Aktion ist und das Menü geschlossen wird, wenn man die Charaktere wechselt.

### /changelocation

Mit diesem Befehl kannst du deinen aktuellen Standort aus einer Liste verfügbarer Optionen anzeigen und ändern.

### /setslots (IDENTIFIER) (SLOTS)

Es ist wichtig, zwischen der ID und dem Identifier zu unterscheiden. Um diesen Befehl zu verwenden, benötigst du den Identifier, der in deiner Benutzertabelle unter dem Feld "identifier" zu finden ist. Zum Beispiel ist "char1:3301e1e3a27b4df3980c6467edfd528d68" ein Identifier (unabhängig vom gewählten Charakter). Der Parameter "SLOTS" gibt die Anzahl der Slots an, die du zuweisen möchtest.

### /resetslots (IDENTIFIER)

Dieser Befehl setzt die Charakter-Slots auf den im Config angegebenen Standardwert zurück.

### /enablechar (IDENTIFIER) (CHARID)

Dieser Befehl ermöglicht das Aktivieren eines bestimmten Charakters. Die Verwendung ist selbsterklärend.

### /disablechar (IDENTIFIER) (CHARID)

Ähnlich wie der vorherige Befehl wird dieser verwendet, um einen Charakter zu deaktivieren.

## Zusätzliche Funktionen

### Old-Mode

Der "Old-Mode" ist eine Funktion, die das Menü von einem Listenelement in ein eigenes Element für jeden Charakter umwandelt. Dieses Design ermöglicht Charaktere mit einzigartigen Namen. Insbesondere werden Kameraeinstellungen und andere Anpassungen beibehalten.

### Config.Locations

**Verständnis von Cam Coords**:

Cam Coords (Kamerakoordinaten) funktionieren basierend auf den folgenden Parametern:

- **X, Y, Z**: Diese Werte definieren die Position der Kamera im Spiel oder der Software und bestimmen ihren Standort im dreidimensionalen Raum. Passe diese Werte an, um die Kamera wie gewünscht zu positionieren.

- **ROTX (Neigung links/rechts)** und **ROTY (Neigung hoch/runter)**: Diese Werte steuern den Neigungswinkel der Kamera. RotX passt die horizontale Ausrichtung an, während RotY die vertikale Ausrichtung verändert. Diese Einstellungen ermöglichen die Feinabstimmung der Kameraperspektive.

- **RotZ (Ausrichtung)**: Dieser Wert steuert die Ausrichtung der Kamera, normalerweise in Grad gemessen. Passe diesen Wert an, um die Richtung zu ändern, in die die Kamera zeigt.

- **FOV (Sichtfeld)**: FOV bestimmt die Menge des Spielbereichs oder der Szene, die auf dem Bildschirm angezeigt wird. Ein höheres FOV erweitert das Sichtfeld, während ein niedrigeres FOV es verengt. Passe diesen Wert an, um das Sichtfeld der Kamera zu ändern.

### Custom Identitys

MyMulticharV3 akzeptiert benutzerdefinierte Identitäten, aber diese müssen modifiziert werden, da myMultichar wissen muss, wann sie abgeschlossen sind. Entweder du machst eine Wiederholung oder eine While-Schleife in Config.Functions.OpenIdentity und lässt es einfach warten (und setze customidentity = false), oder du fügst das Relog in deine Identität ein. Als Erklärung nehme ich esx_identity.

Wir werden dieses Ereignis hinzufügen:

```lua
 TriggerServerEvent("MyMultichar:relog")
```

wenn die Identität abgeschlossen ist, sodass die Person sich einfach neu anmeldet. In esx_identity befindet sich dies in der client.lua in Zeile 66 unter diesen beiden:

```lua
   ESX.ShowNotification(TranslateCap('thank_you_for_registering'))
            setGuiState(false)
```

sodass es so aussieht:

```lua
 ESX.ShowNotification(TranslateCap('thank_you_for_registering'))
setGuiState(false)
TriggerServerEvent("MyMultichar:relog")
```

Wenn du weitere Hilfe benötigst, sei frei, im myScripts-Discord zu fragen!
https://discord.gg/75PXJk2S

### Übersetzte Readme auf Deutsch

Bitte übersetze die Readme ins Deutsche