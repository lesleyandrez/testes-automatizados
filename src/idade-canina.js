export default function getIdadeCaninaFromIdadeHumana(idadeHumana = null) {
    const regrasParametros = [
        typeof idadeHumana !== 'number',
        idadeHumana < 0,
        Number.isNaN(idadeHumana),
    ];
    const idadeHumanaEstaForaDoPadrao = regrasParametros.includes(true);

    if (idadeHumanaEstaForaDoPadrao) {
        return null;
    }
    
    if (idadeHumana === 0) return 0;
    if (idadeHumana === 1) return 16;
    if (idadeHumana === 2) return 25;
    
    return (idadeHumana - 2) * 7 + 25;
}
