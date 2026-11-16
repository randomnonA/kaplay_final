nn.on('load', () =>  {
      //scene
  kaplay({
    focus: false,
    background: [155, 155, 155]
    
  })
  
  //set assets
  //AUDIO WARNING; Main was created by Marcos and the sound effects were created by Joesph (I modified it)
  loadMusic("bg", "assets/bg_music.mp3");
  loadSound("dead", "assets/dead_2.mp3");
  loadSound("step", "assets/step.mp3");
  loadSprite("wizard", "assets/wizard_2.png")
  loadSprite("pot", "assets/Potion.png",{
  sliceX: 2,
  sliceY: 3,
  anims: {
    idle: {
      from:0, 
      to: 4
    }
  }
});
  loadSprite("Bpot", "assets/B_Potion.png",{
  sliceX: 2,
  sliceY: 3,
  anims: {
    idle: {
      from:0, 
      to: 4
    }
  }
});
  
  //Platforms
      //add platform
  add([
    rect(width(), 60),
    outline(5),
    area(),
    pos(0, height()-48),
    body({
      isStatic:true
    })
    ])
  
  //set gravity
  setGravity(1600);
  
  //The assets was copied and pasted from my "kaplay_assets" file on another netnet project
  //Zack drew the Wizard
  const wizard = add([
    sprite('wizard'),
    pos(200, 600),
    scale(3),
    area(),
    body()
  ])

  //Jason (I) created the pots
    const pot = add([
    sprite('pot'),
    pos(100, 400),
    scale(5) //Used https://kaplayjs.com/docs/api/ctx/scale/
  ])


  pot.onAnimEnd((anim) => {
      if (anim === "idle") {
        pot.play("idle")
      }
  });
      pot.play("idle")

//Same thing but blue
  
  const Bpot = add([
    sprite('Bpot'),
    pos(600, 400),
    scale(5)
  ])


  Bpot.onAnimEnd((anim) => {
      if (anim === "idle") {
      Bpot.play("idle")
      }
    });
        Bpot.play("idle")
  
  onKeyDown("w", () => {
  if (!wizard.isGrounded() && wizard.vel.y < 0) {
      wizard.vel.y -= dt()*600;
    }
  })
  onKeyPress("w", () => {
    if(wizard.isGrounded()){
      wizard.jump();
    }
  });
  onKeyDown("d", () => {
    wizard.move(250,0);
    wizard.flipX = true;
  });
  onKeyDown("a", () => {
    wizard.move(-250,0);
    wizard.flipX = false;
  });
  

  
})