import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'
import { API_KEY } from './llmapi-env';
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

@EventData({
    name: 'EV-4', 
    hitbox: {
        width: 32,
        height: 16
    }
})

export default class VillagerEvent extends RpgEvent {
    onInit() {
        this.setGraphic('agent')
    }
    async onAction(player: RpgPlayer) {
        const choice = await player.showChoices('Agent: What color do you prefer?', [
            { text: 'Black', value: 'black' },
            { text: 'Rather the blue', value: 'blue' },
            { text: 'I don\'t have a preference!', value: 'none' }
        ])
        console.log(choice) // { text: 'Black', value: 'black' }
        const prompt = "我是一個 28 歲的學生，喜歡吃甜食，被好友欺負，我該怎麼辦？目前正想要找律師諮詢，請產生問題。";

        const result = await model.generateContent(prompt);
        console.log(result.response.text());
        if (choice) {
            await player.showText(`Agent: 你選擇了 ${choice.text}`, {
                talkWith: this
            })
        }
        if (result.response.text()) {
            await player.showText(`Agent: ${result.response.text()}`, {
                talkWith: this
            })
        }
    }
} 

// export default class VillagerEvent extends RpgEvent {
//     onInit() {
//         this.setGraphic('agent')
//     }
//     async onAction(player: RpgPlayer) {
//         const choice = await player.showChoices('Agent: What color do you prefer?', [
//             { text: 'Black', value: 'black' },
//             { text: 'Rather the blue', value: 'blue' },
//             { text: 'I don\'t have a preference!', value: 'none' }
//         ])
//         console.log(choice) // { text: 'Black', value: 'black' }
//         const prompt = "Explain how AI works";

//         const result = await model.generateContent(prompt);
//         console.log(result.response.text());
//         if (choice) {
//             await player.showText(`Agent: 你選擇了 ${choice.text}`, {
//                 talkWith: this
//             })
//         }
//     }
// } 