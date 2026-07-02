---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Madam Eva"
---
# [Madam Eva](Sonstige/z_Content%20and%20Rules/bestiary/npc/madam-eva-rhw.md)
*Source: RHW p. 253*  

*Duplicitous Diviner*

The mysterious fortune teller Madam Eva shrouds herself in a carefully woven web of lies. Though she appears to be in her seventies, she is much older. She sets herself apart from any group, guarding the secrets of her origins and centuries-spanning agendas.

Madam Eva is a legendary figure known across the Land of the Mists. Few can rival her skill at interpreting omens, reading tarokka cards, or taming spirits during séances. While the fortunes she shares might have double meanings, they're never wrong. She is renowned for revealing when best to enter the Mists to escape a domain or reach an intended destination, leading many travelers to seek her on the shores of the Tser Pool in Barovia to seek her insights. She often hints at knowledge of the Mists' secrets and the tales (and weaknesses) of Darklords, and she's not above revealing them for a price. Madam Eva holds grudges and usually shares her secrets only with those who do her a favor first. Whatever she discovers might soon also be known by Barovia's Darklord, with whom she shares age-old ties.

```statblock
"name": "Madam Eva (RHW)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"modifier": !!int "4"
"stats":
  - !!int "8"
  - !!int "11"
  - !!int "14"
  - !!int "17"
  - !!int "20"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "9"
  - "charisma": !!int "8"
"skillsaves":
  - "name": "[Arcana](Sonstige/z_Content%20and%20Rules/skills.md#Arcana)"
    "desc": "+7"
  - "name": "[Insight](Sonstige/z_Content%20and%20Rules/skills.md#Insight)"
    "desc": "+9"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+9"
  - "name": "[Religion](Sonstige/z_Content%20and%20Rules/skills.md#Religion)"
    "desc": "+7"
"senses": "passive Perception 19"
"languages": "Abyssal, Common, Elvish, Infernal"
"cr": "10"
"traits":
  - "desc": "Madam Eva has [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Madam Eva makes three attacks, using Cursed Dagger or Radiant Flame in\
      \ any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +9, reach 5 ft. *Hit:* 10 (2d4 + 5) Piercing\
      \ damage plus 21 (6d6) Necrotic damage."
    "name": "Cursed Dagger"
  - "desc": "*Ranged Attack Roll:* +9, range 60 ft. *Hit:* 21 (3d10 + 5) Radiant\
      \ damage, and the target has the [Blinded](Sonstige/z_Content%20and%20Rules/conditions.md#Blinded)\
      \ condition until the start of Madam Eva's next turn."
    "name": "Radiant Flame"
  - "desc": "*Wisdom Saving Throw:* DC 17, each creature in a 20-foot-radius [Sphere](Sonstige/z_Content%20and%20Rules/variant-rules/sphere-area-of-effect-xphb.md)\
      \ centered on a point Madam Eva can see within 120 feet. *Failure:* 24 (7d6)\
      \ Necrotic damage plus 24 (7d6) Psychic damage, and the target has the [Frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ condition until the start of Madam Eva's next turn. *Success:* Half damage\
      \ only."
    "name": "Apocalyptic Visions (Recharge 5-6)"
  - "desc": "Madam Eva casts one of the following spells, using Wisdom as the spellcasting\
      \ ability (spell save DC 17):\n\n**At will:** [Light](Sonstige/z_Content%20and%20Rules/spells/light-xphb.md),\
      \ [Mending](Sonstige/z_Content%20and%20Rules/spells/mending-xphb.md), [Thaumaturgy](Sonstige/z_Content%20and%20Rules/spells/thaumaturgy-xphb.md)\n\
      \n**2/day each:** [Dispel Magic](Sonstige/z_Content%20and%20Rules/spells/dispel-magic-xphb.md),\
      \ [Remove Curse](Sonstige/z_Content%20and%20Rules/spells/remove-curse-xphb.md)\n\
      \n**1/day each:** [Greater Restoration](Sonstige/z_Content%20and%20Rules/spells/greater-restoration-xphb.md),\
      \ [Raise Dead](Sonstige/z_Content%20and%20Rules/spells/raise-dead-xphb.md),\
      \ [Scrying](Sonstige/z_Content%20and%20Rules/spells/scrying-xphb.md), [Spirit\
      \ Guardians](Sonstige/z_Content%20and%20Rules/spells/spirit-guardians-xphb.md)\
      \ (level 8 version)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Madam Eva casts [Hold Person](Sonstige/z_Content%20and%20Rules/spells/hold-person-xphb.md),\
      \ using the same spellcasting ability as Spellcasting.\n"
    "name": "Evil Eye (2/Day)"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/madam-eva-rhw.webp"
```
^statblock