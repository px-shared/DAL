#!/bin/bash

echo "Updating models to use PGSQL supported types"

sed -i '' -e 's/timestamp/timestamptz/g' ./models/*
sed -i '' -e 's/public static name/\/\/public static name/g' ./models/*

npm run typeorm -- migration:generate -n $1

sed -i '' -e 's/timestamptz/timestamp/g' ./models/*
sed -i '' -e 's/\/\/public static name/public static name/g' ./models/*
