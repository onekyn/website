export default (config) => {
    config.setInputDirectory("./site/");
    config.setOutputDirectory("./docs/");

    // Copy the contents of the `public` folder to the output folder
    config.addPassthroughCopy({ "./public/": "/" });
};