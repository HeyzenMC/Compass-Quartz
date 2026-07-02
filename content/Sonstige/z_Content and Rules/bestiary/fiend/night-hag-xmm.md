---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/lower
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Night Hag"
---
# [Night Hag](Sonstige/z_Content%20and%20Rules/bestiary/fiend/night-hag-xmm.md)
*Source: Monster Manual (2024) p. 225. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Night Hag

*Hag of Nightmare and Corruption*

- **Habitat.** Planar (Lower Planes)  
- **Treasure.** [Arcana](Sonstige/z_Content%20and%20Rules/tables/random-magic-items-arcana.md)  

Night hags seek mortals to torment and turn to evil. By day, night hags use supernatural deceptions to plague their victims, shape-shifting to pose as other creatures and make their targets believe the world has turned against them. By night, these hags reinforce their tortures with terrifying dreams. Once they force their targets to desperate limits, night hags claim their victims' tormented spirits, capturing them in sinister traps called soul bags. The hags then slip between planes of existence to barter stolen souls to vile magic-users and fiendish entities.

Night hags maintain networks of nefarious customers and collect rumors from across the Lower Planes. These hags might part with their secrets in exchange for magic items and other wicked prices.

```statblock
"name": "Night Hag (XMM)"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"modifier": !!int "5"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "16"
  - !!int "16"
  - !!int "14"
  - !!int "16"
"speed": "30 ft."
"skillsaves":
  - "name": "[Deception](Sonstige/z_Content%20and%20Rules/skills.md#Deception)"
    "desc": "+6"
  - "name": "[Insight](Sonstige/z_Content%20and%20Rules/skills.md#Insight)"
    "desc": "+5"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](Sonstige/z_Content%20and%20Rules/skills.md#Stealth)"
    "desc": "+5"
"damage_resistances": "cold, fire"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 120\
  \ ft., passive Perception 15"
"languages": "Abyssal, Common, Infernal, Primordial"
"cr": "5"
"traits":
  - "desc": "While within 30 feet of at least two hag allies, the hag can cast one\
      \ of the following spells, requiring no Material components, using the spell's\
      \ normal casting time, and using Intelligence as the spellcasting ability (spell\
      \ save DC 14): [Augury](Sonstige/z_Content%20and%20Rules/spells/augury-xphb.md),\
      \ [Find Familiar](Sonstige/z_Content%20and%20Rules/spells/find-familiar-xphb.md),\
      \ [Identify](Sonstige/z_Content%20and%20Rules/spells/identify-xphb.md), [Locate\
      \ Object](Sonstige/z_Content%20and%20Rules/spells/locate-object-xphb.md), [Scrying](Sonstige/z_Content%20and%20Rules/spells/scrying-xphb.md),\
      \ or [Unseen Servant](Sonstige/z_Content%20and%20Rules/spells/unseen-servant-xphb.md).\
      \ The hag must finish a [Long Rest](Sonstige/z_Content%20and%20Rules/variant-rules/long-rest-xphb.md)\
      \ before using this trait to cast that spell again.\n"
    "name": "Coven Magic"
  - "desc": "The hag has [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The hag has a soul bag. While holding or carrying the bag, the hag can\
      \ use its Nightmare Haunting action.\n\nThe bag has AC 15, HP 20, and [Resistance](Sonstige/z_Content%20and%20Rules/variant-rules/resistance-xphb.md)\
      \ to all damage. The bag turns to dust if reduced to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md).\
      \ If the bag is destroyed, any souls the bag is holding are released. The hag\
      \ can create a new bag after 7 days."
    "name": "Soul Bag"
"actions":
  - "desc": "The hag makes two Claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 13 (2d8 + 4) Slashing\
      \ damage."
    "name": "Claw"
  - "desc": "The hag casts one of the following spells, requiring no Material components\
      \ and using Intelligence as the spellcasting ability (spell save DC 14):\n\n\
      **At will:** [Detect Magic](Sonstige/z_Content%20and%20Rules/spells/detect-magic-xphb.md),\
      \ [Etherealness](Sonstige/z_Content%20and%20Rules/spells/etherealness-xphb.md),\
      \ [Magic Missile](Sonstige/z_Content%20and%20Rules/spells/magic-missile-xphb.md)\
      \ (level 4 version)\n\n**2/day each:** [Phantasmal Killer](Sonstige/z_Content%20and%20Rules/spells/phantasmal-killer-xphb.md),\
      \ [Plane Shift](Sonstige/z_Content%20and%20Rules/spells/plane-shift-xphb.md)\
      \ (self only)"
    "name": "Spellcasting"
  - "desc": "While on the Ethereal Plane, the hag casts [Dream](Sonstige/z_Content%20and%20Rules/spells/dream-xphb.md),\
      \ using the same spellcasting ability as Spellcasting. Only the hag can serve\
      \ as the spell's messenger, and the target must be a creature the hag can see\
      \ on the Material Plane. The spell fails and is wasted if the target is under\
      \ the effect of the [Protection from Evil and Good](Sonstige/z_Content%20and%20Rules/spells/protection-from-evil-and-good-xphb.md)\
      \ spell or within a [Magic Circle](Sonstige/z_Content%20and%20Rules/spells/magic-circle-xphb.md)\
      \ spell.\n\nIf the target takes damage from the [Dream](Sonstige/z_Content%20and%20Rules/spells/dream-xphb.md)\
      \ spell, the target's [Hit Point](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ maximum decreases by an amount equal to that damage. If the spell kills the\
      \ target, its soul is trapped in the hag's soul bag, and the target can't be\
      \ raised from the dead until its soul is released.\n"
    "name": "Nightmare Haunting (1/Day; Requires Soul Bag)"
"bonus_actions":
  - "desc": "The hag shape-shifts into a Small or Medium Humanoid, or it returns to\
      \ its true form. Other than its size, its game statistics are the same in each\
      \ form. Any equipment it is wearing or carrying isn't transformed."
    "name": "Shape-Shift"
"source":
  - "XMM"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/fiend/token/night-hag-xmm.webp"
```
^statblock

## Environment

planar, lower