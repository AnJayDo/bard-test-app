import Bard from 'bard-ai';

const cookie = process.env.BARD_COOKIE || 'ZAggUlrpHNaKIUptBP2G3ZkBlU3UsT67Qo8RSQhxq2RPQYZuW9DDZDvvHCridbR44CZcBw.';

export async function askBard(question: string, useJSON?: boolean | undefined) {
    await Bard.init(cookie);
    return await Bard.askAI(question, useJSON);
}