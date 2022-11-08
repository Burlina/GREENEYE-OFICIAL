from datetime import datetime
import psutil
import mysql.connector
import time 
import os
from mysql.connector import errorcode
import pyodbc
import textwrap

while (True):

    def Conexao():

        # variaveis de conexao
        driver ='{ODBC Driver 18 for SQL Server}'
        server_name = 'greeneye'
        database_name = 'greeneye'
        server = '{server_name}.database.windows.net,1433'.format(server_name=server_name)
        username = 'GreeneyeADM'
        password = 'Greeneye123@'
        # definindo banco url 
        connection_string = textwrap.dedent('''
        Driver={driver};
        Server={server};
        Database={database};
        Uid={username};
        Pwd={password};
        Encrypt=yes;
        TrustedServerCertificate=no;
        Connection Timeout=10;
        '''.format(
            driver=driver,
            server=server,
            database=database_name,
            username=username,
            password=password
        )) 

        cnxn:pyodbc.Connection = pyodbc.connect(connection_string) 

        global crsr
        crsr = cnxn.cursor()
        print("Conectado ao banco de dados:")




        # try:
        #     db_connection = mysql.connector.connect(
        #         host='localhost', user='root', password='Fabo12345@', database='greeneye')
        #     print("Conectei no banco!")
        # except mysql.connector.Error as error:
        #     if error.errno == errorcode.ER_BAD_DB_ERROR:
        #         print("Não encontrei o banco")
        #     elif error.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        #         print("Credenciais erradas")
        #     else:
        #         print(error)

        #Captura do sistema operacional da máquina, utilizando a própria psutil 
        # sistemaoperacional = psutil.disk_partitions()[0][2] 
        if(os.name == 'nt'):
            sistemaoperacional = 'NFTS'
        elif(os.name == 'posix'):
            sistemaoperacional = 'EXT4'
        else:
            sistemaoperacional = 'Sistema não Identificado.'

        # Processador
        processador = psutil.cpu_count()
        porcentagem_cpu = psutil.cpu_percent()

        # Disco
        if(sistemaoperacional == 'NFTS'):
            discoTotal =(psutil.disk_usage("C:\\")[0] / 10**9)
        elif(sistemaoperacional == 'EXT4' or sistemaoperacional == 'EXT3'):
            discoTotal =(psutil.disk_usage("/")[0] / 10**9)
        
        if(sistemaoperacional == 'NFTS' or sistemaoperacional == 'Windows'):
            discoUso = (psutil.disk_usage("C:\\")[1] / 10**9)
        elif(sistemaoperacional == 'EXT4' or sistemaoperacional == 'EXT3' or sistemaoperacional == 'Linux'):
            discoUso = (psutil.disk_usage("/")[1] / 10**9)

        if(sistemaoperacional == 'NFTS' or sistemaoperacional == 'Windows'):
            discoLivre = (psutil.disk_usage("C:\\")[2] / 10**9)
        elif(sistemaoperacional == 'EXT4' or sistemaoperacional == 'EXT3' or sistemaoperacional == 'Linux'):
            discoLivre = (psutil.disk_usage("/")[2] / 10**9)

        if(sistemaoperacional == 'NFTS'):
            disk = psutil.disk_usage('C:\\')
        elif(sistemaoperacional == 'EXT4' or sistemaoperacional == 'EXT3'):
            disk = psutil.disk_usage('/')

        diskPercent = disk.percent

        # Ram
        ramTotal = (psutil.virtual_memory() [0] / 10**9)
        ramUso =  (psutil.virtual_memory() [3] / 10**9)
        ramUso2 = ramUso * 1.15
        ramUso3 = ramUso2 * 1.05
        ram = (psutil.virtual_memory())
        ramPercent = ram.percent



        # crsr = cnxn.cursor()
        # cursor = db_connection.cursor()

        fkMaquina = 50001
        sql = "INSERT INTO Leitura (fkMaquina, sistemaOperacional, cpuMedia, qtdProcessador, ramTotal, ramUso,  ramUsoPercent, discoTotal, discoUso, discoLivre, discoPercent, dataHora) VALUES (%s,%s, %s, %s, %s, %s,%s,%s,%s,%s,%s,(SELECT NOW()))"
        values = [fkMaquina, sistemaoperacional,  porcentagem_cpu, processador, ramTotal, ramUso, ram.percent, discoTotal, discoUso, discoLivre, disk.percent]
        crsr.execute(sql, values)
        # cursor.execute(sql, values)
        


        print("\n")
        crsr.commit()
        print(crsr.rowcount, "Inserindo no banco.")
        # print(cursor.rowcount, "Inserindo no banco.")
        # db_connection.commit()
        time.sleep(5)