export default {
  items: [
    {
      title: true,
      name: "TravelWealth",
      url: "/wallet",
      badge: {
        variant: "info",
        text: "NEW"
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
          name: "Request a Flight",
          url: "/request-flights",
          icon: "icon-plane",
          class: "mt-auto",
          variant: "info"
        },
        {
          name: "Request a hotel",
          url: "/request-hotel",
          icon: "fas fa-bed",
          class: "mt-auto",
          variant: "success"
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
      attributes: { target: "_blank", rel: "noopener", disabled: true }
    },
    {
      name: "Schedule a Check-In",
      url: "https://calendly.com/easygotraveler/checkin?month=2019-11",
      icon: "icon-calendar",
      attributes: { target: "_blank", rel: "noopener" }
    },
    {
      name: "Refer a Friend",
      url: "https://calendly.com/easygotraveler/checkin?month=2019-11",
      icon: "fas fa-users",
      attributes: { target: "_blank", rel: "noopener" }
    },
    {
      name: "Useful Tools",
      url: "/wallet",
      icon: "icon-wrench",
      children: [
        {
          name: "AwardWallet",
          url: "https://awardwallet.com/",
          icon: "fas fa-chart-bar",
          class: "mt-auto"
        },
        {
          name: "Merchant Category",
          url:
            "https://awardwallet.com/merchants?awid=101&fbclid=IwAR1MfCiz9EFfzTbD_hFt4hDdGeEwDEMRAuQ-FLgT7ugUN5L3_Y7IR3V1yYY",
          icon: "fas fa-search",
          class: "mt-auto"
        },
        {
          name: "Rakuten",
          url: "https://rakuten.com",
          icon: "fas fa-shopping-cart",
          class: "mt-auto"
        },
        {
          name: "Plastiq",
          url: "https://plastiq.com",
          icon: "fas fa-money-check",
          class: "mt-auto",
          attributes: { target: "_blank", rel: "noopener" }
        },
        {
          name: "Credit Karma",
          url: "https://creditkarma.com",
          icon: "fas fa-chart-line",
          class: "mt-auto",
          attributes: { target: "_blank", rel: "noopener" }
        }
      ]
    },

    {
      divider: true
    },

    {
      name: "facebook",
      url: "/request-flights",
      class: "mt-auto",
      icon: "fab fa-facebook-f"
    },
    {
      name: "instagram",
      url: "/wallet",
      icon: "fab fa-instagram",
      attributes: { target: "_blank", rel: "noopener" }
    },
    {
      name: "twitter",
      url: "/wallet",
      icon: "fab fa-twitter",
      attributes: { target: "_blank", rel: "noopener" }
    }
  ]
};
