import csv
import os
import Helper
import glob

filelist = []

def get_files_path(model_params_path, extension="*"):
    delimiter = '/'
    return glob.glob(f"{model_params_path}{delimiter}*.{extension}")

def build_dict(arr):
    dic = {}
    for row in arr:
        line = row.split('|')
        dic[line[0]] = line[1].replace(
            '\n', '').replace('"', '').replace("'", '')
    return dic


def read_and_change():
    for file in filelist:
        reader = []
        with open(file, 'r') as csvfile:
            reader = csvfile.readlines()

        for idx, row in enumerate(reader):
            reader[idx] = row.replace(',', '|', 1)

        Helper.save_dict_to_tsv(dict=build_dict(
            reader), save_path=file)


filelist = get_files_path(
    '/home/pi/FinalProject/FlaskServer/Data/Networks/test/SELECTED MODELS - 25.05/npast = 1/AAPL', 'csv')
read_and_change()
