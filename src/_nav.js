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
    // {
    //   title: false,
    //   name: 'Award Wallet',
    //   wrapper: {            // optional wrapper object
    //     element: '',        // required valid HTML5 element tag
    //     attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    //   },
    //   class: ''             // optional class names space delimited list for title item ex: "text-center"
    // },
    {
      name: 'Easy Go Wallet',
      url: '/theme/colors',
      icon: 'icon-wallet',
    },
    {
      name: 'Award Wallet',
      url: '/theme/typography',
      icon: 'icon-briefcase',
    },
    {
      name: 'My Travel Notebook',
      url: '/theme/typography',
      icon: 'icon-note',
    },
    {
      name: 'Credit Card Inquiry',
      url: '/base',
      icon: 'icon-credit-card',
      children: [
        {
          name: 'Recommendations',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Request a new card',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Classroom',
      url: '/buttons',
      icon: 'icon-pencil'
    },
    {
      name: 'Schedule',
      url: '/charts',
      icon: 'icon-calendar',
    },
    {
      divider: true,
    },
    {
      name: 'Travel',
      url: '/icons',
      icon: 'icon-globe',
      children: [
        {
          name: 'Request a Flight',
          url: 'https://coreui.io/react/',
          icon: 'icon-plane',
          class: 'mt-auto',
          variant: 'info',
          attributes: { target: '_blank', rel: "noopener" },
        },
        {
          name: 'Request a hotel',
          url: 'https://coreui.io/react/',
          icon: 'icon-map',
          class: 'mt-auto',
          variant: 'success',
          attributes: { target: '_blank', rel: "noopener" },
        },
        {
          name: 'Request a cruise',
          url: 'https://coreui.io/react/',
          icon: 'icon-map',
          class: 'mt-auto',
          variant: 'danger',
          attributes: { target: '_blank', rel: "noopener" },
        },
      ],
    },
  ],
};
