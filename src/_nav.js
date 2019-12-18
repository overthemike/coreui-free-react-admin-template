export default {
  items: [
    {
      title: true,
      name: "TravelWealth",
      url: "/wallet",
      badge: {
        variant: "info"
      }
    },
    {
      name: "Manage My Wallet",
      url: "/manage-wallet",
      icon: "icon-credit-card"
    },
    {
      name: "Request Travel",
      url: "/wallet",
      icon: "icon-globe",
      children: [
        {
          name: " • Request a Flight",
          url: "/request-flights",
          class: "mt-auto"
        },
        {
          name: " • Request a Hotel",
          url: "/request-hotel",
          class: "mt-auto"
        }
      ]
    },
    {
      name: "Classroom",
      url: "/classroom",
      icon: "fas fa-chalkboard-teacher"
    },
    {
      name: "Deal Alert",
      url: "/wallet",
      icon: "fab fa-twitter fas fa-bell",
      attributes: {
        target: "_blank",
        rel: "noopener",
        disabled: true
      }
    },
    {
      name: "Schedule a Check-In",
      url: "https://calendly.com/easygotraveler/checkin?month=2019-11",
      icon: "icon-calendar",
      attributes: {
        target: "_blank",
        rel: "noopener"
      }
    },
    {
      name: "Refer a Friend",
      url: "/referral",
      icon: "fas fa-users"
    },
    {
      name: "Useful Tools",
      url: "/wallet",
      icon: "icon-wrench",
      children: [
        {
          name: " • AwardWallet",
          url: "https://awardwallet.com/",
          class: "mt-auto",
          attributes: {
            target: "_blank",
            rel: "noopener"
          }
        },
        {
          name: " • Rakuten",
          url: "https://rakuten.com",
          class: "mt-auto",
          attributes: {
            target: "_blank",
            rel: "noopener"
          }
        },
        {
          name: " • Plastiq",
          url: "https://plastiq.com",
          class: "mt-auto",
          attributes: {
            target: "_blank",
            rel: "noopener"
          }
        },
        {
          name: " • Credit Karma",
          url: "https://creditkarma.com",
          class: "mt-auto",
          attributes: {
            target: "_blank",
            rel: "noopener"
          }
        }
      ]
    }
  ]
};
