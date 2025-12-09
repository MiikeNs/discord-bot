// events/application.js
// Handle application process when a user gets the applicant role, this feature was mostly created to filter out bots.
// Created by Nunes.

const { Client, Collection, Events, GatewayIntentBits, MessageFlags } = require('discord.js');
const { welcomeMessageEmoji } = require('../config/emojis.js');
const { guestRoleId, applicantRoleId } = require('../config/roles.js');
const { application_channel_id } = require('../config/channels.js');

module.exports = (client) => {
    client.on('guildMemberUpdate', async (oldMember, newMember) => {
        const oldRoles = oldMember.roles.cache;
        const newRoles = newMember.roles.cache;

        if (!oldRoles.has(applicantRoleId) && newRoles.has(applicantRoleId)) {
            const applicationChannel = newMember.guild.channels.cache.get(application_channel_id);
            applicationChannel.send(`Welcome to the application channel ${newMember.user.username}. Please fill out your application form here. using the /apply command. Once completed, a staff member will review your application and get back to you shortly.`);
        };
    });
};
