function choixCmd(message, member) {

  let msg = `**!${message.author.username}** vous avez ici le choix d'aller vers :\n\n`;

  if (message.channel == chanDoor1) message.channel.send(msg + `\u0031\u20E3 - **!${choice_1A}**\n\u0032\u20E3 - **!${choice_1B}**`).then(msg => msg.delete(9000))
  if (message.channel == chanDoor2) message.channel.send(msg + `\u0031\u20E3 - **!${choice_2A}**\n\u0032\u20E3 - **!${choice_2B}**`).then(msg => msg.delete(9000))
  if (message.channel == chanDoor3) message.channel.send(msg + `\u0031\u20E3 - **!${choice_3A}**\n\u0032\u20E3 - **!${choice_3B}**`).then(msg => msg.delete(9000))
  if (message.channel == chanDoor4) message.channel.send(msg + `\u0031\u20E3 - **!${choice_4A}**\n\u0032\u20E3 - **!${choice_4B}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_1A) message.channel.send(msg + `\u0031\u20E3 - **!${cbCmd}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_1B) message.channel.send(msg + `\u0031\u20E3 - **!${choice_1C}**\n\u0032\u20E3 - **!${choice_1D}**\n\u0033\u20E3 - **!${choice_1A}**\n\u0034\u20E3 - **!${choice_1}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_1D) message.channel.send(msg + `\u0031\u20E3 - **!${choice_1E}**\n\u0032\u20E3 - **!${choice_1F}**\n\u0033\u20E3 - **!${choice_1C}**\n\u0034\u20E3 - **!${choice_1B}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_1E) message.channel.send(msg + `\u0031\u20E3 - **!${cbCmd}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_1F) message.channel.send(msg + `\u0031\u20E3 - **!${choice_2A}**\n\u0032\u20E3 - **!${choice_2C}**\n\u0033\u20E3 - **!${choice_1D}**\n\u0034\u20E3 - **!${choice_1E}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_2A) message.channel.send(msg + `\u0031\u20E3 - **!${choice_2B}**\n\u0032\u20E3 - **!${choice_2C}**\n\u0033\u20E3 - **!${choice_1F}**\n\u0034\u20E3 - **!${choice_2}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_2B) message.channel.send(msg + `\u0031\u20E3 - **!${choice_2C}**\n\u0032\u20E3 - **!${choice_2D}**\n\u0033\u20E3 - **!${choice_2A}**\n\u0034\u20E3 - **!${choice_2}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_2C) message.channel.send(msg + `\u0031\u20E3 - **!${choice_1F}**\n\u0032\u20E3 - **!${choice_2D}**\n\u0033\u20E3 - **!${choice_2A}**\n\u0034\u20E3 - **!${choice_2B}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_2D) message.channel.send(msg + `\u0031\u20E3 - **!${choice_2E}**\n\u0032\u20E3 - **!${choice_2F}**\n\u0033\u20E3 - **!${choice_2C}**\n\u0034\u20E3 - **!${choice_2B}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_2E) message.channel.send(msg + `\u0031\u20E3 - **!${choice_2I}**\n\u0032\u20E3 - **!${choice_3H}**\n\u0033\u20E3 - **!${choice_2F}**\n\u0034\u20E3 - **!${choice_2D}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_2F) message.channel.send(msg + `\u0031\u20E3 - **!${choice_2G}**\n\u0032\u20E3 - **!${choice_2H}**\n\u0033\u20E3 - **!${choice_2E}**\n\u0034\u20E3 - **!${choice_2D}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_2H) message.channel.send(msg + `\u0031\u20E3 - **!${cbCmd}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_3A) message.channel.send(msg + `\u0031\u20E3 - **!${cbCmd}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_3B) message.channel.send(msg + `\u0031\u20E3 - **!${choice_3C}**\n\u0032\u20E3 - **!${choice_3D}**\n\u0033\u20E3 - **!${choice_3A}**\n\u0034\u20E3 - **!${choice_3}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_3C) message.channel.send(msg + `\u0031\u20E3 - **!${cbCmd}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_3D) message.channel.send(msg + `\u0031\u20E3 - **!${choice_3E}**\n\u0032\u20E3 - **!${choice_3F}**\n\u0033\u20E3 - **!${choice_3C}**\n\u0034\u20E3 - **!${choice_3B}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_3F) message.channel.send(msg + `\u0031\u20E3 - **!${choice_3G}**\n\u0032\u20E3 - **!${choice_3H}**\n\u0033\u20E3 - **!${choice_3D}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_3G) message.channel.send(msg + `\u0031\u20E3 - **!${choice_3I}**\n\u0032\u20E3 - **!${choice_3J}**\n\u0033\u20E3 - **!${choice_3H}**\n\u0034\u20E3 - **!${choice_3F}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_3H) message.channel.send(msg + `\u0031\u20E3 - **!${choice_2E}**\n\u0032\u20E3 - **!${choice_2I}** \n\u0033\u20E3 - **!${choice_3G}**\n\u0034\u20E3 - **!${choice_3F}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_3I) message.channel.send(msg + `\u0031\u20E3 - **!${enterChoice}**\n\u0032\u20E3 - **!${choice_3G}**\n\u0033\u20E3 - **!${choice_3J}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_3J) message.channel.send(msg + `\u0031\u20E3 - **!${choice_3K}**\n\u0032\u20E3 - **!${choice_3L}**\n\u0033\u20E3 - **!${choice_3I}**\n\u0034\u20E3 - **!${choice_3G}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_4A) message.channel.send(msg + `\u0031\u20E3 - **!${cbCmd}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_4B) message.channel.send(msg + `\u0031\u20E3 - **!${choice_4C}**\n\u0032\u20E3 - **!${choice_4D}**\n\u0033\u20E3 - **!${choice_4A}**\n\u0034\u20E3 - **!${choice_4}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_4C) message.channel.send(msg + `\u0031\u20E3 - **!${choice_4E}**\n\u0032\u20E3 - **!${choice_4G}**\n\u0033\u20E3 - **!${choice_4D}**\n\u0034\u20E3 - **!${choice_4B}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_4D) message.channel.send(msg + `\u0031\u20E3 - **!${choice_4E}**\n\u0032\u20E3 - **!${choice_4F}**\n\u0033\u20E3 - **!${choice_4C}**\n\u0034\u20E3 - **!${choice_4B}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_4E) message.channel.send(msg + `\u0031\u20E3 - **!${choice_4F}**\n\u0032\u20E3 - **!${choice_4G}**\n\u0033\u20E3 - **!${choice_4C}**\n\u0034\u20E3 - **!${choice_4D}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_4G) message.channel.send(msg + `\u0031\u20E3 - **!${choice_4E}**\n\u0032\u20E3 - **!${choice_4H}**\n\u0033\u20E3 - **!${choice_4C}**\n\u0034\u20E3 - **!${choice_4E}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_4H) message.channel.send(msg + `\u0031\u20E3 - **!${cbCmd}**`).then(msg => msg.delete(9000))
  if (message.channel == chan_4I) message.channel.send(msg + `\u0031\u20E3 - **!${cbCmd}**`).then(msg => msg.delete(9000))
  if (message.channel == exitChan) member.channel.send(msg + `\u0031\u20E3 - **!${enterChoice}**`).then(msg => msg.delete(9000))

  setTimeout(function() {
    message.channel.send(`**PS:** Si vous avez perdu le fil d'Ariane et/ou souhaitez revenir aux **PORTES PRINCIPALES** je vous invite à taper à tout moment dans le labyrinthe la commande: **\`!restart\`**`).then(msg => msg.delete(7500))
  },1 * 1500);

}

module.exports = choixCmd;