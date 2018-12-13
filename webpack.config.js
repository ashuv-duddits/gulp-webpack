
const config = {
  entry: {
    about: "./src/assets/scripts/about.js",
    auth: "./src/assets/scripts/auth.js",
    works: "./src/assets/scripts/works.js",
    blog: "./src/assets/scripts/blog.js"
  },
  output: {
    filename: "[name].bundle.js"
  }//,
  // plugins: [

  // ]
};

module.exports = config;