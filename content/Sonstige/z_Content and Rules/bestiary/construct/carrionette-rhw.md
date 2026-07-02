---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Carrionette"
---
# [Carrionette](Sonstige/z_Content%20and%20Rules/bestiary/construct/carrionette-rhw.md)
*Source: RHW p. 241*  

*Evil Toy Come to Life*

When evil energies infest a children's toy box, once-beloved playthings can become cursed monsters. Such is the case of the carrionette, an animated doll or puppet that uses its sinister magic to swap bodies with a living person.

Carrionettes can hide in plain sight amid a jumbled toy chest or crate of disused trinkets. A carrionette might wait patiently for years to be picked up by an unsuspecting victim—preferably an adventurer, a trader, or someone else with autonomy and a sturdy body—only to crawl out of the looter's backpack in the middle of the night for a harrowing sneak attack.

```statblock
"name": "Carrionette (RHW)"
"size": "Tiny"
"type": "construct"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "17"
"hit_dice": "5d4 + 5"
"modifier": !!int "4"
"stats":
  - !!int "8"
  - !!int "15"
  - !!int "12"
  - !!int "8"
  - !!int "14"
  - !!int "14"
"speed": "25 ft."
"skillsaves":
  - "name": "[Stealth](Sonstige/z_Content%20and%20Rules/skills.md#Stealth)"
    "desc": "+6"
"damage_resistances": "poison, psychic"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened),\
  \ [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 60\
  \ ft., passive Perception 12"
"languages": "Common plus one other language"
"cr": "1"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 1 Piercing damage plus\
      \ 3 (1d6) Necrotic damage. If the target is a Humanoid not cursed by a carrionette,\
      \ it is subjected to the following effect. *Charisma Saving Throw:* DC 11. *Failure:*\
      \ The target is cursed for 1 minute. Until the curse ends, the target has the\
      \ [Poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned) condition,\
      \ and its [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ is reduced by 10 feet."
    "name": "Silver Needle"
  - "desc": "*Charisma Saving Throw:* DC 11, one Humanoid the carrionette can see\
      \ within 15 feet that is cursed by its Silver Needle. *Failure:* The carrionette\
      \ possesses the target's body, and the target possesses the carrionette's body\
      \ and has the [Unconscious](Sonstige/z_Content%20and%20Rules/conditions.md#Unconscious)\
      \ condition for 1 hour. While possessing another body, the carrionette and target\
      \ retain their alignments; personalities; Intelligence, Wisdom, and Charisma\
      \ scores; and languages known. They otherwise adopt the other creature's game\
      \ statistics, though the target can't use this Soul Swap action.\n\nThe possession\
      \ is undone if the target (while in the carrionette's body) deals damage to\
      \ the carrionette (in the target's original body) with its Silver Needle. If\
      \ either body is destroyed, both the carrionette and the target die."
    "name": "Soul Swap (Recharge 5-6)"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/construct/token/carrionette-rhw.webp"
```
^statblock

## Environment

urban