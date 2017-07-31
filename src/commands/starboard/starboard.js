const { Command } = require('discord-akairo');

class StarCommand extends Command {
	constructor() {
		super('starboard', {
			aliases: ['starboard'],
			category: 'starboard',
			channelRestriction: 'guild',
			userPermissions: ['ADMINISTRATOR'],
			args: [
				{
					id: 'channel',
					type: 'textChannel',
					default: message => message.guild.channels.find(c =>
						c.type === 'text' && c.name.toLowerCase() === 'starboard'
					)
				}
			]
		});
	}

	async exec(message, { channel }) {
		if (!channel) return message.util.reply('You must provide a starboard channel.');
		await this.client.settings.set(message.guild, 'starboardChannelID', channel.id);
		return message.util.reply(`Starboard channel has been set to ${channel}`);
	}
}

module.exports = StarCommand;
