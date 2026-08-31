import { SUBSCRIPTION_PRICING } from './pricing'

const faq = {
  title: 'A little clarity before you start.',
  description:
    'Questions about your daily prep, the tools, or getting started? Here are the essentials.',
  items: [
    {
      q: 'What is 66 Days Prep?',
      a: '66 Days Prep is a daily training app for banking and consulting interviews. It brings together focused lessons, practice drills, AI feedback, and progress tracking to help you build a consistent preparation routine.',
    },
    {
      q: 'How much does it cost?',
      a: `The app is free to download. Full access costs $${SUBSCRIPTION_PRICING.monthly} per month or $${SUBSCRIPTION_PRICING.yearly} per year in the U.S. Subscriptions are purchased through the App Store. Your local price and any available offers are shown in the app before you subscribe.`,
    },
    {
      q: 'Why a 66-day plan?',
      a: 'The plan gives your preparation structure: learn the fundamentals, apply them in daily practice, and review your progress. The streak tracker and heatmap help you stay consistent. Your pace and results will depend on your starting point, goals, and practice.',
    },
    {
      q: 'What can I practice?',
      a: 'Practice mental math, market sizing, case frameworks, technical questions, Excel, and behavioral answers. AI mock interviews let you respond by voice, work through follow-up questions, and review feedback on your content and delivery.',
    },
    {
      q: 'What other tools are included?',
      a: 'The app includes an AI resume checker, quick practice, a Pomodoro timer, a screen blocker for focus, an Excel shortcut and formula guide, and a banking and consulting resource hub.',
    },
    {
      q: 'Which devices are supported?',
      a: '66 Days Prep is available for iPhone and iPad. Visit the App Store listing for the current iOS requirements and device compatibility.',
    },
    {
      q: 'How can I request a feature or get help?',
      a: 'Send feedback through the app or email Support@sellwithuru.com. We welcome ideas for new tools, practice topics, and improvements to your preparation experience.',
    },
  ],
}
export default faq
