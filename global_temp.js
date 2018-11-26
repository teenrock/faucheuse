// GLOBAL 
client.on("message", (message, channel) => {
  var member = message.guild.member(message.author);
  var cmd = message.content;

  if ((message.channel == rivChan) && ((cmd == '!traverser le pont')||(cmd == '!continuer ma route'))) { // GLOBAL CASE 1 - RIVIERE CHANNEL

    if (cmd == '!continuer ma route') { // vers CHAN_1A -> cul de sac
      role1 = role_1A
      rep1 = rep_1A
      chan1 = chan_1A
      rivABmsg = ` vous avez préféré continuer votre route pour prendre un autre chemin.\nUne petite promenade virtuelle ca ne fait pas de mal après tout !\n**>>> ${chan_1A} <<<**`
      rivABmsg2 = `, voilà quelques kilomètres que vous marchez mais vous semblez vous éloigner de plus en plus loin de la communauté...\nVous n'avez d'autre choix que de faire demi-tour si vous cherchez à rejoindre la communauté.
Je vous invite donc à taper: **\`!faire demi-tour\`**`;
    } else if (cmd == '!traverser le pont') { // vers CHAN_1B -> pont
      role1 = role_1B
      rep1 = rep_1B
      chan1 = chan_1B
      rivABmsg = ` vous pouvez vous dirigez vers le pont.\n**>>> ${chan_1B} <<<<**\nCourage ! Il vous en faudra !`
      rivABmsg2 = ` vous êtes en train de traverser le pont quand vous vous retrouvez soudainement pris(e) d'une crise de panique !\n\n**3 choix** s'offrent à vous:
\u0031\u20E3 - Vous faites demi-tour à toute vitesse !\ntapez: **\`!faire demi-tour\`**\n\u0032\u20E3 - Vous courrez à tout vitesse pour atteindre l'autre bout au plus vite.\ntapez: **\`!se mettre à courir\`**
\u0033\u20E3 - Vous sautez du pont ! (quel(le) guerrier(e) !\ntapez: **\`!sauter du pont\`**`;
    }

    member.addRole(role1).then(addRole => {
      fs.createFileSync(rep1 + member.id + '.js')
  	  rivChan.send(`**${message.author.username}**` + rivABmsg).then(msg => msg.delete(6000))
  	  chan1.send(`**${member}**` + rivABmsg2).then(msg => msg.delete(30000))
  	})

  	setTimeout(function() {
      if (member.roles.has(rivRole.id)) member.removeRole(role.id)      
    }, 7 * 1000)

  	message.delete(750)
  } // END OF GLOBAL CASE 1

  // GLOBAL CASE 2
  if ((message.channel == ortChan) && ((cmd == "!traverser le champs d'orties")||(cmd == "!couper à travers champs"))) {
    
  	if (cmd == "!traverser le champs d'orties") {
  	  role2 = role_2A
  	  rep2 = rep_2A
  	  chan2 = chan_2A
  	  ortABmsg = ` profitez en pour en cueillir!\nOn peut faire beaucoups de choses avec ca !\n**>>> ${chan_2A} <<<**`;
  	  ortABmsg2 = ` ca y est ! fini le calvaire !\nVous avez traversé le champs (non sans séquelles mais on a rien sans rien !)\nVous entendez le bruit d'une cascade au loin... (cela vous intrigue)\n\nVous:
\u0031\u20E3 - Continuez votre route ?\ntapez: **\`!continuer ma route\`**\n\u0032\u20E3 - Vous remettez en marche en direction de la cascade.\ntapez: **\`!aller vers la cascade\`**`;
  	} else if (cmd == "!couper à travers champs") {
  	  role2 = role_2B
  	  rep2 = rep_2B
  	  chan2 = chan_2B
  	  ortABmsg = ` vous en aviez assez de ces démangeaisons et je vous comprend... qu'à cela ne tienne !\nRendez-vous en **>>> ${chan_2B} <<<**`
  	  ortABmsg2 = ` vous êtes à présent à l'abris de ces vilaines démangeaisons !\nAu loin, il vous semble entendre le bruit d'une cascade.\nA l'opposé, il vous semble apercevoir ce qui pourrait ressembler à l'objet de votre quête.\nPréférez-vous:\n
\u0031\u20E3 - Vous diriger vers la cascade ?\ntapez: **\`!aller vers la cascade\`**\n\u0032\u20E3 - Vous diriger vers ce qui semble être l'objet de votre quête?\ntapez: **\`!suivre la direction opposée\`**`;
  	}

  	member.addRole(role2).then(addRole => {
      fs.createFileSync(rep2 + member.id + '.js')
  	  ortChan.send(`**${message.author.username}**` + ortABmsg).then(msg => msg.delete(6000))
  	  chan2.send(`**${member}**` + ortABmsg2).then(msg => msg.delete(30000))
  	})

  	labyUsersFoldersList.forEach(folder => {
  	  if (fs.existsSync(folder + member.id + '.js') && (folder != rep2)) fs.unlinkSync(folder + member.id + '.js')
  	})

  	setTimeout(function() {
      if (member.roles.has(ortRole.id)) member.removeRole(ortRole.id)      
    }, 7 * 1000)

  	message.delete(750)

  } // END OF GLOBAL CASE 2
  
  // GLOBAL CASE 3
  if ((message.channel == brouChan) && ((cmd == "choix 1")||(cmd == "choix 2"))) {
    
  	if (cmd == "!choix 1") {
  	  role3 = role_3A
  	  rep3 = rep_3A
  	  chan3 = chan_3A
  	  brouABmsg = `choix 1`
  	  brouABmsg2 = `choix 1`
  	} else if (cmd == "!choix 2") {
  	  role3 = role_3B
  	  rep3 = rep_3B
  	  chan3 = chan_3B
  	  brouABmsg = `choix 2`
  	  brouABmsg2 = `choix 2`
  	}

  	member.addRole(role3).then(addRole => {
      fs.createFileSync(rep3 + member.id + '.js')
  	  brouChan.send(`**${message.author.username}**` + brouABmsg).then(msg => msg.delete(6000))
  	  chan3.send(`**${member}**` + brouABmsg2).then(msg => msg.delete(30000))
  	})

  	labyUsersFoldersList.forEach(folder => {
  	  if (fs.existsSync(folder + member.id + '.js') && (folder != rep3)) fs.unlinkSync(folder + member.id + '.js')
  	})

  	setTimeout(function() {
      if (member.roles.has(brouRole.id)) member.removeRole(brouRole.id)      
    }, 7 * 1000)

  	message.delete(750)

  }// END OF GLOBAL CASE 3
  
  // GLOBAL CASE 4
  if ((message.channel == jarChan) && ((cmd == "choix 1")||(cmd == "choix 2"))) {
    
  	if (cmd == "!choix 1") {
  	  role4 = role_4A
  	  rep4 = rep_4A
  	  chan4 = chan_4A
  	  jarABmsg = `choix 1`
  	  jarABmsg2 = `choix 1`
  	} else if (cmd == "!choix 2") {
  	  role4 = role_4B
  	  rep4 = rep_4B
  	  chan4 = chan_4B
  	  jarABmsg = `choix 2`
  	  jarABmsg2 = `choix 2`
  	}

  	member.addRole(role4).then(addRole => {
      fs.createFileSync(rep4 + member.id + '.js')
  	  jarChan.send(`**${message.author.username}**` + jarABmsg).then(msg => msg.delete(6000))
  	  chan4.send(`**${member}**` + jarABmsg2).then(msg => msg.delete(30000))
  	})

  	labyUsersFoldersList.forEach(folder => {
  	  if (fs.existsSync(folder + member.id + '.js') && (folder != rep4)) fs.unlinkSync(folder + member.id + '.js')
  	})

  	setTimeout(function() {
      if (member.roles.has(jarRole.id)) member.removeRole(jarRole.id)      
    }, 7 * 1000)

  	message.delete(750)

  } // END OF GLOBAL CASE 4

});