function solution(bandage, health, attacks) {
    const [castTime, healPerSec, bonusHeal] = bandage;
    const maxHealth = health;
    let attacksCount = 0;
    let ok = 0;

    const lastTime = attacks[attacks.length - 1][0];

    for (let i = 0; i <= lastTime; i++) {
        // 공격 시간일 경우
        if (attacksCount < attacks.length && attacks[attacksCount][0] === i) {
            health -= attacks[attacksCount][1];
            attacksCount += 1;
            ok = 0;
            if (health <= 0) return -1;
        } else {
            // 회복 시간
            if (health < maxHealth) {
                ok += 1;
                health = Math.min(maxHealth, health + healPerSec);
                if (ok === castTime) {
                    health = Math.min(maxHealth, health + bonusHeal);
                    ok = 0;
                }
            } else {
                ok += 1;
                if (ok === castTime) {
                    health = Math.min(maxHealth, health + bonusHeal);
                    ok = 0;
                }
            }
        }
    }

    return health;
}
