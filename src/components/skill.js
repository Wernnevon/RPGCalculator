export const RollDice = () => Math.floor(Math.random() * 6) + 1;

export const Play = (atribute, numDice, bonus) => {
    let sumDice = 0;
    let dices = [];
    for(let i = 0; i<numDice; i++){
        let resultDice = RollDice();
        dices.push(resultDice);
        if(resultDice === 6){
            atribute = atribute*2;
        }
        sumDice = sumDice + resultDice;
    }
    const total = sumDice+atribute+bonus;
    
    return {total, dices}
}