import { openrouter } from '../lib/ai'
import {streamText} from 'ai'

export default {
    async generateRecipe(prompt: string) {
        const result = streamText({
            model: openrouter('meta-llama/llama-4-maverick:free'),
            prompt,
            system: 'Eres un bartender que tiene 50 años de experiencia y le sirvio una bebida a James Bond'

        })
    
        return result.textStream
    }
}