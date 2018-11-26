function onReady(message, client, fs) {

  var bot = client;

  // Textual Channels
  enterChan = bot.channels.get("513539668978040855");
  winTextChan = bot.channels.get("514562909020487710")
  // Principal Doors Channels
  rivChan = bot.channels.get("513785111905566741");
  ortChan = bot.channels.get("513785132835012612");
  brouChan = bot.channels.get("513785154473558017");
  jarChan = bot.channels.get("513785173813231628");
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
  rivUsersRep = "./users_emplacement/1_riviere/"
  ortUsersRep = "./users_emplacement/2_orties/"
  brouUsersRep = "./users_emplacement/3_brouillard/"
  jarUsersRep = "./users_emplacement/4_jardin/"
  winUsersRep = "./winners/"
  rep_1A = rivUsersRep + '1A/'
  rep_1B = rivUsersRep + '1B/'
  rep_1C = rivUsersRep + '1C/'
  rep_1D = rivUsersRep + '1D/'
  rep_1E = rivUsersRep + '1E/'
  rep_1F = rivUsersRep + '1F/'
  rep_2A = ortUsersRep + '2A/'
  rep_2B = ortUsersRep + '2B/'
  rep_2C = ortUsersRep + '2C/'
  rep_2D = ortUsersRep + '2D/'
  rep_2E = ortUsersRep + '2E/'
  rep_2F = ortUsersRep + '2F/'
  rep_2G = ortUsersRep + '2G/'
  rep_2H = ortUsersRep + '2H/'
  rep_2I = ortUsersRep + '2I/'
  rep_3A = brouUsersRep + '3A/'
  rep_3B = brouUsersRep + '3B/'
  rep_3C = brouUsersRep + '3C/'
  rep_3D = brouUsersRep + '3D/'
  rep_3E = brouUsersRep + '3E/'
  rep_3F = brouUsersRep + '3F/'
  rep_3G = brouUsersRep + '3G/'
  rep_3H = brouUsersRep + '3H/'
  rep_3I = brouUsersRep + '3I/'
  rep_3J = brouUsersRep + '3J/'
  rep_3K = brouUsersRep + '3K/'
  rep_3L = brouUsersRep + '3L/'
  rep_4A = jarUsersRep + '4A/'
  rep_4B = jarUsersRep + '4B/'
  rep_4C = jarUsersRep + '4C/'
  rep_4D = jarUsersRep + '4D/'
  rep_4E = jarUsersRep + '4E/'
  rep_4F = jarUsersRep + '4F/'
  rep_4G = jarUsersRep + '4G/'
  rep_4H = jarUsersRep + '4H/'
  rep_4I = jarUsersRep + '4I/'

  // Choices
  enterChoice = "!entrer"
  choice_1 = "!choix riv"
  choice_2 = "!choix ort"
  choice_3 = "!choix brou"
  choice_4 = "!choix jar"
  choice_1A = "!choix 1A"
  choice_1B = "!choix 1B"
  choice_1C = "!choix 1C"
  choice_1D = "!choix 1D"
  choice_1E = "!choix 1E"
  choice_1F = "!choix 1F"
  choice_2A = "!choix 2A"
  choice_2B = "!choix 2B"
  choice_2C = "!choix 2C"
  choice_2D = "!choix 2D"
  choice_2E = "!choix 2E"
  choice_2F = "!choix 2F"
  choice_2G = "!choix 2G"
  choice_2H = "!choix 2H"
  choice_2I = "!choix 2I"
  choice_3A = "!choix 3A"
  choice_3B = "!choix 3B"
  choice_3C = "!choix 3C"
  choice_3D = "!choix 3D"
  choice_3E = "!choix 3E"
  choice_3F = "!choix 3F"
  choice_3G = "!choix 3G"
  choice_3H = "!choix 3H"
  choice_3I = "!choix 3I"
  choice_3J = "!choix 3J"
  choice_3K = "!choix 3K"
  choice_3L = "!choix 3L"
  choice_4A = "!choix 4A"
  choice_4B = "!choix 4B"
  choice_4C = "!choix 4C"
  choice_4D = "!choix 4D"
  choice_4E = "!choix 4E"
  choice_4F = "!choix 4F"
  choice_4G = "!choix 4G"
  choice_4H = "!choix 4H"
  choice_4I = "!choix 4I"


  // labyMainRolesList
  labyMainRolesList = []

  // labyRoleList
  labyRolesList = []

  // labyUsersFolderList
  labyUsersFoldersList = []

  enterChan.send("Bot Restarted").then(message => {

    // Roles
    winRole = message.guild.roles.get("514561838227128350");
    rivRole = message.guild.roles.get("513820486069911572");
    ortRole = message.guild.roles.get("513820992100106269");
    brouRole = message.guild.roles.get("513821623183212544");
    jarRole = message.guild.roles.get("513821917615226890");
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
    
    labyMainRolesList.push(rivRole, ortRole, brouRole, jarRole);
    labyRolesList.push(role_1A, role_1B, role_1C, role_1D, role_1E, role_1F, role_2A, role_2B, role_2C, role_2D, role_2E, role_2F, role_2G, role_2H, role_2I,
role_3A, role_3B, role_3C, role_3D, role_3E, role_3F, role_3G, role_3H, role_3I, role_3J, role_3K, role_3L, role_4A, role_4B, role_4C, role_4D, role_4E, role_4F, role_4G, role_4H, role_4I);
    labyUsersFoldersList.push(rivUsersRep, ortUsersRep, brouUsersRep, jarUsersRep, rep_1A, rep_1B, rep_1C, rep_1D, rep_1E, rep_1F, rep_2A, rep_2B, rep_2C, rep_2D, rep_2E, rep_2F, rep_2G,
rep_2H, rep_2I, rep_3A, rep_3B, rep_3C, rep_3D, rep_3E, rep_3F, rep_3G, rep_3H, rep_3I, rep_3J, rep_3K, rep_3L, rep_4A, rep_4B, rep_4C, rep_4D, rep_4E, rep_4F, rep_4G, rep_4H, rep_4I);

    message.delete(1000)

/*
  // AutoKick Cheaters
  setInterval(function() {
    bot.users.forEach(user => {
    var sniped = message.guild.roles.get(user.id)
    if (!fs.existsSync(winUsersRep + user.id + '.js') && (!user.id == '1') && (!user == bot)) {
      sniped.kick().then(kick => console.log(user.username + ' a été kick du serveur car son identifiant n\'est pas référencé dans la liste des membres victorieux'))
    }
  })
  }, 30 * 1000)
  */
  
  })
  




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