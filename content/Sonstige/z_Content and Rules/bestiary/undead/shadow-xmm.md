---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/shadowfell
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Shadow"
---
# [Shadow](Sonstige/z_Content%20and%20Rules/bestiary/undead/shadow-xmm.md)
*Source: Monster Manual (2024) p. 272. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Shadow

*Disembodied, Life-Drinking Shade*

- **Habitat.** Planar (Shadowfell), Underdark, Urban  
- **Treasure.** None  

Shadows are incorporeal Undead that feed on life. They resent the living for possessing the potential and vitality lost to them.

Shadows lurk in dark, lonely places, typically sites that were meaningful to them in life or cursed places with ties to death, sinister magic, or the Shadowfell. Their victims rise as new shadows and prey on the living.

Shadows might resemble the silhouettes of who they were in life or take on more menacing forms. Roll on or choose a result from the Shadow Shapes table to inspire a shadow's form and haunting.

**Shadow Shapes**

| dice: 1d6 | The Shadow Appears As... |
|-----------|--------------------------|
| 1 | A distorted stalker that lurks in the woods. |
| 2 | A fiend that dwells near a wicked ritual site. |
| 3 | Grasping hands that haunt a miser's home. |
| 4 | A grim storybook character that follows those who speak its name. |
| 5 | Its target, acting in eerie pantomime. |
| 6 | An ominous priest that haunts a defiled site. |
^shadow-shapes

```statblock
"name": "Shadow (XMM)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "14"
  - !!int "13"
  - !!int "6"
  - !!int "10"
  - !!int "8"
"speed": "40 ft."
"skillsaves":
  - "name": "[Stealth](Sonstige/z_Content%20and%20Rules/skills.md#Stealth)"
    "desc": "+6"
"damage_vulnerabilities": "radiant"
"damage_resistances": "acid, cold, fire, lightning, thunder"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion),\
  \ [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened), [grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled),\
  \ [paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed), [petrified](Sonstige/z_Content%20and%20Rules/conditions.md#Petrified),\
  \ [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned), [prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone),\
  \ [restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained), [unconscious](Sonstige/z_Content%20and%20Rules/conditions.md#Unconscious)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 60\
  \ ft., passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The shadow can move through a space as narrow as 1 inch without expending\
      \ extra movement to do so."
    "name": "Amorphous"
  - "desc": "While in sunlight, the shadow has [Disadvantage](Sonstige/z_Content%20and%20Rules/variant-rules/disadvantage-xphb.md)\
      \ on [D20 Tests](Sonstige/z_Content%20and%20Rules/variant-rules/d20-test-xphb.md)."
    "name": "Sunlight Weakness"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 5 (1d6 + 2) Necrotic\
      \ damage, and the target's Strength score decreases by 1d4. The target dies\
      \ if this reduces that score to 0. If a Humanoid is slain by this attack, a\
      \ Shadow rises from the corpse 1d4 hours later."
    "name": "Draining Swipe"
"bonus_actions":
  - "desc": "While in [Dim Light](Sonstige/z_Content%20and%20Rules/variant-rules/dim-light-xphb.md)\
      \ or [Darkness](Sonstige/z_Content%20and%20Rules/variant-rules/darkness-xphb.md),\
      \ the shadow takes the [Hide](Sonstige/z_Content%20and%20Rules/actions.md#Hide)\
      \ action."
    "name": "Shadow Stealth"
"source":
  - "XMM"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/undead/token/shadow-xmm.webp"
```
^statblock

## Environment

planar, shadowfell, underdark, urban