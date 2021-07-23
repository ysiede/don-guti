module.exports = function(eleventyConfig) {
    // Add a filter using the Config API
   // eleventyConfig.addFilter( "myFilter", function() {});

   eleventyConfig.addPassthroughCopy("src/js");
   eleventyConfig.addPassthroughCopy("src/css");
   eleventyConfig.addPassthroughCopy("src/images");
   eleventyConfig.addPassthroughCopy("src/manifest.webmanifest");
   eleventyConfig.addPassthroughCopy("src/favicon.ico");
   eleventyConfig.addPassthroughCopy("src/icon.svg");
   eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");
   eleventyConfig.addPassthroughCopy("src/192.png");
   eleventyConfig.addPassthroughCopy("src/512.png");
   eleventyConfig.addPassthroughCopy("src/sitemap.xml");
  // eleventyConfig.addPassthroughCopy("src/service-worker.js");
  // eleventyConfig.addPassthroughCopy("src/_headers");
  
    // You can return your Config object (optional).
    return {
        passThroughFileCopy: true,
      dir: {
        input: "src",
        ouput: "_site",
       // include: "includes"
      }
    };
  };