/*jshint asi:true */
/*
 * Image Chunker
 * -- bit kill an image --
 */

function convertImageToData(image) {
    console.log(image)
    console.log()
  var canvas = document.createElement("canvas")
  canvas.width = image.width
  canvas.height = image.height
  var ctx = canvas.getContext("2d")
  ctx.drawImage(image, 0, 0)
  console.log(image.width, image.height)
  return ctx.getImageData(0, 0, image.width, image.height)
}



function bitfilter(pixels, imageData, width, height) {
    var r, g, b, a, y, x, index
    for (y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
            index = (x + y * imageData.width) * 4
            r=imageData.data[index]
            g=imageData.data[index+1]
            b=imageData.data[index+2]
            a=imageData.data[index+3]
            console.log(r,g,b)
        }
    }
    //imageData.data[pos++] = Math.max(0,Math.min(255, r));
    //imageData.data[pos++] = Math.max(0,Math.min(255, g));
	//imageData.data[pos++] = Math.max(0,Math.min(255, b));
	//imageData.data[pos++] = 255; // opaque alpha
}


function start(imagepath) {
    var img = document.createElement("img")
    img.src = imagepath
    img.alt = 'na'
    img.onload = function () {
        var data  = convertImageToData( img )
        console.log(data)
        bitfilter(1, data, img.width, img.height)
    }
    
}

start("/images/facebig.png")

