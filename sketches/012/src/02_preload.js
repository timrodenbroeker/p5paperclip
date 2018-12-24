var imageFilenames = {};

// The busy-boolean is used to show a loading message while loading and converting
var busy = true;

// This variable holds the current image
var sourceImage;

// The canvas (PGraphics-element) that holds the manipulated image
var manipulatedImage;

function preload() {
	imageFilenames = loadJSON('../../data/images.json');

	sourceImage = loadImage('../../images/43.jpg');

	fontFjalla = loadFont('../../fonts/Cormorant-Regular.ttf');
	fontPoppinsBold = loadFont('../../fonts/Poppins-Bold.ttf');
	fontPoppinsLight = loadFont('../../fonts/Poppins-Light.ttf');
}
