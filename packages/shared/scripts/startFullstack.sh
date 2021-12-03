#!/bin/env bash

cd packages

cd backend
# start backend server in background
yarn start:static &
cd -

cd frontend
# start frontend server in background
yarn start &
cd -

cd ..
