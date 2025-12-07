const { SlashCommandBuilder } = require('discord.js');
const { welcome_reaction } = require('../../config/emojis.js');

module.exports = {
    data: new SlashCommandBuilder().setName('apply').setDescription('Innitiates the application process.'),
};