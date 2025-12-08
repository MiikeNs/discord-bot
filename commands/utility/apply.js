const { SlashCommandBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');
const { welcomeMessageEmoji } = require('../../config/emojis.js');
const { guest_role_id, applicantRoleId } = require('../../config/roles.js');
const { application_channel_id } = require('../../config/channels.js');

module.exports = {
    data: new SlashCommandBuilder().setName('apply').description('Starts the application process.'),
    async execute(interaction) {
        const modal = new ModalBuilder()
            .setCustomId('applyModal')
            .setTitle('Application Form');

        const nameInput = new TextInputBuilder()
            .setCustomId('inGameNameInput')
            .setLabel('What is your in-game name?')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);

        const nameRow = new ActionRowBuilder().addComponents(nameInput);

        const ageInput = new TextInputBuilder()
            .setCustomId('ageInput')
            .setLabel('What is your age?')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);

        const ageRow = new ActionRowBuilder().addComponents(ageInput);

        const countryInput = new TextInputBuilder()
            .setCustomId('countryInput')
            .setLabel('Which country are you from?')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);

        const experienceInput = new TextInputBuilder()
            .setCustomId('experienceInput')
            .setLabel('How many hours do you have on Arma 3')
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true);

        const experienceRow = new ActionRowBuilder().addComponents(experienceInput);

        modal.addComponents(nameRow, ageRow, countryRow, experienceRow);

        await interaction.showModal(modal);
    }
};