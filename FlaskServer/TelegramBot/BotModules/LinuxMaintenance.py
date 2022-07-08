import psutil,os
from BotModules import BotHelper


def GetStats(bot_commands):
    try:
        temp = measure_temp()
        temp += measure_ram_percent()
        temp += measure_cpu()
        bot_commands.sendMessage(temp.replace("temp=", ""))
    except Exception as e:
        BotHelper.WriteToLog(str(e))


def measure_temp():
    try:
        temp = os.popen("vcgencmd measure_temp").readline()
        temp.replace("'C", ' °C')
        return ("current CPU temp: " + temp)
    except Exception as e:
        BotHelper.WriteToLog(str(e))


def measure_ram_percent():
    return "RAM in use: " + str(psutil.virtual_memory().percent)+"%\n"


def measure_cpu():
    return "CPU load: " + str(psutil.cpu_percent())+"%"