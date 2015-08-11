# grunt-wordpress-theme
Wordpress theme with Grunt and Bower

## Installation

1. Download the repo
2. <i>cd</i> to the folder
3. Run the <i>bower install</i> command to install the bower packages (Bootstrap, jQuery and Fot Awesome)
4. Run the <i>grunt install</i> command to install necessary Grunt packages

## Using

The JS files get concatenated and minified in one file in public/assets/javascript

The LESS files are exported and minified in public/assets/stylesheets

You have to copy eventual fonts manually in public/assets/fonts

Some basics Wodpress template files are included. JS and CSS are included via <i>functions.php</i>

Image processing via the imagemin grunt plugin is currently commented the Gruntfile.js because I usually optimize my images manually.

## To do

Add the qUnit Javascript test support

