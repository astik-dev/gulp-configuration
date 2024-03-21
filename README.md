# Gulp configuration

This Gulp configuration is optimized for frontend development projects. It includes tasks for processing SCSS files, optimizing images, bundling JavaScript with webpack, generating SVG sprites, templating HTML, and more. It's designed to streamline your development workflow and enhance productivity.

## Tasks

The following tasks are included in this Gulp configuration:

- `copy.js` Copies static files to the destination directory.
- `html.js` Processes HTML files, including file includes and version numbering.
- `scss.js` Compiles SCSS files to CSS, autoprefixes, groups media queries, and minifies CSS.
- `js.js` Bundles JavaScript files using webpack and minifies the output.
- `images.js` Optimizes images using imagemin and converts them to WebP format.
- `svgsprite.js` Generates SVG sprite from SVG files.
- `server.js` Starts a development server using BrowserSync for live reloading.
- `reset.js` Cleans the destination directory before rebuilding.
- `zip.js` Creates a zip file of the built project.

## Installation

Before using this Gulp configuration, ensure you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/) (including npm, the Node.js package manager)
- [gulp-cli](https://gulpjs.com/docs/en/getting-started/quick-start)

Once you have Node.js and gulp-cli installed, follow these steps to set up the Gulp configuration in your project:

1. **Clone this repository to your local machine:**

    ```bash
    git clone https://github.com/astik-dev/gulp-configuration.git
    ```

2. **Navigate to the cloned directory:**

    ```bash
    cd gulp-configuration
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

## Usage

This Gulp configuration provides several npm scripts for different purposes:

- **Development Mode:**

    ```bash
    npm run dev
    ```

    This command starts Gulp in development mode, which watches for changes in your source files and rebuilds them accordingly.

- **Build for Development:**

    ```bash
    npm run build:dev
    ```

    This command builds the project for development with optimizations such as minification and compression. It compiles all source files, prepares them for testing, starts a development server for testing the compiled build, and initiates a watcher for live reloading.

- **Build for Production:**

    ```bash
    npm run build:prod
    ```

    This command builds the project for production with optimizations such as minification and compression. It prepares the project for deployment to a live server. Unlike the development build, it does not start a server.

- **Create Zip Archive:**

    ```bash
    npm run zip
    ```

    This command creates a zip archive of the production build, suitable for distribution or deployment.

## File Structure

```
./
├── .gitignore
├── README.md
├── gulpfile.js                             # Main configuration file for Gulp task runner
├── package-lock.json
├── package.json
├── gulp/                                   # Gulp configuration and tasks
│   ├── config/                             # Configuration files for gulp tasks
│   │   ├── path.js
│   │   └── plugins.js
│   └── tasks/                              # Individual Gulp tasks
│       ├── copy.js
│       ├── html.js
│       ├── images.js
│       ├── js.js
│       ├── reset.js
│       ├── scss.js
│       ├── server.js
│       ├── svgsprite.js
│       └── zip.js
└── src/                                    # Source directory
    ├── files/                              # Additional project files
    ├── html/
    ├── img/
    ├── js/
    │   ├── script.js                       # Main JavaScript file
    │   ├── modules/
    │   │   └── webpSupportChecker.js       # Module for checking WebP support
    ├── scss/
    │   └── style.scss                      # Main SCSS stylesheet
    └── svgicons/                           # Directory for SVG icons used to create SVG sprites. Each sprite should have its own subdirectory.
```

## Dependencies

- `gulp` The core Gulp library for task automation.
- `gulp-autoprefixer` Automatically adds vendor prefixes to CSS properties for enhanced browser compatibility.
- `gulp-clean-css` Minifies CSS files for improved performance.
- `gulp-file-include` Enables including files into other files during build processes.
- `gulp-group-css-media-queries` Groups CSS media queries for better organization and optimization.
- `gulp-if` Conditionally run tasks based on certain conditions.
- `gulp-imagemin` Minifies images to reduce file size without sacrificing quality.
- `gulp-newer` Processes only newer files to save time during builds.
- `gulp-plumber` Prevents Gulp task failures from stopping the watch process.
- `gulp-rename` Renames files during the build process.
- `gulp-sass` Compiles Sass files into CSS.
- `gulp-svg-sprite` Generates SVG sprites for improved performance and organization.
- `gulp-version-number` Adds version numbers to files for cache busting.
- `gulp-webp` Converts images to the WebP format for better compression and faster loading times.
- `gulp-webp-html-nosvg` Generates HTML code for WebP images with fallback to JPEG/PNG for non-supporting browsers.
- `gulp-webpcss` Generates CSS code for WebP images with fallback to JPEG/PNG for non-supporting browsers.
- `gulp-zip` Creates zip archives for deployment purposes.
- `browser-sync` Provides live reloading and synchronization across multiple devices for efficient development.
- `del` Allows for easy deletion of files and directories as part of the build process.
- `imagemin-pngquant` Advanced PNG image optimization for reducing file sizes.
- `sass` The Sass compiler for converting Sass code to CSS.
- `webp-converter` Provides functionality for converting images to the WebP format.
- `webpack` A powerful bundler for JavaScript files.
- `webpack-stream` Integrates Webpack with Gulp for seamless JavaScript bundling.
