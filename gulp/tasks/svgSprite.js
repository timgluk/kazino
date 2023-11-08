import svgPictures from "gulp-svg-sprite";

export const svgSprite = () => {
	return app.gulp.src(app.path.src.svgicons, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SVG",
				message: "Erorr: <%= erorr.message %>"
			})
		))
		.pipe(svgPictures({
			mode: {
				stack: {
					sprite: `../icons/icons.svg`,
					example:true
				}
			},
		}))
		.pipe(app.gulp.dest(app.path.build.images));
}