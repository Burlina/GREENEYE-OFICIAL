package dominio

class LeituraLooca(
    var idLeituraLooca:Int,
    var qtdRamTotal:Double,
    var qtdRamUso:Double,
    var qtdRamDisponivel:Double,
    var tamanhoDisco:Double,
    var datHoraLeitura:String) {
    constructor() : this(0, 0.0, 0.0, 0.0, 0.0, "")
}