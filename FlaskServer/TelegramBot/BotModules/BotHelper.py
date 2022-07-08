from os import name as os_name, path as os_path, getcwd ,makedirs
from sys import path as sys_path
sys_path.insert(1, os_path.join(sys_path[0], '..'))
from Tweetstock import Helper


def GetDateTime():
    return Helper.GetDateTime()

def WriteToLog(msg):
    Helper.logger(msg=msg)

def GetDateTimeStringify(format="%d_%m_%Y"):
    return Helper.GetDateTimeStringify(format=format)


def Get_Prefix_and_Delimiter():
    return Helper.GetPrefixandDelimiter()

def GetTelebotPath():
    telebot_path = f'{getcwd()}/FlaskServer/TelegramBot/'  # + '\\Telebot' /home/pi/FinalProject /
    return telebot_path


def CommandNotFound(id,cmd,commands,bot_commands):
    try:
        if cmd[0] not in commands and cmd[0] != '/start':
            bot_commands.sendMessage(id,"Command not found\nPlease try one of the following:")
            bot_commands.sendMessage(id,bot_commands.sendHelp())
    except Exception as e:
        Helper.logger(str(e))

def Unauthorized(msg, id,bot,bot_commands,delimiter,path):
    try:
        Helper.logger('UNAUTORIZED ACCESS ALERT:\n' + str(msg['from']))
        with open(f'{path}{delimiter}{id}.txt', 'w+') as f:
            f.write('FROM:\n' + str(msg['from']) +
                    '\nCHAT:\n' + str(msg['chat']))
        bot.sendMessage(id, 'Unauthorized USER!\n')
        bot_commands.sendMessage('Unautorized Access Attempt from:\n' +
                    str(msg['from']))
    except Exception as e:
        Helper.logger(str(e))


def CreateInitDirs(Dirs_Paths):
    for i in Dirs_Paths.items():
        if not os_path.exists(i[1]):
            makedirs(i[1])
