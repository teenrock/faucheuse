function startCmd(message, client, member, fs) {

  var msgDoor1 = `**\`!${choice_1A}\`** ou **\`!${choice_1B}\`**`;
  /*`**${member}** voilà que vous avancez tranquillement en suivant le bord de la rivière.\nUn choix s'offre à vous...\nSur votre droite vous appercevez un pont en direction du quel semblent provenir un bruit de foule...\
Néanmoins, il ne semble pas très solide :confused:\n
Préférez-vous:\n\u0031\u20E3 - Prendre le risque de traverser le pont ?\ntapez: **\`!traverser le pont\`**\n\u0032\u20E3 - Continuer votre route et traverser plus tard ?\ntapez: **\`!continuer ma route\`**`;
*/
  var msgDoor2 = `**\`!${choice_2A}\`** ou **\`!${choice_2B}\`**`;
  /*`**${member}** les orties vous piquent les jambes !\nCela commence à vous agacer...\n\nVous avez le choix, préférez-vous:
\u0031\u20E3 - Continuer à travers le champs d'orties ? (ca démange un peu mais vous êtes un warrior après tout !)\ntapez: **\`!traverser le champs d'orties\`**
\u0032\u20E3 - Couper à travers champs et mettre un terme à cette torture ?\ntapez: **\`!couper à travers champs\`**`;
*/
  var msgDoor3 = `**\`!${choice_3A}\`** ou **\`!${choice_3B}\`**`;
  /*`**${member}** pas facile d'avancer quand on y voit rien à ce point... :confused:\nLe brouillard semble s'estomper un peu plus loin, vous pouvez:\n
\u0031\u20E3 - Continuer pour sortir du brouillard\ntapez: **\`!sortir du brouillard\`**\n\u0032\u20E3 - Continuer dans le brouillard ?\ntapez: **\`!continuer dans le brouillard\`**`;
*/
  var msgDoor4 = `**\`!${choice_4A}\`** ou **\`!${choice_4B}\`**`;
  /*`**${member}** vous avez maintenant parcouru(e) quelques kilomètres, la vue est agréable mais ne vous laissez pas endormir par le paysage !\nUn peu plus loin sur votre droite vous semblez percevoir un santier mais...`
*/

  	if (!fs.existsSync(startedUsersRep + member.id + '.js')) {
  		fs.createFileSync(startedUsersRep + member.id + '.js')
  		console.log(` ${member.user.username} vient de se lancer dans le labyrinthe`)
  	} else return message.reply(`vous avez déjà lancée votre quête ! Ne perdez pas plus de temps !\n\n**PS:** Si vous vous retrouvé bloqué quelqu'en soit la raison,
vous pouvez envoyer en privé à ${bot.user} la commande: **\`!restart\`**\n pour vous vous permettre de recommencer votre quête.`).then(msg => msg.delete(5000))

  	message.reply(`votre quête à la recherche des membres de cette communauté vient de commencer !\n
En premier lieu, je vais vous demander de faire un premier choix entre l'une de ces **4 portes principales**:\n
 \u0031\u20E3 - **${chanDoor1}**
 \u0032\u20E3 - **${chanDoor2}**
 \u0033\u20E3 - **${chanDoor3}**
 \u0034\u20E3 - **${chanDoor4}**`)
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
              compl = `opté(e) pour la ${chanDoor1}`;
              role = door1Role
              rep = door1UsersRep
              file = "./resources/element_eau.png"
              minFile = "./resources/element_eau_min.png"
              chan = chanDoor1
              nextMsg = msgDoor1
            }
            if (reaction.emoji == "\u0032\u20E3") {
              compl = `décidé(e) de passer par la ${chanDoor2}`;
              role = door2Role
              rep = door2UsersRep
              file = "./resources/element_feu.png"
              minFile = "./resources/element_feu_min.png"
              chan = chanDoor2
              nextMsg = msgDoor2
            }
            if (reaction.emoji == "\u0033\u20E3") {
              compl = `choisi de passer par la ${chanDoor3}`;
              role = door3Role
              rep = door3UsersRep
              file = "./resources/element_air.png"
              minFile = "./resources/element_air_min.png"
              chan = chanDoor3
              nextMsg = msgDoor3
            }
            if (reaction.emoji == "\u0034\u20E3") {
              compl = `décidé de passer par la ${chanDoor4}`;
              role = door4Role
              rep = door4UsersRep
              file = "./resources/element_terre.png"
              minFile = "./resources/element_terre_min.png"
              chan = chanDoor4
              nextMsg = msgDoor4
            }
            if ((msg != undefined)||(msg != null)) msg.delete();
            member.addRole(role).then(addRole => {
            enterChan.overwritePermissions(member, { SEND_MESSAGES: false })
            fs.createFileSync(rep + user.id + '.js')
            enterChan.send(`**${message.author.username}** vous avez ${compl} pour valider votre quête.`, {files:[minFile]})
            .then(msg => enterChan.send(`**Bon courage !** :wink:\n\n**PS:** Vous pouvez recommencer du début à l'aide de la commande: **\`!restart\`**`).then(msg => msg.delete(10000)) && msg.delete(10000))
            chan.send(nextMsg, {files:[file]}).then(msg => msg.delete(15000))
          })   
        }
            
      }
    })

  })

}

module.exports = startCmd;