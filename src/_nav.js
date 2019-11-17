export default {
  items: [
    {
      title: true,
      name: 'Learn. Redeem. Wander.',
      url: '/dashboard',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'Easy Go Wallet',
      url: '/dashboard',
      icon: 'icon-wallet',
    },
    {
      name: 'Award Wallet',
      url: 'https://awardwallet.com/',
      icon: 'icon-briefcase',
    },
    {
      name: 'My Travel Notebook',
      url: 'https://drive.google.com/drive/u/0/shared-with-me',
      icon: 'icon-note',
    },
    {
      name: 'Credit Card Inquiry',
      url: '/dashboard',
      icon: 'icon-credit-card',
      children: [
        {
          name: 'Recommendations',
          url: '/dashboard',
          icon: 'icon-puzzle',
        },
        {
          name: 'Request a new card',
          url: '/request-card',
          icon: 'icon-plus',
        },
      ],
    },
    {
      name: 'Classroom',
      url: '/classroom',
      icon: 'icon-pencil'
    },
    {
      name: 'Meet with JJ',
      url: 'https://calendly.com/easygotraveler/checkin?month=2019-11',
      icon: 'icon-calendar',
    },
    {
      divider: true,
    },
    {
      name: 'Travel',
      url: '/dashboard',
      icon: 'icon-globe',
      children: [
        {
          name: 'Request a Flight',
          url: '/request-flights',
          icon: 'icon-plane',
          class: 'mt-auto',
          variant: 'info',
        },
        {
          name: 'Request a hotel',
          url: '/dashboard',
          icon: 'icon-map',
          class: 'mt-auto',
          variant: 'success',
          attributes: { target: '_blank', rel: "noopener" },
        },
        {
          name: 'Request a cruise',
          url: '/dashboard',
          icon: 'icon-map',
          class: 'mt-auto',
          variant: 'danger',
          attributes: { target: '_blank', rel: "noopener" },
        },
      ],
    },
  ],
};
