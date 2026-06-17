<%*
const presets = [
  { name: "🟣 Lila     #9B59B6", color: "#9B59B6" },
  { name: "🔴 Rot      #C0392B", color: "#C0392B" },
  { name: "🟢 Grün     #27AE60", color: "#27AE60" },
  { name: "🔵 Blau     #2980B9", color: "#2980B9" },
  { name: "🟠 Orange   #E67E22", color: "#E67E22" },
  { name: "🟡 Gold     #D4AC0D", color: "#D4AC0D" },
  { name: "🩵 Petrol   #17A589", color: "#17A589" },
  { name: "⚫ Grau     #7F8C8D", color: "#7F8C8D" },
  { name: "✏️  Eigene Farbe...", color: "custom" },
];

const choice = await tp.system.suggester(
  presets.map(p => p.name),
  presets,
  false,
  "Infobox-Farbe wählen"
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

tR += `> [!infobox|wikipedia]
> <div class="infobox-color" style="--infobox-accent: ${color};">
>
> # **${title}**
> ![[Token.png]]
> ###### –
> | Eigenschaft | Wert |
> | --- | --- |
> | **Name** | - |
>
> </div>`;
-%>