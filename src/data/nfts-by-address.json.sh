#!/usr/bin/env bash

curl -X POST https://api.g.alchemy.com/data/v1/$API_KEY/assets/nfts/by-address \
 -H "Content-Type: application/json"  \ 
 -d '{
 "addresses": [
    {
      "address": "'$ADDRESS'",
      "networks": [
        "'$NETWORK'"
      ]
    }
  ]
}'