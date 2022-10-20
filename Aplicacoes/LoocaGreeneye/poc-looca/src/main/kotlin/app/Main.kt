package app

import com.github.britooo.looca.api.core.Looca
import configuracao.Conexao
import dominio.LeituraLooca
import dominio.SistemaOperacionalLooca
import repositorio.GreeneyeRepositorio
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import javax.swing.JOptionPane
import javax.swing.JOptionPane.*

open class Main {
    companion object{
        @JvmStatic fun main(args: Array<String>){
            val jdbcTemplate = Conexao().getJdbcTemplate()
            val leituraRepositorio = GreeneyeRepositorio(jdbcTemplate)

            val looca = Looca()
            val sistema = looca.sistema
            val so = sistema.sistemaOperacional
            val novoSO = SistemaOperacionalLooca( 0, so)
            //leituraRepositorio.inserirSO(novoSO)

            // MEMORIA RAM
            val memoria = looca.memoria
            val ramTotal = (memoria.total.toDouble()/1024/1024/1024)
            val ramUso = (memoria.emUso.toDouble()/1024/1024/1024)
            val ramDisponivel = (memoria.disponivel.toDouble()/1024/1024/1024)

            // DISCO
            val grupoDiscos = looca.grupoDeDiscos
            val discos = grupoDiscos.discos
            val tamanhoDiscos = discos[0].tamanho.toDouble()/1024/1024/1024

            // DATA HORA
            val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")
            val dataHora = (LocalDateTime.now().format(formatter)).toString()

            val novaLeitura = LeituraLooca( 0, ramTotal, ramUso, ramDisponivel, tamanhoDiscos, dataHora)
            //leituraRepositorio.inserirLeitura(novaLeitura)

            showMessageDialog(null, "Bem-vindo ao console Greeneye!")
            showMessageDialog(null, "O sistema da sua maquina é ${sistema.sistemaOperacional}")

            //val leituras = leituraRepositorio.listarLeitura()
            //val consultar = showMessageDialog(null, "Foram feitas ${leituras} leituras")

            while (true){
                val escolha = showInputDialog("""
                    Escolha uma opção para ver a leitura:
                    1 - Memória RAM total
                    2 - Memória RAM utilizada
                    3 - Memória RAM disponível
                    4 - Tamanho do disco
                    5 - Todos
                    NDA - Sair
                """.trimIndent())

                when(escolha){
                    "1" -> showMessageDialog(null, "Memória RAM total (GB): ${"%.2f".format(ramTotal)}")
                    "2" -> showMessageDialog(null, "Memória RAM utilizada (GB): ${"%.2f".format(ramUso)}")
                    "3" -> showMessageDialog(null, "Memória dispónível (GB): ${"%.2f".format(ramDisponivel)}")
                    "4" -> showMessageDialog(null, "Tamanho do disco (GB): ${"%.2f".format(tamanhoDiscos)}")
                    "5" -> showMessageDialog(null, "Memória RAM: " +
                            "Total: ${"%.2f".format(ramTotal)}" +
                            "\r\nUtilizada: ${"%.2f".format(ramUso)}" +
                            "\r\nDisponível: ${"%.2f".format(ramDisponivel)}" +
                            "\r\nTamanho disco: ${"%.2f".format(tamanhoDiscos)}")
                    //"6" -> showInputDialog("Você fez ${}")
                    else -> break
                }
            }
        }
    }
}