function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5iDHbeyG4Mv":
        Script1();
        break;
      case "5cfzE9HDiuU":
        Script2();
        break;
      case "6CQcpnfNAfo":
        Script3();
        break;
      case "6nZSWMOYIup":
        Script4();
        break;
      case "5nHjuzOPwWb":
        Script5();
        break;
      case "6Wn24lnKhPl":
        Script6();
        break;
      case "5a15D3qlKN2":
        Script7();
        break;
      case "6Qi0kBmmf6x":
        Script8();
        break;
      case "6K6pJx4rWdd":
        Script9();
        break;
      case "5ahYbvNqJw7":
        Script10();
        break;
      case "5Z4nMLRV6IL":
        Script11();
        break;
      case "6jpGmbyyfYZ":
        Script12();
        break;
      case "6hVPuipJvdL":
        Script13();
        break;
      case "6G7xOnL5Uqp":
        Script14();
        break;
      case "5uosxM72LVG":
        Script15();
        break;
      case "6DnAMJgMZim":
        Script16();
        break;
      case "6DjjyFG6zXz":
        Script17();
        break;
      case "6ony1ZPpAVN":
        Script18();
        break;
      case "6HVaSDA5ad2":
        Script19();
        break;
      case "6D97wdwUnZ8":
        Script20();
        break;
      case "6IrOVAv98Ig":
        Script21();
        break;
      case "6eOMPNdRZjC":
        Script22();
        break;
      case "6ANlM9yjjoD":
        Script23();
        break;
      case "6NCfDmZCtoO":
        Script24();
        break;
      case "5XC0sv5GlEF":
        Script25();
        break;
      case "68RwUCbrQPk":
        Script26();
        break;
      case "6jpcdZrdn9t":
        Script27();
        break;
      case "6rggzEdgy1J":
        Script28();
        break;
      case "5YhOpreX1II":
        Script29();
        break;
      case "6HgA3hhLaen":
        Script30();
        break;
      case "5bsNuDDFisg":
        Script31();
        break;
      case "63Mltng5E62":
        Script32();
        break;
      case "5gbfGt2GwQR":
        Script33();
        break;
      case "5fHqVujURNg":
        Script34();
        break;
      case "5kXxq7SH0HO":
        Script35();
        break;
      case "69uMFqJMt7S":
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
