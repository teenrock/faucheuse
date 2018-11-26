function startCmd(message, client, member, fs) {

  	if (!fs.existsSync(startedUsersRep + member.id + '.js')) {
  		fs.createFileSync(startedUsersRep + member.id + '.js')
  		console.log(` ${member.user.username} vient de se lancer dans le labyrinthe`)
  	} else return message.reply(`vous avez déjà lancée votre quête ! Ne perdez pas plus de temps !`)

  	message.reply(`votre quête à la recherche des membres de cette communauté vient de commencer !\n
En premier lieu, je vais vous demander de faire un premier choix entre l'une de ces **4 portes principales**:\n
 \u0031\u20E3 - La première vous fait suivre le cours d'une rivière.
 \u0032\u20E3 - La seconde nécessite de traverser un champs d'orties (ca pique mais on y survit).
 \u0033\u20E3 - La troisième ne vous permet pas de voir à l'horizon, il y a beaucoup trop de brouillard.
 \u0034\u20E3 - La quatrième (et dernière du choix) semble mener sur un jadin plutot bien fleurit.`)
  	.then(msg => {
      msg.react("\u0031\u20E3").then(msgReact0 => {
        msg.react("\u0032\u20E3").then(msgReact1 => {
      	  msg.react("\u0033\u20E3").then(msgReact2 => {
      	    msg.react("\u0034\u20E3")
      		})
        })
      })
          
      // USERS PRINCIPALS DOORS CHOICE
      client.on("messageReactionAdd", (reaction, user, channel) => {

        if (user.id != client.user.id) { // is not bot user

          if (user.id != message.author.id) {
            enterChan.send(`**${user}** est-ce votre quête ?? :angry:\n\nPour débuter la votre, je vous invite à taper: **\`!start\`**`).then(msg => reaction.remove() && msg.delete(7500));

          } else if ((user.id == message.author.id) && (reaction.message.id == msg.id)) {

            if (reaction.emoji == "\u0031\u20E3") {
              compl = `opté(e) pour suivre le cours de ${rivChan}`;
              role = rivRole
              rep = rivUsersRep
              chan = rivChan
              nextMsg = rivMsg
            }
            if (reaction.emoji == "\u0032\u20E3") {
              compl = `décidé(e) de passer par ${ortChan}`;
              role = ortRole
              rep = ortUsersRep
              chan = ortChan
              nextMsg = ortMsg
            }
            if (reaction.emoji == "\u0033\u20E3") {
              compl = `choisi de passer par ${brouChan}`;
              role = brouRole
              rep = brouUsersRep
              chan = brouChan
              nextMsg = brouMsg
            }
            if (reaction.emoji == "\u0034\u20E3") {
              compl = `décidé de passer par ${jarChan}`;
              role = jarRole
              rep = jarUsersRep
              chan = jarChan
              nextMsg = jarMsg
            }
            if ((msg != undefined)||(msg != null)) msg.delete();
            member.addRole(role).then(addRole => {
            enterChan.overwritePermissions(member, { SEND_MESSAGES: false })
            fs.createFileSync(rep + user.id + '.js')
            enterChan.send(`**${message.author.username}** vous avez ${compl} pour valider votre quête.\n\n**Bon courage !** :wink:\n\n**PS:** Vous pouvez recommencer du début à l'aide de la commande: **\`!restart\`**`).then(msg => msg.delete(10000))
            chan.send(nextMsg).then(msg => msg.delete(10000))
          })   
        }
            
      }
    })

  })

}

module.exports = startCmd;