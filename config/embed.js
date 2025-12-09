const { EmbedBuilder } = require('discord.js');

module.exports = (client) => {
    const applicantInfo = new EmbedBuilder()
        .setTitle(`New Application Submitted by ${interaction.user.displayName}`)
        .addFields(
            { name: 'In-Game Name', value: inGameName },
            { name: 'Age', value: age },
            { name: 'Country', value: country },
            { name: 'Experience', value: experience }
        )
        .setColor('#4B0082');



    const eventMessage = new EmbedBuilder()
        .setTitle('Main Operation')
        .addFields(
            { name: 'Date', value: eventDate },
            { name: 'Time', value: eventTime },
            { name: 'Description', value: eventDescription },
            { name: 'Map', value: eventMap },
            { name: 'Faction', value: eventFaction },
            { name: 'Modpack', value: eventModpack }

        )
        .setColor('#868826ff');
    }
