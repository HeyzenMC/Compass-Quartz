---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Yithian"
---
# [Yithian](Sonstige/z_Content%20and%20Rules/bestiary/aberration/yithian-rhw.md)
*Source: RHW p. 281*  

*Fungous Alien Body Swapper*

Yithians are cosmos-traveling scholars with distinctive, conical bodies and four limbs that end in pincers, sensory structures, and flute-like communication organs. They search for secrets to add to their vast libraries, conducting research by swapping minds with the inhabitants of other worlds—sometimes indefinitely. When a yithian swaps minds with a creature, it traps its victim's mind in the yithian's body, which it teleports to its unfathomable, alien home world.

```statblock
"name": "Yithian (RHW)"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "180"
"hit_dice": "19d10 + 76"
"modifier": !!int "5"
"stats":
  - !!int "18"
  - !!int "10"
  - !!int "18"
  - !!int "21"
  - !!int "18"
  - !!int "19"
"speed": "30 ft."
"saves":
  - "constitution": !!int "9"
  - "intelligence": !!int "10"
"damage_immunities": "psychic"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened), [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"senses": "[Truesight](Sonstige/z_Content%20and%20Rules/senses.md#Truesight) 60 ft.,\
  \ passive Perception 14"
"languages": "Deep Speech; telepathy 120 ft."
"cr": "15"
"traits":
  - "desc": "The yithian has [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The yithian's thoughts can't be read by any means, and other creatures\
      \ can communicate with it telepathically only if it allows them."
    "name": "Shielded Mind"
"actions":
  - "desc": "The yithian makes three Pincer attacks. It can replace one attack with\
      \ a use of Sup."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +9, reach 10 ft. *Hit:* 18 (4d6 + 4) Piercing\
      \ damage and the creature has the [Grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled)\
      \ condition (escape DC 14)."
    "name": "Pincer"
  - "desc": "*Intelligence Saving Throw:* DC 18, one creature within 10 feet that\
      \ has the [Grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled),\
      \ [Incapacitated](Sonstige/z_Content%20and%20Rules/conditions.md#Incapacitated),\
      \ or [Restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained)\
      \ condition. *Failure:* 15 (3d6 + 5) Psychic damage. The target's [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ maximum decreases by an amount equal to the damage taken, and the yithian\
      \ regains [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ equal to that amount."
    "name": "Sup"
"bonus_actions":
  - "desc": "*Intelligence Saving Throw:* DC 18, one Humanoid the yithian can see\
      \ within 5 feet. *Failure:* The target is possessed by the yithian; the yithian\
      \ disappears, and the target has the [Incapacitated](Sonstige/z_Content%20and%20Rules/conditions.md#Incapacitated)\
      \ condition and loses control of its body. The yithian now controls the body;\
      \ the target has no awareness of the yithian's actions. The yithian can't be\
      \ targeted by any attack, spell, or other effect. The yithian's game statistics\
      \ are the same, except it uses the possessed target's [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ and Strength, Dexterity, and Constitution modifiers. It knows everything the\
      \ target knew.\n\nThe possession lasts until the body drops to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ or the yithian leaves as a [Bonus Action](Sonstige/z_Content%20and%20Rules/variant-rules/bonus-action-xphb.md).\
      \ When the possession ends, the yithian returns to its body, which appears within\
      \ 5 feet of the target. The target is [Stunned](Sonstige/z_Content%20and%20Rules/conditions.md#Stunned)\
      \ for 1 minute by alien memories, and it is immune to this yithian's Mind Swap\
      \ for 24 hours. *Success:* The target is immune to Mind Swap for 24 hours."
    "name": "Mind Swap (Recharge 6)"
  - "desc": "The yithian casts [Clairvoyance](Sonstige/z_Content%20and%20Rules/spells/clairvoyance-xphb.md),\
      \ [Modify Memory](Sonstige/z_Content%20and%20Rules/spells/modify-memory-xphb.md),\
      \ [Phantasmal Killer](Sonstige/z_Content%20and%20Rules/spells/phantasmal-killer-xphb.md),\
      \ or Transport via Plants, requiring no spell components and using Intelligence\
      \ as the spellcasting ability (spell save DC 18).\n"
    "name": "Eldritch Magic (2/Day)"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/aberration/token/yithian-rhw.webp"
```
^statblock

## Environment

desert, underdark, urban