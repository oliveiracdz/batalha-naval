import { Barco, Celula, Direcao } from '../models';
import { Matrix } from '../models/Matrix'

describe('matrix', () => {
    it('encontra ponto com coordenadas', () => {
        const matrix = new Matrix(2, 2)

        expect(matrix.find(0, 0)).not.toBe(undefined);
        expect(matrix.find(1, 1)).not.toBe(undefined);
    })

    it('respeita os limites de linhas e colunas', () => {
        const matrix = new Matrix(2, 2)

        expect(matrix.find(2, 1)).toBe(undefined);
        expect(matrix.find(1, 2)).toBe(undefined);
    })

    it('adiciona células do barco', () => {
        const matrix = new Matrix(2, 2)

        expect(matrix.addBarco(0, 1, Direcao.Vertical, 2).celulas).toHaveLength(2);
    })

    it('não sobrescreve células já preenchidas', () => {
        const matrix = new Matrix(2, 2)

        expect(matrix.addBarco(0, 1, Direcao.Vertical, 2).celulas).toHaveLength(2);
        expect(matrix.addBarco(1, 1, Direcao.Vertical, 1)).toBe(null);
    })
})
