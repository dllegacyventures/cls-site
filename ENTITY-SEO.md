# Entitäts-Aufbau „Mario De Luca" — Stand & Fahrplan

Ziel: Wer „Mario De Luca" googelt, findet dich — mit Faktenkasten (Knowledge
Panel) statt zufälliger Namensvettern.

## Ausgangslage (geprüft am 02.08.2026)

Bei der reinen Namenssuche tauchst du **nicht** auf. Besetzt ist der Name von:

| Wer | Warum stark |
|---|---|
| Mario De Luca, Bildhauer/Maler (\*1959) | Venedig-Biennale 2011, Triennale Mailand 2015 |
| Mario de Luca, Künstler (1941–2007) | Auktionshistorie, MutualArt-Profil |
| Mario De Luca, Musiker | Spotify-Artist-Seite |
| @mariodeluca (Instagram) | fremd belegt — „Random Memory" |
| mariodeluca.com | fremd belegt — Portfolio eines Namensvetters |

`delucalegacy.com` rankt bereits auf Platz 1 bei kombinierten Suchen
(„Mario De Luca Sales", „delucalegacy"). Das ist die Basis, auf der alles
weitere aufsetzt.

## Was bereits umgesetzt ist

- **JSON-LD-Entitätsgraph** auf `index.html`: `Person` + `Organization` +
  `WebSite` + `ProfilePage`, verknüpft über feste `@id`-Anker. Die
  `@id`-Werte bei Änderungen nie anfassen — daran hängt Googles Zuordnung.
- **`sameAs`** auf alle fünf bestätigten Profile (Instagram, YouTube, TikTok,
  X, Skool). Damit sagst du Google: das ist alles dieselbe Person.
- **Sichtbare Profil-Leiste im Footer** mit `rel="me"`. Verweise wirken
  stärker, wenn sie auch im sichtbaren Markup stehen, nicht nur im JSON-LD.
- **`robots.txt` + `sitemap.xml`** neu angelegt.
- `alternateName: "Real Sales Genius"` — verbindet Klarname und Handle zu
  einer Entität.

Handles geprüft: YouTube und X eindeutig bestätigt (`realsalesgenius`),
Instagram und TikTok antworten mit Login-Wall bzw. Bot-Sperre, laut deiner
Angabe aktiv.

## Nächste Schritte, nach Wirkung sortiert

### 1 · Sofort, kostenlos, größte Wirkung

- [x] **Google Search Console** eingerichtet (02.08.2026). Property
      `https://delucalegacy.com/`, bestätigt per HTML-Tag, zusätzlich liegt
      die Datei `google433b7b8fc03c6e88.html` im Root. Sitemap eingereicht
      (Status erfolgreich, 3 Seiten), Neu-Indexierung der Startseite
      beantragt.
- [x] **LinkedIn-Profil** angelegt:
      `linkedin.com/in/mario-de-luca-business` — im `sameAs` und im Footer.
      Offene Punkte am Profil selbst siehe unten.
- [ ] **YouTube-Beschreibung** um „Mario De Luca" und den Link auf
      delucalegacy.com ergänzen. Kanalname bleibt auf Wunsch
      `realsalesgenius`; das Info-Feld ist ein getrenntes Feld und kostet
      optisch nichts.
- [ ] In **allen** Profilen dieselbe Bio, dasselbe Foto, denselben Link.
      Widersprüchliche Angaben verhindern die Entitätsbildung.

#### LinkedIn — was am Profil noch klemmt

Beim Gegenprüfen am 02.08. gesehen, alles direkt entitätsrelevant:

- **Namensfeld steht auf „Mario De Luca geb. realsalesgenius".** Das „geb."
  gehört da nicht hin — es liest sich wie ein Geburtsname und verwässert
  genau den Namen, auf den die Entität aufgebaut wird. Ins Namensfeld nur
  „Mario De Luca"; der Handle gehört in den Profilslogan oder das
  Spitznamen-Feld.
- **Profilslogan ist leer** (steht auf „-"). Das ist das wichtigste
  durchsuchbare Textfeld auf LinkedIn und taucht in den Suchergebnissen
  direkt unter dem Namen auf.
- **Banner zeigt „CHROMEVIM"** — eine fremde Marke. Für die Entität sollte
  dort NextCore oder CLS stehen.
- **Profilfoto ist ein Spiegelselfie.** Dasselbe Foto wie auf allen anderen
  Profilen zu verwenden, ist ein ausdrückliches Entitätssignal für Google.
- **7 Kontakte.** Dünne Profile ranken schlechter.

### 2 · Diese Woche

- [ ] **Zweitdomain sichern**: `mariodeluca.de` oder `mario-deluca.com`
      (`mariodeluca.com` ist weg). Per 301 auf delucalegacy.com leiten oder
      als Entitäts-Startseite nutzen.
- [ ] **Crunchbase-Profil** für NextCore mit dir als Founder.
- [ ] **Xing** — im DACH-Raum weiterhin ein starkes Namenssignal.
- [ ] **About.me** — flach, aber rankt bei Namenssuchen zuverlässig.
- [ ] **GitHub-Profil** öffentlich mit vollem Namen und Website-Link.

### 3 · Laufend — das ist der eigentliche Hebel

- [ ] **Podcast-Auftritte.** Bestes Aufwand-Ertrag-Verhältnis überhaupt: jede
      Folge ist eine eigene indexierte Seite mit deinem Namen im Titel, plus
      ein Backlink von einer fremden Domain. Fünf Auftritte verändern die
      Suchergebnisseite spürbar.
- [ ] **Fachpresse und Gastbeiträge** (OMR, t3n, Gründerszene, Branchenmedien).
      Das ist zugleich das Belegmaterial für Schritt 4.
- [ ] **Speaker-Profile** bei Events — eigene URL mit Namen und Bio.

### 4 · Erst wenn Schritt 3 Material geliefert hat

- [ ] **Wikidata-Eintrag.** Deutlich niedrigere Hürde als Wikipedia, aber ohne
      unabhängige Quellen wird er gelöscht. Frühestens sinnvoll, wenn drei bis
      fünf echte Presseartikel existieren. Wikidata ist eine der direktesten
      Quellen für den Knowledge Panel.
- [ ] **Knowledge Panel beanspruchen**, sobald er erscheint (Google zeigt dann
      „Inhaberschaft dieses Knowledge Panels beanspruchen").

## Was ausdrücklich nicht funktioniert

- **Wikipedia selbst anlegen.** Regelwidrig bei Eigeninteresse, wird gelöscht,
  und der Löschvorgang bleibt öffentlich googelbar. Die deutschsprachige
  Wikipedia verlangt bei Unternehmern faktisch Leitmedien-Berichterstattung.
  Agenturen, die Wikipedia-Seiten verkaufen, sind ein bekanntes Abzockmuster.
  Wikipedia ist die *Folge* von Relevanz, nicht der Weg dorthin.
- **Googles „Add me to Search"-Personenkarte.** Nur in Indien, Nigeria, Kenia
  und Südafrika verfügbar, Neuanlage inzwischen weitgehend eingestellt. In
  Deutschland kein Thema.

## Zeitrahmen, ehrlich

Seite 1 mit eigenen Treffern besetzen: drei bis sechs Monate, wenn Schritt 1
und 2 zügig kommen. Knowledge Panel: nicht planbar und nicht garantiert — er
entsteht, wenn genug unabhängige Quellen dieselbe Person beschreiben.
