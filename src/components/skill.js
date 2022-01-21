export const RollDice = () => Math.floor(Math.random() * 6) + 1;

export const move = (skill) => {
    let sumDice = 0;
    let resultDice;
    for(let i = 0; i<skill.qntDice; i++){
        let resultDice = RollDice();
        if(resultDice === 6){
            if(skill.F) skill.F = skill.F*2;
            else if(skill.PDF) skill.PDF = skill.PDF*2;
            else if(skill.PDF) skill.NIN = skill.NIN*2;
        }
        sumDice = sumDice + resultDice;
    }
}