function choixCmd(message, member) {

  let msg = `**${message.author.username}** vous avez ici le choix de:\n`
  if (message.channel == rivChan) message.channel.send(msg + `\u0031\u20E3 - !choix 1A\n\u0032\u20E3 - !choix 1B`).then(msg => msg.delete(9000))
  if (message.channel == ortChan) message.channel.send(msg + `\u0031\u20E3 - !choix 2A\n\u0032\u20E3 - !choix 2B`).then(msg => msg.delete(9000))
  if (message.channel == brouChan) message.channel.send(msg + `\u0031\u20E3 - !choix 3A\n\u0032\u20E3 - !choix 3B`).then(msg => msg.delete(9000))
  if (message.channel == jarChan) message.channel.send(msg + `\u0031\u20E3 - !choix 4A\n\u0032\u20E3 - !choix 4B`).then(msg => msg.delete(9000))
  if (message.channel == chan_1A) message.channel.send(msg + `\u0031\u20E3 - !faire demi-tour`).then(msg => msg.delete(9000))
  if (message.channel == chan_1B) message.channel.send(msg + `\u0031\u20E3 - !choix 1C\n\u0032\u20E3 - !choix 1D\n\u0033\u20E3 - !choix 1A\n\u0034\u20E3 - !choix riv`).then(msg => msg.delete(9000))
  if (message.channel == chan_1D) message.channel.send(msg + `\u0031\u20E3 - !choix 1E\n\u0032\u20E3 - !choix 1F\n\u0033\u20E3 - !choix 1C\n\u0034\u20E3 - !choix 1B`).then(msg => msg.delete(9000))
  if (message.channel == chan_1E) message.channel.send(msg + `\u0031\u20E3 - !faire demi-tour`).then(msg => msg.delete(9000))
  if (message.channel == chan_1F) message.channel.send(msg + `\u0031\u20E3 - !choix 2A\n\u0032\u20E3 - !choix 2C\n\u0033\u20E3 - !choix 1D\n\u0034\u20E3 - !choix 1E`).then(msg => msg.delete(9000))
  if (message.channel == chan_2A) message.channel.send(msg + `\u0031\u20E3 - !choix 2B\n\u0032\u20E3 - !choix 2C\u0033\u20E3 - !choix 1F\n\u0034\u20E3 - !choix ort`).then(msg => msg.delete(9000))
  if (message.channel == chan_2B) message.channel.send(msg + `\u0031\u20E3 - !choix 2C\n\u0032\u20E3 - !choix 2D\u0033\u20E3 - !choix 2A\n\u0034\u20E3 - !choix ort`).then(msg => msg.delete(9000))
  if (message.channel == chan_2C) message.channel.send(msg + `\u0031\u20E3 - !choix 1F\n\u0032\u20E3 - !choix 2D\u0033\u20E3 - !choix 2A\n\u0034\u20E3 - !choix 2B`).then(msg => msg.delete(9000))
  if (message.channel == chan_2D) message.channel.send(msg + `\u0031\u20E3 - !choix 2E\n\u0032\u20E3 - !choix 2F\u0033\u20E3 - !choix 2C\n\u0034\u20E3 - !choix 2B`).then(msg => msg.delete(9000))
  if (message.channel == chan_2E) message.channel.send(msg + `\u0031\u20E3 - !choix 2I\n\u0032\u20E3 - !choix 3H\u0033\u20E3 - !choix 2F\n\u0034\u20E3 - !choix 2D`).then(msg => msg.delete(9000))
  if (message.channel == chan_2F) message.channel.send(msg + `\u0031\u20E3 - !choix 2G\n\u0032\u20E3 - !choix 2H\u0033\u20E3 - !choix 2E\n\u0034\u20E3 - !choix 2D`).then(msg => msg.delete(9000))
  if (message.channel == chan_2H) message.channel.send(msg + `\u0031\u20E3 - !faire demi-tour`).then(msg => msg.delete(9000))
  if (message.channel == chan_3A) message.channel.send(msg + `\u0031\u20E3 - !faire demi-tour`).then(msg => msg.delete(9000))
  if (message.channel == chan_3B) message.channel.send(msg + `\u0031\u20E3 - !choix 3C\n\u0032\u20E3 - !choix 3D\u0033\u20E3 - !choix 3A\n\u0034\u20E3 - !choix brou`).then(msg => msg.delete(9000))
  if (message.channel == chan_3C) message.channel.send(msg + `\u0031\u20E3 - !faire demi-tour`).then(msg => msg.delete(9000))
  if (message.channel == chan_3D) message.channel.send(msg + `\u0031\u20E3 - !choix 3E\n\u0032\u20E3 - !choix 3F\u0033\u20E3 - !choix 3C\n\u0034\u20E3 - !choix 3B`).then(msg => msg.delete(9000))
  if (message.channel == chan_3F) message.channel.send(msg + `\u0031\u20E3 - !choix 3G\n\u0032\u20E3 - !choix 3H\u0033\u20E3 - !choix 3D`).then(msg => msg.delete(9000))
  if (message.channel == chan_3G) message.channel.send(msg + `\u0031\u20E3 - !choix 3I\n\u0032\u20E3 - !choix 3J\u0033\u20E3 - !choix 3H\n\u0034\u20E3 - !choix 3F`).then(msg => msg.delete(9000))
  if (message.channel == chan_3H) message.channel.send(msg + `\u0031\u20E3 - !choix 2E\n\u0032\u20E3 - !choix 2I\u0033\u20E3 - !choix 3G\u0034\u20E3 - !choix 3F`).then(msg => msg.delete(9000))
  if (message.channel == chan_3I) message.channel.send(msg + `\u0031\u20E3 - !entrer\n\u0032\u20E3 - !choix 3G\n\u0033\u20E3\u0032\u20E3 - !choix 3J`).then(msg => msg.delete(9000))
  if (message.channel == chan_3J) message.channel.send(msg + `\u0031\u20E3 - !choix 3K\n\u0032\u20E3 - !choix 3L\u0033\u20E3 - !choix 3I\u0034\u20E3 - !choix 3G`).then(msg => msg.delete(9000))
  if (message.channel == chan_4A) message.channel.send(msg + `\u0031\u20E3 - !faire demi-tour`).then(msg => msg.delete(9000))
  if (message.channel == chan_4B) message.channel.send(msg + `\u0031\u20E3 - !choix 4C\n\u0032\u20E3 - !choix 4D\u0033\u20E3 - !choix 4A\u0034\u20E3 - !choix jar`).then(msg => msg.delete(9000))
  if (message.channel == chan_4C) message.channel.send(msg + `\u0031\u20E3 - !choix 4E\n\u0032\u20E3 - !choix 4G\u0033\u20E3 - !choix 4D\u0034\u20E3 - !choix 4B`).then(msg => msg.delete(9000))
  if (message.channel == chan_4D) message.channel.send(msg + `\u0031\u20E3 - !choix 4E\n\u0032\u20E3 - !choix 4F\u0033\u20E3 - !choix 4C\u0034\u20E3 - !choix 4B`).then(msg => msg.delete(9000))
  if (message.channel == chan_4E) message.channel.send(msg + `\u0031\u20E3 - !choix 4F\n\u0032\u20E3 - !choix 4G\u0033\u20E3 - !choix 4C\u0034\u20E3 - !choix 4D`).then(msg => msg.delete(9000))
  if (message.channel == chan_4G) message.channel.send(msg + `\u0031\u20E3 - !choix 4E\n\u0032\u20E3 - !choix 4H\u0033\u20E3 - !choix 4C\u0034\u20E3 - !choix 4E`).then(msg => msg.delete(9000))
  if (message.channel == chan_4H) message.channel.send(msg + `\u0031\u20E3 - !faire demi-tour`).then(msg => msg.delete(9000))
  if (message.channel == chan_4I) message.channel.send(msg + `\u0031\u20E3 - !faire demi-tour`).then(msg => msg.delete(9000))

  setTimeout(function() {
    message.channel.send(`**PS:** Si vous avez perdu le fil d'Ariane et/ou souhaitez revenir aux **PORTES PRINCIPALES** je vous invite à taper à tout moment dans le labyrinthe la commande: **\`!restart\`**`).then(msg => msg.delete(7500))
  },1 * 1500)

}

module.exports = choixCmd