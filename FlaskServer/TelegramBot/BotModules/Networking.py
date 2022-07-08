import os
import socket
import time
from urllib import request
import requests
from  BotModules import BotHelper as BotHelper



def LanScan(bot_commands):
    try:
        live_hosts = []
        msg = 'Live Hosts:\n'

        for i in range(1, 138):
            host = '10.0.0.' + str(i)
            if os.system("ping -c 1 " + host) == 0:
                try:
                    hostname = socket.gethostbyaddr(host)[0]
                    app = 'IP: ' + host + ' - Hostname: ' + hostname + '\n'
                except Exception as e:
                    app = 'IP: ' + host + '\n'
                live_hosts.append(app)

            if len(live_hosts) == 0:
                host = '192.168.1.' + str(i)
            if os.system("ping -c 1 " + host) == 0:
                try:
                    hostname = socket.gethostbyaddr(host)[0]
                    app = 'IP: ' + host + ' - Hostname: ' + hostname + '\n'
                except Exception as e:
                    app = 'IP: ' + host + '\n'
                live_hosts.append(app)

        for i in live_hosts:
            msg += i
        bot_commands.sendMessage(msg)
    except Exception as e:
        BotHelper.WriteToLog(str(e))


def CheckIP(old_ex_ip,bot_commands,hostname):
    try:
        sec_in_hour = 3600
        check_exery_X_hours = 6
        while True:
            new_ex_ip = getExternalIP()
            if old_ex_ip != new_ex_ip:
                bot_commands.sendMessage(hostname + "'s IP Changed!\n" +
                            hostname + "'s New IP is: " + new_ex_ip)
                url = "http://alws951@gmail.com:320479Aa!#$%^ddd@dynupdate.no-ip.com/nic/update?hostname=alws9955.ddns.net&myip=" + new_ex_ip

            # else:
            #     bot_commands.sendMessage('IP NOT CHANGED\nYour External IP is: {}\nYour internal IP is: {}'.format(
            #         new_ex_ip, getInternalIP()))
            time.sleep(sec_in_hour * check_exery_X_hours)
    except Exception as e:
        BotHelper.WriteToLog(str(e))


def getExternalIP():
    try:
        current_ext_ip = requests.get(
            'https://checkip.amazonaws.com').text.strip()
    except:
        current_ext_ip = request.urlopen(
            'https://ident.me').read().decode('utf8')
    if(current_ext_ip == ''):
        BotHelper.WriteToLog('Couldnt get external ip!')
    return current_ext_ip


def getInternalIP():
    try:
        # return str((([ip for ip in socket.gethostbyname_ex(socket.gethostname())[2] if not ip.startswith("127.")] or [[(s.connect(("8.8.8.8", 53)), s.getsockname()[0], s.close()) for s in [socket.socket(socket.AF_INET, socket.SOCK_DGRAM)]][0][1]]) + ["no IP found"])[0])
        addresses = socket.gethostbyname_ex(socket.gethostname())[-1]
        filtered = []
        for address in addresses:
            if '192.168.' in address or '10.0.0.' in address:
                filtered.append(address)
        return str(filtered).replace('[', '').replace(']', '').replace("'", '')
    except Exception as e:
        BotHelper.WriteToLog(str(e))

