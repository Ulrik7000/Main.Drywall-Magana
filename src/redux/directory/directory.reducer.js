const INITIAL_STATE = {
  sections: [
    {
      title: 'services',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: '/store/services'
    },
    {
      title: 'Materials',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: '/store/materials'
    },
    {
      title: 'automatictools',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: '/store/automatictools'
    },
    {
      title: 'Hand taping tools',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: '/store/manualtools'
    },
    {
      title: 'Apparel',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: '/store/apparel'
    },
    {
      title: 'Best deals',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 6,
      linkUrl: '/store/best-deals'
    }
  ]
};

  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  export default directoryReducer;
