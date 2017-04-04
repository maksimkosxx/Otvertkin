module.exports = {

    autoprefixer: {
        options: {
            browsers: ["last 2 versions"]
        },
        files: {
            "dist/styles/*.css": ["dist/styles/*.css"]
        }
    },
};
