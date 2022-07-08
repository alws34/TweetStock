import os
from BotModules import BotHelper as Helper


class BotCommands:
    def __init__(self, id, bot, commands, units):
        self.id = id
        self.bot = bot
        self.commands = commands
        self.units = units

    def pinMessage(self,mess_id):
        self.self.bot.pinChatMessage(self.id, mess_id)

    def PinHelp(self):
        try:
            self.self.bot.unpinChatMessage(self.id)
            msg = self.self.bot.sendMessage(self.id, self.sendHelp())
            self.pinMessage(msg['message_self.id'])
        except Exception as e:
            Helper.WriteToLog(f'{e}')

    def sendMessage(self,id, message):
        if isinstance(id,list):
            for i in id:
                self.bot.sendMessage(i, message)
        else:
            self.bot.sendMessage(id, message)

    def shellCommand(self,cmd):
        os.system(cmd)

    def sendHelp(self):
        try:
            helpmsg = 'Commands list:\n'
            for key, value in self.commands.items():
                helpmsg += f'{key} - {value}\n'
            return helpmsg
        except Exception as e:
            Helper.WriteToLog(str(e))