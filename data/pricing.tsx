export const SUBSCRIPTION_PRICING = {
  monthly: 15.99,
  yearly: 49.99,
  currency: 'USD',
} as const

const proFeatures = [
  'AI coach and personalized feedback',
  'Daily math, case, and Excel drills',
  '66-day streak tracker and progress heatmap',
  'AI resume review and quick practice',
  'Pomodoro timer and screen blocker',
  'Excel shortcut and formula guide',
  'Banking and consulting resource hub',
]

export default {
  title: 'Invest in your next chapter.',
  description:
    'Choose the pace that fits your preparation. Build the skills that stay with you.',
  plans: [
    {
      id: 'free',
      title: 'Get started',
      price: 'Free',
      period: 'to download',
      badge: '',
      description:
        'Download 66 Days Prep and explore your preparation options in the app.',
      action: 'Download free',
      recommended: false,
      features: [
        'Available for iPhone and iPad',
        'Explore the app before choosing a plan',
      ],
    },
    {
      id: 'monthly',
      title: 'Monthly',
      price: `$${SUBSCRIPTION_PRICING.monthly}`,
      period: '/ month',
      badge: 'Popular',
      description:
        'Full access for focused preparation when your next interview is coming up.',
      action: 'Get monthly',
      recommended: true,
      features: proFeatures,
    },
    {
      id: 'yearly',
      title: 'Yearly',
      price: `$${SUBSCRIPTION_PRICING.yearly}`,
      period: '/ year',
      badge: 'Best value',
      description:
        'A full year to strengthen your fundamentals and keep your momentum going.',
      action: 'Get yearly',
      recommended: false,
      features: proFeatures,
    },
  ],
}
