# Nesto Task – Skript `run.sh`

Das Skript `run.sh` dient dazu, das Projekt zu starten und zwischen zwei Aktionen zu wählen:

1. **CLI-Ausgabe der Aufgaben 1–3**  
2. **Start der Vue-App im Entwicklungsmodus**

---

## Skript ausführen

Terminal öffnen und ins Projektverzeichnis wechseln:

```bash
cd nesto-task
```

run.sh ausführbar machen (falls noch nicht):

```bash
chmod +x run.sh
```

Skript starten:

```bash
./run.sh
```

oder bei Windows Skript mit Bash starten:

```bash
bash ./run.sh
```

## Notes

- Das Skript installiert bei Bedarf automatisch alle Abhängigkeiten (npm install).
- CLI-Ausgabe basiert auf src/cli.ts.
- Vue-App wird über npm run dev gestartet.
- Ungültige Eingaben führen zu einer Fehlermeldung und Beendigung des Skripts.
