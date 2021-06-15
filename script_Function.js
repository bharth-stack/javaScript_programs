
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.

// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27


const avgScore=(one,two,three)=>(one+two+three)/3;
const winner=function(team_1,team_2)
{
    console.log(team_1,team_2);

    if(team_1>team_2){
        const avg=team_2+team_2;
        if(team_1>avg){
          console.log(`dolphins has double Avg ${team_1} and they own the match  🎉🎊` );
      }
      else{
          console.log(`noe of them own the atch 🎭`);
      }

    }
    else if(team_1<team_2){

        const avg_2=team_1+team_1;
        if(team_2>avg_2){
          console.log(`kolas has double Avg ${team_2} and they own the match 🎉🎊`);
      }
      else{
          console.log(`noe of them own the atch🎭`);
      }


    }
}
const dolphinsAvg=avgScore(85,54,41);
const kolasAvg=avgScore(23,34,27);

const victory =winner(dolphinsAvg,kolasAvg);




