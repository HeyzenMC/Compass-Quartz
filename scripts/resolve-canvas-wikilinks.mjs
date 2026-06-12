import fs from 'fs';
import path from 'path';

// Argumente auslesen: 1. Datei/Ordner, 2. BasePathPrefix (z.B. /Compass-Quartz)
const targetPath = process.argv[2];
const basePath = process.argv[3] || '';

if (!targetPath) {
    console.error("Bitte einen Pfad angeben.");
    process.exit(1);
}

function processCanvasFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let json;
    
    try {
        json = JSON.parse(content);
    } catch (e) {
        console.error(`Fehler beim Parsen von ${filePath}:`, e);
        return;
    }

    if (!json.nodes) return;

    // Wir laufen durch alle Text-Nodes
    json.nodes.forEach(node => {
        if (node.type === 'text' && node.text) {
            // Regex für Wikilinks: [[Ziel]] oder [[Ziel|Anzeigename]]
            // Wir wandeln sie in sauberes Markdown um: [Anzeigename](basePath/Ziel)
            node.text = node.text.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (match, target, alias) => {
                const displayName = alias ? alias.trim() : target.trim();
                let cleanTarget = target.trim().toLowerCase().replace(/ /g, '-');
                
                // Problem 1 Fix: BasePath vorne anhängen, falls nicht vorhanden
                // Wir stellen sicher, dass es wie /Compass-Quartz/pcs/pixel formatiert ist
                let finalPath = `${basePath}/${cleanTarget}`.replace(/\/+/g, '/');
                
                // Problem 2 Fix: Wir geben REINES Markdown zurück. Kein HTML!
                return `[${displayName}](${finalPath})`;
            });
        }
    });

    // Datei wieder sauber speichern
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
    console.log(`Erfolgreich verarbeitet: ${filePath}`);
}

// Prüfen, ob es ein Ordner oder eine einzelne Datei ist
if (fs.statSync(targetPath).isDirectory()) {
    fs.readdirSync(targetPath).forEach(file => {
        if (file.endsWith('.canvas')) {
            processCanvasFile(path.join(targetPath, file));
        }
    });
} else if (targetPath.endsWith('.canvas')) {
    processCanvasFile(targetPath);
}