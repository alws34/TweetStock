#!/bin/bash
#----#
#This script will run every day at 4 am automatically via a cron job
#in order to sync the pi automatically to the repo changes
#DO NOT CHANGE THIS SCRIPT
#----#
cd /home/pi/FinalProject
git stash --all #stash all untracked stages
git pull -f #forcefully pull new changes from source