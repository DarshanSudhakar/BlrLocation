exports.createPages = ({ actions }) => {
    const { createRedirect } = actions;
    createRedirect({
      fromPath: "https://blrds.netlify.app/*", 
      toPath: "https://www.google.com/maps/search/?api=1&query=13.1693678,76.6674799&query_place_id=ChIJMfDZz-8VrjsRvIgSiTv6RWc", 
      isPermanent: true, 
      force: true
    });
  };
