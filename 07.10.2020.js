// return the number reflecting the team with highest 'skillset'
// as well as the number of teams with highest skillset. Skillset
// is reflected in the 'binary string input' where '1' represents a
// subject known by 'player' and '0' represents unknown. input is an 
// array of 'players' in form of integer strings.

function acmTeam(topic) {
    let numTeams = 1;
    let maxTopics = 0;
    for(let i = 0; i < topic.length -1; i++){
        for(let j = i+1; j < topic.length; j++){
            let temp = 0;
            for(let k=0; k <topic[i].length; k++){
                if(topic[i][k] == '1' || topic[j][k] == '1'){
                    temp++
                }
                if(temp > maxTopics){
                    maxTopics = temp
                    numTeams = 1
                }else if(temp==maxTopics){
                    numTeams++
                }
            }
        }
    }
    return [maxTopics, numTeams];
}