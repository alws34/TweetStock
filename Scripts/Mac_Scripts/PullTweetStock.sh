#!/bin/bash

cd <PATH TO LOCAL REPO>
git stash --all #stash all untracked stages
git pull -f #forcefully pull new changes from source