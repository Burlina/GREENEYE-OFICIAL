import com.github.britooo.looca.api.core.Looca
import configuracao.Conexao
import dominio.LeituraLooca
import dominio.SistemaOperacionalLooca
import repositorio.GreeneyeRepositorio
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import javax.swing.JOptionPane


fun main() {
    val jdbcTemplate = Conexao().getJdbcTemplate()
    val leituraRepositorio = GreeneyeRepositorio(jdbcTemplate)

    val looca = Looca()
    val sistema = looca.sistema
    val so = sistema.sistemaOperacional
    val novoSO = SistemaOperacionalLooca( 0, so)
    leituraRepositorio.inserirSO(novoSO)
    //println("Sistema: $sistema")

    while (true){

        // MEMORIA RAM
        val memoria = looca.memoria
        val ramTotal = (memoria.total.toDouble()/1024/1024/1024)
        val ramUso = (memoria.emUso.toDouble()/1024/1024/1024)
        val ramDisponivel = (memoria.disponivel.toDouble()/1024/1024/1024)

        // DISCO
        val grupoDiscos = looca.grupoDeDiscos
        val discos = grupoDiscos.discos
        val tamanhoDiscos = discos[0].tamanho.toDouble()/1024/1024/1024

//        discos.forEachIndexed { d, disco ->
//
//            println("""
//            Disco ${d+1}:
//            Tamanho (GB): ${"%.2f".format(disco.tamanho.toDouble()/1024/1024/1024)}
//        """.trimIndent() )
//        }


        // DATA HORA
        val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")
        val dataHora = (LocalDateTime.now().format(formatter)).toString()

        val novaLeitura = LeituraLooca( 0, ramTotal, ramUso, ramDisponivel, tamanhoDiscos, dataHora)
        leituraRepositorio.inserirLeitura(novaLeitura)
    }

    // criação do gerenciador de temperatura
    //val temperatura = looca.temperatura
    //println("Temperatura da CPU (ºC):  ${temperatura.temperatura}")
   // println()
}

