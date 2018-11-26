const Discord = require("discord.js");
const client = new Discord.Client({autoReconnect: true, max_message_cache: 0});
const config = require("./config.json");
const fs = require("fs-extra");
const decache = require("decache");
const path = require("path");
const prefix = config.prefix;

client.on("ready", (message) => {
  const onReady = require("./onReady.js");
  onReady(message, client, fs)
});

client.on("message", (message, channel) => {
    if (message.content.startsWith(prefix + "purge")) {
    if (message.channel.type === "dm") return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `manage-guild` dans ce serveur**").catch(console.error);

    const user = message.mentions.users.first();
    const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2]) 
    if (!amount) return message.reply('**:x: Veuillez spécifier une limite de message**'); 
    if (!amount && !user) return message.reply('**:x: Veuillez spécifier une limite de message**');
    if (!user){
      if(isNaN(message.content.split(' ')[1]) || parseInt(message.content.split(' ')[1]) < 2 || parseInt(message.content.split(' ')[1]) > 100){
        message.channel.send('**:x: Veuillez spécifier une limite de message comprise entre 2 et 100**')
      }
    }
  
    if(message.content.split(' ')[2]){
      if(isNaN(message.content.split(' ')[2]) || parseInt(message.content.split(' ')[2]) < 2 || parseInt(message.content.split(' ')[2]) > 100){
      message.channel.send('**:x: Veuillez spécifier une limite de message comprise entre 2 et 100**')
      }
    }
 
    message.channel.fetchMessages({ limit: amount, })
    .then((messages) => {
      if (user) {
        const filterBy = user ? user.id : Client.user.id;
        messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
      }
      message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
      message.channel.send(":wastebasket: | `" + amount + "` messages supprimés").then(msg => msg.delete(3000).catch(err => console.log(err)));

    })

  }
});

client.on("guildMemberAdd", (member) => {
  var newMemberId = member.id;
  member.user.send(`**Bienvenue \`${member.user.username}\`**
Vous voici arriver sur **${member.guild.name}** !\n
Avant de pouvoir intégrer cette communauté, il va falloir s'en donner les moyens !\n
A tout instant dans le labyrinthe, vous pouvez utiliser la commande: **\`!choix\`**\nElle vous indiquera vos différentes possibilités en fonctions de l'emplacement où vous vous trouvez.\n
De même, la commande **\`!faire demi-tour\`** (ou **\`!faire demi tour\`**) vous permet de revenir à l'emplacement que vous occupiez précédemment de celui où vous vous trouvez.
Enfin, si vous souhaitez reprendre au choix des portes principales, la commande **\`!restart\`** vous sera d'une grande utilité...\n(elle pourrait bien s'avérer plus que nécessaire... :smirk: )\n
Si vous êtes de la partie, et lorsque vous y serez prêt,\nje vous invite à taper sur **>>> ${enterChan} <<<**\nla commande: **\`!start\`**\n
**La partie n'attend que vous \`${member.user.username}\`!**`)
});

// START / RESTART & HELP USERS COMMANDS
client.on("message", (message, channel) => {
  if ((message == null)||(message == undefined)) return;
  if (message.content.startsWith(prefix)) message.delete(750)
  var member = message.guild.member(message.author);
  var rivMsg = `**\`!choix 1A\`** ou **\`!choix 1B\`**`;
  /*`**${member}** voilà que vous avancez tranquillement en suivant le bord de la rivière.\nUn choix s'offre à vous...\nSur votre droite vous appercevez un pont en direction du quel semblent provenir un bruit de foule...\
Néanmoins, il ne semble pas très solide :confused:\n
Préférez-vous:\n\u0031\u20E3 - Prendre le risque de traverser le pont ?\ntapez: **\`!traverser le pont\`**\n\u0032\u20E3 - Continuer votre route et traverser plus tard ?\ntapez: **\`!continuer ma route\`**`;
*/
  var ortMsg = `**\`!choix 2A\`** ou **\`!choix 2B\`**`;
  /*`**${member}** les orties vous piquent les jambes !\nCela commence à vous agacer...\n\nVous avez le choix, préférez-vous:
\u0031\u20E3 - Continuer à travers le champs d'orties ? (ca démange un peu mais vous êtes un warrior après tout !)\ntapez: **\`!traverser le champs d'orties\`**
\u0032\u20E3 - Couper à travers champs et mettre un terme à cette torture ?\ntapez: **\`!couper à travers champs\`**`;
*/
  var brouMsg = `**\`!choix 3A\`** ou **\`!choix 3B\`**`;
  /*`**${member}** pas facile d'avancer quand on y voit rien à ce point... :confused:\nLe brouillard semble s'estomper un peu plus loin, vous pouvez:\n
\u0031\u20E3 - Continuer pour sortir du brouillard\ntapez: **\`!sortir du brouillard\`**\n\u0032\u20E3 - Continuer dans le brouillard ?\ntapez: **\`!continuer dans le brouillard\`**`;
*/
  var jarMsg = `**\`!choix 4A\`** ou **\`!choix 4B\`**`;
  /*`**${member}** vous avez maintenant parcouru(e) quelques kilomètres, la vue est agréable mais ne vous laissez pas endormir par le paysage !\nUn peu plus loin sur votre droite vous semblez percevoir un santier mais...`
*/;
  cmd = message.content.slice(1);
  if ((message.author.bot)||(isReady == false)) return;
  if (message.content.startsWith(prefix + 'start') && (message.channel != enterChan) && ((message != null)||(message != undefined))) return message.delete()

  // USERS START CMD	
  if ((message.channel == enterChan) && message.content.startsWith(prefix + 'start')) {
    const startCmd = require("./startCmd.js")
    startCmd(message, client, member, fs)

  // RESTART CMD
  } else if (message.content.startsWith(prefix + 'restart')) {
  	const restartCmd = require("./restartCmd.js")
  	restartCmd(message, client, member, fs)

  } else if (message.content == "!choix") { // DONNE LES DIFFERENTS CHOIX POSSIBLES EN FONCTION DU SALON OU L'UTILISATEUR SE TROUVE
    const choixCmd = require("./choixCmd.js")
    choixCmd(message, member)

  }
  
});


// USERS COME BACK CMD
client.on("message", (message, prefix, client) => {
  var member = message.guild.member(message.author);
  var msgChan = message.channel;
  var cmd = message.content;
  var fileName = member.id + '.js';

  if (message.author.bot) return;

  // USERS COME BACK CMD
  const comebackCmd = require('./comebackCmd.js')
  comebackCmd(message, prefix, client, member, msgChan, cmd, fileName, fs)

  if (msgChan == rivChan) {

  	if (!fs.existsSync(rep_1A + fileName) && !fs.existsSync(rep_1B + fileName)) { // Premier choix dans le labyrinthe
  	  if (cmd == choice_1A) {
  	  	member.addRole(role_1A.id).then(addRole => {
  	  	  fs.createFileSync(rep_1A + fileName)
  	  	  setTimeout(function() {
  	  	  	chan_1A.send(`cul de sac... faire demi tour`).then(ans => ans.delete(5000))
  	  	  	if (member.roles.has(rivRole.id)) member.removeRole(rivRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  } else if (cmd == choice_1B) {
  	  	member.addRole(role_1B.id).then(addRole => {
  	  	  fs.createFileSync(rep_1B + fileName)
  	  	  setTimeout(function() {
  	  	  	if (member.roles.has(rivRole.id)) member.removeRole(rivRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  }

  	} else if (fs.existsSync(rep_1A + fileName)) { // l'utilisateur vient du salon 1A
  	  if (cmd == choice_1A) {
  	  	member.addRole(role_1A.id).then(addRole => {
  	  	  fs.createFileSync(rivUsersRep + fileName)
  	  	  if (fs.existsSync(rep_1B + fileName)) fs.unlinkSync(rep_1B + fileName);
  	  	  setTimeout(function() {
  	  	  	chan_1A.send(`cul de sac... faire demi tour`).then(ans => ans.delete(5000))
  	  	  	if (member.roles.has(rivRole.id)) member.removeRole(rivRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  } else if (cmd == choice_1B) {
  	  	member.addRole(role_1B.id).then(addRole => {
  	  	  fs.createFileSync(rep_1B + fileName)
  	  	  if (fs.existsSync(rep_1A + fileName)) fs.unlinkSync(rep_1A + fileName);
  	  	  setTimeout(function() {
  	  	  	if (member.roles.has(rivRole.id)) member.removeRole(rivRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  }

  	} else if (fs.existsSync(rep_1B + fileName)) { // l'utilisateur vient du salon 1B
  	  if (cmd == choice_1A) {
  	  	member.addRole(role_1A.id).then(addRole => {
  	  	  fs.createFileSync(rep_1A + fileName)
  	  	  if (fs.existsSync(rep_1B + fileName)) fs.unlinkSync(rep_1B + fileName);
  	  	  setTimeout(function() {
  	  	  	chan_1A.send(`cul de sac... faire demi tour`).then(ans => ans.delete(5000))
  	  	  	if (member.roles.has(rivRole.id)) member.removeRole(rivRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  } else if (cmd == choice_1B) {
  	  	member.addRole(role_1B.id).then(addRole => {
  	  	  fs.createFileSync(rep_1B + fileName)
  	  	  if (fs.existsSync(rep_1A + fileName)) fs.unlinkSync(rep_1A + fileName);
  	  	  setTimeout(function() {
  	  	  	if (member.roles.has(rivRole.id)) member.removeRole(rivRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  }

  	}
  	
  } else if (msgChan == ortChan) {

  	if (!fs.existsSync(rep_2A + fileName) && !fs.existsSync(rep_2B + fileName)) { // Premier choix dans le labyrinthe
  	  if (cmd == choice_2A) {
  	  	member.addRole(role_2A.id).then(addRole => {
  	  	  fs.createFileSync(rep_2A + fileName)
  	  	  setTimeout(function() {
  	  	  	if (member.roles.has(ortRole.id)) member.removeRole(ortRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  } else if (cmd == choice_2B) {
  	  	member.addRole(role_2B.id).then(addRole => {
  	  	  fs.createFileSync(rep_2B + fileName)
  	  	  setTimeout(function() {
  	  	  	if (member.roles.has(ortRole.id)) member.removeRole(ortRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  }
  	  

  	} else if (fs.existsSync(rep_2A + fileName)) {
  	  if (cmd == choice_2A) {
  	  	member.addRole(role_2A.id).then(addRole => {
  	  	  fs.createFileSync(ortUsersRep + fileName)
  	  	  if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
  	  	  setTimeout(function() {
  	  	  	if (member.roles.has(ortRole.id)) member.removeRole(ortRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  } else if (cmd == choice_2B) {
  	  	member.addRole(role_2B.id).then(addRole => {
  	  	  fs.createFileSync(rep_2B + fileName)
  	  	  if (fs.existsSync(ortUsersRep + fileName)) fs.unlinkSync(ortUsersRep + fileName);
  	  	  setTimeout(function() {
  	  	  	if (member.roles.has(ortRole.id)) member.removeRole(ortRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  }

  	} else if (fs.existsSync(rep_2B + fileName)) {
  	  if (cmd == choice_2A) {
  	  	member.addRole(role_2A.id).then(addRole => {
  	  	  fs.createFileSync(rep_2A + fileName)
  	  	  if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
  	  	  setTimeout(function() {
  	  	  	if (member.roles.has(ortRole.id)) member.removeRole(ortRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  } else if (cmd == choice_2B) {
  	  	member.addRole(role_2B.id).then(addRole => {
  	  	  fs.createFileSync(rep_2B + fileName)
  	  	  if (fs.existsSync(rep_2A + fileName)) fs.unlinkSync(rep_2A + fileName);
  	  	  setTimeout(function() {
  	  	  	if (member.roles.has(ortRole.id)) member.removeRole(ortRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  }

  	}
  	
  } else if (msgChan == brouChan) {

  	if (!fs.existsSync(rep_3A + fileName) && !fs.existsSync(rep_3B + fileName)) { // Premier choix dans le labyrinthe
  	  if (cmd == choice_3A) {
  	  	member.addRole(role_3A.id).then(addRole => {
  	  	  fs.createFileSync(rep_3A + fileName)
  	  	  setTimeout(function() {
  	  	  	chan_3A.send(`cul de sac... faire demi tour`).then(ans => ans.delete(5000))
  	  	  	if (member.roles.has(brouRole.id)) member.removeRole(brouRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  } else if (cmd == choice_3B) {
  	  	member.addRole(role_3B.id).then(addRole => {
  	  	  fs.createFileSync(rep_3B + fileName)
  	  	  setTimeout(function() {
  	  	  	if (member.roles.has(brouRole.id)) member.removeRole(brouRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  }
  	  if (member.roles.has(rivRole.id)) member.removeRole(rivRole.id)

  	} else if (fs.existsSync(rep_3A + fileName)) { // l'utilisateur vient du salon 3A
  	  if (cmd == choice_3A) {
  	  	member.addRole(role_3A.id).then(addRole => {
  	  	  fs.createFileSync(brouUsersRep + fileName)
  	  	  if (fs.existsSync(rep_3B + fileName)) fs.unlinkSync(rep_3B + fileName);
  	  	  setTimeout(function() {
  	  	  	chan_3A.send(`cul de sac... faire demi tour`).then(ans => ans.delete(5000))
  	  	  	if (member.roles.has(brouRole.id)) member.removeRole(brouRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  } else if (cmd == choice_3B) {
  	  	member.addRole(role_3B.id).then(addRole => {
  	  	  fs.createFileSync(rep_3B + fileName)
  	  	  if (fs.existsSync(brouUsersRep + fileName)) fs.unlinkSync(brouUsersRep + fileName);
  	  	  setTimeout(function() {
  	  	  	if (member.roles.has(brouRole.id)) member.removeRole(brouRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  }

  	} else if (fs.existsSync(rep_3B + fileName)) { // l'utilisateur vient du salon 3B
  	  if (cmd == choice_3A) {
  	  	member.addRole(role_3A.id).then(addRole => {
  	  	  fs.createFileSync(rep_3A + fileName)
  	  	  if (fs.existsSync(rep_3B + fileName)) fs.unlinkSync(rep_3B + fileName);
  	  	  setTimeout(function() {
  	  	  	chan_3A.send(`cul de sac... faire demi tour`).then(ans => ans.delete(5000))
  	  	  	if (member.roles.has(brouRole.id)) member.removeRole(brouRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  } else if (cmd == choice_3B) {
  	  	member.addRole(role_3B.id).then(addRole => {
  	  	  fs.createFileSync(rep_3B + fileName)
  	  	  if (fs.existsSync(rep_3A + fileName)) fs.unlinkSync(rep_3A + fileName);
  	  	  setTimeout(function() {
  	  	  	if (member.roles.has(brouRole.id)) member.removeRole(brouRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  }

  	}
  	
  } else if (msgChan == jarChan) {

  	if (!fs.existsSync(rep_4A + fileName) && !fs.existsSync(rep_4B + fileName)) { // Premier choix dans le labyrinthe
  	  if (cmd == choice_4A) {
  	  	member.addRole(role_4A.id).then(addRole => {
  	  	  fs.createFileSync(rep_4A + fileName)
  	  	  setTimeout(function() {
  	  	  	chan_4A.send(`cul de sac... faire demi tour`).then(ans => ans.delete(5000))
  	  	  	if (member.roles.has(jarRole.id)) member.removeRole(jarRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  } else if (cmd == choice_4B) {
  	  	member.addRole(role_4B.id).then(addRole => {
  	  	  fs.createFileSync(rep_4B + fileName)
  	  	  setTimeout(function() {
  	  	  	if (member.roles.has(jarRole.id)) member.removeRole(jarRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  }

  	} else if (fs.existsSync(rep_4A + fileName)) { // l'utilisateur vient du salon 4A
  	  if (cmd == choice_4A) {
  	  	member.addRole(role_4A.id).then(addRole => {
  	  	  fs.createFileSync(rep_4A + fileName)
  	  	  if (fs.existsSync(rep_4B + fileName)) fs.unlinkSync(rep_4B + fileName);
  	  	  setTimeout(function() {
  	  	  	chan_4A.send(`cul de sac... faire demi tour`).then(ans => ans.delete(5000))
  	  	  	if (member.roles.has(jarRole.id)) member.removeRole(jarRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  } else if (cmd == choice_4B) {
  	  	member.addRole(role_4B.id).then(addRole => {
  	  	  fs.createFileSync(rep_4B + fileName)
  	  	  if (fs.existsSync(brouUsersRep + fileName)) fs.unlinkSync(brouUsersRep + fileName);
  	  	  setTimeout(function() {
  	  	  	if (member.roles.has(jarRole.id)) member.removeRole(jarRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  }

  	} else if (fs.existsSync(rep_4B + fileName)) { // l'utilisateur vient du salon 4B
  	  if (cmd == choice_4A) {
  	  	member.addRole(role_4A.id).then(addRole => {
  	  	  fs.createFileSync(rep_4A + fileName)
  	  	  if (fs.existsSync(rep_4B + fileName)) fs.unlinkSync(rep_4B + fileName);
  	  	  setTimeout(function() {
  	  	  	chan_4A.send(`cul de sac... faire demi tour`).then(ans => ans.delete(5000))
  	  	  	if (member.roles.has(jarRole.id)) member.removeRole(jarRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  } else if (cmd == choice_4B) {
  	  	member.addRole(role_4B.id).then(addRole => {
  	  	  fs.createFileSync(rep_4B + fileName)
  	  	  if (fs.existsSync(rep_4A + fileName)) fs.unlinkSync(rep_4A + fileName);
  	  	  setTimeout(function() {
  	  	  	if (member.roles.has(jarRole.id)) member.removeRole(jarRole.id)
  	  	  }, 1 * 1500)
  	  	})
  	  }

  	}
  	
  }

});

// LABYRINTHE PART 1
client.on("message", (message) => {
  var member = message.guild.member(message.author);
  var cmd = message.content;  
  var fileName = member.id + '.js';

  if ((message.channel == chan_1B) && ((cmd == choice_1C)||(cmd == choice_1D)||(cmd == choice_1A)||(cmd == choice_1))) { // CHAN_1B

  	if (cmd == choice_1C) { // PIEGE ICI
  	  member.addRole(role_1C.id).then(addRole => {
  	  	fs.createFileSync(rep_1C + fileName)
  	  	if (fs.existsSync(rivUsersRep + fileName)) fs.unlinkSync(rivUsersRep + fileName);
  	  	if (fs.existsSync(rep_1A + fileName)) fs.unlinkSync(rep_1A + fileName);
  	  	if (fs.existsSync(rep_1D + fileName)) fs.unlinkSync(rep_1D + fileName);
  	  })
  	} else if (cmd == choice_1D) {
  	  member.addRole(role_1D.id).then(addRole => {
  	  	fs.createFileSync(rep_1D + fileName)
  	  	if (fs.existsSync(rivUsersRep + fileName)) fs.unlinkSync(rivUsersRep + fileName);
  	  	if (fs.existsSync(rep_1A + fileName)) fs.unlinkSync(rep_1A + fileName);
  	  })
  	} else if (cmd == choice_1A) {
  	  member.addRole(role_1A.id).then(addRole => {
  	  	fs.createFileSync(rep_1A + fileName)
  	  	if (fs.existsSync(rivUsersRep + fileName)) fs.unlinkSync(rivUsersRep + fileName);
  	  	if (fs.existsSync(rep_1D + fileName)) fs.unlinkSync(rep_1D + fileName);
  	  })
  	} else if (cmd == choice_1) {
  	  member.addRole(rivRole.id).then(addRole => {
  	  	fs.createFileSync(rivUsersRep + fileName)
  	    if (fs.existsSync(rep_1A + fileName)) fs.unlinkSync(rep_1A + fileName);
  	  	if (fs.existsSync(rep_1D + fileName)) fs.unlinkSync(rep_1D + fileName);
  	  })

  	}
  	if (member.roles.has(role_1B.id)) member.removeRole(role_1B.id);

  }

  if ((message.channel == chan_1D) && ((cmd == choice_1E)||(cmd == choice_1F)||(cmd == choice_1B)||(cmd == choice_1C))) { // CHAN_1D
    
    if (cmd == choice_1E) {
      member.addRole(role_1E.id).then(addRole => {
      	fs.createFileSync(rep_1E + fileName)
      	if (fs.existsSync(rep_1B + fileName)) fs.unlinkSync(rep_1B + fileName);
  	  	if (fs.existsSync(rep_1F + fileName)) fs.unlinkSync(rep_1F + fileName);
      })
    } else if (cmd == choice_1F) {
  	  member.addRole(role_1F.id).then(addRole => {
  	  	fs.createFileSync(rep_1F + fileName)
  	  	if (fs.existsSync(rep_1E + fileName)) fs.unlinkSync(rep_1E + fileName);
  	  	if (fs.existsSync(rep_1B + fileName)) fs.unlinkSync(rep_1B + fileName);
  	  })
  	} else if (cmd == choice_1B) {
  	  member.addRole(role_1B.id).then(addRole => {
  	  	fs.createFileSync(rep_1B + fileName)
  	  	if (fs.existsSync(rep_1E + fileName)) fs.unlinkSync(rep_1E + fileName);
  	  	if (fs.existsSync(rep_1F + fileName)) fs.unlinkSync(rep_1F + fileName);
  	  })
  	} else if (cmd == choice_1C) {
  	  member.addRole(role_1C.id).then(addRole => {
  	  	fs.createFileSync(rep_1C + fileName)
  	  	if (fs.existsSync(rep_1B + fileName)) fs.unlinkSync(rep_1B + fileName);
  	  	if (fs.existsSync(rep_1E + fileName)) fs.unlinkSync(rep_1E + fileName);
  	  })
  	}
  	if (member.roles.has(role_1D.id)) member.removeRole(role_1D.id);

  }

  if ((message.channel == chan_1F) && ((cmd == choice_2A)||(cmd == choice_2C)||(cmd == choice_1D)||(cmd == choice_1E))) { // CHAN_1F
    
    if (cmd == choice_2A) member.addRole(role_2A.id).then(addRole => {
      fs.createFileSync(rep_2A + fileName)
      if (fs.existsSync(rep_1D + fileName)) fs.unlinkSync(rep_1D + fileName);
      if (fs.existsSync(rep_1E + fileName)) fs.unlinkSync(rep_1E + fileName);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
    })
  	if (cmd == choice_2C) member.addRole(role_2C.id).then(addRole => {
  	  fs.createFileSync(rep_2C + fileName)
  	  if (fs.existsSync(rep_1D + fileName)) fs.unlinkSync(rep_1D + fileName);
      if (fs.existsSync(rep_1E + fileName)) fs.unlinkSync(rep_1E + fileName);
      if (fs.existsSync(rep_2A + fileName)) fs.unlinkSync(rep_2A + fileName);
  	})
  	if (cmd == choice_1D) member.addRole(role_2A.id).then(addRole => {
  	  fs.createFileSync(rep_1D + fileName)
  	  if (fs.existsSync(rep_1E + fileName)) fs.unlinkSync(rep_1E + fileName);
      if (fs.existsSync(rep_2A + fileName)) fs.unlinkSync(rep_2A + fileName);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
  	})
  	if (cmd == choice_1E) member.addRole(role_2C.id).then(addRole => {
  	  fs.createFileSync(rep_1E + fileName)
  	  if (fs.existsSync(rep_1B + fileName)) fs.unlinkSync(rep_1B + fileName);
      if (fs.existsSync(rep_2A + fileName)) fs.unlinkSync(rep_2A + fileName);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
  	})
  	if (member.roles.has(role_1F.id)) member.removeRole(role_1F.id);

  }

});

// LABYRINTHE PART 2
client.on("message", (message) => {
  var member = message.guild.member(message.author);
  var cmd = message.content;  
  var fileName = member.id + '.js';

  if ((message.channel == chan_2A) && ((cmd == choice_1F)||(cmd == choice_2C)||(cmd == choice_2B)||(cmd == choice_2))) { // CHAN_2A

  	if (cmd == choice_1F) member.addRole(role_1F).then(addRole => {
  	  fs.createFileSync(rep_1F + fileName)
  	  if (fs.existsSync(ortUsersRep + fileName)) fs.unlinkSync(ortUsersRep + fileName);
      if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
  	})
  	if (cmd == choice_2C) member.addRole(role_2C).then(addRole => {
  	  fs.createFileSync(rep_2C + fileName)
  	  if (fs.existsSync(ortUsersRep + fileName)) fs.unlinkSync(ortUsersRep + fileName);
      if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
      if (fs.existsSync(rep_1F + fileName)) fs.unlinkSync(rep_1F + fileName);
  	})
  	if (cmd == choice_2B) member.addRole(role_2B).then(addRole => {
  	  fs.createFileSync(rep_2B + fileName)
  	  if (fs.existsSync(ortUsersRep + fileName)) fs.unlinkSync(ortUsersRep + fileName);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
      if (fs.existsSync(rep_1F + fileName)) fs.unlinkSync(rep_1F + fileName);
  	})
  	if (cmd == choice_2) member.addRole(role_2C).then(addRole => {
  	  fs.createFileSync(rep_2C + fileName)
  	  if (fs.existsSync(ortUsersRep + fileName)) fs.unlinkSync(ortUsersRep + fileName);
      if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
      if (fs.existsSync(rep_1F + fileName)) fs.unlinkSync(rep_1F + fileName);
  	})
  	if (member.roles.has(role_2A.id)) member.removeRole(role_2A.id);
  }

  if ((message.channel == chan_2B) && ((cmd == choice_2C)||(cmd == choice_2D)||(cmd == choice_2A)||(cmd == choice_2))) { // CHAN_2B
  	if (cmd == choice_2C) member.addRole(role_2C).then(addRole => {
  	  fs.createFileSync(rep_2C + fileName)
  	  if (fs.existsSync(ortUsersRep + fileName)) fs.unlinkSync(ortUsersRep + fileName);
      if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
      if (fs.existsSync(rep_1F + fileName)) fs.unlinkSync(rep_1F + fileName);
  	})
  	if (cmd == choice_2D) member.addRole(role_2D).then(addRole => {
  	  fs.createFileSync(rep_2D + fileName)
  	  if (fs.existsSync(ortUsersRep + fileName)) fs.unlinkSync(ortUsersRep + fileName);
      if (fs.existsSync(rep_2A + fileName)) fs.unlinkSync(rep_2A + fileName);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
  	})
  	if (cmd == choice_2A) member.addRole(role_2A).then(addRole => {
  	  fs.createFileSync(rep_2A + fileName)
  	  if (fs.existsSync(ortUsersRep + fileName)) fs.unlinkSync(ortUsersRep + fileName);
  	  if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
      if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
  	})
  	if (cmd == choice_2) member.addRole(ortRole).then(addRole => {
  	  fs.createFileSync(ortUsersRep + fileName)
      if (fs.existsSync(rep_2A + fileName)) fs.unlinkSync(rep_2A + fileName);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
      if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
  	})
  	if (member.roles.has(role_2B.id)) member.removeRole(role_2B.id);
  }

  if ((message.channel == chan_2C) && ((cmd == choice_1F)||(cmd == choice_2A)||(cmd == choice_2B)||(cmd == choice_2D))) { // CHAN_2C
  	if (cmd == choice_1F) member.addRole(role_1F).then(addRole => {
  	  fs.createFileSync(rep_1F + fileName)
  	  if (fs.existsSync(rep_2A + fileName)) fs.unlinkSync(rep_2A + fileName);
  	  if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
      if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
  	})
  	if (cmd == choice_2A) member.addRole(role_2A).then(addRole => {
  	  fs.createFileSync(rep_2A + fileName)
  	  if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
      if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
      if (fs.existsSync(rep_1F + fileName)) fs.unlinkSync(rep_1F + fileName);
  	})
  	if (cmd == choice_2B) member.addRole(role_2B).then(addRole => {
  	  fs.createFileSync(rep_2B + fileName)
  	  if (fs.existsSync(rep_2A + fileName)) fs.unlinkSync(rep_2A + fileName);
      if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
      if (fs.existsSync(rep_1F + fileName)) fs.unlinkSync(rep_1F + fileName);
  	})
  	if (cmd == choice_2D) member.addRole(role_2D).then(addRole => {
  	  fs.createFileSync(rep_2D + fileName)
  	  if (fs.existsSync(rep_2A + fileName)) fs.unlinkSync(rep_2A + fileName);
      if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
      if (fs.existsSync(rep_1F + fileName)) fs.unlinkSync(rep_1F + fileName);
  	})
  	if (member.roles.has(role_2C.id)) member.removeRole(role_2C.id);
  }

  if ((message.channel == chan_2D) && ((cmd == choice_2E)||(cmd == choice_2F)||(cmd == choice_2B)||(cmd == choice_2C))) { // CHAN_2D
    if (cmd == choice_2E) member.addRole(role_2E).then(addRole => {
      fs.createFileSync(rep_2E + fileName)
      if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
      if (fs.existsSync(rep_2F + fileName)) fs.unlinkSync(rep_2F + fileName);
    })
  	if (cmd == choice_2F) member.addRole(role_2F).then(addRole => {
  	  fs.createFileSync(rep_2F + fileName)
  	  if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
      if (fs.existsSync(rep_2E + fileName)) fs.unlinkSync(rep_2E + fileName);
  	})
  	if (cmd == choice_2B) member.addRole(role_2B).then(addRole => {
      fs.createFileSync(rep_2B + fileName)
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
      if (fs.existsSync(rep_2E + fileName)) fs.unlinkSync(rep_2E + fileName);
      if (fs.existsSync(rep_2F + fileName)) fs.unlinkSync(rep_2F + fileName);
    })
  	if (cmd == choice_2C) member.addRole(role_2C).then(addRole => {
  	  fs.createFileSync(rep_2C + fileName)
  	  if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
      if (fs.existsSync(rep_2E + fileName)) fs.unlinkSync(rep_2E + fileName);
      if (fs.existsSync(rep_2F + fileName)) fs.unlinkSync(rep_2F + fileName);
  	})
    if (member.roles.has(role_2D.id)) member.removeRole(role_2D.id);
  }

  if ((message.channel == chan_2E) && ((cmd == choice_2I)||(cmd == choice_3H)||(cmd == choice_2D)||(cmd == choice_2F))) {// CHAN_2E
  	if (cmd == choice_2I) member.addRole(role_2I).then(addRole => {
  	  fs.createFileSync(rep_2I + fileName)
  	  if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
      if (fs.existsSync(rep_2F + fileName)) fs.unlinkSync(rep_2F + fileName);
      if (fs.existsSync(rep_3H + fileName)) fs.unlinkSync(rep_3H + fileName);
  	})
  	if (cmd == choice_3H) member.addRole(role_3H).then(addRole => {
  	  fs.createFileSync(rep_3H + fileName)
  	  if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
      if (fs.existsSync(rep_2F + fileName)) fs.unlinkSync(rep_2F + fileName);
  	})
  	if (cmd == choice_2D) member.addRole(role_2D).then(addRole => {
  	  fs.createFileSync(rep_2D + fileName)
  	  if (fs.existsSync(rep_2F + fileName)) fs.unlinkSync(rep_2F + fileName);
  	  if (fs.existsSync(rep_3H + fileName)) fs.unlinkSync(rep_3H + fileName);
  	})
  	if (cmd == choice_2F) member.addRole(role_2F).then(addRole => {
  	  fs.createFileSync(rep_2F + fileName)
  	  if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
  	  if (fs.existsSync(rep_3H + fileName)) fs.unlinkSync(rep_3H + fileName);
  	})
  	if (member.roles.has(role_2E.id)) member.removeRole(role_2E.id);
  }

  if ((message.channel == chan_2F) && ((cmd == choice_2G)||(cmd == choice_2H)||(cmd == choice_2E)||(cmd == choice_2D))) { // CHAN_2F
    if (cmd == choice_2G) member.addRole(role_2G).then(addRole => {
      fs.createFileSync(rep_2G + fileName)
      if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
      if (fs.existsSync(rep_2E + fileName)) fs.unlinkSync(rep_2E + fileName);
      if (fs.existsSync(rep_2H + fileName)) fs.unlinkSync(rep_2H + fileName);
    })
  	if (cmd == choice_2H) member.addRole(role_2H).then(addRole => {
  	  fs.createFileSync(rep_2H + fileName)
  	  if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
      if (fs.existsSync(rep_2E + fileName)) fs.unlinkSync(rep_2E + fileName);
  	})
  	if (cmd == choice_2E) member.addRole(role_2E).then(addRole => {
      fs.createFileSync(rep_2E + fileName)
      if (fs.existsSync(rep_2H + fileName)) fs.unlinkSync(rep_2H + fileName);
      if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
    })
  	if (cmd == choice_2D) member.addRole(role_2D).then(addRole => {
  	  fs.createFileSync(rep_2D + fileName)
  	  if (fs.existsSync(rep_2E + fileName)) fs.unlinkSync(rep_2E + fileName);
  	  if (fs.existsSync(rep_2H + fileName)) fs.unlinkSync(rep_2H + fileName);
  	})
  	if (member.roles.has(role_2F.id)) member.removeRole(role_2F.id);
  }

});

// LABYRINTHE PART 3
client.on("message", (message) => {
  var member = message.guild.member(message.author);
  var cmd = message.content;  
  var fileName = member.id + '.js';

  if ((message.channel == chan_3B) && ((cmd == choice_3C)||(cmd == choice_3D)||(cmd == choice_3A)||(cmd == choice_3))) { // CHAN_3B

  	if (cmd == choice_3C) member.addRole(role_3C).then(addRole => {
  	  fs.createFileSync(rep_3C + fileName)
  	  if (fs.existsSync(brouUsersRep + fileName)) fs.unlinkSync(brouUsersRep + fileName);
      if (fs.existsSync(rep_3A + fileName)) fs.unlinkSync(rep_3A + fileName);
      if (fs.existsSync(rep_3D + fileName)) fs.unlinkSync(rep_3D + fileName);
  	})
  	if (cmd == choice_3D) member.addRole(role_3D).then(addRole => {
  	  fs.createFileSync(rep_3D + fileName)
  	  if (fs.existsSync(brouUsersRep + fileName)) fs.unlinkSync(brouUsersRep + fileName);
      if (fs.existsSync(rep_3A + fileName)) fs.unlinkSync(rep_3A + fileName);
      if (fs.existsSync(rep_3C + fileName)) fs.unlinkSync(rep_3C + fileName);
  	})
  	if (cmd == choice_3A) member.addRole(role_3A).then(addRole => {
  	  fs.createFileSync(rep_3A + fileName)
  	  if (fs.existsSync(brouUsersRep + fileName)) fs.unlinkSync(brouUsersRep + fileName);
      if (fs.existsSync(rep_3C + fileName)) fs.unlinkSync(rep_3C + fileName);
      if (fs.existsSync(rep_3D + fileName)) fs.unlinkSync(rep_3D + fileName);
  	})
  	if (cmd == choice_3) member.addRole(brouRole).then(addRole => {
  	  fs.createFileSync(brouUsersRepou + fileName)
  	  if (fs.existsSync(rep_3A + fileName)) fs.unlinkSync(rep_3A + fileName);
      if (fs.existsSync(rep_3C + fileName)) fs.unlinkSync(rep_3C + fileName);
      if (fs.existsSync(rep_3D + fileName)) fs.unlinkSync(rep_3D + fileName);
  	})
  	if (member.roles.has(role_3B.id)) member.removeRole(role_3B.id);

  } else if ((message.channel == chan_3D) && ((cmd == choice_3E)||(cmd == choice_3F)||(cmd == choice_3C)||(cmd == choice_3B))) { // CHAN_3D

  	if (cmd == choice_3E) member.addRole(role_3E).then(addRole => {
  	  fs.createFileSync(rep_3E + fileName)
  	  if (fs.existsSync(brouUsersRep + fileName)) fs.unlinkSync(brouUsersRep + fileName);
      if (fs.existsSync(rep_3A + fileName)) fs.unlinkSync(rep_3A + fileName);
      if (fs.existsSync(rep_3D + fileName)) fs.unlinkSync(rep_3D + fileName);
  	})
  	if (cmd == choice_3F) member.addRole(role_3F).then(addRole => {
  	  fs.createFileSync(rep_3F + fileName)
  	  if (fs.existsSync(brouUsersRep + fileName)) fs.unlinkSync(brouUsersRep + fileName);
      if (fs.existsSync(rep_3A + fileName)) fs.unlinkSync(rep_3A + fileName);
      if (fs.existsSync(rep_3C + fileName)) fs.unlinkSync(rep_3C + fileName);
  	})
  	if (cmd == choice_3C) member.addRole(role_3C).then(addRole => {
  	  fs.createFileSync(rep_3C + fileName)
  	  if (fs.existsSync(brouUsersRep + fileName)) fs.unlinkSync(brouUsersRep + fileName);
      if (fs.existsSync(rep_3C + fileName)) fs.unlinkSync(rep_3C + fileName);
      if (fs.existsSync(rep_3D + fileName)) fs.unlinkSync(rep_3D + fileName);
  	})
  	if (cmd == choice_3B) member.addRole(brouRole).then(addRole => {
  	  fs.createFileSync(rep_3B + fileName)
  	  if (fs.existsSync(rep_3A + fileName)) fs.unlinkSync(rep_3A + fileName);
      if (fs.existsSync(rep_3C + fileName)) fs.unlinkSync(rep_3C + fileName);
      if (fs.existsSync(rep_3D + fileName)) fs.unlinkSync(rep_3D + fileName);
  	})
  	if (member.roles.has(role_3D.id)) member.removeRole(role_3D.id);

  } else if ((message.channel == chan_3F) && ((cmd == choice_3G)||(cmd == choice_3H)||(cmd == choice_3E)||(cmd == choice_3D))) { // CHAN_3D

  	if (cmd == choice_3G) member.addRole(role_3G).then(addRole => {
  	  fs.createFileSync(rep_3G + fileName)
      if (fs.existsSync(rep_3H + fileName)) fs.unlinkSync(rep_3H + fileName);
      if (fs.existsSync(rep_3D + fileName)) fs.unlinkSync(rep_3D + fileName);
  	})
  	if (cmd == choice_3H) member.addRole(role_3H).then(addRole => {
  	  fs.createFileSync(rep_3H + fileName)
      if (fs.existsSync(rep_3G + fileName)) fs.unlinkSync(rep_3G + fileName);
      if (fs.existsSync(rep_3D + fileName)) fs.unlinkSync(rep_3D + fileName);
  	})
  	if (cmd == choice_3E) member.addRole(role_3E).then(addRole => {
  	  fs.createFileSync(rep_3E + fileName)
  	  if (fs.existsSync(rep_3H + fileName)) fs.unlinkSync(rep_3H + fileName);
  	  if (fs.existsSync(rep_3G + fileName)) fs.unlinkSync(rep_3G + fileName);
      if (fs.existsSync(rep_3D + fileName)) fs.unlinkSync(rep_3D + fileName);
  	})
  	if (cmd == choice_3D) member.addRole(rep_3D).then(addRole => {
  	  fs.createFileSync(rep_3D + fileName)
  	  if (fs.existsSync(rep_3B + fileName)) fs.unlinkSync(rep_3B + fileName);
      if (fs.existsSync(rep_3C + fileName)) fs.unlinkSync(rep_3C + fileName);
      if (fs.existsSync(rep_3G + fileName)) fs.unlinkSync(rep_3G + fileName);
      if (fs.existsSync(rep_3H + fileName)) fs.unlinkSync(rep_3H + fileName);
  	})
  	if (member.roles.has(role_3F.id)) member.removeRole(role_3F.id);

  } else if ((message.channel == chan_3G) && ((cmd == choice_3I)||(cmd == choice_3J)||(cmd == choice_3H)||(cmd == choice_3F))) { // CHAN_3G

  	if (cmd == choice_3I) member.addRole(role_3I).then(addRole => { // VICTOIRE !!!
  	  fs.createFileSync(rep_3I + fileName)
  	  if (fs.existsSync(rep_3F + fileName)) fs.unlinkSync(rep_3F + fileName);
      if (fs.existsSync(rep_3H + fileName)) fs.unlinkSync(rep_3H + fileName);
      if (fs.existsSync(rep_3J + fileName)) fs.unlinkSync(rep_3J + fileName);
      setTimeout(function() {
        chan_3I.send(`**${member}**, félicitations ! Vous venez de découvrir la porte d'entrée du discord !\nPour entrer... **\`!entrer\`**\nLes membres présents ont été prévenus de votre arrivée soudaine, vous êtes à présent convié(e) à vous faire votre petite place parmis nous ! ^^\n
En vous souhaitant la bienvenue par avance, je vous souhaite une bonne installation au nom de la communauté !`)
  	  }, 1 * 1500)
  	})
  	if (cmd == choice_3J) member.addRole(role_3J).then(addRole => {
  	  fs.createFileSync(rep_3J + fileName)
      if (fs.existsSync(rep_3F + fileName)) fs.unlinkSync(rep_3F + fileName);
      if (fs.existsSync(rep_3H + fileName)) fs.unlinkSync(rep_3H + fileName);
      if (fs.existsSync(rep_3I + fileName)) fs.unlinkSync(rep_3I + fileName);
  	})
  	if (cmd == choice_3H) member.addRole(role_3H).then(addRole => {
  	  fs.createFileSync(rep_3H + fileName)
  	  if (fs.existsSync(rep_3F + fileName)) fs.unlinkSync(rep_3F + fileName);
  	  if (fs.existsSync(rep_3I + fileName)) fs.unlinkSync(rep_3I + fileName);
      if (fs.existsSync(rep_3J + fileName)) fs.unlinkSync(rep_3J + fileName);
  	})
  	if (cmd == choice_3F) member.addRole(rep_3F).then(addRole => {
  	  fs.createFileSync(rep_3F + fileName)
      if (fs.existsSync(rep_3H + fileName)) fs.unlinkSync(rep_3H + fileName);
  	  if (fs.existsSync(rep_3I + fileName)) fs.unlinkSync(rep_3I + fileName);
      if (fs.existsSync(rep_3J + fileName)) fs.unlinkSync(rep_3J + fileName);
  	})
  	if (member.roles.has(role_3G.id)) member.removeRole(role_3G.id);

  } else if ((message.channel == chan_3H) && ((cmd == choice_2E)||(cmd == choice_2I)||(cmd == choice_3G)||(cmd == choice_3F))) { // CHAN_3H

  	if (cmd == choice_2E) member.addRole(role_2E).then(addRole => {
  	  fs.createFileSync(rep_2E + fileName)
  	  if (fs.existsSync(rep_3G + fileName)) fs.unlinkSync(rep_3G + fileName);
      if (fs.existsSync(rep_2F + fileName)) fs.unlinkSync(rep_3F + fileName);
  	})
  	if (cmd == choice_2I) member.addRole(role_2I).then(addRole => {
  	  fs.createFileSync(rep_2I + fileName)
      if (fs.existsSync(rep_3G + fileName)) fs.unlinkSync(rep_3G + fileName);
      if (fs.existsSync(rep_3F + fileName)) fs.unlinkSync(rep_3F + fileName);
      if (fs.existsSync(rep_3E + fileName)) fs.unlinkSync(rep_2E + fileName);
  	})
  	if (cmd == choice_3G) member.addRole(role_3G).then(addRole => {
  	  fs.createFileSync(rep_3G + fileName)
  	  if (fs.existsSync(rep_2E + fileName)) fs.unlinkSync(rep_2E + fileName);
  	  if (fs.existsSync(rep_3F + fileName)) fs.unlinkSync(rep_3F + fileName);
  	})
  	if (cmd == choice_3F) member.addRole(rep_3F).then(addRole => {
  	  fs.createFileSync(rep_3F + fileName)
      if (fs.existsSync(rep_2E + fileName)) fs.unlinkSync(rep_2E + fileName);
  	  if (fs.existsSync(rep_3G + fileName)) fs.unlinkSync(rep_3G + fileName);
  	})
  	if (member.roles.has(role_3H.id)) member.removeRole(role_3H.id);

  } else if ((message.channel == chan_3I) && (cmd == enterChoice)) {
  	fs.createFileSync(winUsersRep + fileName)
  	if (fs.existsSync(rep_3G + fileName)) fs.unlinkSync(rep_3G + fileName);
    if (fs.existsSync(rep_3J + fileName)) fs.unlinkSync(rep_3J + fileName);
    if (fs.existsSync(startedUsersRep + fileName)) fs.unlinkSync(startedUsersRep + fileName);
    member.addRole(winRole.id).then(addRole => {
      labyMainRolesList.forEach(role => {
        if (member.roles.has(role.id)) member.removeRole(role.id) && console.log(` Il a perdu le rôle ${role.name}`)
      })
      labyRolesList.forEach(role => {
        if (member.roles.has(role.id)) member.removeRole(role.id) && console.log(` Il a perdu le rôle ${role.name}`)
      })
  	})
  	

  } else if ((message.channel == chan_3J) && ((cmd == choice_3K)||(cmd == choice_3L)||(cmd == choice_3G)||(cmd == choice_3I))) { // CHAN_3H

  	if (cmd == choice_3K) member.addRole(role_3K).then(addRole => {
  	  fs.createFileSync(rep_3K + fileName)
  	  if (fs.existsSync(rep_3G + fileName)) fs.unlinkSync(rep_3G + fileName);
      if (fs.existsSync(rep_3I + fileName)) fs.unlinkSync(rep_3I + fileName);
  	})
  	if (cmd == choice_3L) member.addRole(role_3L).then(addRole => {
  	  fs.createFileSync(rep_3L + fileName)
      if (fs.existsSync(rep_3G + fileName)) fs.unlinkSync(rep_3G + fileName);
      if (fs.existsSync(rep_3F + fileName)) fs.unlinkSync(rep_3F + fileName);
      if (fs.existsSync(rep_3E + fileName)) fs.unlinkSync(rep_2E + fileName);
  	})
  	if (cmd == choice_3G) member.addRole(role_3G).then(addRole => {
  	  fs.createFileSync(rep_3G + fileName)
  	  if (fs.existsSync(rep_2E + fileName)) fs.unlinkSync(rep_2E + fileName);
  	  if (fs.existsSync(rep_3F + fileName)) fs.unlinkSync(rep_3F + fileName);
  	})
  	if (cmd == choice_3I) member.addRole(rep_3I).then(addRole => { // VICTOIRE !!!
  	  fs.createFileSync(rep_3I + fileName)
  	  if (fs.existsSync(rep_3G + fileName)) fs.unlinkSync(rep_3G + fileName);
  	  setTimeout(function() {
        chan_3I.send(`**${member}**, félicitations ! Vous venez de découvrir la porte d'entrée du discord !\nPour entrer... **\`!entrer\`**\nLes membres présents ont été prévenus de votre arrivée soudaine, vous êtes à présent convié(e) à vous faire votre petite place parmis nous ! ^^\n
En vous souhaitant la bienvenue par avance, je vous souhaite une bonne installation au nom de la communauté !`)
  	  }, 1 * 1500)
  	})
  	if (member.roles.has(role_3J.id)) member.removeRole(role_3J.id);

  }

});

// LABYRINTHE PART 4
client.on("message", (message) => {
  var member = message.guild.member(message.author);
  var cmd = message.content;  
  var fileName = member.id + '.js';

  if ((message.channel == chan_4B) && ((cmd == choice_4C)||(cmd == choice_4D)||(cmd == choice_4A)||(cmd == choice_4))) { // CHAN_4B

  	if (cmd == choice_4C) member.addRole(role_4C).then(addRole => {
  	  fs.createFileSync(rep_4C + fileName)
  	  if (fs.existsSync(jarUsersRep + fileName)) fs.unlinkSync(jarUsersRep + fileName);
      if (fs.existsSync(rep_4A + fileName)) fs.unlinkSync(rep_4A + fileName);
      if (fs.existsSync(rep_4D + fileName)) fs.unlinkSync(rep_4D + fileName);
  	})
  	if (cmd == choice_4D) member.addRole(role_4D).then(addRole => {
  	  fs.createFileSync(rep_4D + fileName)
  	  if (fs.existsSync(jarUsersRep + fileName)) fs.unlinkSync(jarUsersRep + fileName);
      if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
      if (fs.existsSync(rep_4A + fileName)) fs.unlinkSync(rep_4A + fileName);
  	})
  	if (cmd == choice_4A) member.addRole(role_4A).then(addRole => {
  	  fs.createFileSync(rep_4A + fileName)
  	  if (fs.existsSync(jarUsersRep + fileName)) fs.unlinkSync(jarUsersRep + fileName);
      if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
      if (fs.existsSync(rep_4D + fileName)) fs.unlinkSync(rep_4D + fileName);
  	})
    if (cmd == choice_4) member.addRole(jarRole).then(addRole => {
  	  fs.createFileSync(jarUsersRep + fileName)
  	  if (fs.existsSync(rep_4A + fileName)) fs.unlinkSync(rep_4A + fileName);
      if (fs.existsSync(rep_3C + fileName)) fs.unlinkSync(rep_3C + fileName);
      if (fs.existsSync(rep_3D + fileName)) fs.unlinkSync(rep_3D + fileName);
  	})
  	if (member.roles.has(role_4B.id)) member.removeRole(role_4B.id);

  } else if ((message.channel == chan_4C) && ((cmd == choice_4E)||(cmd == choice_4G)||(cmd == choice_4D)||(cmd == choice_4B))) { // CHAN_4C

  	if (cmd == choice_4E) member.addRole(role_4E).then(addRole => {
  	  fs.createFileSync(rep_4E + fileName)
  	  if (fs.existsSync(rep_4B + fileName)) fs.unlinkSync(rep_4B + fileName);
      if (fs.existsSync(rep_4D + fileName)) fs.unlinkSync(rep_4D + fileName);
      if (fs.existsSync(rep_4G + fileName)) fs.unlinkSync(rep_4G + fileName);
  	})
  	if (cmd == choice_4G) member.addRole(role_4G).then(addRole => {
  	  fs.createFileSync(rep_4G + fileName)
  	  if (fs.existsSync(rep_4B + fileName)) fs.unlinkSync(rep_4B + fileName);
      if (fs.existsSync(rep_4D + fileName)) fs.unlinkSync(rep_4D + fileName);
      if (fs.existsSync(rep_4E + fileName)) fs.unlinkSync(rep_4E + fileName);
  	})
  	if (cmd == choice_4D) member.addRole(role_4D).then(addRole => {
  	  fs.createFileSync(rep_4D + fileName)
  	  if (fs.existsSync(rep_4B + fileName)) fs.unlinkSync(rep_4B + fileName);
      if (fs.existsSync(rep_4E + fileName)) fs.unlinkSync(rep_4E + fileName);
      if (fs.existsSync(rep_4G + fileName)) fs.unlinkSync(rep_4G + fileName);
  	})
    if (cmd == choice_4B) member.addRole(role_4B).then(addRole => {
  	  fs.createFileSync(rep_4B + fileName)
  	  if (fs.existsSync(rep_4D + fileName)) fs.unlinkSync(rep_4D + fileName);
      if (fs.existsSync(rep_4E + fileName)) fs.unlinkSync(rep_4E + fileName);
      if (fs.existsSync(rep_4G + fileName)) fs.unlinkSync(rep_4G + fileName);
  	})
  	if (member.roles.has(role_4C.id)) member.removeRole(role_4C.id);

  } else if ((message.channel == chan_4D) && ((cmd == choice_4E)||(cmd == choice_4F)||(cmd == choice_4C)||(cmd == choice_4B))) { // CHAN_4D

  	if (cmd == choice_4E) member.addRole(role_4E).then(addRole => {
  	  fs.createFileSync(rep_4E + fileName)
  	  if (fs.existsSync(rep_4B + fileName)) fs.unlinkSync(rep_4B + fileName);
      if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
  	})
  	if (cmd == choice_4F) member.addRole(role_4F).then(addRole => {
  	  fs.createFileSync(rep_4F + fileName)
  	  if (fs.existsSync(rep_4B + fileName)) fs.unlinkSync(rep_4B + fileName);
      if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
      if (fs.existsSync(rep_4E + fileName)) fs.unlinkSync(rep_4E + fileName);
  	})
  	if (cmd == choice_4C) member.addRole(role_4C).then(addRole => {
  	  fs.createFileSync(rep_4C + fileName)
  	  if (fs.existsSync(rep_4B + fileName)) fs.unlinkSync(rep_4B + fileName);
      if (fs.existsSync(rep_4E + fileName)) fs.unlinkSync(rep_4E + fileName);
      if (fs.existsSync(rep_4G + fileName)) fs.unlinkSync(rep_4G + fileName);
  	})
    if (cmd == choice_4B) member.addRole(role_4B).then(addRole => {
  	  fs.createFileSync(rep_4B + fileName)
  	  if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
      if (fs.existsSync(rep_4E + fileName)) fs.unlinkSync(rep_4E + fileName);
      if (fs.existsSync(rep_4G + fileName)) fs.unlinkSync(rep_4G + fileName);
  	})
  	if (member.roles.has(role_4D.id)) member.removeRole(role_4D.id);

  } else if ((message.channel == chan_4E) && ((cmd == choice_4F)||(cmd == choice_4G)||(cmd == choice_4C)||(cmd == choice_4D))) { // CHAN_4E

  	if (cmd == choice_4F) member.addRole(role_4E).then(addRole => {
  	  fs.createFileSync(rep_4E + fileName)
  	  if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
  	  if (fs.existsSync(rep_4D + fileName)) fs.unlinkSync(rep_4D + fileName);
      if (fs.existsSync(rep_4G + fileName)) fs.unlinkSync(rep_4G + fileName);
  	})
  	if (cmd == choice_4G) member.addRole(role_4G).then(addRole => {
  	  fs.createFileSync(rep_4G + fileName)
  	  if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
  	  if (fs.existsSync(rep_4D + fileName)) fs.unlinkSync(rep_4D + fileName);
  	})
  	if (cmd == choice_4C) member.addRole(role_4D).then(addRole => {
  	  fs.createFileSync(rep_4D + fileName)
      if (fs.existsSync(rep_4D + fileName)) fs.unlinkSync(rep_4D + fileName);
      if (fs.existsSync(rep_4G + fileName)) fs.unlinkSync(rep_4G + fileName);
  	})
    if (cmd == choice_4D) member.addRole(role_4B).then(addRole => {
  	  fs.createFileSync(rep_4B + fileName)
  	  if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
      if (fs.existsSync(rep_4G + fileName)) fs.unlinkSync(rep_4G + fileName);
  	})
  	if (member.roles.has(role_4E.id)) member.removeRole(role_4E.id);

  } else if ((message.channel == chan_4G) && ((cmd == choice_4I)||(cmd == choice_4H)||(cmd == choice_4C)||(cmd == choice_4E))) { // CHAN_4G

  	if (cmd == choice_4I) member.addRole(role_4I).then(addRole => {
  	  fs.createFileSync(rep_4I + fileName)
  	  if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
  	  if (fs.existsSync(rep_4E + fileName)) fs.unlinkSync(rep_4E + fileName);
      if (fs.existsSync(rep_4H + fileName)) fs.unlinkSync(rep_4H + fileName);
  	})
  	if (cmd == choice_4H) member.addRole(role_4H).then(addRole => {
  	  fs.createFileSync(rep_4H + fileName)
  	  if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
  	  if (fs.existsSync(rep_4E + fileName)) fs.unlinkSync(rep_4E + fileName);
  	  if (fs.existsSync(rep_4I + fileName)) fs.unlinkSync(rep_4I + fileName);
  	})
  	if (cmd == choice_4C) member.addRole(role_4C).then(addRole => {
  	  fs.createFileSync(rep_4C + fileName)
      if (fs.existsSync(rep_4E + fileName)) fs.unlinkSync(rep_4E + fileName);
      if (fs.existsSync(rep_4H + fileName)) fs.unlinkSync(rep_4H + fileName);
      if (fs.existsSync(rep_4I + fileName)) fs.unlinkSync(rep_4I + fileName);
  	})
    if (cmd == choice_4E) member.addRole(role_4E).then(addRole => {
  	  fs.createFileSync(rep_4E + fileName)
  	  if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
  	  if (fs.existsSync(rep_4E + fileName)) fs.unlinkSync(rep_4E + fileName);
      if (fs.existsSync(rep_4H + fileName)) fs.unlinkSync(rep_4H + fileName);
  	})
  	if (member.roles.has(role_4G.id)) member.removeRole(role_4G.id);

  }

});

client.on("guildMemberRemove", (member) => { // l'utilisateur quitte avant d'avoir réagit au règlement
  var quitMsg = `${member.user.username} a quitté ${member.guild.name} avant d'avoir `;
  var userFileConf = startedUsersRep + member.id + '.js'
  
  if (!fs.existsSync(userFileConf)) {
  	enterChan.send(quitMsg + 'lancé la partie.')
  	console.log(quitMsg + 'lancé la partie')
  } else if (fs.existsSync(userFileConf)) {
  	fs.unlinkSync(userFileConf)
  	enterChan.send(quitMsg + 'trouvé les membres communauté')
  	console.log(quitMsg + 'trouvé les membres communauté')
  }

});

client.login(config.token);