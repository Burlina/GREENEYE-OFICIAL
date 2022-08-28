#GRUPO 04
#Gabriel Cavalcanti 
#Julia Barboza Pereira
#Leandro Vieira
#Michelly Mendes
#Pedro Moretti

import psutil
import time
from datetime import datetime
import mysql.connector

#Troque o user e a senha do MYSQL para utilizar.
con = mysql.connector.connect(host='localhost', database='Greeneye', user='seu_user', password='sua_senha')

#Envio de dados estáticos ao banco
if con.is_connected :
    print('Conectou no MYSQL')    
    dados_estaticos = str(psutil.cpu_freq()[2]) + ', ' + str(psutil.cpu_count()) + ', ' + str(psutil.cpu_count(logical=False)) + ', ' + str(psutil.virtual_memory()[0]*10**-9) + ', ' + str(psutil.disk_usage('C:\\')[0]*10**-9) + ');'
    insert_sintax = 'INSERT INTO DadosEstaticos VALUES(NULL, 1, 2, NOW(), '
    sql = insert_sintax + dados_estaticos

    cursor = con.cursor()
    cursor.execute(sql)
    con.commit()   


#Envio de dados dinamicos ao banco e exibição de dados ao usuário
media_cpu = 0
tempoparar = float(input(" Quantas vezes você deseja capturar os dados?"))
dados_cpu = []
i = 1

while tempoparar != 0:
 tempo = float(input("   Qual o tempo que você deseja em segundos?"))
 componente = (input("   Qual componente você deseja capturar os dados?"))
 contador = 0
 contadorcpu = 0
 if(componente == "cpu" or componente == "CPU" or componente == "Cpu"):
  while (contador < 1):
   contadorcpu = 0
   contador_cont = 0
   soma_cpu = 0
   while (contadorcpu < 1) :
       dado_atual = psutil.cpu_percent()
       dados_cpu.append(dado_atual)
       contadorcpu += 1
       while (contador_cont < len(dados_cpu)):
        soma_cpu = soma_cpu + dados_cpu[contador_cont]
        contador_cont += 1
        datahora = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
   media_cpu = soma_cpu/len(dados_cpu)
   if con.is_connected :
    print('Conectou no MYSQL')    
    
    dados_dinamicos= str(psutil.virtual_memory().percent) + ', ' + str(psutil.disk_usage('C:\\').percent) + ', ' + str(psutil.cpu_freq()[0]) + ', '+str(psutil.cpu_percent()) + ', ' + str(media_cpu) + ', ' + str(dados_cpu[len(dados_cpu)-1]) + ');'
    insert_sintax = 'INSERT INTO DadosDinamicos VALUES(NULL, 1, 2, NOW(), '
    sql = insert_sintax + dados_dinamicos

    cursor = con.cursor()
    cursor.execute(sql)
    con.commit()   
   print()
   print('_____CPU_____')
   print()
   print("Medida", i, "-", datahora)
   print()
   print("Frequência atual da CPU:", psutil.cpu_freq()[0],'Mhz --', "Frequência Max da CPU:", psutil.cpu_freq()[2],'Mhz',
      "\nNucleos incluindo os lógicos:", psutil.cpu_count(), "\nNucleos Físicos:", psutil.cpu_count(logical=False),"\nPercentual :", dados_cpu[len(dados_cpu)-1],'%', "\nMédia da CPU recorrente:", round(float(media_cpu)),"%")
   print()
   i+=1
   time.sleep(tempo)
   tempoparar = tempoparar - 1
   if(tempoparar == 0):
       desejo = (input("   Deseja continuar printando?(SIM/NÃO)"))
       if(desejo == "sim" or desejo == "SIM" or desejo == "Sim"):
        tempoparar = 10
       else:
        tempoparar = 10
        contador = 1

 if(componente == "HD" or componente == "hd" or componente == "Hd"):
     while contador < 1:
      datahora = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
      if con.is_connected :
        print('Conectou no MYSQL')    
    
        dados_dinamicos = str(psutil.virtual_memory().percent) + ', ' + str(psutil.disk_usage('C:\\').percent) + ', ' + str(psutil.cpu_freq()[0]) + ', ' + str(psutil.cpu_percent()) + ', ' + str(media_cpu) + ', ' + str(dados_cpu[len(dados_cpu)-1]) + ');'
        insert_sintax = 'INSERT INTO DadosDinamicos VALUES(NULL, 1, 2, NOW(), '
        sql = insert_sintax + dados_dinamicos

        cursor = con.cursor()
        cursor.execute(sql)
        con.commit()
      print()
      print('_____HD_____')
      print()
      print("Medida", i, "-", datahora)
      print()
      print("\nUso de Disco:", psutil.disk_usage('C:\\').percent,'%', "\nSistema de Arquivo:", psutil.disk_partitions()[0][2], "\nPartições:", psutil.disk_partitions()[0][1])
      print()
      i+=1
      time.sleep(tempo)
      tempoparar = tempoparar - 1
      if(tempoparar == 0):
       desejo = (input("   Deseja continuar printando?(SIM/NÃO)"))
       if(desejo == "sim" or desejo == "SIM" or desejo == "Sim"):
                 tempoparar = 10
       else:
         tempoparar = 10
         contador = 1

 if(componente == "memoria" or componente == "Memoria" or componente == "MEMORIA"):
   while contador < 1:
      datahora = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
      if con.is_connected :
        print('Conectou no MYSQL')    
    
        dados_dinamicos = str(psutil.virtual_memory().percent) + ', ' + str(psutil.disk_usage('C:\\').percent) + ', ' + str(psutil.cpu_freq()[0]) + ', ' + str(psutil.cpu_percent()) + ', ' + str(psutil.cpu_percent()) + ', ' + str(media_cpu) + ', ' + str(dados_cpu[len(dados_cpu)-1]) + ');'
        insert_sintax = 'INSERT INTO DadosDinamicos VALUES(NULL, 1, 2, NOW(), '
        sql = insert_sintax + dados_dinamicos

        cursor = con.cursor()
        cursor.execute(sql)
        con.commit()
      print()
      print('_____MEMÓRIA_____')
      print()
      print("Medida", i, "-", datahora)
      print()
      print("\nUso da Memória RAM:", psutil.virtual_memory().percent,'%')
      print( "Total RAM:", round( (psutil.virtual_memory()[0]) * (10 ** -9),1) )
      print("Quantidade RAM em Uso:", round((psutil.virtual_memory().used*10**-9),1),"GB")
      print()
      i+=1
      time.sleep(tempo)
      tempoparar = tempoparar - 1
      if(tempoparar == 0):
         desejo = (input("  Deseja continuar printando?(SIM/NÃO)")), print()
         if(desejo == "sim" or desejo == "SIM" or desejo == "Sim"):
           tempoparar = 10
         else:
           tempoparar = 10
           contador = 1

      
 if(componente == "tudo" or componente == "Tudo" or componente == "TUDO" or componente == "todos" or componente == "TODOS" or componente == "Todos"):
   while contador < 1:
      datahora = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
      if con.is_connected :
        print('Conectou no MYSQL')    
    
        dados_dinamicos = str(psutil.virtual_memory().percent) + ', ' + str(psutil.disk_usage('C:\\').percent) + ', ' + str(psutil.cpu_freq()[0]) + ', ' + str(psutil.cpu_percent()) + ', ' + str(media_cpu) + ', ' + str(dados_cpu[len(dados_cpu)-1]) + ');'
        insert_sintax = 'INSERT INTO DadosDinamicos VALUES(NULL, 1, 2, NOW(), '
        sql = insert_sintax + dados_dinamicos

        cursor = con.cursor()
        cursor.execute(sql)
        con.commit()
      print()
      print('_____CPU_____')
      print()
      print("Medida", i, "-", datahora)
      print()
      print("Frequência atual da CPU:", psutil.cpu_freq()[0],'Mhz --',
        "Frequência Max da CPU:", psutil.cpu_freq()[2],'Mhz',"\nNucleos incluindo os lógicos:", psutil.cpu_count(), "\nNucleos Físicos:", psutil.cpu_count(logical=False),
       "\nPercentual medio de uso por Nucleo:", psutil.cpu_percent(),'%')
      print()
      print('_____H_____')
      print()
      print("Medida", i, "-", datahora)
      print()
      print("\nUso de Disco:", psutil.disk_usage('C:\\').percent,'%',"\nSistema de Arquivo:", psutil.disk_partitions()[0][2], "\nPartições:", psutil.disk_partitions()[0][1])
      print()
      print('_____MEMÓRIA_____')
      print()
      print("Medida", i, "-", datahora)
      print()
      print("\nUso da Memória Virtual:", psutil.virtual_memory().percent,'%')
      print( "Total RAM:", round( (psutil.virtual_memory()[0]) * (10 ** -9),1) )
      print("Quantidade RAM em Uso:", round((psutil.virtual_memory().used*10**-9),1),"GB")
      print()
      i+=1
      time.sleep(tempo)
      tempoparar = tempoparar - 1
      if(tempoparar == 0):
         desejo =  (input("  Deseja continuar printando?(SIM/NÃO)"))
         if(desejo == "sim" or desejo == "SIM" or desejo == "Sim"):
                 tempoparar = 10
         else:
          tempoparar = 10
          contador = 1
