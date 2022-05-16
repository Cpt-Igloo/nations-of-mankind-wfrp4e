Hooks.on("setup", () => {
  WFRP4E = game.wfrp4e.config
  // Add new weapon qualities

  WFRP4E.weaponQualities["concealed"] = "Concealed";
  WFRP4E.qualityDescriptions["concealed"] = "Concealed weapons are designed not to be seen, often strapped around various areas of the wielder’s body under their clothing to avoid detection. If you are wielding such a weapon, no one can easily detect it on your person with their passive perception and would have to conduct a thorough investigation in order to discover it. If used on a surprised target, the weapon temporarily gains the Damaging and Impact Qualities.";

  WFRP4E.weaponQualities["crushing"] = "Crushing";
  WFRP4E.qualityDescriptions["crushing"] = "Crushing weapons are designed with spikes or patterns to smash up, crush and tear into the armor of the wielder’s enemies. If you successfully attack and deal a Critical Hit on an opponent, you Damage a struck piece of armor or shield by 2 points as well as wounding the target. Furthermore, you ignore the Impenetrable Armor Quality for all Critical Hits.";

  WFRP4E.weaponQualities["hooked"] = "Hooked";
  WFRP4E.qualityDescriptions["hooked"] = "Hooked weapons are strategically designed will small hooks on their ends to pull down infantry or rip cavalry off their mounts. If you are wielding such a weapon, after a successful Melee Attack, instead of dealing Damage, you may attempt to pull down your enemy. If you choose to do this, enact an Opposed Strength Test. If you succeed, you force the opponent to go prone. If the opponent is mounted, they are forced off their mount and take falling damage.";

  WFRP4E.weaponQualities["multi-shot"] = "Multi-shot";
  WFRP4E.qualityDescriptions["multi-shot"] = "This weapon is designed to fire multiple missiles at once in a single action, assuming the weapon is fully loaded and capable of holding more than one missile at a time based on the Repeater Quality’s value. On a Success, the Damage is counted as a separate hit by each bolt based on the number of shots, with Toughness Bonus and armor deducting the Damage of each shot as normal. Roll a d100 for each separate hit location. If you Fumble, you must roll for two results on the Fumble Table and pick the higher result.";

  WFRP4E.weaponQualities["suppressed"] = "Suppressed";
  WFRP4E.qualityDescriptions["suppressed"] = "This weapon is designed to drastically reduce the noise made from firing it. This weapon can be fired without immediately alerting enemies; however, it loses the Blackpowder and Damaging Qualities.";

  WFRP4E.armorQualities["missile-resistant"] = "Missile-Resistant";
  WFRP4E.qualityDescriptions["missile-resistant"] = "This armor is designed in such a way to protect the wearer from ranged attacks. While wearing a piece of armor with this quality, missile attacks have their Damage reduced by 2. Furthermore, the Damaging Quality of all ranged weapons is ignored when striking this armor with missile attacks, with the exception of ranged weapons with the Blackpowder Quality.";

  // Applies Crushing Quality to weapons
  
    let weapon = data.attackerTestResult.weapon;
    let crushing = weapon.properties.qualities.includes(game.i18n.localize('Crushing'));

    // Return if no crashing or defender wins
    if (crushing === false)
      return;

    if (data.winner === "defender")
      return;

    let target = canvas.tokens.get(data.speakerDefend.token);
    let armor = target.actor.prepareItems().AP;
    let hitLocation = data.hitloc.value;

    if (armor[hitLocation].value >= 2) {
      armor[hitLocation].value-=2;
      console.log("Armor Damaged");
    }   

  

});
