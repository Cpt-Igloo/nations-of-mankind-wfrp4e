Hooks.on("setup", () => {
    let config = {
        subspecies : {
            human  :{}         
        }
        
    }

    config.subspecies["human"]["averlander-nom"] = {
        name : "Averlander",
        skills : [
            "Animal Care",
            "Charm Animal",
            "Entertain (Speeches)",
            "Gossip",
            "Language (Bretonnian)",
            "Language (Khazalid)",
            "Language (Mootish)",
            "Leadership",
            "Lore (Averland)",
            "Melee (Basic)",
            "Ride (Horse)",
            "Trade (Farmer)"
        ],
        talents : [
            "Doomed, Hatred (Greenskins)",
            "Etiquette (Dwarves), @Table[talents]{Additional Random Talent}",
            "Sharp, Suave",
            2
        ]
    }

    config.subspecies.human["hochlander-nom"] = {
        name : "Hochlander",
        skills : [
            "Animal Care",
            "Charm",
            "Cool",
            "Haggle,",
            "Lore (Hochland)",
            "Melee (Basic)",
            "Outdoor Survival",
            "Perception",
            "Ranged (Blackpowder or Bow)",
            "Secret Signs (Hunters)",
            "Stealth (Rural)",
            "Track"
        ],
        talents : [
            "Doomed, Rover",
            "Marksman, Sharp",
            3
        ]
    }

    config.subspecies.human["ostermarker-nom"] = {
        name : "Ostermarker",
        skills : [
            "Consume Alcohol",
            "Cool",
            "Endurance",
            "Haggle",
            "Intimidate",
            "Intuition",
            "Language (Gospodarinyi)",
            "Language (Ungol)",
            "Leadership",
            "Lore (Ostermark)",
            "Melee (Basic or Polearm)",
            "Ranged (Bow)"
        ],
        talents : [
            "Doomed, @Table[talents]{Additional Random Talent}",
            "Marksman, Coolheaded",
            3
        ]
    }

    config.subspecies.human["ostlander-nom"] = {
        name : "Ostlander",
        skills : [
            "Cool",
            "Endurance",
            "Gamble",
            "Intimidate",
            "Language (Gospodarinyi)",
            "Language (Ungol)",
            "Lore (Ostland)",
            "Melee (Basic)",
            "Navigation",
            "Outdoor Survival",
            "Sail",
            "Swim"
        ],
        talents : [
            "Doomed, @Table[talents]{Additional Random Talent}",
            "Very Resilient, Stone Soup",
            3
        ]
    }

    config.subspecies.human["stirlander-nom"] = {
        name : "Stirlander",
        skills : [
            "Bribery",
            "Cool",
            "Evaluate",
            "Gossip",
            "Haggle",
            "Language (Mootish)",
            "Leadership",
            "Lore (Stirland)",
            "Melee (Basic)",
            "Ranged (Bow)",
            "Sleight of Hand",
            "Stealth (Rural or Urban)"
        ],
        talents : [
            "Doomed, @Table[talents]{Additional Random Talent}",
            "Nimble Fingered, Suave",
            3
        ]
    }

    config.subspecies.human["sylvanian-nom"] = {
        name : "Sylvanian",
        skills : [
            "Animal Care",
            "Athletics",
            "Charm Animal",
            "Charm",
            "Cool",
            "Endurance",
            "Lore (Sylvania)",
            "Lore (Undead)",
            "Lore (Vampires)",
            "Melee (Basic or Polearm)",
            "Outdoor Survival",
            "Stealth (Rural)"
        ],
        talents : [
            "Coolheaded, Sharp",
            "Flee!",
            3
        ]
    }

    config.subspecies.human["talabeclander-nom"] = {
        name : "Talabeclander",
        skills : [
            "Animal Care",
            "Charm Animal",
            "Cool",
            "Gossip",
            "Haggle",
            "Lore (Talabecland)",
            "Melee (Basic)",
            "Navigation",
            "Outdoor Survival",
            "Perception",
            "Ranged (Bow)",
            "Track"
        ],
        talents : [
            "Doomed, Accurate Shot",
            "Marksman, Savvy",
            3
        ]
    }

    config.subspecies.human["wissenlander-nom"] = {
        name : "Wissenlander",
        skills : [
            "Animal Care",
            "Cool",
            "Endurance",
            "Haggle",
            "Intuition",
            "Language (Bretonnian)",
            "Language (Estalian or Tilean)",
            "Leadership",
            "Lore (Wissenland)",
            "Melee (Basic)",
            "Ranged (Blackpowder)",
            "Trade (Farmer or Miner)"
        ],
        talents : [
            "Doomed",
            "Coolheaded, Savvy",
            3
        ]
    }

    config.subspecies.human["albionite-nom"] = {
        name : "Albionite",
        skills : [
            "Athletics",
            "Climb",
            "Cool",
            "Endurance",
            "Intimidate",
            "Lore (Albion)",
            "Lore (Beasts or Monsters)",
            "Melee (Basic)",
            "Melee (Polearm)",
            "Outdoor Survival",
            "Ranged (Throwing)",
            "Stealth (Rural)"
        ],
        talents : [
            "Resistance (Mutation)",
            "Stone Soup",
            "Strider (Marshes)",
            "Warrior Born",
            "Very Strong, Very Resilient"
        ]
    }

    config.subspecies.human["arabyan-nom"] = {
        name : "Arabyan",
        skills : [
            "Art (Any)",
            "Evaluate",
            "Gossip",
            "Haggle",
            "Language (Indan or Southlander)",
            "Language (Wastelander)",
            "Lore (City State)",
            "Melee (Basic)",
            "Navigation",
            "Pray",
            "Ride (Camel or Horse)",
            "Sail"
        ],
        talents : [
            "Nimble Fingered, Suave",
            "Read/Write, Craftsman (Any)",
            "Resistance (Heat), Strider (Deserts)",
            "@Compendium[nations-of-mankind-wfrp4e.journalentries-nom.siN4XGTmiQTSMBuX]{City State Trait (Any)}"
        ]
    }

    config.subspecies.human["breton-noble-nom"] = {
        name : "Bretonnian Noble",
        skills : [
            "Charm Animal",
            "Charm",
            "Cool",
            "Gossip",
            "Haggle",
            "Language (Any)",
            "Leadership",
            "Lore (Dukedom)",
            "Lore (Politics)",
            "Melee (Basic or Two-Handed)",
            "Pray",
            "Ride (Horse)"
        ],
        talents : [
            "Noble Blood",
            "Read/Write",
            "Suave, Warrior Born",
            "@Compendium[nations-of-mankind-wfrp4e.journalentries-nom.siN4XGTmiQTSMBuX]{Dukedom Trait (Any)}"
        ]
    }

    config.subspecies.human["breton-lowborn-nom"] = {
        name : "Bretonnian Lowborn",
        skills : [
            "Animal Care",
            "Charm Animal",
            "Cool",
            "Endurance",
            "Gossip",
            "Haggle",
            "Lore (Dukedom)",
            "Lore (Agriculture)",
            "Melee (Basic)",
            "Ranged (Bow)",
            "Ride (Horse)",
            "Trade (Farmer)"
        ],
        talents : [
            "Nimble Fingered, Very Resilient",
            "Stone Soup",
            "Strong Back",
            "@Compendium[nations-of-mankind-wfrp4e.journalentries-nom.siN4XGTmiQTSMBuX]{Dukedom Trait (Any)}"
        ]
    }

    config.subspecies.human["cathayan-nom"] = {
        name : "Cathayan",
        skills : [
            "Art (Any)",
            "Charm",
            "Climb",
            "Gossip",
            "Haggle",
            "Language (Indan)",
            "Language (Nipponese)",
            "Language (Wastelander)",
            "Leadership",
            "Lore (Province)",
            "Melee (Basic)",
            "Ranged (Bow)"
        ],
        talents : [
            "Coolheaded, Savvy",
            "Read/Write, Linguistics",
            "@Compendium[nations-of-mankind-wfrp4e.journalentries-nom.siN4XGTmiQTSMBuX]{Provincial Trait (Any)}"
        ]
    }

    config.subspecies.human["estalian-nom"] = {
        name : "Estalian",
        skills : [
            "Athletics",
            "Bribery",
            "Charm",
            "Consume Alcohol",
            "Entertain (Storytelling)",
            "Gossip",
            "Language (Bretonnian)",
            "Language (Tilean)",
            "Language (Arabyan)",
            "Lore (Region)",
            "Perform (Jota)",
            "Sleight of Hand"
        ],
        talents : [
            "Nose for Trouble",
            "Savvy, Suave",
            "@Compendium[nations-of-mankind-wfrp4e.journalentries-nom.siN4XGTmiQTSMBuX]{Region Trait (Any)}"
        ]
    }

    config.subspecies.human["indan-nom"] = {
        name : "Indan",
        skills : [
            "Animal Care",
            "Charm",
            "Cool",
            "Endurance",
            "Gossip",
            "Haggle",
            "Language (Arabyan)",
            "Language (Cathayan)",
            "Language (Wastelander)",
            "Lore (Kingdom)",
            "Melee (Basic)",
            "Ranged (Throwing)"
        ],
        talents : [
            "Lightning Reflexes, Suave",
            "Luck",
            "Resistance (Heat), @Table[talents]{One Additional Random Talent}",
            "@Compendium[nations-of-mankind-wfrp4e.journalentries-nom.siN4XGTmiQTSMBuX]{Kingdom Trait (Any)}"
        ]
    }

    config.subspecies.human["gospodar-nom"] = {
        name : "Gospodar",
        skills : [
            "Animal Care",
            "Charm Animal",
            "Cool",
            "Evaluate",
            "Gossip",
            "Haggle",
            "Language (Norse or Wastelander)",
            "Language (Ungol)",
            "Lore (Kislev)",
            "Melee (Basic)",
            "Ranged (Bow)",
            "Ride (Horse)"
        ],
        talents : [
            "Resistance (Cold)",
            "Suave, Savvy",
            "Very Strong, Warrior Born",
            "@Compendium[nations-of-mankind-wfrp4e.journalentries-nom.siN4XGTmiQTSMBuX]{Provincial Trait (Any)}"
        ]
    }

    config.subspecies.human["ungol-nom"] = {
        name : "Ungol",
        skills : [
            "Animal Care",
            "Charm Animal",
            "Cool",
            "Drive",
            "Gossip",
            "Haggle",
            "Intimidate",
            "Language (Gospodarinyi)",
            "Lore (Kislev)",
            "Melee (Basic)",
            "Outdoor Survival",
            "Ranged (Bow)"
        ],
        talents : [
            "Hardy, @Table[talents]{One Additional Random Talent}",
            "Resistance (Cold)",
            "Marksman, Very Resilient",
            "@Compendium[nations-of-mankind-wfrp4e.journalentries-nom.siN4XGTmiQTSMBuX]{Provincial Trait (Any)}"
        ]
    }

    config.subspecies.human["nipponese-nom"] = {
        name : "Nipponese",
        skills : [
            "Charm",
            "Cool",
            "Gossip",
            "Haggle",
            "Language (Cathayan)",
            "Language (Wastelander)",
            "Leadership",
            "Lore (Nippon)",
            "Melee (Basic)",
            "Ranged (Bow)",
            "Sail",
            "Swim"
        ],
        talents : [
            "Sixth Sense",
            "Warrior Born, Sharp",
            "@Compendium[nations-of-mankind-wfrp4e.journalentries-nom.siN4XGTmiQTSMBuX]{Clan Trait (Any)}"
        ]
    }

    config.subspecies.human["norscan-nom"] = {
        name : "Norscan",
        skills : [
            "Athletics",
            "Climb",
            "Consume Alcohol",
            "Cool",
            "Endurance",
            "Intimidate",
            "Lore (Norsca)",
            "Melee (Basic or Two-Handed)",
            "Outdoor Survival",
            "Perception",
            "Sail",
            "Swim"
        ],
        talents : [
            "Night Vision",
            "Resistance (Cold)",
            "Very Strong, Warrior Born",
            "@Compendium[nations-of-mankind-wfrp4e.journalentries-nom.siN4XGTmiQTSMBuX]{Tribe Trait (Any)}, @Table[talents]{Two Additional Random Talents}"
        ]
    }

    config.subspecies.human["southlander-nom"] = {
        name : "Southlander",
        skills : [
            "Animal Care",
            "Athletics",
            "Climb",
            "Cool",
            "Endurance",
            "Gossip",
            "Language (Arabyan or Cathayan)",
            "Melee (Polearm)",
            "Navigation",
            "Outdoor Survival",
            "Perception",
            "Ranged (Throwing)"
        ],
        talents : [
            "Lightning Reflexes, Sprinter",
            "Strong Legs, @Table[talents]{One Additional Random Talent}",
            "@Compendium[nations-of-mankind-wfrp4e.journalentries-nom.siN4XGTmiQTSMBuX]{Tribe Trait (Any)}"
        ]
    }

    config.subspecies.human["strigany-nom"] = {
        name : "Strigany",
        skills : [
            "Animal Care",
            "Charm Animal",
            "Charm",
            "Entertain (Sing or Storytelling)",
            "Gossip",
            "Haggle",
            "Language (Any)",
            "Lore (Local)",
            "Lore (Spirits)",
            "Perform (Any)",
            "Play (Any)",
            "Ride (Horse)"
        ],
        talents : [
            "Animal Affinity, Perfect Pitch",
            "Seasoned Traveler",
            "Sharp, Suave",
            2
        ]
    }

    config.subspecies.human["tilean-nom"] = {
        name : "Tilean",
        skills : [
            "Art (Any)",
            "Bribery",
            "Charm",
            "Consume Alcohol",
            "Entertain (Storytelling)",
            "Gossip",
            "Language (Estalian)",
            "Language (Bretonnian)",
            "Lore (Politics)",
            "Lore (City State)",
            "Sail",
            "Sleight of Hand"
        ],
        talents : [
            "Gregarious, @Table[talents]{One Additional Random Talent}",
            "Read/Write, @Table[talents]{One Additional Random Talent}",
            "Sharp, Suave",
            "@Compendium[nations-of-mankind-wfrp4e.journalentries-nom.siN4XGTmiQTSMBuX]{City-State Trait (Any)}"
        ]
    }

    config.subspecies.human["westerlander-nom"] = {
        name : "Marienburger",
        skills : [
            "Bribery",
            "Charm",
            "Cool",
            "Evaluate",
            "Gossip",
            "Haggle",
            "Language (Arabyan or Bretonnian)",
            "Language (Cathayan or Nipponese)",
            "Language (Estalian or Tilean)",
            "Lore (Westerland)",
            "Sail",
            "Trade (Any)"
        ],
        talents : [
            "Briber, Deal Maker",
            "Savvy, Suave",
            3
        ]
    }

    

mergeObject(game.wfrp4e.config, config)
})