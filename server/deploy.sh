#! /bin/bash
npm run build
docker build -t doky/server:latest .
docker push doky/server:latest
