function restartCmd(message, client, member, fs) {

  	console.log(` ${member.user.username} a souhaité recommancé le labyrinthe`)
  	if (fs.existsSync(startedUsersRep + member.id + '.js')) fs.unlinkSync(startedUsersRep + member.id + '.js') && console.log(` Son fichier de configuration situé dans le dossier ${folder} a été supprimé`)
    setTimeout(function() {
      labyMainRolesList.forEach(role => {
        if (member.roles.has(role.id)) member.removeRole(role.id) && console.log(` Il a perdu le rôle ${role.name}`)
      })
      labyRolesList.forEach(role => {
        if (member.roles.has(role.id)) member.removeRole(role.id) && console.log(` Il a perdu le rôle ${role.name}`)
      })
      labyUsersFoldersList.forEach(folder => {
  	    if (fs.existsSync(folder + member.id + '.js')) fs.unlinkSync(folder + member.id + '.js') && console.log(` Son fichier de configuration situé dans le dossier ${folder} a été supprimé`)
  	  })
      enterChan.overwritePermissions(member, { SEND_MESSAGES: true })
    }, 6 * 1000)

	if (message.channel == enterChan) {
	  message.reply(`vous souhaitez (re)commencer votre quête ?\n\nJe vous invite taper ici-même la commande: **\`!start\`**`).then(msg => msg.delete(7000))
	} else {
	  message.reply(`vous souhaitez (re)commencer votre quête ?\n\nJe vous invite à retourner sur :\n\n**>>> ${enterChan} <<<**\n\nTapez-y la commande: **\`!start\`**`).then(msg => msg.delete(7000));
	}

}

module.exports = restartCmd;