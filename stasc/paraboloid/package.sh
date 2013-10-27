#!/bin/sh

rm -rf package.zip package
mkdir package
convert -resize 32x32 icon.svg package/icon32.png
convert -resize 60x60 icon.svg package/icon60.png
convert -resize 90x90 icon.svg package/icon90.png
convert -resize 120x120 icon.svg package/icon120.png
convert -resize 128x128 icon.svg package/icon128.png
convert -resize 256x256 icon.svg package/icon256.png
cp manifest.webapp ../Sxout.js package
mkdir package/paraboloid
cp *.html *.js package/paraboloid
cd package
zip -r ../package.zip .

