from  BotModules import BotHelper

def GetInitCommands():
    return {
        # '/start': 'acts exactly like the /help command\n',
        '/version': 'Returns the bot defalt message including bot version\n',
        '/help': 'Returns a list of all available Commands\n',
        '/ip': 'Get The current External IP along with all ipv4 internal ips assigned to the host machine\n',
        '/lanscan': "Get All live IP Addresses on host's LAN\n",
        '/weather': "Get a weather report using openweathermap's api\n",
        '/pid': 'Get current Telebot PID\n',
        # '/pinmessage': 'pins the given message id to the chat\n',
        '/test': 'internal testing\n'
    }

def GetLinuxCommands():
    linuxcommands = {
            '/status ': "Get Pi's Stats\n",
            '/update ': 'update device\n',
            '/reboot ': ' - reboot device\n',
        }

    return linuxcommands

def GetWindowsCommands():
    return {
            '/drives': 'Get all available Drives stats\n',
            '/norton': 'Start a virus scan on Host using Norton\n',
            '/spybot': 'Running Spybot S&D on remote host\n',
            '/sfc': 'Runs an "SFC Scannow" command\n',
            '/nvidia': "Updates Host's GPU\n"
        }

def Update_Commands(init_dict , updated_commands):
    try:
        return init_dict.update(updated_commands)
    except Exception as e:
        BotHelper.WriteToLog(
            str(e) + '\t\t@Update_Commands\t\t[' + BotHelper.GetDateTimeStringify()+']\n')    