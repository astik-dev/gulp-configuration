import fileInclude from "gulp-file-include";
import versionNumber from "gulp-version-number";
import webpHtmlNosvg from "gulp-webp-html-nosvg";

export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber())
		.pipe(fileInclude())
		.pipe(
			app.plugins.if(app.isBuild,
				webpHtmlNosvg()
			)
		)
		.pipe(
			app.plugins.if(app.isBuild,
				versionNumber({
					"value": "%DT%",
					"append": {
						"key": "_v",
						"cover": 0,
						"to": [
							"css",
							"js",
						],
					}
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream());
}