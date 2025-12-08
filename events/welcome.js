
const { Client, Collection, Events, GatewayIntentBits, MessageFlags } = require('discord.js');
const { welcomeMessageEmoji } = require('../config/emojis.js');
const { guestRoleId, applicantRoleId } = require('../config/roles.js');
const { welcome_channel_id } = require('../config/channels.js');

let welcomeMessageId = null;

module.exports = (client) => {
  // When someone joins
  client.on('guildMemberAdd', async (member) => {
    const role = member.guild.roles.cache.get(guestRoleId);
    await member.roles.add(role);

    const channel = member.guild.channels.cache.get(welcome_channel_id);
    const sent_message = await channel.send(`Welcome ${member.user.username}`);
    welcomeMessageId = sent_message.id;
    await sent_message.react(welcomeMessageEmoji);
  });

  // When someone reacts to the welcome message
  client.on('messageReactionAdd', async (reaction, user) => {
    if (user.bot) return;

    console.log('Reaction detected:', reaction.emoji.toString());
    console.log('Stored welcomeMessageId:', welcomeMessageId);
    console.log('Reaction message ID:', reaction.message.id);
    console.log('Welcome emoji:', welcomeMessageEmoji);

    if (reaction.message.id === welcomeMessageId && reaction.emoji.toString() === welcomeMessageEmoji) {
      const member = reaction.message.guild.members.cache.get(user.id);
      const applicantRole = reaction.message.guild.roles.cache.get(applicantRoleId);
      await member.roles.add(applicantRole);
    }
  });
};
