---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Ivana Boritsi"
---
# [Ivana Boritsi](Sonstige/z_Content%20and%20Rules/bestiary/npc/ivana-boritsi-rhw.md)
*Source: RHW p. 52*  

Ivana Boritsi tires of playing games no one realizes she's already won. The head of Borca's most influential family, Ivana effortlessly manipulates all aspects of society. Her servants, employees, and fractious cousins prove endlessly unreliable, forcing her to attend personally to tedious duties and social functions to maintain her power.

Ivana looks eternally youthful, causing some to doubt her competence and attribute her success to her elder cousin, Ivan Dilisnya. Perpetually bored with and disappointed by predictable people, she takes refuge in her alchemical studies and her gardens of poisonous plants. Her vast knowledge of toxins makes her a peerless poisoner. She uses her creations to make people more pliable and to assassinate those she deems too boorish to live. Secretly, Ivana seeks someone who can match her intellect and relieve her boredom, but she quickly grows weary of even the most charming and clever souls.

```statblock
"name": "Ivana Boritsi (RHW)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "104"
"hit_dice": "16d8 + 32"
"modifier": !!int "9"
"stats":
  - !!int "10"
  - !!int "17"
  - !!int "14"
  - !!int "18"
  - !!int "15"
  - !!int "14"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "6"
  - "constitution": !!int "5"
"skillsaves":
  - "name": "[Deception](Sonstige/z_Content%20and%20Rules/skills.md#Deception)"
    "desc": "+8"
  - "name": "[Nature](Sonstige/z_Content%20and%20Rules/skills.md#Nature)"
    "desc": "+7"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+5"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"senses": "passive Perception 15"
"languages": "Common"
"cr": "5"
"traits":
  - "desc": "If Ivana dies, she revives with all her [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ in 1d10 weeks somewhere in Borca."
    "name": "Darklord Restoration"
  - "desc": "If Ivana fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (2/Day, or 3/Day in Domain)"
"actions":
  - "desc": "Ivana makes two Toxic Touch attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 8 (1d8 + 4) Poison damage.\
      \ A Humanoid reduced to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ by this damage rises 24 hours later as a Vine Blight under Ivana's control\
      \ unless the Humanoid is restored to life or its body is destroyed."
    "name": "Toxic Touch"
  - "desc": "*Constitution Saving Throw:* DC 15, each creature in a 30-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from Ivana. *Failure:* 13 (3d8) Poison damage, and the target\
      \ has the [Prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone) condition.\
      \ *Success:* Half damage only."
    "name": "Stifling Perfume (Recharge 5-6)"
"bonus_actions":
  - "desc": "If within 5 feet of a Large or bigger inanimate plant, Ivana teleports\
      \ to an unoccupied space within 5 feet of a second Large or bigger inanimate\
      \ plant that is within 60 feet of the previous plant."
    "name": "Tree Stride"
  - "desc": "Ivana casts [Charm Person](Sonstige/z_Content%20and%20Rules/spells/charm-person-xphb.md),\
      \ requiring no spell components and using Intelligence as the spellcasting ability\
      \ (spell save DC 15), and the duration is 24 hours.\n"
    "name": "Charm (Recharge 5-6)"
"regional_effects":
  - "desc": "Borca is altered by Ivana's and Ivan's presences, creating the following\
      \ effects:\n\n- **Closing the Borders.** While in their domain, Ivana or Ivan\
      \ can close or open the borders to Borca at will. While the borders are closed,\
      \ the Mists surrounding Borca are filled with briar vines (Ivana) or barbed\
      \ wire (Ivan). The Mists become [Difficult Terrain](Sonstige/z_Content%20and%20Rules/variant-rules/difficult-terrain-xphb.md),\
      \ and whenever a creature moves into or within the Mists, it takes 2d4 Piercing\
      \ damage for every 5 feet it travels. Once Ivana or Ivan closes or opens the\
      \ borders, neither Darklord can do so again until the next dawn.  \n- **Ivana's\
      \ Whispers (Ivana Only).** Ivana can encode a message of 25 words or fewer into\
      \ flowers in Borca at dawn. Until the next dawn, the first time a creature smells\
      \ a flower, it hears the message in its mind, understanding the meaning of the\
      \ message.  \n- **Mystery Letters (Ivan Only).** Whenever Ivan writes a letter\
      \ and addresses it to a creature in Borca whose name he knows and that he's\
      \ seen before, the letter appears near that creature at the next dawn. The letter\
      \ appears in an unobserved but obvious space, such as a bedside table or among\
      \ gear.  \n- **Spies.** While in Borca, Ivana and Ivan can cast [Clairvoyance](Sonstige/z_Content%20and%20Rules/spells/clairvoyance-xphb.md),\
      \ requiring no Material components and using Intelligence as the spellcasting\
      \ ability. To cast the spell, there must be a Large or bigger plant (Ivana)\
      \ or a Tiny doll or similar toy (Ivan) within range from which the sensor appears.\
      \  \n\nIf a Darklord of Borca dies, that Darklord's effects end immediately.\
      \ Those effects resume if that Darklord gains a new body (see [Ivana's](Sonstige/z_Content%20and%20Rules/bestiary/npc/ivana-boritsi-rhw.md)\
      \ and [Ivan's](Sonstige/z_Content%20and%20Rules/bestiary/npc/ivan-dilisnya-rhw.md)\
      \ Darklord Restoration traits)."
    "name": ""
"legendary_description": "Legendary Action Uses: 2. Immediately after another creature's\
  \ turn, Ivana can expend a use to take one of the following actions. Ivana regains\
  \ all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Ivana makes one Toxic Touch attack."
    "name": "Retaliate"
  - "desc": "*Dexterity Saving Throw:* DC 15, each creature in a 15-foot [Cone](Sonstige/z_Content%20and%20Rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* The target has the [Poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ condition until the end of its next turn. While [Poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned),\
      \ the target subtracts 1d6 from its damage rolls. *Failure or Success:* Ivana\
      \ can't take this action again until the start of her next turn."
    "name": "Toxin Wave"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/ivana-boritsi-rhw.webp"
```
^statblock