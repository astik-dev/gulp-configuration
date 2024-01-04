import plumber from "gulp-plumber";
import browsersync from "browser-sync";
import newer from "gulp-newer";
import gulpif from "gulp-if";

export const plugins = {
	plumber: plumber,
	browsersync: browsersync,
	newer: newer,
	if: gulpif,
}