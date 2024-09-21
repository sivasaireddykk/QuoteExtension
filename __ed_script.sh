#!/bin/bash

cd '/usercode'

sh -c "curl -X POST -H \"Content-type: text/plain\" -d \"
export DISPLAY=:1.0
useradd -m chromeuser
google-chrome --no-sandbox\" http://0.0.0.0:9001/compile" >> '/usercode/__ed_stdout.txt' 2>> '/usercode/__ed_stderr.txt'
exit 0