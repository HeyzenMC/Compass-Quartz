---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Mother Lorinda"
---
# [Mother Lorinda](Sonstige/z_Content%20and%20Rules/bestiary/fey/mother-lorinda-rhw.md)
*Source: RHW p. 166*  

Mother Lorinda desires a family over all else, not realizing she's destroyed every family she's ever had. A creator of monstrosities, this ancient green hag obsesses over unnatural maternalistic pursuits.

Over generations, Tepest's villagers have come to view Lorinda not as a powerful witch, but as a god of the land and fertility called Mother. Lorinda doesn't dissuade her fragile mortal followers from their baseless cult practices. The villagers provide willing sacrifices for the hag's flawed magical attempts to create life, and their adoration gradually soothes the violent, magical outbursts that follow her failures.

Lorinda's walking tower of bones, the Gurgyl, ranges across Tepest. Those who seek her here find a distracted but deceptively cunning hag clinging to grotesque dolls of her family. She laments the loss of her sisters, Laveeda and Leticia, never acknowledging that they remain alive as her prisoners. She often speaks of her daughter, Laoirse (pronounced "LUR-shuh")—the name she uses over and over again for each of her monstrous creations.

When Lorinda visits Viktal, she appears in her illusory guise as Mother, an ancient, powerful woman wearing a mothlike cloak and bearing a branch with burning limbs. She calls on the people to prove their love for her through sacrifice, whether of food and crafts, their left eyes, or their lives. Sometimes her arrival is sudden and terrifying, such as when she magically appears to crawl from one of her followers' empty eye sockets.

Lorinda seeks new ways to create a permanent family. This might involve great sacrifices, stolen fey magic, strange adoptions, or all manner of supernatural bargains.

```statblock
"name": "Mother Lorinda (RHW)"
"size": "Medium"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"modifier": !!int "7"
"stats":
  - !!int "18"
  - !!int "13"
  - !!int "16"
  - !!int "13"
  - !!int "17"
  - !!int "15"
"speed": "30 ft., swim 30 ft."
"saves":
  - "strength": !!int "7"
  - "dexterity": !!int "4"
  - "constitution": !!int "6"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[Arcana](Sonstige/z_Content%20and%20Rules/skills.md#Arcana)"
    "desc": "+7"
  - "name": "[Deception](Sonstige/z_Content%20and%20Rules/skills.md#Deception)"
    "desc": "+5"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Stealth](Sonstige/z_Content%20and%20Rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 60\
  \ ft., passive Perception 16"
"languages": "Common, Elvish, Sylvan"
"cr": "8"
"traits":
  - "desc": "Lorinda can breathe air and water."
    "name": "Amphibious"
  - "desc": "If Lorinda dies, she revives with all her [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ in 1d10 weeks somewhere in Tepest."
    "name": "Darklord Restoration"
  - "desc": "If Lorinda fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Domain)"
  - "desc": "Lorinda can mimic noises and animal sounds. A creature that hears the\
      \ mimicry can tell it is an imitation only with a successful DC 15 Wisdom ([Insight](Sonstige/z_Content%20and%20Rules/skills.md#Insight))\
      \ check."
    "name": "Mimicry"
"actions":
  - "desc": "Lorinda makes two Mother's Brand attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 8 (1d8 + 4) Bludgeoning\
      \ damage plus 5 (1d10) Fire damage."
    "name": "Mother's Brand"
  - "desc": "Lorinda casts one of the following spells, requiring no Material components\
      \ and using Wisdom as the spellcasting ability (spell save DC 14, +6 to hit\
      \ with spell attacks):\n\n**At will:** [Charm Person](Sonstige/z_Content%20and%20Rules/spells/charm-person-xphb.md),\
      \ [Dancing Lights](Sonstige/z_Content%20and%20Rules/spells/dancing-lights-xphb.md),\
      \ [Disguise Self](Sonstige/z_Content%20and%20Rules/spells/disguise-self-xphb.md)\
      \ (24-hour duration), [Invisibility](Sonstige/z_Content%20and%20Rules/spells/invisibility-xphb.md)\
      \ (self only, and Lorinda leaves no tracks while [Invisible](Sonstige/z_Content%20and%20Rules/conditions.md#Invisible)),\
      \ [Minor Illusion](Sonstige/z_Content%20and%20Rules/spells/minor-illusion-xphb.md),\
      \ [Ray of Sickness](Sonstige/z_Content%20and%20Rules/spells/ray-of-sickness-xphb.md)\
      \ (level 3 version)\n\n**1/day each:** [Augury](Sonstige/z_Content%20and%20Rules/spells/augury-xphb.md),\
      \ [Blight](Sonstige/z_Content%20and%20Rules/spells/blight-xphb.md), [Plant Growth](Sonstige/z_Content%20and%20Rules/spells/plant-growth-xphb.md),\
      \ [Scrying](Sonstige/z_Content%20and%20Rules/spells/scrying-xphb.md), [Unseen\
      \ Servant](Sonstige/z_Content%20and%20Rules/spells/unseen-servant-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Lorinda shape-shifts into Mother, a deity revered by the people of Tepest,\
      \ for 8 hours. Her game statistics are the same in each form. Any equipment\
      \ she is wearing or carrying isn't transformed.\n\nWhile in the form of Mother,\
      \ Lorinda can use Spellcasting to cast [Charm Person](Sonstige/z_Content%20and%20Rules/spells/charm-person-xphb.md)\
      \ as a [Bonus Action](Sonstige/z_Content%20and%20Rules/variant-rules/bonus-action-xphb.md).\n\
      \nLorinda reverts to her true form if she drops to 50 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ or fewer.\n\nWhen Lorinda reverts to her true form, each creature in a 30-foot\
      \ [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from Lorinda is subjected to the following effect. *Wisdom Saving\
      \ Throw:* DC 14 (the target succeeds automatically if it is a Construct or an\
      \ Undead). *Failure:* The target has the [Frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ condition for 1 minute. While [Frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened),\
      \ the target has [Disadvantage](Sonstige/z_Content%20and%20Rules/variant-rules/disadvantage-xphb.md)\
      \ on saving throws."
    "name": "Mother's Visage (1/Day)"
"regional_effects":
  - "desc": "Tepest is altered by Lorinda's presence, creating the following effects:\n\
      \n- **Closing the Borders.** While in her domain, Mother Lorinda can close or\
      \ open the borders to Tepest at will. While the borders are closed, a violent\
      \ storm fills the Mists surrounding Tepest. A creature that enters the Mists\
      \ for the first time on a turn or starts its turn there must succeed on a DC\
      \ 15 Strength saving throw or take 2d8 Lightning damage and be pushed up to\
      \ 30 feet straight toward Tepest. A creature makes this save only once per turn.\
      \  \n- **Mother's Watchers.** Creatures that have sacrificed an eye to Mother\
      \ can take a [Magic](Sonstige/z_Content%20and%20Rules/actions.md#Magic) action\
      \ and pray to her. When they do so, Lorinda can perceive through the creature's\
      \ senses as well as her own until the end of the creature's next turn. When\
      \ perceiving through a creature's senses, Lorinda benefits from any special\
      \ senses it has.  \n- **Sun and Storms.** While in Tepest, Lorinda can cast\
      \ [Control Weather](Sonstige/z_Content%20and%20Rules/spells/control-weather-xphb.md),\
      \ requiring no Material components and using the same spellcasting ability as\
      \ Spellcasting. When casting the spell this way, Lorinda can control the weather\
      \ within 5 miles of herself, regardless of whether she is inside or outside.\
      \  \n\nIf Lorinda dies, these effects end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the mother lorinda can expend a use to take one of the following actions.\
  \ The mother lorinda regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "Lorinda teleports to an unoccupied space she can see within 30 feet and\
      \ can make one Mother's Brand attack."
    "name": "Brand"
  - "desc": "Lorinda casts [Slow](Sonstige/z_Content%20and%20Rules/spells/slow-xphb.md),\
      \ using the same spellcasting ability as Spellcasting. Lorinda can't take this\
      \ action again until the start of her next turn.\n"
    "name": "Overwhelming Presence"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/fey/token/mother-lorinda-rhw.webp"
```
^statblock