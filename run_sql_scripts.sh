#!/bin/bash
# This bash script loops through the sql directory and applies the sql to our db

cd sql
for FILE in *; do mysql -u root -p"admin123" < $FILE; done
