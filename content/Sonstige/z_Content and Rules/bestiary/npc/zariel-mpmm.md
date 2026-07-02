---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/26
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Zariel"
---
# [Zariel](Sonstige/z_Content%20and%20Rules/bestiary/npc/zariel-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 280, Mordenkainen's Tome of Foes p. 180*  

> [!quote] A quote from Mordenkainen  
> 
> That which falls from grace may yet rise to regain it. If Zariel were to return to her celestial self, how glorious would be the tales!

Once a mighty angel charged with watching the tides of the Blood War, Zariel succumbed to the corrupting influence of the Nine Hells and fell from grace. Asmodeus admired Zariel's passion for war and offered her rulership of Avernus. She accepted his offer, and he transformed her into an archdevil.

Zariel's rise in status came at the expense of Bel, her pit fiend predecessor. Zariel and Bel hate each other. To keep Bel busy and out of her sight, Zariel tasks him with forging weapons, armor, and grue some demon-slaying machines.

To replenish her legions, Zariel needs the souls of mortals to create lemures, which she can then promote to higher forms of devils. She is keenly interested in collecting souls from the greatest warriors on the Material Plane. She bargains hard, and there is little hope of wriggling out of a pact. However, she expects the best from her servants, so she allows her mortal followers to live out their lives provided they continue to hone their talents to increase their value. As a result, Zariel's servants are universally effective, disciplined, and dangerous.

## Cultists of Zariel

> [!note]
> See the Cult of Zariel entry.

## Zariel's Lair

Zariel makes her lair in a basalt citadel that rises up in Avernus. From nearly a mile away, one can hear the screams and moans coming from the burned victims chained to the stronghold's wall, the dying remains of those who failed to impress the archdevil. The stronghold, covering five square miles, is surrounded by walls reinforced with high turrets. Devils of all kinds crawl over the structure, ensuring that no intruders breach their defenses.

```statblock
"name": "Zariel (MPMM)"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "420"
"hit_dice": "29d10 + 261"
"modifier": !!int "7"
"stats":
  - !!int "27"
  - !!int "24"
  - !!int "28"
  - !!int "26"
  - !!int "27"
  - !!int "30"
"speed": "50 ft., fly 150 ft."
"saves":
  - "intelligence": !!int "16"
  - "wisdom": !!int "16"
  - "charisma": !!int "18"
"skillsaves":
  - "name": "[Intimidation](Sonstige/z_Content%20and%20Rules/skills.md#Intimidation)"
    "desc": "+18"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+16"
"damage_resistances": "cold; fire; radiant; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened),\
  \ [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"gear":
  - "[flail](Sonstige/z_Content%20and%20Rules/items/flail-xphb.md)"
  - "[longsword](Sonstige/z_Content%20and%20Rules/items/longsword-xphb.md)"
"senses": "[darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 120\
  \ ft., passive Perception 26"
"languages": "all, telepathy 120 ft."
"cr": "26"
"traits":
  - "desc": "Magical darkness doesn't impede Zariel's [darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision)."
    "name": "Devil's Sight"
  - "desc": "If Zariel fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Zariel has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Zariel regains 20 hit points at the start of her turn. If she takes radiant\
      \ damage, this trait doesn't function at the start of her next turn. Zariel\
      \ dies only if she starts her turn with 0 hit points and doesn't regenerate."
    "name": "Regeneration"
"actions":
  - "desc": "Zariel makes three Flail or Longsword attacks. She can replace one attack\
      \ with a use of Horrid Touch, if available."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +16 to hit, reach 10 ft., one target. *Hit:*\
      \ 17 (2d8 + 8) force damage plus 36 (8d8) fire damage."
    "name": "Flail"
  - "desc": "*Melee Weapon Attack:* +16 to hit, reach 10 ft., one target. *Hit:*\
      \ 17 (2d8 + 8) radiant damage, or 19 (2d10 + 8) radiant damage when used\
      \ with two hands, plus 36 (8d8) fire damage."
    "name": "Longsword"
  - "desc": "Zariel touches one creature within 10 feet of her. The target must succeed\
      \ on a DC 26 Constitution saving throw or take 44 (8d10) necrotic damage and\
      \ be [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned) for\
      \ 1 minute. While [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ in this way, the target is [blinded](Sonstige/z_Content%20and%20Rules/conditions.md#Blinded)\
      \ and [deafened](Sonstige/z_Content%20and%20Rules/conditions.md#Deafened). The\
      \ target can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Horrid Touch (Recharge 5-6)"
  - "desc": "Zariel teleports, along with any equipment she is wearing or carrying,\
      \ up to 120 feet to an unoccupied space she can see."
    "name": "Teleport"
  - "desc": "Zariel casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability (spell save DC 26):\n\n**At\
      \ will:** [alter self](Sonstige/z_Content%20and%20Rules/spells/alter-self-xphb.md)\
      \ (can become Medium when changing her appearance), [detect evil and good](Sonstige/z_Content%20and%20Rules/spells/detect-evil-and-good-xphb.md),\
      \ [fireball](Sonstige/z_Content%20and%20Rules/spells/fireball-xphb.md), [invisibility](Sonstige/z_Content%20and%20Rules/spells/invisibility-xphb.md)\
      \ (self only), [major image](Sonstige/z_Content%20and%20Rules/spells/major-image-xphb.md),\
      \ [wall of fire](Sonstige/z_Content%20and%20Rules/spells/wall-of-fire-xphb.md)\n\
      \n**3/day each:** [blade barrier](Sonstige/z_Content%20and%20Rules/spells/blade-barrier-xphb.md),\
      \ [dispel evil and good](Sonstige/z_Content%20and%20Rules/spells/dispel-evil-and-good-xphb.md),\
      \ [finger of death](Sonstige/z_Content%20and%20Rules/spells/finger-of-death-xphb.md)"
    "name": "Spellcasting"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Zariel can expend a use to take one of the following actions. Zariel regains\
  \ all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Zariel uses Teleport."
    "name": "Teleport"
  - "desc": "Zariel turns her magical gaze toward one creature she can see within\
      \ 120 feet of her and commands it to burn. The target must succeed on a DC 26\
      \ Wisdom saving throw or take 22 (4d10) fire damage."
    "name": "Immolating Gaze (Costs 2 Actions)"
"source":
  - "MPMM"
  - "MTF"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/zariel-mpmm.webp"
```
^statblock