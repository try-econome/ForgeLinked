import { Arg, ArgType, NativeFunction } from '@tryforge/forgescript';
import { ForgeLink } from '@structures/ForgeLink';

export default new NativeFunction({
    name: '$previousExists',
    description: 'Check whether a previous track exists in the player queue.',
    version: "1.0.2",
    brackets: false,
    unwrap: true,
    args: [
        Arg.requiredGuild('Guild ID', 'The ID of the guild to check the player for.')
    ],
    output: ArgType.Boolean,
   execute: async function(ctx, [guild = ctx.guild]) {
        const lavalink = ctx.client.getExtension(ForgeLink, true).lavalink

        const player = lavalink.getPlayer((guild.id ?? ctx.guild.id)); 
if (!player) return this.customError("No player found!");

        
        const hasPrevious = player.queue.previous?.[0];
        const currentTrack = player.queue.current;

        const isValid = !!(hasPrevious && currentTrack && hasPrevious.info.uri !== currentTrack.info.uri);

        return this.success(isValid);
    }
});