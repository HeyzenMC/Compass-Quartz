---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity/lycanthrope
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Chakuna"
---
# [Chakuna](Sonstige/z_Content%20and%20Rules/bestiary/npc/chakuna-rhw.md)
*Source: RHW p. 174*  

Chakuna is Valachan's deadliest hunter, a youthful werepanther with the intensity and calm of a veteran executioner. Few can elude her cold cunning, deadly traps, and packs of feline allies.

Chakuna is no mere murderer. She hunts because she must to protect the people of Oselo from a more terrible fate. To that end, she prefers to target strangers in her land, forcing them to participate in the Trial of Hearts. She relishes the chance to hunt the proud and disrespectful, as well as the skilled and unpredictable. Chakuna knows no mercy, though, and even those she comes to respect eventually face her blade. She spares the people of Oselo alone, even as her peoples' fear of her grows.

```statblock
"name": "Chakuna (RHW)"
"size": "Medium"
"type": "monstrosity"
"subtype": "lycanthrope"
"alignment": "Neutral"
"ac": !!int "16"
"hp": !!int "210"
"hit_dice": "28d8 + 84"
"modifier": !!int "12"
"stats":
  - !!int "17"
  - !!int "18"
  - !!int "16"
  - !!int "10"
  - !!int "15"
  - !!int "11"
"speed": "30 ft., 50 ft. (panther form only), climb 40 ft. (panther form only)"
"saves":
  - "constitution": !!int "7"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+10"
  - "name": "[Stealth](Sonstige/z_Content%20and%20Rules/skills.md#Stealth)"
    "desc": "+12"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 150\
  \ ft., passive Perception 20"
"languages": "Common (can't speak in panther form)"
"cr": "11"
"traits":
  - "desc": "If Chakuna dies and her heart remains intact, she revives with all her\
      \ [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ in 1d10 weeks somewhere in Valachan. Chakuna's heart is a Tiny object that\
      \ has AC 17, HP 10, and [Immunity](Sonstige/z_Content%20and%20Rules/variant-rules/immunity-xphb.md)\
      \ to all damage except Fire."
    "name": "Darklord Restoration"
  - "desc": "[Difficult Terrain](Sonstige/z_Content%20and%20Rules/variant-rules/difficult-terrain-xphb.md)\
      \ composed of undergrowth doesn't cost Chakuna extra movement."
    "name": "Experienced Hunter"
  - "desc": "If Chakuna fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Domain)"
"actions":
  - "desc": "Chakuna makes three attacks, using Scratch or Barbed Spear in any combination.\
      \ She can replace one attack with a Bite attack."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +8, reach 5 ft. *Hit:* 20 (3d10 + 4) Piercing\
      \ damage. If the target is a Humanoid, it is subjected to the following effect.\
      \ *Constitution Saving Throw:* DC 15. *Failure:* The target is cursed. If the\
      \ cursed target drops to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md),\
      \ it instead becomes a werepanther under the DM's control and has 10 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ (use the Weretiger stat block). *Success:* The target is immune to Chakuna's\
      \ curse for 24 hours."
    "name": "Bite (Panther or Hybrid Form Only)"
  - "desc": "*Melee Attack Roll:* +8, reach 5 ft. *Hit:* 13 (2d8 + 4) Slashing\
      \ damage."
    "name": "Scratch"
  - "desc": "*Melee  or Ranged Attack Roll:* +8, reach 5 ft. or range 30/120 ft.\
      \ *Hit:* 8 (1d8 + 4) Piercing damage and the target receives a dire wound\
      \ if it doesn't have one. While the target is wounded, its speed is reduced\
      \ by 10 feet, and it loses 5 (1d10) [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ at the start of each of its turns. The wound closes after 1 minute, after\
      \ a spell restores [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ to the target, or after the target or a creature within 5 feet of it takes\
      \ an action to staunch the wound, doing so by succeeding on a DC 15 Wisdom ([Medicine](Sonstige/z_Content%20and%20Rules/skills.md#Medicine))\
      \ check. *Hit or Miss:* The spear magically returns to Chakuna's hand immediately\
      \ after a ranged attack."
    "name": "Barbed Spear (Humanoid or Hybrid Form Only)"
"bonus_actions":
  - "desc": "Chakuna moves up to her [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ without provoking [Opportunity Attacks](Sonstige/z_Content%20and%20Rules/actions.md#Opportunity%20Attack).\
      \ At the end of this movement, she can take the [Hide](Sonstige/z_Content%20and%20Rules/actions.md#Hide)\
      \ action."
    "name": "Prowl (Panther or Hybrid Form Only)"
  - "desc": "Chakuna shape-shifts into a Large panther-humanoid hybrid or a Large\
      \ panther, or she returns to her true humanoid form. Her game statistics, other\
      \ than her size, are the same in each form. Any equipment she is wearing or\
      \ carrying isn't transformed."
    "name": "Shape-Shift"
"regional_effects":
  - "desc": "Valachan is altered by Chakuna's presence, creating the following effects.\n\
      \n- **Closing the Borders.** While in her domain, Chakuna can close or open\
      \ the borders to Valachan at will. While the borders are closed, shadowy beasts\
      \ skulk or soar amid the Mists surrounding Valachan. A creature that enters\
      \ the Mists for the first time on a turn or starts its turn there takes 1d10\
      \ Piercing damage.  \n- **Heightened Senses.** Beasts and Monstrosities have\
      \ [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)\
      \ on Wisdom checks.  \n- **Whispering Shadows.** Humanoids subtract 1d8 from\
      \ any ability checks they make when they take the [Hide](Sonstige/z_Content%20and%20Rules/actions.md#Hide)\
      \ action.  \n\nIf Chakuna dies, these effects end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Chakuna can expend a use to take one of the following actions. Chakuna regains\
  \ all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Chakuna moves up to half her [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ and makes one Scratch attack."
    "name": "Pounce"
  - "desc": "Chakuna makes one Barbed Spear attack. If Chakuna has the [Hide](Sonstige/z_Content%20and%20Rules/actions.md#Hide)\
      \ action's [Invisible](Sonstige/z_Content%20and%20Rules/conditions.md#Invisible)\
      \ condition, this attack doesn't end that condition. Chakuna can't take this\
      \ action again until the start of her next turn."
    "name": "Strike from Shadows"
  - "desc": "Chakuna uses Shape-Shift to turn into her hybrid form or panther form\
      \ and then makes one Bite attack. Chakuna can't take this action again until\
      \ the start of her next turn."
    "name": "Sudden Bite"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/chakuna-rhw.webp"
```
^statblock