#!/bin/bash

while true
do 
    echo $(curl --silent localhost:8000)
    sleep 1
done
