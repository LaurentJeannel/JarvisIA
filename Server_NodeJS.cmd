SET NODE_PATH=%cd%\NodeJS\node_modules\npm\node_modules;%cd%\NodeJS\node_modules\npm
SET NODE_PATH=%NODE_PATH%;%cd%\NodeJS\node_modules\npm

"%cd%\NodeJS\node.exe" script/wsrnode.js
