function comebackCmd(message, prefix, client, member, msgChan, cmd, fileName, fs) {
  
  var comebackCmd = ((cmd == "faire demi-tour")||(cmd == "faire demi tour"));
  var doorCBmsg = `à ce stade votre seul moyen de faire marche arrière est de recommencer.\nSi c'est ce que vous souhaitez, je vous invite à taper ici-même la commande: **\`!restart\`**`;
  
  if (comebackCmd) {

  	// 4 PRINCIPALS DOORS
    if (message.channel == chanDoor1) {
      if ((!fs.existsSync(rep_1A + fileName) && (!fs.existsSync(rep_1B + fileName)))) { // l'utilisateur ne provient d'aucune direction
      	return message.reply(doorCBmsg).then(reply => reply.delete(10000));
      } else if (fs.existsSync(rep_1A + fileName)) {
      	member.addRole(role_1A).then(addRole => member.removeRole(door1Role));
      	if (fs.existsSync(rep_1B + fileName)) fs.unlinkSync(rep_1B + fileName)
      } else if (fs.existsSync(rep_1B + fileName)) {
      	member.addRole(role_1B).then(addRole => member.removeRole(door1Role));
      	if (fs.existsSync(rep_1A + fileName)) fs.unlinkSync(rep_1A + fileName)
      }

    } else if (message.channel == chanDoor2) {
      if ((!fs.existsSync(rep_2A + fileName) && (!fs.existsSync(rep_2B + fileName)))) { // l'utilisateur ne provient d'aucune direction
      	return message.reply(doorCBmsg).then(reply => reply.delete(10000));
      } else if (fs.existsSync(rep_2A + fileName)) {
      	member.addRole(role_2A).then(addRole => member.removeRole(door2Role));
      } else if (fs.existsSync(rep_2B + fileName)) {
      	member.addRole(role_2B).then(addRole => member.removeRole(door2Role));
      }

    } else if (message.channel == chanDoor3) {
      if ((!fs.existsSync(rep_3A + fileName) && (!fs.existsSync(rep_3B + fileName)))) { // l'utilisateur ne provient d'aucune direction
      	return message.reply(doorCBmsg).then(reply => reply.delete(10000));
      } else if (fs.existsSync(rep_3A + fileName)) {
      	member.addRole(role_3A).then(addRole => member.removeRole(door3Role));
      } else if (fs.existsSync(rep_3B + fileName)) {
      	member.addRole(role_3B).then(addRole => member.removeRole(door3Role));
      }

    } else if (message.channel == chanDoor4) {
      if ((!fs.existsSync(rep_4A + fileName) && (!fs.existsSync(rep_4B + fileName)))) { // l'utilisateur ne provient d'aucune direction
      	return message.reply(doorCBmsg).then(reply => reply.delete(10000));
      } else if (fs.existsSync(rep_4A + fileName)) {
      	member.addRole(role_4A).then(addRole => member.removeRole(door4Role));
      } else if (fs.existsSync(rep_4B + fileName)) {
      	member.addRole(role_4B).then(addRole => member.removeRole(door4Role));
      }

    // LABYRINTHE CHANNELS
    } else if (msgChan == chan_1A) {
  	  if (fs.existsSync(door1UsersRep + fileName)) {
  	    member.addRole(door1Role);
  	    if (fs.existsSync(rep_1B + fileName)) fs.unlinkSync(rep_1B + fileName);
  	  } else if (fs.existsSync(rep_1B + fileName)) {
        member.addRole(role_1B);
        if (fs.existsSync(door1UsersRep + fileName)) fs.unlinkSync(door1UsersRep + fileName);
  	  }
  	  member.removeRole(role_1A);

    } else if (msgChan == chan_1B) {
      if (fs.existsSync(door1UsersRep + fileName)) {
  	    member.addRole(door1Role);
  	    if (fs.existsSync(rep_1A + fileName)) fs.unlinkSync(rep_1A + fileName);
  	} else if (fs.existsSync(rep_1A + fileName)) {
      member.addRole(role_1A);
      if (fs.existsSync(door1UsersRep + fileName)) fs.unlinkSync(door1UsersRep + fileName);
  	} else if (fs.existsSync(rep_1D + fileName)) {
      if (fs.existsSync(door1UsersRep + fileName)) fs.unlinkSync(door1UsersRep + fileName);
      if (fs.existsSync(rep_1A + fileName)) fs.unlinkSync(rep_1A + fileName);
      member.addRole(role_1D);
  	}
  	member.removeRole(role_1B);

  } else if (msgChan == chan_1D) {

    if (fs.existsSync(rep_1B + fileName)) {
  	  member.addRole(role_1B);
      if (fs.existsSync(rep_1E + fileName)) fs.unlinkSync(rep_1E + fileName);
      if (fs.existsSync(rep_1F + fileName)) fs.unlinkSync(rep_1F + fileName);
  	} else if (fs.existsSync(rep_1E + fileName)) {
      member.addRole(role_1E);
      if (fs.existsSync(rep_1B + fileName)) fs.unlinkSync(rep_1B + fileName);
      if (fs.existsSync(rep_1F + fileName)) fs.unlinkSync(rep_1F + fileName);
  	} else if (fs.existsSync(rep_1F + fileName)) {
      member.addRole(role_1F);
      if (fs.existsSync(rep_1B + fileName)) fs.unlinkSync(rep_1B + fileName);
      if (fs.existsSync(rep_1E + fileName)) fs.unlinkSync(rep_1E + fileName);
  	}
  	member.removeRole(role_1D);

  } else if (msgChan == chan_1E) {

    if (fs.existsSync(rep_1D + fileName)) {
  	  member.addRole(role_1D);
      if (fs.existsSync(rep_1F + fileName)) fs.unlinkSync(rep_1F + fileName);
  	} else if (fs.existsSync(rep_1F + fileName)) {
      member.addRole(role_1F);
      if (fs.existsSync(rep_1D + fileName)) fs.unlinkSync(rep_1D + fileName);
  	}
  	member.removeRole(role_1E);

  } else if (msgChan == chan_1F) {
    
    if (fs.existsSync(rep_1D + fileName)) {
  	  member.addRole(role_1D);
      if (fs.existsSync(rep_1E + fileName)) fs.unlinkSync(rep_1E + fileName);
      if (fs.existsSync(rep_2A + fileName)) fs.unlinkSync(rep_2A + fileName);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
  	} else if (fs.existsSync(rep_1E + fileName)) {
      member.addRole(role_1E);
      if (fs.existsSync(rep_1D + fileName)) fs.unlinkSync(rep_1D + fileName);
      if (fs.existsSync(rep_2A + fileName)) fs.unlinkSync(rep_2A + fileName);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
  	} else if (fs.existsSync(rep_2A + fileName)) {
      member.addRole(role_2A);
      if (fs.existsSync(rep_1D + fileName)) fs.unlinkSync(rep_1D + fileName);
      if (fs.existsSync(rep_1E + fileName)) fs.unlinkSync(rep_1E + fileName);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
  	} else if (fs.existsSync(rep_2C + fileName)) {
      member.addRole(role_2C);
      if (fs.existsSync(rep_1D + fileName)) fs.unlinkSync(rep_1D + fileName);
      if (fs.existsSync(rep_1E + fileName)) fs.unlinkSync(rep_1E + fileName);
      if (fs.existsSync(rep_2A + fileName)) fs.unlinkSync(rep_2A + fileName);
  	}
  	member.removeRole(role_1F);

  } else if (msgChan == chan_2A) {
    if (fs.existsSync(door2UsersRep + fileName)) {
  	  member.addRole(door2Role);
      if (fs.existsSync(rep_1F + fileName)) fs.unlinkSync(rep_1F + fileName);
      if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
  	} else if (fs.existsSync(rep_2B + fileName)) {
      member.addRole(role_2B);
      if (fs.existsSync(door2UsersRep + fileName)) fs.unlinkSync(door2UsersRep + fileName);
      if (fs.existsSync(rep_1F + fileName)) fs.unlinkSync(rep_1F + fileName);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
  	} else if (fs.existsSync(rep_2C + fileName)) {
      member.addRole(role_2C);
      if (fs.existsSync(door2UsersRep + fileName)) fs.unlinkSync(door2UsersRep + fileName);
      if (fs.existsSync(rep_1F + fileName)) fs.unlinkSync(rep_1F + fileName);
      if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
  	} else if (fs.existsSync(rep_1F + fileName)) {
      member.addRole(role_1F);
      if (fs.existsSync(door2UsersRep + fileName)) fs.unlinkSync(door2UsersRep + fileName);
      if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
  	}
  	member.removeRole(role_2A);

  } else if (msgChan == chan_2B) {
  	if (fs.existsSync(door2UsersRep + fileName)) {
  	  member.addRole(door2Role);
      if (fs.existsSync(rep_2A + fileName)) fs.unlinkSync(rep_2A + fileName);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
      if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
  	} else if (fs.existsSync(rep_2A + fileName)) {
      member.addRole(role_2A);
      if (fs.existsSync(door2UsersRep + fileName)) fs.unlinkSync(door2UsersRep + fileName);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
      if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
  	} else if (fs.existsSync(rep_2C + fileName)) {
      member.addRole(role_2C);
      if (fs.existsSync(door2UsersRep + fileName)) fs.unlinkSync(door2UsersRep + fileName);
      if (fs.existsSync(rep_2A + fileName)) fs.unlinkSync(rep_2A + fileName);
      if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
  	} else if (fs.existsSync(rep_2D + fileName)) {
      member.addRole(role_2D);
      if (fs.existsSync(door2UsersRep + fileName)) fs.unlinkSync(door2UsersRep + fileName);
      if (fs.existsSync(rep_2A + fileName)) fs.unlinkSync(rep_2A + fileName);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
  	}
  	member.removeRole(role_2B);

  } else if (msgChan == chan_2C) {
  	if (fs.existsSync(rep_1F + fileName)) {
  	  member.addRole(role_1F);
      if (fs.existsSync(rep_2A + fileName)) fs.unlinkSync(rep_2A + fileName);
      if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
      if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
  	} else if (fs.existsSync(rep_2A + fileName)) {
      member.addRole(role_2A);
      if (fs.existsSync(rep_1F + fileName)) fs.unlinkSync(rep_1F + fileName);
      if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
      if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
  	} else if (fs.existsSync(rep_2B + fileName)) {
      member.addRole(role_2B);
      if (fs.existsSync(rep_1F + fileName)) fs.unlinkSync(rep_1F + fileName);
      if (fs.existsSync(rep_2A + fileName)) fs.unlinkSync(rep_2A + fileName);
      if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
  	} else if (fs.existsSync(rep_2D + fileName)) {
      member.addRole(role_2D);
      if (fs.existsSync(rep_1F + fileName)) fs.unlinkSync(rep_1F + fileName);
      if (fs.existsSync(rep_2A + fileName)) fs.unlinkSync(rep_2A + fileName);
      if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
  	}
  	member.removeRole(role_2C);

  } else if (msgChan == chan_2D) {
  	if (fs.existsSync(rep_2B + fileName)) {
  	  member.addRole(role_2B);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
      if (fs.existsSync(rep_2E + fileName)) fs.unlinkSync(rep_2E + fileName);
      if (fs.existsSync(rep_2F + fileName)) fs.unlinkSync(rep_2F + fileName);
  	} else if (fs.existsSync(rep_2C + fileName)) {
      member.addRole(role_2C);
      if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
      if (fs.existsSync(rep_2E + fileName)) fs.unlinkSync(rep_2E + fileName);
      if (fs.existsSync(rep_2F + fileName)) fs.unlinkSync(rep_2F + fileName);
  	} else if (fs.existsSync(rep_2E + fileName)) {
      member.addRole(role_2E);
      if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
      if (fs.existsSync(rep_2F + fileName)) fs.unlinkSync(rep_2F + fileName);
  	} else if (fs.existsSync(rep_2F + fileName)) {
      member.addRole(role_2F);
      if (fs.existsSync(rep_2B + fileName)) fs.unlinkSync(rep_2B + fileName);
      if (fs.existsSync(rep_2C + fileName)) fs.unlinkSync(rep_2C + fileName);
      if (fs.existsSync(rep_2E + fileName)) fs.unlinkSync(rep_2E + fileName);
  	}
  	member.removeRole(role_2D);

  } else if (msgChan == chan_2E) {
  	if (fs.existsSync(rep_2D + fileName)) {
  	  member.addRole(role_2D);
      if (fs.existsSync(rep_2F + fileName)) fs.unlinkSync(rep_2F + fileName);
      if (fs.existsSync(rep_3H + fileName)) fs.unlinkSync(rep_3H + fileName);
  	} else if (fs.existsSync(rep_2F + fileName)) {
      member.addRole(role_2F);
      if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
      if (fs.existsSync(rep_3H + fileName)) fs.unlinkSync(rep_3H + fileName);
  	} else if (fs.existsSync(rep_3H + fileName)) {
      member.addRole(role_3H);
      if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
      if (fs.existsSync(rep_2F + fileName)) fs.unlinkSync(rep_2F + fileName);
  	} else if (!fs.existsSync(rep_2D + fileName) && !fs.existsSync(rep_2F + fileName) && !fs.existsSync(rep_3H + fileName)) {
      message.channel.send(`**${member.user.username}** vous avez été téléporté.\nLe téléporteur est à sens unique, il ne peut vous ramener à votre précédent emplacement.\nSi vous ne savez pas quoi faire, je vous invite à taper: **\`!choix\`**`)
    }
  	member.removeRole(role_2E);

  } else if (msgChan == chan_2F) {
    if (fs.existsSync(rep_2D + fileName)) {
  	  member.addRole(role_2D);
      if (fs.existsSync(rep_2E + fileName)) fs.unlinkSync(rep_2E + fileName);
      if (fs.existsSync(rep_2H + fileName)) fs.unlinkSync(rep_2H + fileName);
  	} else if (fs.existsSync(rep_2E + fileName)) {
      member.addRole(role_2E);
      if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
      if (fs.existsSync(rep_2H + fileName)) fs.unlinkSync(rep_2H + fileName);
  	} else if (fs.existsSync(rep_2H + fileName)) {
      member.addRole(role_2H);
      if (fs.existsSync(rep_2D + fileName)) fs.unlinkSync(rep_2D + fileName);
      if (fs.existsSync(rep_2E + fileName)) fs.unlinkSync(rep_2E + fileName);
  	}
  	member.removeRole(role_2F);

  } else if (msgChan == chan_2H) {
  	if (fs.existsSync(rep_2F + fileName)) {
  	  member.addRole(role_2F);
  	}
  	member.removeRole(role_2H);

  } else if (msgChan == chan_3A) {
    if (fs.existsSync(door3UsersRep + fileName)) {
      member.addRole(door3Role);
      if (fs.existsSync(rep_3B + fileName)) fs.unlinkSync(rep_3B + fileName);
  	} else if (fs.existsSync(rep_3B + fileName)) {
      member.addRole(role_3B);
      if (fs.existsSync(door3UsersRep + fileName)) fs.unlinkSync(door3UsersRep + fileName);
  	}
  	member.removeRole(role_3A);

  } else if (msgChan == chan_3B) {
  	if (fs.existsSync(door3UsersRep + fileName)) {
  	  member.addRole(door3Role);
      if (fs.existsSync(rep_3A + fileName)) fs.unlinkSync(rep_3A + fileName);
      if (fs.existsSync(rep_3C + fileName)) fs.unlinkSync(rep_3C + fileName);
      if (fs.existsSync(rep_3D + fileName)) fs.unlinkSync(rep_3D + fileName);
  	} else if (fs.existsSync(rep_3A + fileName)) {
      member.addRole(role_3A);
      if (fs.existsSync(door3UsersRep + fileName)) fs.unlinkSync(door3UsersRep + fileName);
      if (fs.existsSync(rep_3C + fileName)) fs.unlinkSync(rep_3C + fileName);
      if (fs.existsSync(rep_3D + fileName)) fs.unlinkSync(rep_3D + fileName);
  	} else if (fs.existsSync(rep_3C + fileName)) {
      member.addRole(role_3C);
      if (fs.existsSync(door3UsersRep + fileName)) fs.unlinkSync(door3UsersRep + fileName);
      if (fs.existsSync(rep_3A + fileName)) fs.unlinkSync(rep_3A + fileName);
      if (fs.existsSync(rep_3D + fileName)) fs.unlinkSync(rep_3D + fileName);
  	} else if (fs.existsSync(rep_3D + fileName)) {
      member.addRole(role_3D);
      if (fs.existsSync(door3UsersRep + fileName)) fs.unlinkSync(door3UsersRep + fileName);
      if (fs.existsSync(rep_3A + fileName)) fs.unlinkSync(rep_3A + fileName);
      if (fs.existsSync(rep_3C + fileName)) fs.unlinkSync(rep_3C + fileName);
  	}
  	member.removeRole(role_3B);

  } else if (msgChan == chan_3C) {
  	if (fs.existsSync(rep_3B + fileName)) {
      member.addRole(role_3B);
      if (fs.existsSync(rep_3D + fileName)) fs.unlinkSync(rep_3D + fileName);
  	} else if (fs.existsSync(rep_3D + fileName)) {
      member.addRole(role_3D);
      if (fs.existsSync(rep_3B + fileName)) fs.unlinkSync(rep_3B + fileName);
  	}
  	member.removeRole(role_3C);

  } else if (msgChan == chan_3D) {
  	if (fs.existsSync(rep_3B + fileName)) {
  	  member.addRole(role_3B);
      if (fs.existsSync(rep_3C + fileName)) fs.unlinkSync(rep_3C + fileName);
      if (fs.existsSync(rep_3F + fileName)) fs.unlinkSync(rep_3F + fileName);
  	} else if (fs.existsSync(rep_3C + fileName)) {
      member.addRole(role_3C);
      if (fs.existsSync(rep_3B + fileName)) fs.unlinkSync(rep_3B + fileName);
      if (fs.existsSync(rep_3F + fileName)) fs.unlinkSync(rep_3F + fileName);
  	} else if (fs.existsSync(rep_3F + fileName)) {
      member.addRole(role_3F);
      if (fs.existsSync(rep_3B + fileName)) fs.unlinkSync(rep_3B + fileName);
      if (fs.existsSync(rep_3C + fileName)) fs.unlinkSync(rep_3C + fileName);
  	}
  	member.removeRole(role_3D);

  } else if (msgChan == chan_3F) {
  	if (fs.existsSync(rep_3D + fileName)) {
  	  member.addRole(role_3D);
      if (fs.existsSync(rep_3H + fileName)) fs.unlinkSync(rep_3H + fileName);
      if (fs.existsSync(rep_3G + fileName)) fs.unlinkSync(rep_3G + fileName);
  	} else if (fs.existsSync(rep_3G + fileName)) {
      member.addRole(role_3G);
      if (fs.existsSync(rep_3D + fileName)) fs.unlinkSync(rep_3D + fileName);
      if (fs.existsSync(rep_3H + fileName)) fs.unlinkSync(rep_3H + fileName);
  	} else if (fs.existsSync(rep_3H + fileName)) {
      member.addRole(role_3H);
      if (fs.existsSync(rep_3D + fileName)) fs.unlinkSync(rep_3D + fileName);
      if (fs.existsSync(rep_3G + fileName)) fs.unlinkSync(rep_3G + fileName);
  	}
  	member.removeRole(role_3F);

  } else if (msgChan == chan_3G) {
  	if (fs.existsSync(rep_3F + fileName)) {
  	  member.addRole(role_3F);
      if (fs.existsSync(rep_3H + fileName)) fs.unlinkSync(rep_3H + fileName);
      if (fs.existsSync(rep_3I + fileName)) fs.unlinkSync(rep_3I + fileName);
      if (fs.existsSync(rep_3J + fileName)) fs.unlinkSync(rep_3J + fileName);
  	} else if (fs.existsSync(rep_3H + fileName)) {
      member.addRole(role_3H);
      if (fs.existsSync(rep_3F + fileName)) fs.unlinkSync(rep_3F + fileName);
      if (fs.existsSync(rep_3I + fileName)) fs.unlinkSync(rep_3I + fileName);
      if (fs.existsSync(rep_3J + fileName)) fs.unlinkSync(rep_3J + fileName);
  	} else if (fs.existsSync(rep_3I + fileName)) {
      member.addRole(role_3I);
      if (fs.existsSync(rep_3F + fileName)) fs.unlinkSync(rep_3F + fileName);
      if (fs.existsSync(rep_3H + fileName)) fs.unlinkSync(rep_3H + fileName);
      if (fs.existsSync(rep_3J + fileName)) fs.unlinkSync(rep_3J + fileName);
  	} else if (fs.existsSync(rep_3J + fileName)) {
      member.addRole(role_3J);
      if (fs.existsSync(rep_3F + fileName)) fs.unlinkSync(rep_3F + fileName);
      if (fs.existsSync(rep_3H + fileName)) fs.unlinkSync(rep_3H + fileName);
      if (fs.existsSync(rep_3I + fileName)) fs.unlinkSync(rep_3I + fileName);
  	}
  	member.removeRole(role_3G);

  } else if (msgChan == chan_3H) {
    if (fs.existsSync(rep_2E + fileName)) {
  	  member.addRole(role_2E);
      if (fs.existsSync(rep_3F + fileName)) fs.unlinkSync(rep_3F + fileName);
      if (fs.existsSync(rep_3G + fileName)) fs.unlinkSync(rep_3G + fileName);
  	} else if (fs.existsSync(rep_3F + fileName)) {
      member.addRole(role_3F);
      if (fs.existsSync(rep_2E + fileName)) fs.unlinkSync(rep_2E + fileName);
      if (fs.existsSync(rep_3G + fileName)) fs.unlinkSync(rep_3G + fileName);
  	} else if (fs.existsSync(rep_3G + fileName)) {
      member.addRole(role_3G);
      if (fs.existsSync(rep_2E + fileName)) fs.unlinkSync(rep_2E + fileName);
      if (fs.existsSync(rep_3F + fileName)) fs.unlinkSync(rep_3F + fileName);
  	}
  	member.removeRole(role_3H);

  } else if (msgChan == chan_3I) {
    if (fs.existsSync(rep_3G + fileName)) {
      member.addRole(role_3G);
      if (fs.existsSync(rep_3J + fileName)) fs.unlinkSync(rep_3J + fileName);
    } else if (fs.existsSync(rep_3J + fileName)) { // CHANNEL ARRIVEE LABYRINTHE
      member.addRole(role_3J);
      if (fs.existsSync(rep_3G + fileName)) fs.unlinkSync(rep_3G + fileName);
    }
    member.removeRole(role_3I);

  } else if (msgChan == chan_3J) {
    if (fs.existsSync(rep_3G + fileName)) {
      member.addRole(role_3G);
      if (fs.existsSync(rep_3I + fileName)) fs.unlinkSync(rep_3I + fileName);
  	} else if (fs.existsSync(rep_3I + fileName)) { // CHANNEL ARRIVEE LABYRINTHE
      member.addRole(role_3I);
      if (fs.existsSync(rep_3J + fileName)) fs.unlinkSync(rep_3J + fileName);
  	}
  	member.removeRole(role_3J);

  } else if (msgChan == chan_4A) {
  	if (fs.existsSync(door4UsersRep + fileName)) {
  	  member.addRole(door4Role);
      if (fs.existsSync(rep_4B + fileName)) fs.unlinkSync(rep_4B + fileName);
  	} else if (fs.existsSync(rep_4B + fileName)) {
      member.addRole(role_4B);
      if (fs.existsSync(rep_4A + fileName)) fs.unlinkSync(rep_4A + fileName);
  	}
  	member.removeRole(role_4A);

  } else if (msgChan == chan_4B) {
    if (fs.existsSync(door4UsersRep + fileName)) {
  	  member.addRole(door4Role);
      if (fs.existsSync(rep_4A + fileName)) fs.unlinkSync(rep_4A + fileName);
      if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
      if (fs.existsSync(rep_4D + fileName)) fs.unlinkSync(rep_4D + fileName);
  	} else if (fs.existsSync(rep_4A + fileName)) {
      member.addRole(role_4A);
      if (fs.existsSync(door4UsersRep + fileName)) fs.unlinkSync(door4UsersRep + fileName);
      if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
      if (fs.existsSync(rep_4D + fileName)) fs.unlinkSync(rep_4D + fileName);
  	} else if (fs.existsSync(rep_4C + fileName)) {
      member.addRole(role_4C);
      if (fs.existsSync(door4UsersRep + fileName)) fs.unlinkSync(door4UsersRep + fileName);
      if (fs.existsSync(rep_4A + fileName)) fs.unlinkSync(rep_4A + fileName);
      if (fs.existsSync(rep_4D + fileName)) fs.unlinkSync(rep_4D + fileName);
  	} else if (fs.existsSync(rep_4D + fileName)) {
      member.addRole(role_4D);
      if (fs.existsSync(door4UsersRep + fileName)) fs.unlinkSync(door4UsersRep + fileName);
      if (fs.existsSync(rep_4A + fileName)) fs.unlinkSync(rep_4A + fileName);
      if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
  	}
  	member.removeRole(role_4B);

  } else if (msgChan == chan_4C) {
    if (fs.existsSync(rep_4B + fileName)) {
  	  member.addRole(role_4B);
      if (fs.existsSync(rep_4D + fileName)) fs.unlinkSync(rep_4D + fileName);
      if (fs.existsSync(rep_4E + fileName)) fs.unlinkSync(rep_4E + fileName);
      if (fs.existsSync(rep_4G + fileName)) fs.unlinkSync(rep_4G + fileName);
  	} else if (fs.existsSync(rep_4D + fileName)) {
      member.addRole(role_4D);
      if (fs.existsSync(rep_4B + fileName)) fs.unlinkSync(rep_4B + fileName);
      if (fs.existsSync(rep_4E + fileName)) fs.unlinkSync(rep_4E + fileName);
      if (fs.existsSync(rep_4G + fileName)) fs.unlinkSync(rep_4G + fileName);
  	} else if (fs.existsSync(rep_4E + fileName)) {
      member.addRole(role_4E);
      if (fs.existsSync(rep_4B + fileName)) fs.unlinkSync(rep_4B + fileName);
      if (fs.existsSync(rep_4D + fileName)) fs.unlinkSync(rep_4D + fileName);
      if (fs.existsSync(rep_4G + fileName)) fs.unlinkSync(rep_4G + fileName);
  	} else if (fs.existsSync(rep_4G + fileName)) {
      member.addRole(role_4G);
      if (fs.existsSync(rep_4B + fileName)) fs.unlinkSync(rep_4B + fileName);
      if (fs.existsSync(rep_4D + fileName)) fs.unlinkSync(rep_4D + fileName);
      if (fs.existsSync(rep_4E + fileName)) fs.unlinkSync(rep_4E + fileName);
  	}
  	member.removeRole(role_4C);

  } else if (msgChan == chan_4D) {
    if (fs.existsSync(rep_4B + fileName)) {
      member.addRole(role_4B);
      if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
      if (fs.existsSync(rep_4E + fileName)) fs.unlinkSync(rep_4E + fileName);
  	} else if (fs.existsSync(rep_4C + fileName)) {
      member.addRole(role_4C);
      if (fs.existsSync(rep_4B + fileName)) fs.unlinkSync(rep_4B + fileName);
      if (fs.existsSync(rep_4E + fileName)) fs.unlinkSync(rep_4E + fileName);
  	} else if (fs.existsSync(rep_4E + fileName)) {
      member.addRole(role_4E);
      if (fs.existsSync(rep_4B + fileName)) fs.unlinkSync(rep_4B + fileName);
      if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
  	}
  	member.removeRole(role_4D);

  } else if (msgChan == chan_4E) {
    if (fs.existsSync(rep_4C + fileName)) {
      member.addRole(role_4C);
      if (fs.existsSync(rep_4D + fileName)) fs.unlinkSync(rep_4D + fileName);
      if (fs.existsSync(rep_4I + fileName)) fs.unlinkSync(rep_4I + fileName);
  	} else if (fs.existsSync(rep_4D + fileName)) {
      member.addRole(role_4D);
      if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
      if (fs.existsSync(rep_4I + fileName)) fs.unlinkSync(rep_4I + fileName);
  	} else if (fs.existsSync(rep_4I + fileName)) {
      member.addRole(role_4I);
      if (fs.existsSync(rep_4D + fileName)) fs.unlinkSync(rep_4D + fileName);
      if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
  	}
  	member.removeRole(role_4E);

  } else if (msgChan == chan_4G) {
    if (fs.existsSync(rep_4C + fileName)) {
      member.addRole(role_4C);
      if (fs.existsSync(rep_4E + fileName)) fs.unlinkSync(rep_4E + fileName);
      if (fs.existsSync(rep_4I + fileName)) fs.unlinkSync(rep_4I + fileName);
      if (fs.existsSync(rep_4H + fileName)) fs.unlinkSync(rep_4H + fileName);
  	} else if (fs.existsSync(rep_4E + fileName)) {
      member.addRole(role_4E);
      if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
      if (fs.existsSync(rep_4I + fileName)) fs.unlinkSync(rep_4I + fileName);
      if (fs.existsSync(rep_4H + fileName)) fs.unlinkSync(rep_4H + fileName);
  	} else if (fs.existsSync(rep_4H + fileName)) {
      member.addRole(role_4H);
      if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
      if (fs.existsSync(rep_4E + fileName)) fs.unlinkSync(rep_4E + fileName);
      if (fs.existsSync(rep_4I + fileName)) fs.unlinkSync(rep_4I + fileName);
  	} else if (fs.existsSync(rep_4I + fileName)) {
      member.addRole(role_4I);
      if (fs.existsSync(rep_4C + fileName)) fs.unlinkSync(rep_4C + fileName);
      if (fs.existsSync(rep_4E + fileName)) fs.unlinkSync(rep_4E + fileName);
      if (fs.existsSync(rep_4H + fileName)) fs.unlinkSync(rep_4H + fileName);
  	}
  	member.removeRole(role_4G);

  } else if (msgChan == chan_4H) {
    if (fs.existsSync(rep_4G + fileName)) {
      member.addRole(role_4G);
      if (fs.existsSync(rep_4I + fileName)) fs.unlinkSync(rep_4I + fileName);
  	} else if (fs.existsSync(rep_4I + fileName)) {
      member.addRole(role_4I);
      if (fs.existsSync(rep_4G + fileName)) fs.unlinkSync(rep_4G + fileName);
  	}
  	member.removeRole(role_4H);

  } else if (msgChan == chan_4I) {
    if (fs.existsSync(rep_4H + fileName)) {
      member.addRole(role_4H);
      if (fs.existsSync(rep_4G + fileName)) fs.unlinkSync(rep_4G + fileName);
  	} else if (fs.existsSync(rep_4G + fileName)) {
      member.addRole(role_4G);
      if (fs.existsSync(rep_4H + fileName)) fs.unlinkSync(rep_4H + fileName);
  	}
  	member.removeRole(role_4I);

  }
  message.delete(300)
  
  } // END OF USERS COME BACK CMD

}

module.exports = comebackCmd;