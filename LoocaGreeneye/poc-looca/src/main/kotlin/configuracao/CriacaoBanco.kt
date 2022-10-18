package configuracao

fun main() {
    val jdbcTemplate = Conexao().getJdbcTemplate()

    jdbcTemplate.execute("""
        create table IF NOT EXISTS LeituraLooca (
            idLeituraLooca int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
            qtdRamTotal DECIMAL(3,2),
            qtdRamUso DECIMAL(3,2),
            qtdRamDisponivel DECIMAL(3,2),
            tamanhoDisco DECIMAL(5,2),
            dataHoraLeitura VARCHAR(50)
        );
    """)

    jdbcTemplate.execute("""
        create table IF NOT EXISTS SistemaOperacionalLooca (
            idSistema int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
            SO VARCHAR(50) not null
        );
    """)

}