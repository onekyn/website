export default (config) => {
    config.setInputDirectory("./site/");
    config.setOutputDirectory("./dist/");

    // Copy the contents of the `public` folder to the output folder
    config.addPassthroughCopy({ "./public/": "/" });
};