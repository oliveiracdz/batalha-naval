import { Barco, Celula } from '../Models';
import { Matrix } from '../models/Matrix'

describe('matrix', () => {
    const setup = () => {

    }

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
})
