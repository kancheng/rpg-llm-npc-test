import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-1', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export default class VillagerEvent extends RpgEvent {
    onInit() {
        this.setGraphic('villager')
    }
    async onAction(player: RpgPlayer) {
        await player.showText('Villager: I give you 90 gold.', {
            talkWith: this
        })
        player.gold += 90
    }
} 
