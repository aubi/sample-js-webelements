#!/bin/bash
docker run --name sample-javascript-nameday -v $(pwd)/public_html/:/usr/share/nginx/html/:ro -d  -p 8080:80 nginx:alpine