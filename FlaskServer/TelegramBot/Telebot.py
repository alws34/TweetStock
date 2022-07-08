import telepot
import time
import os
import socket
import json
import threading
from BotModules import LinuxMaintenance as LinuxMaintenance
from BotModules import Tester as Tester
from BotModules import BotHelper as BotHelper
from BotModules import Commands as Commands
from BotModules.BotCommands import BotCommands
from BotModules.Settings import Settings
from BotModules import Networking as Networking
import subprocess
from subprocess import PIPE
# from sys import path as sys_path  #if ever need to import something from parent directory
# sys_path.insert(1, os.path.join(sys_path[0], '..'))

bot_version = '2.0.1'

HOSTNAME = socket.gethostname()
COMMANDS = Commands.GetInitCommands()
telebot_path = BotHelper.GetTelebotPath()
delimiter,prefix = BotHelper.Get_Prefix_and_Delimiter()
pid = 'Currend PID: ' + str(os.getpid())
current_ext_ip = ''
default_msg = ''
command = ''

Dirs_Paths = {
    'root': telebot_path,
    'Unauthorized': telebot_path + delimiter + 'UnauothorizedUsers' + delimiter,
}

def MessageHandler(msg):
    current_id = msg['from']['id']
    if current_id not in settings.ID:
        BotHelper.Unauthorized(msg = msg ,id = current_id, bot = BOT, bot_commands = bot_commands, delimiter = delimiter, path = Dirs_Paths['Unauthorized'])       
    else:
        if 'text' in msg:
            command = msg['text']

            if command == "/help" or command == '/start':
                bot_commands.sendMessage(current_id,bot_commands.sendHelp())

            elif command == '/version':
                bot_commands.sendMessage(current_id,default_msg)

            elif command == '/test':
                Tester.Test(bot_commands)

            elif command == '/ip':
                bot_commands.sendMessage(current_id,HOSTNAME + "'s External IP address is: " + Networking.getExternalIP() +
                            '\n' + HOSTNAME + "'s Internal IP Address is: " + Networking.getInternalIP())

            elif '/pinmessage' in command:
                message = command.split()
                bot_commands.pinMessage(message[1])

            elif '/pid' in command:
                bot_commands.sendMessage(current_id,pid)

            elif "dbworker" in command:
                db_path = '/home/pi/FinalProject/FlaskServer/DB_Worker.py'
                venv_path = '/home/pi/FinalProject/env/bin/python'
                cmd = command.split()

                if cmd[1] == "start":
                    worker = threading.Thread(target=RunDBWorker, args=(current_id,venv_path, db_path))
                    worker.start()
                    bot_commands.sendMessage(
                        current_id, f'Running DB Worker')

                elif cmd[1] == 'stop':
                    if db_pid != 0:
                        worker.join()
                        bot_commands.sendMessage(
                            current_id, f'killed DB Worker')

                else:
                    bot_commands.sendMessage(current_id, f'no DB Worker subprocess')

            # elif "modeltrainer" in command:
            #     global mt_pid
            #     global mt_proc
            #     cmd = command.split()
            #     if cmd[1] == "start":
            #         mt_path = '/home/pi/FinalProject/FlaskServer/ModelTrainer.py'
            #         venv_path = '/home/pi/FinalProject/env/bin/python'
            #         mt_proc = subprocess.Popen(
            #             [venv_path, mt_path], stdout=PIPE, stderr=PIPE)
            #         mt_pid = mt_proc.pid
            #         bot_commands.sendMessage(
            #             current_id, f'Running model trainer @ PID {mt_pid}')
            #     elif cmd[1] == 'stop':
            #         if mt_pid != 0:
            #             mt_proc.kill()
            #             bot_commands.sendMessage(
            #                 current_id, f'killed model trainer @ pid {mt_pid}')
            #         else:
            #             bot_commands.sendMessage(current_id, f'no model trainer subprocess')



            else:
                BotHelper.CommandNotFound(current_id, command.split(), COMMANDS, bot_commands)
        elif 'document' in msg:
            err = 'recieved a document. discarding!'
            BotHelper.WriteToLog(err)
            bot_commands.sendMessage(err)
            pass


def RunDBWorker(id,venv_path,db_path):
    db_proc = subprocess.Popen([venv_path, db_path],shell=True, stdout=PIPE, stderr=PIPE)
    print(db_proc.pid)
    print('HI!')
    while True:
        print('STDOUT::\t\t' , db_proc.stdout.readline)
        print('STDERR::\t\t', db_proc.stderr.readline)


def ReadConfig():
    try:
        bot_configs_path = f'/home/pi/FinalProject/FlaskServer/CONFIGS/TelegramBotSettings.json'
        with open(f'{bot_configs_path}', "r") as f:
            settings = json.loads(f.read())
        return settings
    except Exception as e:
        BotHelper.WriteToLog(str(e))

def InitSettings(configs):
    if(configs != None):
        id = configs['settings']['ID']
        units = configs['settings']['Units']
        bot_token = configs['Tokens'][configs['settings']['Current_Bot']]

        return Settings(id = id, units= units, bot_token = bot_token)    
    else:
        BotHelper.WriteToLog("COULDNT READ CONFIG FILE! ABORTING")
        os._exit(1)



def Main():
    global BOT
    global default_msg
    global settings
    global bot_commands
    global COMMANDS
    try:
        BotHelper.CreateInitDirs(Dirs_Paths=Dirs_Paths)
        settings = InitSettings(ReadConfig())   
        
        if os.name == 'posix':
            COMMANDS.update(Commands.GetLinuxCommands())

        BOT = telepot.Bot(settings.BOT_TOKEN)# init Bot
        BOT.message_loop(MessageHandler)
        bot_commands = BotCommands(id =settings.ID,bot =BOT,commands=COMMANDS,units=settings.UNITS)#init commands class object
            
        current_ext_ip = Networking.getExternalIP()
        default_msg = f'{HOSTNAME} is online\npid: {pid}\nExternal IP: {current_ext_ip}\nInternal IP: {Networking.getInternalIP()}\nBot Ver. {bot_version}'
        
        bot_commands.sendMessage(settings.ID[0], default_msg)
    except Exception as e:
        BotHelper.WriteToLog(str(e))
    while True:
        time.sleep(0.5)


if __name__=='__main__':
    Main()
