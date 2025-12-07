const { welcomeMessageEmoji } = require('../../config/emojis.js');
const { guest_role_id, applicantRoleId } = require('../../config/roles.js');

const welcome_channel_id = '1441610605344719000';

let welcomeMessageId = null;

module.exports = (client) => {
  client.on('guildMemberAdd', async (member) => {
    const role = member.guild.roles.cache.get(guest_role_id);
    await member.roles.add(role);

    const channel = member.guild.channels.cache.get(welcome_channel_id);
    const sent_message = await channel.send(`Welcome ${member.user.username}!`);
    welcomeMessageId = sent_message.id;
    const welcome_reaction = await sent_message.react(welcomeMessageEmoji);
  });
};

module.exports = (client) => {
  client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.id === welcomeMessageId && reaction.emoji.name === welcomeMessageEmoji) {
      const member = reaction.message.guild.members.cache.get(user.id);
      await member.roles.add(applicantRoleId);
    };
  });
};