import svgSprite from "gulp-svg-sprite";
import fs from "fs";

export const svgsprite = async () => {
	// Get a list of folders in the source SVG icons directory
	const folders = fs.readdirSync(app.path.src.svgicons, {withFileTypes: true})
		.filter(dirent => dirent.isDirectory())
		.map(dirent => dirent.name);

	// Generate tasks for each folder to create SVG sprites
	const tasks = folders.map(folder => {
		const srcPath = `${app.path.src.svgicons}/${folder}/*.svg`;
		return new Promise ((resolve, reject) => {
			app.gulp.src(srcPath)
				.pipe(app.plugins.plumber())
				.pipe(svgSprite({
					mode: {
						stack: {
							sprite: `../svgsprite/${folder}.svg`,
						}
					}
				}))
				.pipe(app.gulp.dest(app.path.build.images))
				.on('end', resolve)
				.on('error', reject);
		});
	});

	// Wait for all sprite generation tasks to complete
	return Promise.all(tasks).then(() => {
		// Refresh BrowserSync
		app.gulp.src(app.path.src.svgicons)
			.pipe(app.plugins.browsersync.stream());
	});
}