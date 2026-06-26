---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/21
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Arch-hag"
---
# [Arch-hag](Sonstige/z_Content%20&%20Rules/bestiary/fey/arch-hag-xmm.md)
*Source: Monster Manual (2024) p. 21*  

## Arch-hag

*Hag of Forbidden Secrets and Magical Malice*

- **Habitat.** Any  
- **Treasure.** [Arcana](Sonstige/z_Content%20&%20Rules/tables/random-magic-items-arcana.md)  

Immortal and unpredictable, arch-hags hoard secrets and strike magical bargains, altering fate to indulge their fickle whims. These timeless schemers pursue the secrets of the multiverse and work strange magic in pursuit of their inscrutable goals.

Arch-hags are unpredictable, self-interested, and greedy, with bizarre fascinations and affectations. Nevertheless, they often make deals to further their plots. These hags are fonts of secret knowledge, particularly lore regarding forbidden magic and multiversal secrets. They might share their knowledge, but their secrets always have a price. In trade for their secrets, arch-hags might request peculiar errands, valuable magic items, or preternatural currency, like one's memories, a year of one's life, or the ability to cry.

Most arch-hags avoid battle, but if forced to fight, they unleash dangerous magic, such as spectral claws, arcing lightning, and mind-bending spells. An arch-hag can curse other magic-users, confounding the spellcasters' incantations and forcing the spellcasters to say the opposite of what they mean. Even if an arch-hag is brought low, its preparations allow it to magically slip away and begin plotting its revenge.

Every arch-hag has a unique weakness tied to a fateful encounter the hag had in the past or something that embodies the antithesis of the hag's magic. A hag goes out of its way to keep this vulnerability secret. Although an arch-hag isn't physically harmed by its weakness, it can be destroyed only while its weakness is nearby. Roll on or choose a result from the Arch-hag Anathemas table to inspire an arch-hag's weakness.

> [!quote] A quote from Baba Yaga, Mother of Witches  
> 
> Heh! People who know too much grow old before their time. Ask me your questions, but be certain that every secret has its cost.

**Arch-hag Anathemas**

| dice: 1d10 | The Arch-hag's Weakness Is... |
|------------|-------------------------------|
| 1 | The bones of the arch-hag's first love. |
| 2 | A devil's tear. |
| 3 | An egg with a miniature castle inside. |
| 4 | A flower that blooms only when time stops. |
| 5 | A gift from the hag's twin. |
| 6 | The multiverse's worst pun. |
| 7 | One of the hag's missing teeth. |
| 8 | Snow from the top of Mount Celestia. |
| 9 | A star pulled from the sky. |
| 10 | A thread from the Lady of Pain's robes. |
^arch-hag-anathemas

### Arch-hag Lairs

Each arch-hag creates a magical home, such as a hidden demiplane, a mansion atop a storm cloud, or—in the case of the arch-hag Baba Yaga—a hut atop giant chicken legs. The interiors of these lairs frequently change or exhibit bewildering features.

```statblock
"name": "Arch-hag (XMM)"
"size": "Large"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "20"
"hp": !!int "333"
"hit_dice": "29d10 + 174"
"modifier": !!int "16"
"stats":
  - !!int "24"
  - !!int "15"
  - !!int "23"
  - !!int "19"
  - !!int "19"
  - !!int "25"
"speed": "40 ft."
"saves":
  - "dexterity": !!int "9"
  - "wisdom": !!int "11"
"skillsaves":
  - "name": "[Deception](Sonstige/z_Content%20&%20Rules/skills.md#Deception)"
    "desc": "+14"
  - "name": "[Perception](Sonstige/z_Content%20&%20Rules/skills.md#Perception)"
    "desc": "+11"
  - "name": "[Persuasion](Sonstige/z_Content%20&%20Rules/skills.md#Persuasion)"
    "desc": "+21"
"damage_resistances": "cold, fire, psychic"
"condition_immunities": "[charmed](Sonstige/z_Content%20&%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20&%20Rules/conditions.md#Exhaustion), [frightened](Sonstige/z_Content%20&%20Rules/conditions.md#Frightened)"
"senses": "[Truesight](Sonstige/z_Content%20&%20Rules/senses.md#Truesight) 60 ft.,\
  \ passive Perception 21"
"languages": "all"
"cr": "21"
"traits":
  - "desc": "While within 30 feet of at least two hag allies, the hag can cast one\
      \ of the following spells, requiring no Material components, using the spell's\
      \ normal casting time, and using Intelligence as the spellcasting ability (spell\
      \ save DC 19): [Augury](Sonstige/z_Content%20&%20Rules/spells/augury-xphb.md),\
      \ [Find Familiar](Sonstige/z_Content%20&%20Rules/spells/find-familiar-xphb.md),\
      \ [Identify](Sonstige/z_Content%20&%20Rules/spells/identify-xphb.md), [Locate\
      \ Object](Sonstige/z_Content%20&%20Rules/spells/locate-object-xphb.md), [Scrying](Sonstige/z_Content%20&%20Rules/spells/scrying-xphb.md),\
      \ or [Unseen Servant](Sonstige/z_Content%20&%20Rules/spells/unseen-servant-xphb.md).\
      \ The hag must finish a [Long Rest](Sonstige/z_Content%20&%20Rules/variant-rules/long-rest-xphb.md)\
      \ before using this trait to cast that spell again.\n"
    "name": "Coven Magic"
  - "desc": "If the hag fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (4/Day, or 5/Day in Lair)"
  - "desc": "The hag has [Advantage](Sonstige/z_Content%20&%20Rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "When the hag drops to 0 [Hit Points](Sonstige/z_Content%20&%20Rules/variant-rules/hit-points-xphb.md),\
      \ it dies only if it is within 30 feet of its anathema (a thing the DM chooses\
      \ as the hag's most hated thing). Otherwise, the hag drops to 1 [Hit Point](Sonstige/z_Content%20&%20Rules/variant-rules/hit-points-xphb.md)\
      \ and teleports to a harmless demiplane, and it can't return to the plane it\
      \ left for 2d6 days. When the hag teleports away, each creature within 60\
      \ feet of the space it left is cursed. Until the curse ends, a creature has\
      \ [Disadvantage](Sonstige/z_Content%20&%20Rules/variant-rules/disadvantage-xphb.md)\
      \ on ability checks and saving throws, and the hag knows its location anywhere\
      \ in the multiverse."
    "name": "Spiteful Escape"
"actions":
  - "desc": "The hag makes two Spectral Claw attacks and uses Crackling Wave."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +14, reach 10 ft. or range 60 ft. *Hit:*\
      \ 17 (3d6 + 7) Force damage. If the target is a Large or smaller creature,\
      \ it has the [Prone](Sonstige/z_Content%20&%20Rules/conditions.md#Prone) condition."
    "name": "Spectral Claw"
  - "desc": "*Dexterity Saving Throw:* DC 22, each creature in a 60-foot [Cone](Sonstige/z_Content%20&%20Rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* 32 (5d12) Lightning damage. *Success:* Half damage. *Failure\
      \ or Success:* The target is cursed until the end of the hag's next turn. The\
      \ target can't take Reactions until the curse ends."
    "name": "Crackling Wave"
  - "desc": "The hag casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 22):\n\n**At\
      \ will:** [Detect Thoughts](Sonstige/z_Content%20&%20Rules/spells/detect-thoughts-xphb.md),\
      \ [Dimension Door](Sonstige/z_Content%20&%20Rules/spells/dimension-door-xphb.md),\
      \ [Dispel Magic](Sonstige/z_Content%20&%20Rules/spells/dispel-magic-xphb.md),\
      \ [Hypnotic Pattern](Sonstige/z_Content%20&%20Rules/spells/hypnotic-pattern-xphb.md)\n\
      \n**2/day each:** [Mass Suggestion](Sonstige/z_Content%20&%20Rules/spells/mass-suggestion-xphb.md),\
      \ [Modify Memory](Sonstige/z_Content%20&%20Rules/spells/modify-memory-xphb.md),\
      \ [Plane Shift](Sonstige/z_Content%20&%20Rules/spells/plane-shift-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Each creature cursed by the hag and within 60 feet of it takes 14 (4d6)\
      \ Lightning damage."
    "name": "Witch Strike"
"reactions":
  - "desc": "The hag casts [Counterspell](Sonstige/z_Content%20&%20Rules/spells/counterspell-xphb.md)\
      \ in response to that spell's trigger, using the same spellcasting ability as\
      \ Spellcasting. If the target fails its saving throw, it is cursed until the\
      \ end of its next turn. Until the curse ends, the target can't cast spells with\
      \ a Verbal component, and when it speaks, it says the opposite of what it means.\n"
    "name": "Tongue Twister"
"regional_effects":
  - "desc": "The region containing an arch-hag's lair is altered by its presence,\
      \ creating the following effects:\n\n- **Lapsus Linguae.** Creatures (excluding\
      \ the hag and its allies) within 1 mile of the lair subtract 1d10 from any\
      \ ability check they make when they take the [Influence](Sonstige/z_Content%20&%20Rules/actions.md#Influence)\
      \ action.  \n- **Meddlesome Magic.** Whenever a creature other than the hag\
      \ or its allies finishes a [Long Rest](Sonstige/z_Content%20&%20Rules/variant-rules/long-rest-xphb.md)\
      \ while within 1 mile of the lair, the next time that creature casts a spell\
      \ using a spell slot, it also casts [Confusion](Sonstige/z_Content%20&%20Rules/spells/confusion-xphb.md)\
      \ centered on itself. The spell uses the creature's spellcasting ability and\
      \ doesn't require [Concentration](Sonstige/z_Content%20&%20Rules/conditions.md#Concentration).\
      \  \n\nIf the arch-hag is destroyed or moves its lair elsewhere, these effects\
      \ end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3 (4 in Lair). Immediately after\
  \ another creature's turn, the arch-hag can expend a use to take one of the following\
  \ actions. The arch-hag regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The hag makes one Spectral Claw attack."
    "name": "Hag's Swipe"
  - "desc": "The hag uses Spellcasting to cast [Dimension Door](Sonstige/z_Content%20&%20Rules/spells/dimension-door-xphb.md)\
      \ or [Hypnotic Pattern](Sonstige/z_Content%20&%20Rules/spells/hypnotic-pattern-xphb.md).\
      \ The hag can't take this action again until the start of its next turn."
    "name": "Malicious Magic"
"source":
  - "XMM"
"image": "Sonstige/z_Content%20&%20Rules/bestiary/fey/token/arch-hag-xmm.webp"
```
^statblock

## Environment

any