const sharp = require('sharp');
const compress_images = require('compress-images');
const fs = require('fs');

let path = process.argv[2];
let width = Number(process.argv[3]);

const resize = (inputPath, outputPath, width) => {
	sharp(inputPath)
		.resize({ width: width })
		.toFile(outputPath, (err) => {
			if (err) console.log(err);
			else {
				console.log('Imagem redimensionada');
				compress(outputPath, './compressed/');
			}
		});
};

function compress(inputPath, outputPath) {
	compress_images(
		inputPath,
		outputPath,
		{ compress_force: false, statistic: true, autoupdate: true },
		false,
		{ jpg: { engine: 'mozjpeg', command: ['-quality', '60'] } },
		{ png: { engine: 'pngquant', command: ['--quality=20-50', '-o'] } },
		{ svg: { engine: 'svgo', command: '--multipass' } },
		{
			gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] },
		},
		function (error, completed, statistic) {
			console.log('-------------');
			console.log(error);
			console.log(completed);
			console.log(statistic);
			console.log('-------------');

			fs.unlink(inputPath, (err) => {
				if (err) console.log(err);
				else console.log(inputPath, 'apagado');
			});
		}
	);
}

resize(path, './temp/output.jpg', width);
