import { Random } from "../services/Random";

describe('random', () => {
    it('gerado corretamente', () => {
        const r1 = Random.between(0, 10)
        expect(r1).toBeGreaterThanOrEqual(1);
        expect(r1).toBeLessThanOrEqual(10);
    })
})
