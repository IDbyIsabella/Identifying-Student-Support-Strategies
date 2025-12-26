function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xj0pcCPutY":
        Script1();
        break;
      case "66GeEzX7Eky":
        Script2();
        break;
      case "62gHEZ98mWd":
        Script3();
        break;
      case "6jMiHyAePG7":
        Script4();
        break;
      case "6ObdiTdUyep":
        Script5();
        break;
      case "6UQHfUK8xSx":
        Script6();
        break;
      case "65ofC516fO5":
        Script7();
        break;
      case "6N7kOCEjtOq":
        Script8();
        break;
      case "6Lt9hXkDmFN":
        Script9();
        break;
      case "6XmTUB0w9Rv":
        Script10();
        break;
      case "6dDV2p4t7PM":
        Script11();
        break;
      case "6oArGa7V23b":
        Script12();
        break;
      case "6YMj9vTr8WY":
        Script13();
        break;
      case "5WavXhNFbvo":
        Script14();
        break;
      case "6dzhachUQMV":
        Script15();
        break;
      case "6oCR9r05PyS":
        Script16();
        break;
      case "5xngikYy8O2":
        Script17();
        break;
      case "67DxaiPXVnT":
        Script18();
        break;
      case "6DPBSG4sZZH":
        Script19();
        break;
      case "6Mt14RGy8S4":
        Script20();
        break;
      case "6TKhh5Vk3s3":
        Script21();
        break;
      case "5kSd9KHQXEt":
        Script22();
        break;
      case "68MMkjM1ten":
        Script23();
        break;
      case "5lUB9zJ56NT":
        Script24();
        break;
      case "6l35cDxuZGl":
        Script25();
        break;
      case "6FSvJNeDjLh":
        Script26();
        break;
      case "5k5oQolZj0o":
        Script27();
        break;
      case "5sXRBacYVWw":
        Script28();
        break;
      case "64s1BEBhUMl":
        Script29();
        break;
      case "6h1mZQDPDtM":
        Script30();
        break;
      case "5VQ5ci6q4nw":
        Script31();
        break;
      case "6jmXtgZyKPd":
        Script32();
        break;
      case "5oqZd0AZmq3":
        Script33();
        break;
      case "5csfoadV4fZ":
        Script34();
        break;
      case "6GqRmDqjUiA":
        Script35();
        break;
      case "5rsxPnLwwa4":
        Script36();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('6J00f0ZthAk');
const duration = 750;
const easing = 'ease-out';
const id = '6oeSia90eNQ';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6J00f0ZthAk');
const duration = 750;
const easing = 'ease-out';
const id = '6oeSia90eNQ_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6pe2mFdHVPB');
const duration = 10000;
const easing = 'ease-out';
const id = '5c9LOM8EgAO';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('62L2i6wgxNb');
const duration = 750;
const easing = 'ease-out';
const id = '5lgd6LLIvS7';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('62L2i6wgxNb');
const duration = 750;
const easing = 'ease-out';
const id = '5lgd6LLIvS7_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5vsidIDC3GD');
const duration = 750;
const easing = 'ease-out';
const id = '6mr61e2qtV4';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5vsidIDC3GD');
const duration = 750;
const easing = 'ease-out';
const id = '6mr61e2qtV4_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6rHKfV3ngdo');
const duration = 750;
const easing = 'ease-out';
const id = '6efhx5tuhoN';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6rHKfV3ngdo');
const duration = 750;
const easing = 'ease-out';
const id = '6efhx5tuhoN_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('6n4Da841PeA');
const duration = 750;
const easing = 'ease-out';
const id = '5jyHCrRDCMN';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('6n4Da841PeA');
const duration = 750;
const easing = 'ease-out';
const id = '5jyHCrRDCMN_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('6Dwsnwde8F5');
const duration = 750;
const easing = 'ease-out';
const id = '6IW3h9zetpu';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('6Dwsnwde8F5');
const duration = 750;
const easing = 'ease-out';
const id = '6IW3h9zetpu_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  player.once(() => {
const target = object('5mQGWTLCGUQ');
const duration = 10000;
const easing = 'ease-out';
const id = '5ltCwi30DAB';
const teeterAmount = 4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script15 = function()
{
  player.once(() => {
const target = object('6gqPzO3PkZQ');
const duration = 10000;
const easing = 'ease-out';
const id = '6quyUqZKxTK';
const teeterAmount = 4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script16 = function()
{
  player.once(() => {
const target = object('5yXn1UCa2kJ');
const duration = 10000;
const easing = 'ease-out';
const id = '63n90Hk7u1Z';
const teeterAmount = 4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script17 = function()
{
  player.once(() => {
const target = object('5pJ6waGmDCI');
const duration = 10000;
const easing = 'ease-out';
const id = '5dwyJgbqFii';
const teeterAmount = 4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script18 = function()
{
  player.once(() => {
const target = object('68S8bAW4fPJ');
const duration = 10000;
const easing = 'ease-out';
const id = '6psW23lW5jT';
const teeterAmount = 4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script19 = function()
{
  const target = object('65Ix2EiBG1p');
const duration = 750;
const easing = 'ease-out';
const id = '6YsyyZK10qc';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  const target = object('65Ix2EiBG1p');
const duration = 750;
const easing = 'ease-out';
const id = '6YsyyZK10qc_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  const target = object('6fxVSOx73qW');
const duration = 750;
const easing = 'ease-out';
const id = '6m0HOLeX1Xx';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('6fxVSOx73qW');
const duration = 750;
const easing = 'ease-out';
const id = '6m0HOLeX1Xx_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('6CzXfobBs17');
const duration = 750;
const easing = 'ease-out';
const id = '5peUlHEFOga';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('6CzXfobBs17');
const duration = 750;
const easing = 'ease-out';
const id = '5peUlHEFOga_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('6gkkPwpXkc1');
const duration = 750;
const easing = 'ease-out';
const id = '6PXvh0g1ASr';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('6gkkPwpXkc1');
const duration = 750;
const easing = 'ease-out';
const id = '6PXvh0g1ASr_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('5daUktZ7HN2');
const duration = 750;
const easing = 'ease-out';
const id = '65lEqFFFGv4';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  const target = object('5daUktZ7HN2');
const duration = 750;
const easing = 'ease-out';
const id = '65lEqFFFGv4_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script29 = function()
{
  const target = object('65Lqu9cSNx9');
const duration = 750;
const easing = 'ease-out';
const id = '6GbPOVTw5bE';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('65Lqu9cSNx9');
const duration = 750;
const easing = 'ease-out';
const id = '6GbPOVTw5bE_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  const target = object('5lUVb2dyNXv');
const duration = 750;
const easing = 'ease-out';
const id = '66qzAWzDABg';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script32 = function()
{
  const target = object('5lUVb2dyNXv');
const duration = 750;
const easing = 'ease-out';
const id = '66qzAWzDABg_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  player.once(() => {
const target = object('6BNaXKrGIAw');
const duration = 10000;
const easing = 'ease-out';
const id = '63n90Hk7u1Z';
const teeterAmount = 4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script34 = function()
{
  player.once(() => {
const target = object('5Wgoy0RI5si');
const duration = 10000;
const easing = 'ease-out';
const id = '6quyUqZKxTK';
const teeterAmount = 4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script35 = function()
{
  player.once(() => {
const target = object('5k5Eo2J83ON');
const duration = 10000;
const easing = 'ease-out';
const id = '6quyUqZKxTK';
const teeterAmount = 4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script36 = function()
{
  player.once(() => {
const target = object('5bnvi9qADkt');
const duration = 10000;
const easing = 'ease-out';
const id = '6PLhSSQYQ50';
const teeterAmount = 4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
