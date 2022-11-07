#!/bin/bash

VERSAO=11
VERSAO=10

echo "[---Greeneye Assistant---]: Olá vamos comecar a configurar nosso ambiente..."
sudo apt update && sudo apt upgrade

echo "[---Greeneye Assistant---]: Virtual Machine atualizada com sucesso!"
sleep 3
clear

echo "[---Greeneye Assistant---]: Verificando se já possui o Java..."
sleep 2

java -version
if [ $? -eq 0 ]
        then
                echo "[---Greeneye Assistant---]: Você já tem o java Instalado!"
        else
                echo "[---Greeneye Assistant---]: Não foi identificado nenhum java instalado!"
                echo "[--Greeneye Assistant---]: Deseja instalar (sim ou nao)?"
        read inst
        if [\'$inst\' == \'sim\']
                then
                        echo "[---Greeneye Assistant---]: Ok, vamos instalar o Java!"
                        sudo add-apt-repository ppa:webupd8team/java -y
                        clear
                        echo "[---Greeneye Assistant]: Finalizando atualizacao..."
                        sudo apt update -y
                        echo "[---Greeneye Assistant---]: Instalado com sucesso!"
                        sleep 2

                        if [ $VERSAO -eq 11 ]
                                then
                                        echo "Instalando a versao 11 do Java! Confirme quando solicitado!"
                                        sudo apt install default-jre ; apt install openjdk-11-jre-headless; -y
                                        echo "Instalação do Java concluida!"
                                fi
                else
                echo "Você escolheu não fazer a instalação do Java!"
        fi
fi
sleep 2
clear

echo "[---Greeneye Assistant---]: Verificando se já possui o python instalado em sua virtual machine..."
python3 --version
if [ $? -eq 0 ]
        then
                echo "[---Greeneye Assistant---]: Você já tem o python Instalado!"
        else
                echo "[---Greeneye Assistant---]: Não foi identificado nenhum python instalado!"
                echo "[--Greeneye Assistant---]: Deseja instalar (sim ou nao)?"
        read inst
        if [\'$inst\' == \'sim\']
                then
                        echo "[---Greeneye Assistant---]: Ok, vamos instalar o Python3!"
                        sudo apt update
                        sudo apt install python3
                        echo "[---Greeneye Assistant---]: Instalado com sucesso!"
                        sleep 2
                else
                echo "Você escolheu não fazer a instalação do Python3!"
        fi
fi
sleep 3
clear

echo "[---Greeneye Assistant---]: Verificando se já existe bibliotecas do python..."
python3-pip --version
if [ $? -eq 0 ]
        then
                echo "[---Greeneye Assistant---]: Você já tem as bibliotecas!"
        else
                echo "[---Greeneye Assistant---]: Não foi identificado as bibliotecas!"
                echo "[--Greeneye Assistant---]: Deseja baixar (Sim ou Nao)?"
        read inst
        if [\'$inst\' == \'sim\']
                then
                        echo "[---Greeneye Assistant---]: Ok, vamos baixar as bibliotecas!"
                        sudo apt install python3-pip
                        sudo apt update -y
                        echo "[---Greeneye Assistant---]: Baixado com sucesso!"
                        sleep 2
                else
                echo "Você escolheu não baixar as bibliotecas!"
        fi
fi
sleep 2
clear

echo "[---Greeneye Assistant---]: Verificando se já possui o mysql instalado em sua virtual machine..."
mysql -V
if [ $? -eq 0 ]
        then
                echo "[---Greeneye Assistant---]: Você já tem o mysql Instalado!"
        else
                echo "[---Greeneye Assistant---]: Não foi identificado nenhum mysql instalado!"
                echo "[--Greeneye Assistant---]: Deseja instalar (Sim ou Nao)?"
        read inst
        if [\'$inst\' == \'sim\']
                then
                        echo "[---Greeneye Assistant---]: Ok, vamos instalar o Mysql!"
                        sudo apt update
                        sudo apt install mysql-server
                        echo "[---Greeneye Assistant---]: Instalado com sucesso!"
                        sleep 2
                else
                echo "Você escolheu não fazer a instalação do MySQL!"
        fi
fi
sleep 2
clear

echo "[---Greeneye Assistant---]: Verificando se já existe projeto GREENEYE..."
ls GREENEYE-OFICIAL
if [ $? -eq 0 ]
        then
                echo "[---Greeneye Assistant---]: Você já tem o projeto Greeneye!"
        else
                echo "[---Greeneye Assistant---]: Não foi identificado nenhum projeto Greeneye!"
                echo "[--Greeneye Assistant---]: Deseja baixar (Sim ou Nao)?"
        read inst
        if [\'$inst\' == \'sim\']
                then
                        echo "[---Greeneye Assistant---]: Ok, vamos baixar o projeto!"
                        git clone https://github.com/Burlina/GREENEYE-OFICIAL.git
                        echo "[---Greeneye Assistant---]: Baixado com sucesso!"
                        sleep 2
                else
                echo "Você escolheu não baixar o Projeto Greeneye!"
        fi
fi
sleep 2
clear

echo "[---Greeneye Assistant---]: Acessando projeto..."
cd GREENEYE-OFICIAL/Linguagens/python_files

echo "[---Greeneye Assistant---]: Coletando dados..."
python3 ApiOficial.py

#gabriela-dias
#ra03221042
#grupo8