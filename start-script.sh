# export DISPLAY=:1.0
# useradd -m chromeuser
# google-chrome --no-sandbox
# mkdir client && mkdir server  && echo -e "REACT_APP_UNSPLASH_SECRET_KEY=<YOUR_API_KEY>" >> client/.env && echo -e "DANGEROUSLY_DISABLE_HOST_CHECK=true" >> client/.env && echo -e "MONGODB_ATLAS_URL=<YOUR_ATLAS_CONNECTION_STRING>" >> server/.env && cp -r /usr/local/educative/template/client/* client/ && cp -r /usr/local/educative/template/server/* server/ && ln -sTf /usr/local/educative/Random-Quote-Generator/client/node_modules client/node_modules && ln -sTf /usr/local/educative/Random-Quote-Generator/server/node_modules server/node_modules && mongod >/dev/null & sleep 5 && n 8.12.0 > /dev/null && cd server && tmux \
# new-session  "yarn server; read" \; \
# split-window "yarn client; read" \; \
# select-layout even-horizontal

#!/bin/bash

if ls *.class 1> /dev/null 2>&1; then
    echo "Cleaning directory..."
    rm *.class
    export DISPLAY=:1.0
    useradd -m chromeuser
    google-chrome --no-sandbox
    
else
    export DISPLAY=:1.0
    useradd -m chromeuser
    google-chrome --no-sandbox
fi