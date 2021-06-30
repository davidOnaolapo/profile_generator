const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];

rl.question('What is your name? Nicknames are also acceptable :) ', (a1) => {

  rl.question('What is an activity you like doing? ' , (a2) => {

    rl.question('What do you listen to while doing that? ' , (a3) => {

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ' , (a4) => {

        rl.question('What is your favourite thing to eat for that meal? ' , (a5) => {

          rl.question('Which sport is your absolute favourite? ' , (a6) => {
            
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ' , (a7) => {
              console.log(`${a1} loves to ${a2}, while listening to ${a3}. Munching on some ${a5} right after would be ideal for ${a1}, preferrably for ${a4}, and is a ${a6} game on? fantastic. in the words of ${a1}, "${a7}"  `)
              rl.close();
            }); 
     
          }); 
     
        }); 
     
      }); 
     
    });    
  });  
});

