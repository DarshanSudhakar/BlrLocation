exports.createPages = ({ actions }) => {
    const { createRedirect } = actions;
    createRedirect({
      fromPath: "https://tvkds.netlify.com/*", 
      toPath: "https://www.google.com/maps/search/?api=1&query=13.1693678,76.6674799&query_place_id=ChIJcX4LrJTirzsRRHmJXFl966Q", 
      isPermanent: true, 
      force: true
    });
  };