# daily-sketches
My regular experiments with code.
Open-sourced and public

Usually those are published on [instagram](https://www.instagram.com/yanngraf/)


## sketches 
- [62 - black & white darts](https://raw.githack.com/yanngraf/daily-sketches/master/sketches/062_darts/index.html) 
- [63 - color darts](https://raw.githack.com/yanngraf/daily-sketches/master/sketches/063_darts-colors/index.html) 
- [64 - color sperm darts](https://raw.githack.com/yanngraf/daily-sketches/master/sketches/064_darts-colors-sperm/index.html) 
- [66 - color darts](https://raw.githack.com/yanngraf/daily-sketches/master/sketches/066_darts-colors2/index.html) 
- [67 - color darts](https://raw.githack.com/yanngraf/daily-sketches/master/sketches/067_darts-colors3/index.html) 
- [68 - color darts](https://raw.githack.com/yanngraf/daily-sketches/master/sketches/068_darts-colors4/index.html) 
- [69 - color darts](https://raw.githack.com/yanngraf/daily-sketches/master/sketches/069_darts-colors5/index.html) 
- [70 -  charcoal lines](https://raw.githack.com/yanngraf/daily-sketches/master/sketches/070_darts-charcoal-lines/index.html) 
- [71 -  charcoal lines](https://raw.githack.com/yanngraf/daily-sketches/master/sketches/071_darts-charcoal-lines/index.html) 




# Exporting the sketches for Instagram


Install [cCapture] (https://github.com/spite/ccapture.js) onto your P5JS the sketch
1. Add to html
2. Set canvas to 1080x1080
3. Copy ccanvas code 

Exporting the P5Js sketch
- Set "capturerState" to "1"

Combing all the images into a film sequence

1. Open the Terminal 
2. cd into the folder (ord just `cd` + drag the folder into the terminal)

(given ffmpeg is installed)

3. `ffmpeg -r 30 -f image2 -i "%07d.png" -s 1080:1080 -vcodec libx264 -crf 17 -pix_fmt yuv420p output.mp4`
4. the file output.mp4 is created in the folder.


Note:
To make a lighter version
`ffmpeg -r 30 -f image2 -i "%07d.png" -s 1080:1080 -vcodec libx264 -crf 27 -pix_fmt yuv420p output.mp4`

## Loop the file

1. Create the reversed version `ffmpeg -i output.mp4 -vf reverse reversed.mp4`
2. Combine (join) both file `ls output.mp4 reversed.mp4 | perl -ne 'print "file $_"' | ffmpeg -protocol_whitelist file,tcp,http,pipe -f  concat -i - -c copy joined_loop.mp4`




# Publishing the 


1. Open "android file transfer" - when the phone is connected.
2. Drop the videos in the "video" fold
3. Open insta
4. Copy hashtags from https://keep.google.com/