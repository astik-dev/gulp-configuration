import webp from "gulp-webp";
import imagemin, {gifsicle, mozjpeg} from "gulp-imagemin";
import pngquant from 'imagemin-pngquant';

export const images = () => {
	return app.gulp.src(app.path.src.images)
		.pipe(app.plugins.plumber())
		.pipe(app.plugins.newer(app.path.build.images))

		.pipe(
			app.plugins.if(app.isBuild,
				webp({quality: 70})
			)
		)
		.pipe(
			app.plugins.if(app.isBuild,
				app.gulp.dest(app.path.build.images)
			)
		)

		.pipe(
			app.plugins.if(app.isBuild,
				app.gulp.src(app.path.src.images)
			)
		)
		.pipe(
			app.plugins.if(app.isBuild,
				app.plugins.newer(app.path.build.images)
			)
		)
		.pipe(
			app.plugins.if(app.isBuild,
				imagemin([
					gifsicle({interlaced: true}),
					mozjpeg({quality: 80, progressive: true}),
					pngquant({quality: [0.8, 0.8]}),
				])
			)
		)
		.pipe(app.gulp.dest(app.path.build.images))

		.pipe(app.gulp.src(app.path.src.svg))
		.pipe(app.gulp.dest(app.path.build.images))

		.pipe(app.plugins.browsersync.stream());
}