const nav = require("./links/nav.js");

module.exports = {
  title: "Hi, I'm here",
  description: "Stella Blog",
  dest: "./stella",
  base: "/stella/",
  head: [
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: "/images.png" },
    ],
  ],
  themeConfig: {
    nav,
  },
};
