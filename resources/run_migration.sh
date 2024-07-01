#!/bin/bash

echo "Running migration"

sed -i '' -e 's/public static name/\/\/public static name/g' ./models/*

npm run typeorm -- migration:run

sed -i '' -e 's/\/\/public static name/public static name/g' ./models/*
