export default {
  items: [
    {
      title: true,
      name: 'Learn. Redeem. Wander.',
      url: '/wallet',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'Easy Go Wallet',
      url: '/wallet',
      icon: 'icon-wallet',
    },
    {
      name: 'Award Wallet',
      url: 'https://awardwallet.com/',
      icon: 'icon-briefcase',
      attributes: { target: '_blank', rel: "noopener" },
    },
    {
      name: 'My Travel Notebook',
      url: 'https://drive.google.com/drive/u/0/shared-with-me',
      icon: 'icon-note',
      attributes: { target: '_blank', rel: "noopener" },
    },
    {
      name: 'Credit Cards',
      url: '/wallet',
      icon: 'icon-credit-card',
      children: [
        {
          name: 'Active Cards',
          url: '/active-cards',
          icon: 'icon-check',
        },
        {
          name: 'Recommendations',
          url: '/wallet',
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
      attributes: { target: '_blank', rel: "noopener" },
    },
    {
      divider: true,
    },
    {
      name: 'Travel',
      url: '/wallet',
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
          url: '/wallet',
          icon: 'icon-map',
          class: 'mt-auto',
          variant: 'success',
          attributes: { target: '_blank', rel: "noopener" },
        },
      ],
    },
  ],
};
