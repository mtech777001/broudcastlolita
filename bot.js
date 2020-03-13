const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const devs = ["537260628713406464"]
 
const adminprefix = "$";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'pt')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'setprefix')) {
  client.user.setPrefix(argresult).then
      message.channel.send(`**Prefix Changed :white_check_mark: ${argresult}** `)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
    if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done `)
  return message.reply("**Name Changed :white_check_mark:**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else    
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
    }
 
  });
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا



client.on("message", message => {
    if (message.content.startsWith(prefix + "obc")) { ///@» Maestro
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return; //@» Maestro
  let args = message.content.split(" ").slice(1); ///@» Maestro
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => { //@» Maestro 
  m.send(`${argresult}\n ${m}`); ///@» Maestro 
  }) /// @» Maestro
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete(); ///@» MMaestro
  }; ///@» Maestro 
  }); //// @» Maestro 
 
 
 
  client.on("message", message => {
  ///@» MHSTR 🇮🇶#1119 
              if (message.content.startsWith(prefix + "bc")) {// Maestro
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return; //@» Maestro
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); // @» Maestro
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`); //@» Maestro
  }) ///@» Maestro 
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); //@» Maestro
  };     /// @» Maestro 
  }); ///@» Maestro
