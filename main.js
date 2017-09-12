//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (config) {
  'use strict';
  this.status = config.status || 'normal',
  this.color = config.color,
  this.hungry = config.hungry || false,
  this.owner = config.owner || undefined
}

let sadie = new Dog({
  status: 'normal',
  color: 'black',
  hungry: false,
  owner: 'mason'
});

let moonshine = new Dog({
  hungry: true
});

let atticus = new Dog({

});


// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (config) {
  'use strict';
  this.feed = function(dog){
    dog.hungry = 'false'
  },
  this.pet = function(dog){
    dog.status = 'happy';
  },
  this.cool = config.cool || true;
}

let mason = new Human({
  cool: false
});

let julia = new Human({
});
julia.feed(moonshine);


// Instances of Human
// Needed: mason, julia
