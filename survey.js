const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable! ", name => {
  rl.question("What's an activity you like doing? ", activity => {
    rl.question("What do you listen to while doing that? ", music => {
      rl.question("What's your favorite meal? (dinner, brunch, etc) ", meal => {
        rl.question("What's your favorite food? ", food => {
          rl.question("What's your favorite sport? ", sport => {
            rl.question("What's your superpower? ", superpower => {
              rl.question("Why? ", why => {
                
                console.log(`Hi! My name is ${name} and I enjoy ${activity}. While doing ${activity}, I like to listen to ${music}. \nMy favorite meal is ${meal}, and I like to eat ${food}. I LOVE ${sport}.  My superpower is ${superpower}, and ${why}.`);
                rl.close();

              })

            })

          })

        })

      })

    });

  });

})