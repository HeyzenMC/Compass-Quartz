---
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
- "Rudolph van Richten"
---
# [Rudolph van Richten](Sonstige/z_Content%20and%20Rules/bestiary/npc/rudolph-van-richten-rhw.md)
*Source: RHW p. 264*  

*Cursed Vampire Hunter*

In better days, Rudolph van Richten lived with his wife, Ingrid, and son, Erasmus, in their family home outside Rivalis in the domain of Darkon. The brash doctor Rudolph ran afoul of the Radanaviches, a family of brigands disguised as Vistani travelers. When the doctor refused to treat one of the family's mortally ill members, the group's leader, Irena Radanavich, ordered her band to kidnap Rudolph's son. She then sold the young man to the vampire Baron Metus. Rudolph pursued the Radanaviches, shattered their criminal operation, and brought Irena to justice, but not before suffering her curse: "Live you always among monsters, and see everyone you love die beneath their claws."

By the time Rudolph tracked down his missing son, the curse had already taken hold: Erasmus had been transformed into Metus's vampire spawn. Rudolph put an end to his son's suffering by pounding a wooden stake through the youth's chest.

This violent deed begat more bloodshed: Baron Metus avenged his slain servant by killing Rudolph's wife, Ingrid. Though Rudolph eventually slew the evil baron, he remains haunted by the horror of his family's destruction.

Rudolph has committed himself to unmasking the evils lurking amid the Land of the Mists, hunting monsters, ending curses, and providing others with tools to do the same. His reputation and writings have spread among the domains. His published works, such as*Van Richten's Guide to Vampires*and*Van Richten's Guide to Werebeasts*, have earned him both adherents and disdain among scholarly communities. Nevertheless, his good works have touched lives and earned him allies far and wide.

Rudolph lives in Mordentshire in the domain of Mordent. From his modest herbalist's shop, he corresponds with scholars and monster hunters across the domains, researches horrific creatures, and crafts tools to combat evil. Frequently he travels to other domains to conduct research or aid friends.

Over the years, Rudolph has adventured alongside heroes like monster hunter George Weathermay and detectives Alanik Ray and Arthur Sedgwick. A new generation of heroes, including Ez d'Avenir and Gennifer and Laurie Weathermay-Foxgrove, have learned from the doctor and continue his fight against evil.

Unbeknownst to Rudolph, Erasmus watches over his father. The spirit of the artistic and thoughtful young man haunts the elder van Richten and aids him and his father's allies with subtle direction and encouragement.

Rudolph knows that his age or vocation will eventually put an end to his endeavors. Increasingly he turns his research toward Barovia and its vampire overlord, Strahd von Zarovich, believing they hold keys to undoing myriad evils across the Land of the Mists.

```statblock
"name": "Rudolph van Richten (RHW)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Good"
"ac": !!int "13"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"modifier": !!int "2"
"stats":
  - !!int "9"
  - !!int "14"
  - !!int "16"
  - !!int "17"
  - !!int "18"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "constitution": !!int "6"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[Arcana](Sonstige/z_Content%20and%20Rules/skills.md#Arcana)"
    "desc": "+6"
  - "name": "[Medicine](Sonstige/z_Content%20and%20Rules/skills.md#Medicine)"
    "desc": "+7"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Religion](Sonstige/z_Content%20and%20Rules/skills.md#Religion)"
    "desc": "+6"
  - "name": "[Sleight of Hand](Sonstige/z_Content%20and%20Rules/skills.md#Sleight%20of%20Hand)"
    "desc": "+5"
"gear":
  - "[hand crossbow](Sonstige/z_Content%20and%20Rules/items/hand-crossbow-xphb.md)"
  - "[leather armor](Sonstige/z_Content%20and%20Rules/items/leather-armor-xphb.md)"
"senses": "passive Perception 17"
"languages": "Abyssal, Common, Elvish, Infernal"
"cr": "5"
"traits":
  - "desc": "While [Bloodied](Sonstige/z_Content%20and%20Rules/conditions.md#Bloodied),\
      \ Rudolph has [Resistance](Sonstige/z_Content%20and%20Rules/variant-rules/resistance-xphb.md)\
      \ to Force, Poison, and Psychic damage."
    "name": "Shield of Erasmus"
"actions":
  - "desc": "Rudolph makes three attacks, using Silver Sword Cane or Hand Crossbow\
      \ in any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 5 (1d6 + 2) Slashing\
      \ damage plus 5 (2d4) Radiant damage. Critical *Hit:* The target has the [Poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ condition until it finishes a [Long Rest](Sonstige/z_Content%20and%20Rules/variant-rules/long-rest-xphb.md).\
      \ It makes a DC 15 Constitution saving throw at end of each hour, ending the\
      \ effect on a success."
    "name": "Silver Sword Cane"
  - "desc": "*Ranged Attack Roll:* +5, range 30/120 ft. *Hit:* 5 (1d6 + 2) Piercing\
      \ damage plus 5 (2d4) Radiant damage."
    "name": "Hand Crossbow"
  - "desc": "*Charisma Saving Throw:* DC 15, each creature of Rudolph's choice in\
      \ a 30-foot [Cone](Sonstige/z_Content%20and%20Rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* 18 (4d8) Psychic damage, and the target has the [Frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ condition until the end of Rudolph's next turn. *Success:* Half damage only."
    "name": "Repel Evil (Recharge 5-6)"
"bonus_actions":
  - "desc": "Rudolph casts [Cure Wounds](Sonstige/z_Content%20and%20Rules/spells/cure-wounds-xphb.md),\
      \ [Dispel Evil and Good](Sonstige/z_Content%20and%20Rules/spells/dispel-evil-and-good-xphb.md),\
      \ or [Sanctuary](Sonstige/z_Content%20and%20Rules/spells/sanctuary-xphb.md),\
      \ using Wisdom as the spellcasting modifier (spell save DC 15)."
    "name": "Occult Aid (2/Day)"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/rudolph-van-richten-rhw.webp"
```
^statblock