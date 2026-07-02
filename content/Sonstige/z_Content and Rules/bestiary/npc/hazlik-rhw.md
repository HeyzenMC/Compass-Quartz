---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/14
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
- ttrpg-cli/monster/type/humanoid/wizard
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Hazlik"
---
# [Hazlik](Sonstige/z_Content%20and%20Rules/bestiary/npc/hazlik-rhw.md)
*Source: RHW p. 98*  

The paranoid, egomaniacal archmage Hazlik clings to his power despite his magical ambitions being supernaturally smothered. Since Hazlik entered Hazlan, his magic has become unstable. Spells he casts behave erratically and fade swiftly—most lasting no more than an hour—while his magical creations fall apart in about a day. The idea of others learning this terrifies the Darklord, which leads him to claim others' works as his own, spy on potential rivals, and order reckless research into the nature of magic and his domain.

Hazlik suffers vivid nightmares wherein past rivals taunt and torment him. The Darklord avoids sleeping, employing magical tinctures to stay awake, but this causes him to vacillate between bouts of exhaustion, jitters, and paranoia.

Hazlik knows that his domain is being ripped apart by magical disasters—many of his own creation. He openly denies the realm's devastation, though, his fear of cascading ruin clashing with his inability to admit he's wrong.

```statblock
"name": "Hazlik (RHW)"
"size": "Medium"
"type": "humanoid"
"subtype": "human, wizard"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "154"
"hit_dice": "28d8 + 28"
"modifier": !!int "13"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "12"
  - !!int "20"
  - !!int "15"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "10"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[Arcana](Sonstige/z_Content%20and%20Rules/skills.md#Arcana)"
    "desc": "+10"
  - "name": "[History](Sonstige/z_Content%20and%20Rules/skills.md#History)"
    "desc": "+10"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+7"
"damage_immunities": "psychic"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed)"
"gear":
  - "[quarterstaff](Sonstige/z_Content%20and%20Rules/items/quarterstaff-xphb.md)"
"senses": "passive Perception 17"
"languages": "Abyssal, Common, Draconic, Giant, Infernal, Undercommon"
"cr": "14"
"traits":
  - "desc": "If Hazlik dies, he revives with all his [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ in 1d10 weeks somewhere in Hazlan."
    "name": "Darklord Restoration"
  - "desc": "If Hazlik fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Domain)"
  - "desc": "Hazlik has [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Hazlik makes three Arcane Burst attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +10, reach 5 ft. or range 150 ft. *Hit:*\
      \ 21 (3d10 + 5) Force damage."
    "name": "Arcane Burst"
  - "desc": "Hazlik casts one of the following spells, using Intelligence as the spellcasting\
      \ ability (spell save DC 18):\n\n**At will:** [Detect Magic](Sonstige/z_Content%20and%20Rules/spells/detect-magic-xphb.md),\
      \ [Detect Thoughts](Sonstige/z_Content%20and%20Rules/spells/detect-thoughts-xphb.md),\
      \ [Disguise Self](Sonstige/z_Content%20and%20Rules/spells/disguise-self-xphb.md),\
      \ [Invisibility](Sonstige/z_Content%20and%20Rules/spells/invisibility-xphb.md),\
      \ [Light](Sonstige/z_Content%20and%20Rules/spells/light-xphb.md), [Mage Armor](Sonstige/z_Content%20and%20Rules/spells/mage-armor-xphb.md)\
      \ (included in AC), [Mage Hand](Sonstige/z_Content%20and%20Rules/spells/mage-hand-xphb.md),\
      \ [Prestidigitation](Sonstige/z_Content%20and%20Rules/spells/prestidigitation-xphb.md)\n\
      \n**2/day each:** [Fly](Sonstige/z_Content%20and%20Rules/spells/fly-xphb.md),\
      \ [Lightning Bolt](Sonstige/z_Content%20and%20Rules/spells/lightning-bolt-xphb.md)\
      \ (level 5 version)\n\n**1/day each:** [Cone of Cold](Sonstige/z_Content%20and%20Rules/spells/cone-of-cold-xphb.md),\
      \ [Mind Blank](Sonstige/z_Content%20and%20Rules/spells/mind-blank-xphb.md) (cast\
      \ before combat), [Scrying](Sonstige/z_Content%20and%20Rules/spells/scrying-xphb.md),\
      \ [Teleport](Sonstige/z_Content%20and%20Rules/spells/teleport-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Hazlik manifests one of the following magic surges, targeting a creature\
      \ he can see within 120 feet. While [Bloodied](Sonstige/z_Content%20and%20Rules/conditions.md#Bloodied),\
      \ Hazlik manifests two surges (roll 1d4; reroll if Hazlik has already used\
      \ that surge during this turn):\n\n- **1 Misty Movement.** Hazlik can teleport\
      \ the target up to 30 feet to an unoccupied space he can see on a surface or\
      \ liquid large enough to support the target.  \n- **2 Eye Blight.** *Constitution\
      \ Saving Throw:* DC 18. *Failure:* The target has the [Blinded](Sonstige/z_Content%20and%20Rules/conditions.md#Blinded)\
      \ condition until the end of its next turn.  \n- **3 Mind Flare.** *Intelligence\
      \ Saving Throw:* DC 18. *Failure:* 13 (2d12) Psychic damage, and the target\
      \ can't take the [Magic](Sonstige/z_Content%20and%20Rules/actions.md#Magic)\
      \ action until the end of its next turn.  \n- **4 Implode.** *Dexterity Saving\
      \ Throw:* DC 18. *Failure:* The target takes 10 (3d6) Force damage. *Failure\
      \ or Success:* Each creature within 5 feet of the target takes 10 (3d6) Force\
      \ damage.  "
    "name": "Wild Magic Surge"
"reactions":
  - "desc": "Hazlik casts [Counterspell](Sonstige/z_Content%20and%20Rules/spells/counterspell-xphb.md)\
      \ or [Shield](Sonstige/z_Content%20and%20Rules/spells/shield-xphb.md) in response\
      \ to the spell's trigger, using the same spellcasting ability as Spellcasting.\n"
    "name": "Protective Magic (3/Day)"
"regional_effects":
  - "desc": "Hazlan is altered by Hazlik's presence, creating the following effects:\n\
      \n- **Closing the Borders.** While in his domain, Hazlik can close or open the\
      \ borders to Hazlan at will. While the borders are closed, the Mists surrounding\
      \ Hazlan are filled with monstrous magical experiments. A creature that enters\
      \ the Mists for the first time on a turn or starts its turn there must succeed\
      \ on a DC 15 Dexterity saving throw or take 5 (1d10) Force damage and have\
      \ the [Restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained)\
      \ condition until the start of its next turn. A creature makes this save only\
      \ once per turn.  \n- **Frayed Magic.** Whenever a creature (excluding Hazlik\
      \ and his allies) casts a spell using a level 5+ spell slot, it rolls on the\
      \ [Wild Magic Surge table](Sonstige/z_Content%20and%20Rules/tables/wild-magic-surge-xphb.md)\
      \ in the \"Player's Handbook\" to create a magical effect.  \n- **Magic Nightmares.**\
      \ While in his lair, Veneficus, Hazlik can cast [Clairvoyance](Sonstige/z_Content%20and%20Rules/spells/clairvoyance-xphb.md),\
      \ requiring no spell components and using the same spellcasting ability as his\
      \ Spellcasting action. When the spell is cast this way, its range is all of\
      \ Hazlan, Hazlik can see but can't hear through the sensor, and the sensor can\
      \ appear only on an Eye of Hazlik.  \n\nIf Hazlik dies, these effects end immediately.\
      \ The effects resume if Hazlik gains a new body (see his Darklord Restoration\
      \ trait)."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Hazlik can expend a use to take one of the following actions. Hazlik regains\
  \ all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Hazlik makes one Arcane Burst attack."
    "name": "Arcane Strike"
  - "desc": "Hazlik teleports up to 60 feet to an unoccupied space he can see, and\
      \ each creature within 10 feet of the space he left takes 11 (2d10) Force\
      \ damage. Hazlik can't take this action again until the start of his next turn."
    "name": "Arcane Teleport"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/hazlik-rhw.webp"
```
^statblock