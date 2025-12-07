const { welcomeMessageEmoji } = require('../../config/emojis.js');
const { guest_role_id } = require('../../config/roles.js');

const welcome_channel_id = '1441610605344719000';

module.exports = (client) => {
  client.on('guildMemberAdd', async (member) => {
    const role = member.guild.roles.cache.get(guest_role_id);
    await member.roles.add(role);

    const channel = member.guild.channels.cache.get(welcome_channel_id);
    const sent_message = await channel.send(`Welcome ${member.user.username}!`);
    const welcome_reaction = await sent_message.react(welcomeMessageEmoji);
  });
};