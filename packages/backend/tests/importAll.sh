#!/bin/env bash

curl 'http://localhost:31337/Pokemon/importAll' -X POST \
    -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0' \
    -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' \
    -H 'Accept-Language: en-US,en;q=0.5' --compressed \
    -H 'Connection: keep-alive' \
    -H 'Upgrade-Insecure-Requests: 1' \
    -H 'Cache-Control: max-age=0, no-cache' \
    -H 'Pragma: no-cache' \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
