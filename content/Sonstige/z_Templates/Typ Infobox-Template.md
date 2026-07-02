---
unlisted: true
---
<%*
const presets = [
  { name: "🔵 NPC     #1c557a", color: "#1c557a" },
  { name: "🟤🟠 Ort   #a85a22", color: "#a85a22" },
  { name: "🟡 Organisation    #898c2b", color: "#898c2b" },
  { name: "🩵 Magisches Item   #1a8787", color: "#1a8787" },
  { name: "⚫ Gott     #464a4a", color: "#464a4a" },
  { name: "✏️  Eigene Farbe...", color: "custom" },
];

const choice = await tp.system.suggester(
  presets.map(p => p.name),
  presets,
  false,
  "Für was ist die Infobox?"
);

if (!choice) return;

let color;
if (choice.color === "custom") {
  color = await tp.system.prompt("Hex-Code eingeben", "#CB5FDE");
  if (!color) return;
} else {
  color = choice.color;
}

const title = await tp.system.prompt("Infobox-Titel", "Charaktername");
if (!title) return;

tR += `> [!infobox|wikipedia sw-med]
> <div class="infobox-color" style="--infobox-accent: ${color};">
>
> # **${title}**
> ![[Token.png]]
> ###### –
> | Eigenschaft | Wert |
> | --- | --- |
> | **Name** | - |
> | **Name** | - |
> | **Name** | - |
> | **Name** | - |
> | **Name** | - |
> | **Name** | - |
>
> </div>`;
-%>