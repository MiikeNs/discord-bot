// events/modalSubmit.js
// Handle modal submissions for applications
// Created by Nunes.

const { EmbedBuilder, MessageFlags } = require('discord.js');
const { logChannelId } = require('../config/channels.js');
const { applicantInfo } = require('../config/embed.js');


module.exports = (client) => {
    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isModalSubmit()) return;
        
        try {
            if (interaction.customId === 'applyModal') {
                const inGameName = interaction.fields.getTextInputValue('inGameNameInput');
                const age = interaction.fields.getTextInputValue('ageInput');
                const country = interaction.fields.getTextInputValue('countryInput');
                const experience = interaction.fields.getTextInputValue('experienceInput');

                const logChannel = interaction.guild.channels.cache.get(logChannelId);
                if (!logChannel) {
                    await interaction.reply({ content: 'Error: Log channel not found.', flags: MessageFlags.Ephemeral });
                    return;
                }
                
                await logChannel.send({ embeds: [applicantInfo] });
                await interaction.reply({ content: 'Your application has been submitted!', flags: MessageFlags.Ephemeral });
            }
        } catch (error) {
            console.error('Error handling modal submission:', error);
            await interaction.reply({ content: 'An error occurred while submitting your application. Please try again.', flags: MessageFlags.Ephemeral });
        }
    });
};