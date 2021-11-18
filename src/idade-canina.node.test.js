import { describe, expect, it } from '@jest/globals';
import getIdadeCaninaFromIdadeHumana from './idade-canina';

describe('Cáclculo de idade canina', () => {
    it('Contrato', () => {
        expect(getIdadeCaninaFromIdadeHumana()).toBeDefined();
        expect(getIdadeCaninaFromIdadeHumana()).toBe(null);
        expect(getIdadeCaninaFromIdadeHumana('a')).toBe(null);
        expect(getIdadeCaninaFromIdadeHumana(-1)).toBe(null);
        expect(getIdadeCaninaFromIdadeHumana(+'we33')).toBe(null);
    });
    
    it('Cálculos com gabarito direto', () => {
        expect(getIdadeCaninaFromIdadeHumana(0)).toBe(0);
        expect(getIdadeCaninaFromIdadeHumana(1)).toBe(16);
        expect(getIdadeCaninaFromIdadeHumana(2)).toBe(25);
        expect(getIdadeCaninaFromIdadeHumana(3)).toBe(32);
        expect(getIdadeCaninaFromIdadeHumana(4)).toBe(39);
    });

    it('Cálculos com gabarito em formato de array', () => {
        const possibilidades = [
            {
                cachorro: 5,
                humano: 46
            },
            {
                cachorro: 6,
                humano: 53
            },
            {
                cachorro: 7,
                humano: 60
            },
        ];

        possibilidades.forEach((possibilidade) => {
            expect(getIdadeCaninaFromIdadeHumana(possibilidade.cachorro)).toBe(possibilidade.humano);
        });
    });

    it('Cálculos com função utilitária a partir do 3º ano', () => {
        const fnCalc = (idadeHumana) => {
            const idadeAcumuladaAte2Ano = 25;
            const incrementoPadraoApos2Ano = 7;
            return (idadeHumana - 2) * incrementoPadraoApos2Ano + idadeAcumuladaAte2Ano;
        };

        expect(getIdadeCaninaFromIdadeHumana(3)).toBe(fnCalc(3));
        expect(getIdadeCaninaFromIdadeHumana(10)).toBe(fnCalc(10));
        expect(getIdadeCaninaFromIdadeHumana(11)).toBe(fnCalc(11));
        expect(getIdadeCaninaFromIdadeHumana(12)).toBe(fnCalc(12));
        expect(getIdadeCaninaFromIdadeHumana(13)).toBe(fnCalc(13));
    });
});
