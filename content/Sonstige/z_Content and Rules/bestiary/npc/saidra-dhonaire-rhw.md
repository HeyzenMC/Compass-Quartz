---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Saidra d'Honaire"
---
# [Saidra d'Honaire](Sonstige/z_Content%20and%20Rules/bestiary/npc/saidra-dhonaire-rhw.md)
*Source: RHW p. 72*  

Duchess Saidra d'Honaire knows her life isn't her own—she knows she isn't alive at all—yet she ignores that for the sparkle of empty celebrations and a parody of her ideal life. The duchess terrorizes Dementlieu, forcing the realm to conform to her desires. Those who expose the flaws in her fantasy and remind her of the desperation she once endured, she slays using her life-sapping power.

All can plainly see Duchess d'Honaire isn't one of the living. Nevertheless, servants and sycophants flatter her poise, beauty, and array of lavish masquerade costumes. When not hosting decadent social events, Saidra removes her mask and slips into the night. Through the streets and alleys of Port-a-Lucine, the Darklord prowls as the Red Death: a murderous spirit that preys on liars, the struggling, and all who remind her of her humble origins.

Saidra is overbearing and elitist, despite being unworldly. She fears being exposed as a fraud and projects this fear onto others, violently accusing them of being liars on the barest evidence or sign of vulgarity. Yet, in mysterious letters and rumors, Saidra receives evidence that her own simple, spiteful family dwells somewhere beyond her city. Their confessions could bring all her deceptions to light.

```statblock
"name": "Saidra d'Honaire (RHW)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "90"
"hit_dice": "12d8 + 36"
"modifier": !!int "11"
"stats":
  - !!int "6"
  - !!int "17"
  - !!int "16"
  - !!int "12"
  - !!int "14"
  - !!int "17"
"speed": "5 ft., fly 60 ft. (hover)"
"saves":
  - "dexterity": !!int "7"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[Insight](Sonstige/z_Content%20and%20Rules/skills.md#Insight)"
    "desc": "+10"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Performance](Sonstige/z_Content%20and%20Rules/skills.md#Performance)"
    "desc": "+7"
  - "name": "[Stealth](Sonstige/z_Content%20and%20Rules/skills.md#Stealth)"
    "desc": "+7"
"damage_resistances": "acid, bludgeoning, cold, fire, piercing, slashing"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled),\
  \ [paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed), [petrified](Sonstige/z_Content%20and%20Rules/conditions.md#Petrified),\
  \ [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned), [prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone),\
  \ [restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained), [unconscious](Sonstige/z_Content%20and%20Rules/conditions.md#Unconscious)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 60\
  \ ft., passive Perception 16"
"languages": "Common"
"cr": "9"
"traits":
  - "desc": "If Saidra dies, she revives with all her [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ in 1d10 weeks somewhere in Dementlieu."
    "name": "Darklord Restoration"
  - "desc": "Saidra can move through other creatures and objects as if they were [Difficult\
      \ Terrain](Sonstige/z_Content%20and%20Rules/variant-rules/difficult-terrain-xphb.md).\
      \ She takes 5 (1d10) Force damage if she ends her turn inside an object."
    "name": "Incorporeal Movement"
  - "desc": "Saidra knows whether she hears a lie."
    "name": "Lie Detector"
  - "desc": "If Saidra fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Domain)"
  - "desc": "While in sunlight, Saidra has [Disadvantage](Sonstige/z_Content%20and%20Rules/variant-rules/disadvantage-xphb.md)\
      \ on ability checks and attack rolls"
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "Saidra makes three Necrotic Burst attacks. She can replace one of these\
      \ attacks with a use of Spellcasting."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. or range 30 ft. *Hit:* 14 (2d10\
      \ + 3) Necrotic damage."
    "name": "Necrotic Burst"
  - "desc": "*Constitution Saving Throw:* DC 15, one creature Saidra can see within\
      \ 30 feet. *Failure:* 28 (8d6) Necrotic damage, and its [Hit Point](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ maximum decreases by an amount equal to the damage taken. *Success:* Half\
      \ damage only."
    "name": "Life Drain"
  - "desc": "[Charm Person](Sonstige/z_Content%20and%20Rules/spells/charm-person-xphb.md)\
      \ (duchess form only), [Fear](Sonstige/z_Content%20and%20Rules/spells/fear-xphb.md)\
      \ (Red Death form only)."
    "name": "At Will"
  - "desc": "Saidra casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 15):\n"
    "name": "Spellcasting"
  - "desc": "Saidra asks a creature she can see within 60 feet to identify itself\
      \ and casts [Disintegrate](Sonstige/z_Content%20and%20Rules/spells/disintegrate-xphb.md)\
      \ targeting the creature, requiring no Material components and using Charisma\
      \ as the spellcasting ability (DC 15, with [Disadvantage](Sonstige/z_Content%20and%20Rules/variant-rules/disadvantage-xphb.md)\
      \ if the target lies).\n"
    "name": "Truth or Die (1/Day)"
"bonus_actions":
  - "desc": "Saidra shape-shifts into the Red Death, or she returns to her true form\
      \ as the duchess. Her game statistics are the same in each form. Any equipment\
      \ she is wearing or carrying isn't transformed."
    "name": "Shape-Shift"
"regional_effects":
  - "desc": "Dementlieu is altered by Saidra's presence, creating the following effects:\n\
      \n- **Closing the Borders.** While in her domain, Saidra can close or open the\
      \ borders to Dementlieu at will. While the borders are closed, the countryside\
      \ called Chateaufaux appears in the Mists surrounding Dementlieu. Creatures\
      \ in the Mists get lost amid mazelike hedgerows and fogbanks, only to reappear\
      \ on the outskirts of Port-a-Lucine 2d6 hours later.  \n- **Empowered Actors.**\
      \ Humanoids add 1d8 to Charisma ([Deception](Sonstige/z_Content%20and%20Rules/skills.md#Deception)\
      \ or [Performance](Sonstige/z_Content%20and%20Rules/skills.md#Performance))\
      \ checks made while wearing a mask.  \n- **Invitation.** At dawn, Saidra can\
      \ choose a creature whose name she knows or that she's seen before. A simple\
      \ mask and an invitation to the next Grand Masquerade appear to that creature.\
      \ The letter and mask appear in an unobserved but obvious space, such as a bedside\
      \ table or among gear.  \n\nIf [Saidra](Sonstige/z_Content%20and%20Rules/bestiary/npc/saidra-dhonaire-rhw.md)\
      \ dies, these effects end immediately. The effects resume if Saidra gains a\
      \ new body (see her Darklord Restoration trait)."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Saidra can expend a use to take one of the following actions. Saidra regains\
  \ all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Saidra makes one Necrotic Burst attack."
    "name": "Lash Out"
  - "desc": "Saidra gives herself the [Invisible](Sonstige/z_Content%20and%20Rules/conditions.md#Invisible)\
      \ condition until the start of her next turn and can fly up to half her [Fly\
      \ Speed](Sonstige/z_Content%20and%20Rules/variant-rules/fly-speed-xphb.md).\
      \ The condition ends early immediately after Saidra deals damage. Saidra can't\
      \ take this action again until the start of her next turn."
    "name": "Shadow Veil"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/saidra-dhonaire-rhw.webp"
```
^statblock