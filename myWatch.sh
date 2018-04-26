#!/bin/bash

while true
do 
    echo $(curl --silent $1)
    sleep 1
done
