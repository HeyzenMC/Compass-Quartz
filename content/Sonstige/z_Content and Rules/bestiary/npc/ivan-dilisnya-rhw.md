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
- "Ivan Dilisnya"
---
# [Ivan Dilisnya](Sonstige/z_Content%20and%20Rules/bestiary/npc/ivan-dilisnya-rhw.md)
*Source: RHW p. 54*  

Ivan Dilisnya—a spoiled, selfish attention seeker—has the tastes of a child but a withered wreck of a body. Borcan society widely regards this recluse as an innovator and a genius. In truth, he is neither. Ivan is a wicked and off-putting manipulator who, despite his appearance and intellect, affects childlike behaviors and speech patterns for attention. He is alone—despite having been born with everything—and the solitude terrifies him.

By staying out of sight or using deceptive correspondence, Ivan makes his targets doubt reality and overestimate his control. He manipulates people into performing pointless errands for him or spying on his cousin, Ivana Boritsi, whom he believes mocks him and has caused his aged, squalid state.

Ivan surrounds himself with dangerous clockwork toys and fawning, mechanical servants. While he goes through the motions of crafting such devices, the Dark Powers provide him with any creation he desires, no matter how bizarre.

```statblock
"name": "Ivan Dilisnya (RHW)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "90"
"hit_dice": "12d8 + 36"
"modifier": !!int "8"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "16"
  - !!int "19"
  - !!int "12"
  - !!int "15"
"speed": "40 ft., climb 40 ft."
"saves":
  - "dexterity": !!int "5"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[History](Sonstige/z_Content%20and%20Rules/skills.md#History)"
    "desc": "+7"
  - "name": "[Investigation](Sonstige/z_Content%20and%20Rules/skills.md#Investigation)"
    "desc": "+7"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+7"
"senses": "passive Perception 17"
"languages": "Common"
"cr": "5"
"traits":
  - "desc": "If Ivan dies, he revives with all his [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ in 1d10 weeks somewhere in Borca."
    "name": "Darklord Restoration"
  - "desc": "If Ivan fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (2/Day, or 3/Day in Domain)"
"actions":
  - "desc": "Ivan makes two Foreleg attacks. He can replace one attack with a use\
      \ of Deadly Contraption."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 10 ft. *Hit:* 11 (2d6 + 4) Piercing\
      \ damage."
    "name": "Foreleg"
  - "desc": "*Dexterity Saving Throw:* DC 15, one creature Ivan can see within 30\
      \ feet. *Failure:* 13 (3d8) Slashing damage. *Failure or Success:* A flailing\
      \ clockwork contraption attaches to the target until the start of Ivan's next\
      \ turn. If the target willingly moves 5 feet or more before then, the target\
      \ takes 4 (1d8) Slashing damage.\n\nAt the start of Ivan's next turn, the\
      \ device crumbles to dust and vanishes."
    "name": "Deadly Contraption"
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
  \ turn, Ivan can expend a use to take one of the following actions. Ivan regains\
  \ all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Ivan makes one Foreleg attack."
    "name": "Retaliate"
  - "desc": "Ivan spreads special caltrops to cover a 20-foot-square area within 5\
      \ feet of himself. The caltrops dissolve at the end of Ivan's next turn. Ivan\
      \ can't take this action again until the start of his next turn.\n\nWhen the\
      \ caltrops appear, each creature in the area is subjected to the following effect;\
      \ a creature that enters the caltrops for the first time on a turn or ends its\
      \ turn there is also subjected to this effect. *Dexterity Saving Throw:* DC\
      \ 15 (a creature makes this save only once per turn). *Failure:* 9 (2d8) Piercing\
      \ damage, and its [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ is reduced to 0 until the start of its next turn."
    "name": "Trapped Ground"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/ivan-dilisnya-rhw.webp"
```
^statblock