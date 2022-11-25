#!/bin/bash

echo "Updating models to use PGSQL supported types"

sed -i -e 's/timestamp/timestamptz/g' ./models/*

npm run typeorm -- migration:generate -n $1

sed -i -e 's/timestamptz/timestamp/g' ./models/*
