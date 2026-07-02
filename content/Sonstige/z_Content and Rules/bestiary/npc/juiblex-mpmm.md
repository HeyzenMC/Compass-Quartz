---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/23
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Juiblex"
---
# [Juiblex](Sonstige/z_Content%20and%20Rules/bestiary/npc/juiblex-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 160, Mordenkainen's Tome of Foes p. 151*  

Called the Faceless Lord and the Oozing Hunger in ancient grimoires, Juiblex is demon lord of slime and ooze, a noxious creature that doesn't care about the plots and schemes of others of its kind. It exists only to consume, digesting and transforming living matter into more of itself.

A true horror, Juiblex is a mass of bubbling slime, swirling black and green, with glaring red eyes floating and shifting within it. It can rise up like a 20-foot hill, lashing out with dripping pseudopods to drag victims into its bulk. Those consumed by Juiblex are obliterated.

## Cultists of Juiblex

> [!note]
> See the Cult of Juiblex entry.

## Juiblex's Lair

Juiblex's principal lair is known as the Slime Pits, a realm that Juiblex shares with [Zuggtmoy](Sonstige/z_Content%20and%20Rules/bestiary/npc/zuggtmoy-mpmm.md) (who also appears in this book). This layer of the Abyss, which is also known as Shedaklah, is a bubbling morass of fetid sludge. The landscape is covered in vast expanses of caustic slimes, and strange organic forms rise from the oceans of ooze at Juiblex's command.

Juiblex's challenge rating is 24 (62,000 XP) when encountered in its lair.

```statblock
"name": "Juiblex (MPMM)"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "350"
"hit_dice": "28d12 + 168"
"modifier": !!int "0"
"stats":
  - !!int "24"
  - !!int "10"
  - !!int "23"
  - !!int "20"
  - !!int "20"
  - !!int "16"
"speed": "30 ft., climb 30 ft."
"saves":
  - "dexterity": !!int "7"
  - "constitution": !!int "13"
  - "wisdom": !!int "12"
"skillsaves":
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+12"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "acid; poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "[blinded](Sonstige/z_Content%20and%20Rules/conditions.md#Blinded),\
  \ [charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed), [deafened](Sonstige/z_Content%20and%20Rules/conditions.md#Deafened),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened),\
  \ [grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled), [paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed),\
  \ [petrified](Sonstige/z_Content%20and%20Rules/conditions.md#Petrified), [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned),\
  \ [prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone), [restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained),\
  \ [stunned](Sonstige/z_Content%20and%20Rules/conditions.md#Stunned), [unconscious](Sonstige/z_Content%20and%20Rules/conditions.md#Unconscious)"
"senses": "[truesight](Sonstige/z_Content%20and%20Rules/senses.md#Truesight) 120 ft.,\
  \ passive Perception 22"
"languages": "all, telepathy 120 ft."
"cr": "23"
"traits":
  - "desc": "Any creature other than an Ooze that starts its turn within 10 feet of\
      \ Juiblex must succeed on a DC 21 Constitution saving throw or be [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ until the start of the creature's next turn."
    "name": "Foul"
  - "desc": "If Juiblex fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Juiblex has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Juiblex regains 20 hit points at the start of its turn. If it takes fire\
      \ or radiant damage, this trait doesn't function at the start of its next turn.\
      \ Juiblex dies only if it starts its turn with 0 hit points and doesn't regenerate."
    "name": "Regeneration"
  - "desc": "Juiblex can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "Juiblex makes three Acid Lash attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +14 to hit, reach 10 ft. or range\
      \ 60/120 ft., one target. *Hit:* 21 (4d6 + 7) acid damage. Any creature killed\
      \ by this attack is drawn into Juiblex's body, where the corpse is dissolved\
      \ after 1 minute."
    "name": "Acid Lash"
  - "desc": "Juiblex spews out a corrosive slime, targeting one creature that it can\
      \ see within 60 feet of it. The target must succeed on a DC 21 Dexterity saving\
      \ throw or take 55 (10d10) acid damage. Unless the target avoids taking all\
      \ of this damage, any metal armor worn by the target takes a permanent −1 penalty\
      \ to the AC it offers, and any metal weapon the target is carrying or wearing\
      \ takes a permanent −1 penalty to damage rolls. The penalty worsens each time\
      \ a target is subjected to this effect. If the penalty on an object drops to\
      \ −5, the object is destroyed. The penalty on an object can be removed by the\
      \ [mending](Sonstige/z_Content%20and%20Rules/spells/mending-xphb.md) spell."
    "name": "Eject Slime (Recharge 5-6)"
  - "desc": "Juiblex casts one of the following spells, requiring no material components\
      \ and using Wisdom as the spellcasting ability (spell save DC 20):\n\n**At will:**\
      \ [detect magic](Sonstige/z_Content%20and%20Rules/spells/detect-magic-xphb.md)\n\
      \n**3/day each:** [contagion](Sonstige/z_Content%20and%20Rules/spells/contagion-xphb.md),\
      \ [gaseous form](Sonstige/z_Content%20and%20Rules/spells/gaseous-form-xphb.md)"
    "name": "Spellcasting"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Juiblex can expend a use to take one of the following actions. Juiblex regains\
  \ all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Juiblex makes one Acid Lash attack."
    "name": "Attack"
  - "desc": "*Melee Weapon Attack:* +14 to hit, reach 10 ft., one creature. *Hit:*\
      \ 21 (4d6 + 7) poison damage, and the target is slimed. Until the slime is\
      \ scraped off with an action, the target is [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned),\
      \ and any creature, other than an Ooze, is [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ while within 10 feet of the target."
    "name": "Corrupting Touch (Costs 2 Actions)"
"source":
  - "MPMM"
  - "MTF"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/juiblex-mpmm.webp"
```
^statblock