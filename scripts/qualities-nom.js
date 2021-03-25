Hooks.on("setup", () => {
  WFRP4E = game.wfrp4e.config
  // Add new weapon qualities

  WFRP4E.weaponQualities["concealed"] = "NationsOfMankind.Properties.Concealed.Label";
  WFRP4E.qualityDescriptions["concealed"] = "NationsOfMankind.Properties.Concealed.Description";

  WFRP4E.weaponQualities["crushing"] = "NationsOfMankind.Properties.Crushing.Label";
  WFRP4E.qualityDescriptions["crushing"] = "NationsOfMankind.Properties.Crushing.Description";

  WFRP4E.weaponQualities["hooked"] = "NationsOfMankind.Properties.Hooked.Label";
  WFRP4E.qualityDescriptions["hooked"] = "NationsOfMankind.Properties.Hooked.Description";

  WFRP4E.weaponQualities["multi-shot"] = "NationsOfMankind.Properties.Multi-shot.Label";
  WFRP4E.qualityDescriptions["multi-shot"] = "NationsOfMankind.Properties.Multi-shot.Description";

  WFRP4E.weaponQualities["suppressed"] = "NationsOfMankind.Properties.Suppressed.Label";
  WFRP4E.qualityDescriptions["suppressed"] = "NationsOfMankind.Properties.Suppressed.Description";

  WFRP4E.armorQualities["missile-resistant"] = "NationsOfMankind.Properties.Missile-Resistant.Label";
  WFRP4E.qualityDescriptions["missile-resistant"] = "NationsOfMankind.Properties.Missile-Resistant.Description";

  // Applies Crushing Quality to weapons
  
    let weapon = data.attackerTestResult.weapon;
    let crushing = weapon.properties.qualities.includes(game.i18n.localize('NationsOFMankind.Properties.Crushing.Label'));

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
