function onReady(message, client, fs) {

  var bot = client;

  // Textual Channels
  enterChan = bot.channels.get("513539668978040855");
  exitChan = bot.channels.get("516911836499542036");
  winTextChan = bot.channels.get("514562909020487710")
  // Principal Doors Channels
  chanDoor1 = bot.channels.get("513785111905566741");
  chanDoor2 = bot.channels.get("513785132835012612");
  chanDoor3 = bot.channels.get("513785154473558017");
  chanDoor4 = bot.channels.get("513785173813231628");
  // Labyrinthe Part 1
  chan_1A = bot.channels.get("513917896741617665");
  chan_1B = bot.channels.get("513918036869120021");
  chan_1C = bot.channels.get("514526647886675970");
  chan_1D = bot.channels.get("514526774693199893");
  chan_1E = bot.channels.get("514527226830520325");
  chan_1F = bot.channels.get("514527245889437699");
  // Labyrinthe Part 2
  chan_2A = bot.channels.get("514552033924349962");
  chan_2B = bot.channels.get("514552052123303946");
  chan_2C = bot.channels.get("514552066530738178");
  chan_2D = bot.channels.get("514564203026317337");
  chan_2E = bot.channels.get("514552081055481869");
  chan_2F = bot.channels.get("514552094473060352");
  chan_2G = bot.channels.get("514552116379910144");
  chan_2H = bot.channels.get("514552262656524288");
  chan_2I = bot.channels.get("514553202603982858");
  // Labyrinthe Part 3
  chan_3A = bot.channels.get("514552355971399691");
  chan_3B = bot.channels.get("514552522384474138");
  chan_3C = bot.channels.get("514552540495347727");
  chan_3D = bot.channels.get("514552555326537748");
  chan_3E = bot.channels.get("514552569172066304");
  chan_3F = bot.channels.get("514552583390756874");
  chan_3G = bot.channels.get("514552596376322048");
  chan_3H = bot.channels.get("514552612125671424");
  chan_3I = bot.channels.get("514552627929939969");
  chan_3J = bot.channels.get("514560568313511936");
  chan_3K = bot.channels.get("514553259634065409");
  chan_3L = bot.channels.get("514553276331458581");
  // Labyrinthe Part 4
  chan_4A = bot.channels.get("514555440252846092");
  chan_4B = bot.channels.get("514555459189866528");
  chan_4C = bot.channels.get("514555477611380757");
  chan_4D = bot.channels.get("514555496221638671");
  chan_4E = bot.channels.get("514555514844086287");
  chan_4F = bot.channels.get("514555537111908372");
  chan_4G = bot.channels.get("514555556262969347");
  chan_4H = bot.channels.get("514555569135288328");
  chan_4I = bot.channels.get("514555603440631849");
  // Vocal Channels
  winVocChan = bot.channels.get("513539668978040857");

  // Repertories
  startedUsersRep = "./started_users/";
  door1UsersRep = "./users_emplacement/1_eau/"
  door2UsersRep = "./users_emplacement/2_feu/"
  door3UsersRep = "./users_emplacement/3_air/"
  door4UsersRep = "./users_emplacement/4_terre/"
  winUsersRep = "./winners/"
  rep_1A = door1UsersRep + '1A/'
  rep_1B = door1UsersRep + '1B/'
  rep_1C = door1UsersRep + '1C/'
  rep_1D = door1UsersRep + '1D/'
  rep_1E = door1UsersRep + '1E/'
  rep_1F = door1UsersRep + '1F/'
  rep_2A = door2UsersRep + '2A/'
  rep_2B = door2UsersRep + '2B/'
  rep_2C = door2UsersRep + '2C/'
  rep_2D = door2UsersRep + '2D/'
  rep_2E = door2UsersRep + '2E/'
  rep_2F = door2UsersRep + '2F/'
  rep_2G = door2UsersRep + '2G/'
  rep_2H = door2UsersRep + '2H/'
  rep_2I = door2UsersRep + '2I/'
  rep_3A = door3UsersRep + '3A/'
  rep_3B = door3UsersRep + '3B/'
  rep_3C = door3UsersRep + '3C/'
  rep_3D = door3UsersRep + '3D/'
  rep_3E = door3UsersRep + '3E/'
  rep_3F = door3UsersRep + '3F/'
  rep_3G = door3UsersRep + '3G/'
  rep_3H = door3UsersRep + '3H/'
  rep_3I = door3UsersRep + '3I/'
  rep_3J = door3UsersRep + '3J/'
  rep_3K = door3UsersRep + '3K/'
  rep_3L = door3UsersRep + '3L/'
  rep_4A = door4UsersRep + '4A/'
  rep_4B = door4UsersRep + '4B/'
  rep_4C = door4UsersRep + '4C/'
  rep_4D = door4UsersRep + '4D/'
  rep_4E = door4UsersRep + '4E/'
  rep_4F = door4UsersRep + '4F/'
  rep_4G = door4UsersRep + '4G/'
  rep_4H = door4UsersRep + '4H/'
  rep_4I = door4UsersRep + '4I/'

  // Choices
  enterChoice = "entrer"
  jumpCmd = "sauter"
  cbCmd = "faire demi-tour"||"faire demi tour"
  choice_1 = chanDoor1.name
  choice_2 = chanDoor2.name
  choice_3 = chanDoor3.name
  choice_4 = chanDoor4.name
  choice_1A = chan_1A.name
  choice_1B = chan_1B.name
  choice_1C = chan_1C.name
  choice_1D = chan_1D.name
  choice_1E = chan_1E.name
  choice_1F = chan_1F.name
  choice_2A = chan_2A.name
  choice_2B = chan_2B.name
  choice_2C = chan_2C.name
  choice_2D = chan_2D.name
  choice_2E = chan_2E.name
  choice_2F = chan_2F.name
  choice_2G = chan_2G.name
  choice_2H = chan_2H.name
  choice_2I = chan_2I.name
  choice_3A = chan_3A.name
  choice_3B = chan_3B.name
  choice_3C = chan_3C.name
  choice_3D = chan_3D.name
  choice_3E = chan_3E.name
  choice_3F = chan_3F.name
  choice_3G = chan_3G.name
  choice_3H = chan_3H.name
  choice_3I = chan_3I.name
  choice_3J = chan_3J.name
  choice_3K = chan_3K.name
  choice_3L = chan_3L.name
  choice_4A = chan_4A.name
  choice_4B = chan_4B.name
  choice_4C = chan_4C.name
  choice_4D = chan_4D.name
  choice_4E = chan_4E.name
  choice_4F = chan_4F.name
  choice_4G = chan_4G.name
  choice_4H = chan_4H.name
  choice_4I = chan_4I.name

  // labyMainRolesList
  labyMainRolesList = []

  // labyRoleList
  labyRolesList = []

  // labyUsersFolderList
  labyUsersFoldersList = []

  enterChan.send("Bot Restarted").then(message => {

    // Roles
    winRole = message.guild.roles.get("514561838227128350");
    door1Role = message.guild.roles.get("513820486069911572");
    door2Role = message.guild.roles.get("513820992100106269");
    door3Role = message.guild.roles.get("513821623183212544");
    door4Role = message.guild.roles.get("513821917615226890");
    role_1A = message.guild.roles.get("513918909569826856");
    role_1B = message.guild.roles.get("513926940361752586");
    role_1C = message.guild.roles.get("514527428593319953");
    role_1D = message.guild.roles.get("514527456544161792");
    role_1E = message.guild.roles.get("514527471920480285");
    role_1F = message.guild.roles.get("514527487766822921");
    role_2A = message.guild.roles.get("514557126299877385");
    role_2B = message.guild.roles.get("514557173276344332");
    role_2C = message.guild.roles.get("514557204427309057");
    role_2D = message.guild.roles.get("514557228091441173");
    role_2E = message.guild.roles.get("514557254909952027");
    role_2F = message.guild.roles.get("514557274216202262");
    role_2G = message.guild.roles.get("514557367069704202");
    role_2H = message.guild.roles.get("514557396128104459");
    role_2I = message.guild.roles.get("514557489908285458");
    role_3A = message.guild.roles.get("514557519373271040");
    role_3B = message.guild.roles.get("514557602856697856");
    role_3C = message.guild.roles.get("514557622561669120");
    role_3D = message.guild.roles.get("514557639246610473");
    role_3E = message.guild.roles.get("514557660343959583");
    role_3F = message.guild.roles.get("514557677888864261");
    role_3G = message.guild.roles.get("514557711774646293");
    role_3H = message.guild.roles.get("514557733467324419");
    role_3I = message.guild.roles.get("514557797002641414");
    role_3J = message.guild.roles.get("514557815478550530");
    role_3K = message.guild.roles.get("514557844268515335");
    role_3L = message.guild.roles.get("514557862941425695");
    role_4A = message.guild.roles.get("514558032424992807");
    role_4B = message.guild.roles.get("514558084421517314");
    role_4C = message.guild.roles.get("514558112993116160");
    role_4D = message.guild.roles.get("514558140105359370");
    role_4E = message.guild.roles.get("514558194622922752");
    role_4F = message.guild.roles.get("514558164029538304");
    role_4G = message.guild.roles.get("514558251837292544");
    role_4H = message.guild.roles.get("514558279708442625");
    role_4I = message.guild.roles.get("514558306686205975");
    
    labyMainRolesList.push(door1Role, door2Role, door3Role, door4Role);
    labyRolesList.push(role_1A, role_1B, role_1C, role_1D, role_1E, role_1F, role_2A, role_2B, role_2C, role_2D, role_2E, role_2F, role_2G, role_2H, role_2I,
role_3A, role_3B, role_3C, role_3D, role_3E, role_3F, role_3G, role_3H, role_3I, role_3J, role_3K, role_3L, role_4A, role_4B, role_4C, role_4D, role_4E, role_4F, role_4G, role_4H, role_4I);
    labyUsersFoldersList.push(door1UsersRep, door2UsersRep, door3UsersRep, door4UsersRep, rep_1A, rep_1B, rep_1C, rep_1D, rep_1E, rep_1F, rep_2A, rep_2B, rep_2C, rep_2D, rep_2E, rep_2F, rep_2G,
rep_2H, rep_2I, rep_3A, rep_3B, rep_3C, rep_3D, rep_3E, rep_3F, rep_3G, rep_3H, rep_3I, rep_3J, rep_3K, rep_3L, rep_4A, rep_4B, rep_4C, rep_4D, rep_4E, rep_4F, rep_4G, rep_4H, rep_4I);

    message.delete(1000)

});

/*
  chanDoor1.createWebhook(`PORTE AQUATIQUE`, "./resources/transparent_avatar.png").then(webhook => {
    webhook.send('**---------------------------**\n \n', {files:["./resources/element_eau.png"]}).then(wbSend => webhook.delete())
  })
  chanDoor2.createWebhook(`PORTE EMBRASÉE`, "./resources/transparent_avatar.png").then(webhook => {
    webhook.send('**------------------------**\n \n ', {files:["./resources/element_feu.png"]}).then(wbSend => webhook.delete())
  })
  chanDoor3.createWebhook(`PORTE AÉRIENNE`, "./resources/transparent_avatar.png").then(webhook => {
    webhook.send('**-----------------------**\n \n ', {files:["./resources/element_air.png"]}).then(wbSend => webhook.delete())
  })
  chanDoor4.createWebhook(`PORTE SOUTERRAINE`, "./resources/transparent_avatar.png").then(webhook => {
    webhook.send('**-----------------------------**\n \n ', {files:["./resources/element_terre.png"]}).then(wbSend => webhook.delete())
  })
/*
  enterChan.createWebhook("BIENVENUE", "./resources/transparent_avatar.png").then(webhook => {
    webhook.send(' ', {files:["./resources/logo_server.png"]}).then(wbSend => webhook.delete())
  });

/*
  // AutoKick Cheaters
  setInterval(function() {
    message.guild.members.forEach(member => {
    if (!fs.existsSync(winUsersRep + user.id + '.js') && (!member.id == '1') && (!member == bot)) {
      member.kick().then(kick => console.log(member.user.username + ' a été kick du serveur car son identifiant n\'est pas référencé dans la liste des membres victorieux'))
    }
  })
  }, 30 * 1000) 
*/

  // Others
  var memberCount = bot.users.size;
  var serverCount = bot.guilds.size;
  const guildNames = client.guilds.map(g => g.name).join("\n");
  var startMsg = `\n ${bot.user.username}@Bot [Started] ${new Date()}
 --------------------------------------\n Utilisateurs: ${memberCount}\n Serveur(s): ${serverCount}\n ${guildNames}\n --------------------------------------\n`;

  bot.user.setUsername(`${bot.user.username}`);
  bot.user.setActivity(`!choix`, {type: "WATCHING"});
  bot.user.setStatus("dnd"); // online / dnd / idle / invisible

  isReady = true
  console.log(startMsg);

}

module.exports = onReady