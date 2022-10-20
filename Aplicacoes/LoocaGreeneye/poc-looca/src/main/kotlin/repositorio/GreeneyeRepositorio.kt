package repositorio

import dominio.LeituraLooca
import dominio.SistemaOperacionalLooca
import org.springframework.jdbc.core.BeanPropertyRowMapper
import org.springframework.jdbc.core.JdbcTemplate

class GreeneyeRepositorio(val jdbcTemplate: JdbcTemplate) {

    fun inserirSO(sistemaLooca: SistemaOperacionalLooca) {
        jdbcTemplate.update("""
            insert into SistemaOperacionalLooca (idSistema) values
            ('${sistemaLooca.SO}')
        """)
    }

    fun inserirLeitura(leitura: LeituraLooca) {
        jdbcTemplate.update("""
            insert into LeituraLooca (qtdRamTotal, qtdRamUso, qtdRamDisponivel, tamanhoDisco, dataHoraLeitura ) values
            ('${leitura.qtdRamTotal}', '${leitura.qtdRamUso}', '${leitura.qtdRamDisponivel}', '${leitura.tamanhoDisco}', '${leitura.datHoraLeitura}')
        """)
    }

    fun listarLeitura():List<LeituraLooca> {
        return jdbcTemplate.query("select * from LeituraLooca", BeanPropertyRowMapper(LeituraLooca::class.java))
    }
}