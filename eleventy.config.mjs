export default (config) => {
    // Copy the contents of the `public` folder to the output folder
    config.addPassthroughCopy({ "./src/public": "/public" });

    return {
        dir: { input: "src", output: "dist" },
    };
};
