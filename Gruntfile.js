module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-concat-css");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  grunt.initConfig({
    concat_css: {
      options: {
        // Task-specific options go here.
      },
      all: {
        src: ["./src/styles/**/*.css"],
        dest: "./bundled/styles/all.css",
      },
    },

    watch: {
      css: {
        files: ["src/styles/**/*.css"],
        tasks: ["concat_css", "cssmin"],
      },
    },

    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1,
      },
      target: {
        files: {
          "./bundled/styles/all.min.css": ["./bundled/styles/all.css"],
        },
      },
    },
  });
};
