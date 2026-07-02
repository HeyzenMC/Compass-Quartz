---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/19
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Lord Soth of Sithicus"
---
# [Lord Soth of Sithicus](Sonstige/z_Content%20and%20Rules/bestiary/npc/lord-soth-of-sithicus-rhw.md)
*Source: RHW p. 158*  

Lord Loren Soth seethes within a realm that mocks and frustrates him. Having known the rigid standards of knighthood and warfare, Soth finds Sithicus empty and chaotic, his people apathetic and undisciplined. The elven beauty that once captivated him lies ruined, the land burns with the flames of Krynn's Cataclysm, and the realm's shadows remind Soth of his past failures. Worse, no worthy foes exist to challenge him. So Soth broods on his throne in Nedragaard Keep, haunted by banshees that sing the tale of his disgrace and by rotted, undead copies of the knights who once served him.

Lord Soth cares nothing for his domain. But should noteworthy threats or remarkable individuals appear, he seeks to crush or enlist them. The only exception is the spirit of his treacherous former ally, Caradoc. Soth's undead servants and his werebadger seneschal, Azrael Dax, scour the land for the elusive ghost.

Soth shares his imprisonment in Sithicus with all in the domain by keeping its borders perpetually closed. Only those who rouse him to activity or invade Nedragaard Keep might convince him to let them escape. This risks provoking the mighty death knight's wrath, but Soth still thinks of himself as a true knight—he might assist those who present themselves as honorable warriors or show knowledge of his home (see " Influencing Lord Soth ").

```statblock
"name": "Lord Soth of Sithicus (RHW)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "228"
"hit_dice": "24d8 + 120"
"modifier": !!int "6"
"stats":
  - !!int "22"
  - !!int "11"
  - !!int "20"
  - !!int "12"
  - !!int "16"
  - !!int "20"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "6"
  - "wisdom": !!int "9"
  - "charisma": !!int "11"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion),\
  \ [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened), [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 120\
  \ ft., passive Perception 13"
"languages": "Common, Infernal"
"cr": "19"
"traits":
  - "desc": "If Lord Soth dies, he revives with all his [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ in 1d10 weeks somewhere in Sithicus."
    "name": "Darklord Restoration"
  - "desc": "If Lord Soth fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Domain)"
  - "desc": "Lord Soth has [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "Undead creatures of Lord Soth's choice (excluding himself) in a 60-foot\
      \ [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from him have [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)\
      \ on attack rolls and saving throws. Lord Soth can't use this trait if he has\
      \ the [Incapacitated](Sonstige/z_Content%20and%20Rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Marshal Undead"
"actions":
  - "desc": "Lord Soth makes three Forsaken Brand attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +12, reach 5 ft. *Hit:* 10 (1d8 + 6) Slashing\
      \ damage plus 13 (3d8) Necrotic damage."
    "name": "Forsaken Brand"
  - "desc": "*Dexterity Saving Throw:* DC 19, each creature in a 20-foot-radius [Sphere](Sonstige/z_Content%20and%20Rules/variant-rules/sphere-area-of-effect-xphb.md)\
      \ centered on a point Lord Soth can see within 120 feet. *Failure:* 24 (7d6)\
      \ Fire damage plus 24 (7d6) Necrotic damage. *Success:* Half damage."
    "name": "Cataclysmic Fire (Recharge 5-6)"
  - "desc": "*Charisma Saving Throw:* DC 19, each creature in a 60-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from Lord Soth. *Failure:* 22 (4d10) Psychic damage, and the\
      \ creature has the [Frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ condition. *Success:* Half damage only. *Failure or Success:* If this damage\
      \ reduces the target to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md),\
      \ the target dies."
    "name": "Face of Death (1/Day)"
"bonus_actions":
  - "desc": "Lord Soth casts [Dispel Magic](Sonstige/z_Content%20and%20Rules/spells/dispel-magic-xphb.md),\
      \ [Hold Person](Sonstige/z_Content%20and%20Rules/spells/hold-person-xphb.md),\
      \ or [Banishment](Sonstige/z_Content%20and%20Rules/spells/banishment-xphb.md)\
      \ (level 5 version), using Charisma as the spellcasting ability (spell save\
      \ DC 19).\n"
    "name": "Commanding Magic (3/Day)"
"regional_effects":
  - "desc": "Sithicus is altered by Lord Soth's presence, creating the following effects:\n\
      \n- **Closing the Borders.** While in his domain, Lord Soth can close or open\
      \ the borders to Sithicus. While the borders are closed, purple flames fill\
      \ the Mists surrounding Sithicus. A creature that enters the Mists for the first\
      \ time on a turn or starts its turn there takes 5 (1d10) Fire damage plus\
      \ 5 (1d10) Necrotic damage.  \n- **Fearless Soldiers.** Undead allies of Lord\
      \ Soth have Immunity to the [Frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ condition.  \n- **Guilt of Sithicus.** Few sleep soundly in Sithicus. Whenever\
      \ a creature other than Lord Soth and his allies finishes a Long Rest in the\
      \ domain, the creature must succeed on a DC 10 Constitution saving throw or\
      \ gain 1 [Exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion)\
      \ level.  \n\nIf Lord Soth dies, these effects end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Lord can expend a use to take one of the following actions. Lord regains\
  \ all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Lord Soth moves up to half his [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md),\
      \ and he makes one Forsaken Brand attack."
    "name": "Punish"
  - "desc": "Lord Soth casts [Command](Sonstige/z_Content%20and%20Rules/spells/command-xphb.md)\
      \ (level 3 version), using the same spellcasting ability as Commanding Magic.\
      \ Lord Soth can't take this action again until the start of his next turn."
    "name": "Soth's Command"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/lord-soth-of-sithicus-rhw.webp"
```
^statblock