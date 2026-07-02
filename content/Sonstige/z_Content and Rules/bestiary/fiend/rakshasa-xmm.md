---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/environment/nine-hells
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Rakshasa"
---
# [Rakshasa](Sonstige/z_Content%20and%20Rules/bestiary/fiend/rakshasa-xmm.md)
*Source: Monster Manual (2024) p. 253. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Rakshasa

*Deceiver Hungry for Power and Flesh*

- **Habitat.** Planar (Nine Hells), Urban  
- **Treasure.** [Relics](Sonstige/z_Content%20and%20Rules/tables/random-magic-items-relics.md)  

Masters of manipulation, rakshasas infiltrate communities to claim positions of power. While disguising their true natures, they kidnap victims and indulge their insatiable hunger for flesh.

Rakshasas can withstand some degree of magic, but legends tell of blessed warriors felling them with crossbow bolts, arrows, or similar weapons.

Rakshasas' appearances combine humanlike bodies with the features of animals and monsters. All rakshasas have a physical oddity that remains when they adopt magical disguises, such as palms where the backs of the hands would be on humans.

```statblock
"name": "Rakshasa (XMM)"
"size": "Medium"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "221"
"hit_dice": "26d8 + 104"
"modifier": !!int "8"
"stats":
  - !!int "14"
  - !!int "17"
  - !!int "18"
  - !!int "13"
  - !!int "16"
  - !!int "20"
"speed": "40 ft."
"skillsaves":
  - "name": "[Deception](Sonstige/z_Content%20and%20Rules/skills.md#Deception)"
    "desc": "+10"
  - "name": "[Insight](Sonstige/z_Content%20and%20Rules/skills.md#Insight)"
    "desc": "+8"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+8"
"damage_vulnerabilities": "piercing damage from weapons wielded by creatures under\
  \ the effect of a [Bless](Sonstige/z_Content%20and%20Rules/spells/bless-xphb.md)\
  \ spell"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)"
"senses": "[Truesight](Sonstige/z_Content%20and%20Rules/senses.md#Truesight) 60 ft.,\
  \ passive Perception 18"
"languages": "Common, Infernal"
"cr": "13"
"traits":
  - "desc": "The rakshasa automatically succeeds on saving throws against spells and\
      \ other magical effects, and the attack rolls of spells automatically miss it.\
      \ Without the rakshasa's permission, no spell can observe the rakshasa remotely\
      \ or detect its thoughts, creature type, or alignment."
    "name": "Greater Magic Resistance"
  - "desc": "If the rakshasa dies outside the Nine Hells, its body turns to ichor,\
      \ and it gains a new body instantly, reviving with all its [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ somewhere in the Nine Hells."
    "name": "Fiendish Restoration"
"actions":
  - "desc": "The rakshasa makes three Cursed Touch attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +10, reach 5 ft. *Hit:* 12 (2d6 + 5) Slashing\
      \ damage plus 19 (3d12) Necrotic damage. If the target is a creature, it is\
      \ cursed. While cursed, the target gains no benefit from finishing a [Short](Sonstige/z_Content%20and%20Rules/variant-rules/short-rest-xphb.md)\
      \ or [Long Rest](Sonstige/z_Content%20and%20Rules/variant-rules/long-rest-xphb.md)."
    "name": "Cursed Touch"
  - "desc": "*Wisdom Saving Throw:* DC 18, each enemy in a 30-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the rakshasa. *Failure:* 28 (8d6) Psychic damage, and the\
      \ target has the [Frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ and [Incapacitated](Sonstige/z_Content%20and%20Rules/conditions.md#Incapacitated)\
      \ conditions until the start of the rakshasa's next turn."
    "name": "Baleful Command (Recharge 5-6)"
  - "desc": "The rakshasa casts one of the following spells, requiring no Material\
      \ components and using Charisma as the spellcasting ability (spell save DC 18):\n\
      \n**At will:** [Detect Magic](Sonstige/z_Content%20and%20Rules/spells/detect-magic-xphb.md),\
      \ [Detect Thoughts](Sonstige/z_Content%20and%20Rules/spells/detect-thoughts-xphb.md),\
      \ [Disguise Self](Sonstige/z_Content%20and%20Rules/spells/disguise-self-xphb.md),\
      \ [Mage Hand](Sonstige/z_Content%20and%20Rules/spells/mage-hand-xphb.md), [Minor\
      \ Illusion](Sonstige/z_Content%20and%20Rules/spells/minor-illusion-xphb.md)\n\
      \n**1/day each:** [Fly](Sonstige/z_Content%20and%20Rules/spells/fly-xphb.md),\
      \ [Invisibility](Sonstige/z_Content%20and%20Rules/spells/invisibility-xphb.md),\
      \ [Major Image](Sonstige/z_Content%20and%20Rules/spells/major-image-xphb.md),\
      \ [Plane Shift](Sonstige/z_Content%20and%20Rules/spells/plane-shift-xphb.md)"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/fiend/token/rakshasa-xmm.webp"
```
^statblock

## Environment

planar, nine hells, urban