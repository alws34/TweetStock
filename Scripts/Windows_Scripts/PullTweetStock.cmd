@echo off
chcp 65001 >nul
cd /d <PATH TO LOCAL REPO HERE>
git pull
timeout /t 3 /nobreak
