import { LavalinkEventHandler } from '@handlers/PlayerEventHandler'
import { Interpreter } from '@tryforge/forgescript'
import { ForgeLink } from '@structures/ForgeLink'

export default new LavalinkEventHandler({
    name: 'ChaptersLoaded',
    description: '...',
    async listener(player, track, payload) {
        const commands = this.getExtension(ForgeLink, true).commands.player.get("ChaptersLoaded")
        if (!commands) return;

        const guild = this.guilds.cache.get(player.guildId)
        
        for (const command of commands) {
            Interpreter.run({
                obj: guild,
                client: this,
                command,
                data: command.compiled.code,
                environment: { player, track, payload }
            })
        }
    }
})