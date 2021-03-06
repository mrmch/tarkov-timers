const toMS = function(hours, minutes, seconds=0) {
	return (hours*3600000) + (minutes*60000) + (seconds*1000);
}

function notifyMe(msg) {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification(msg);
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification(msg);
      }
    });
  }
}

const BITCOIN_TIME = function(num_cards) {
	return 1/(0.05 + (num_cards-1)/49*0.15);
}

const FMT_TIME = function(ms) {
	var hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((ms % (1000 * 60)) / 1000);

  return hours + "h " + minutes + "m " + seconds + "s";
}

const BUILD_TIMERS = [
      {"id": "Lavatory",
      	name: "Lavatory",
        "crafts": [
        	{"id": "testing", name: "testing", "t": toMS(0, 0, 1)},
          {"id": "bandage", name: "Aseptic bandage", "t": toMS(0, 31)},
        	{"id": "shampoo", name: "Schaman shampoo", "t": toMS(0, 35)},
  				{"id": "junkbox", name: "Lucky Scav Junkbox", "t": toMS(11, 23)},
          {"id": "airfilter", "t": toMS(0, 2), name: "Air filter for gas mask"},
          {"id": "armybandage", "t": toMS(0,16), name: "Army bandage"},
          {"id": "tp", "t": toMS(0, 26), name: "Toilet paper"},
          {"id": "ripstop", "t": toMS(0, 36), name: "Ripstop cloth"},
          {"id": "scavbp", "t": toMS(0, 55), name: "Scav Backpack"},
          {"id": "expfuel", "t": toMS(0, 28), name: "Expeditionary fuel tank"},
         	{"id": "bleach", "t": toMS(0, 38), name: "Ox bleach"},
          {"id": "wiper", "t": toMS(0, 40), name: "Clin wiper"},
          {"id": "tarzan", "t": toMS(0, 46), name: "Splav Tarzan M22 Rig"},
          {"id": "module", "t": toMS(0, 54), name: "Module-3M bodyarmor"},
          {"id": "60r545", "t": toMS(1, 23), name: "60-round 6L31 5.45x39 magazine for AK-74"},
          {"id": "wd40", "t": toMS(2, 30), name: "WD-40 100ml."},
          {"id": "hose", "t": toMS(3, 21), name: "Corrugated hose"},
          {"id": "magcase", "t": toMS(4, 52), name: "Magazine case"},
          {"id": "filterabs", "t": toMS(2, 36), name: "FP-100 filter absorber"}
        ]
    	},
      {id: "intelligence",
      	name: "Intelligence center",
        crafts: [
        	{id: "flashdrive", name: "Flash Drive", t: toMS(34,13)},
          {id: "graphics", name: "Graphics Card", t: toMS(37, 30)},
          {id: "virtex", name: "Virtex programmable procesor", t: toMS(37,36)},
          {id: "cofdm", name: "Military COFDM wireless Signal Transmitter", t: toMS(38,53)},
          {id: "vpx", name: "VPX Flash Storage Module", t: toMS(45, 50)},
          {id: "rfid", name: "UH RFID Reader", t: toMS(53, 20)},
          {id: "folder", name: "Folder with intelligence", t: toMS(31, 40)},
        ]},
      {id: "booze",
      	name: "Booze Generator",
        crafts: [
        	{id: "moonshine", name: 'Fierce Hatchling" moonshine', t: toMS(3,3)}
        ]},
      {id: "water",
      	name: "Water collector",
        crafts: [
        	{id: "Purified water", name: 'Purified water', t: toMS(5,25)}
        ]},
      {id: "workbench",
      	name: "Workbench",
        crafts: [
{t: toMS(2, 46)
,name: '7.62x51 mm M61'},

{t: toMS(2, 39)
,name:'9x39 mm 7N12 BP'},

{t: toMS(2, 37)
,name: '5.45x39 mm 7N39 "Igolnik"'},

{
t: toMS(2, 30)
,name: '7.62x39 mm BP'},

{t: toMS(2, 28)
,name: '12/70 AP-20 Slug'},

{t: toMS(2, 26)
,name: '5.56x45 mm M995'},
{
t: toMS(2, 26)
,name: '5.56x45 mm Warmage'},

{t: toMS(2, 5)
,name: '9x19 mm RIP'},

{t: toMS(1, 28)
,name: 'RGD-5 hand grenade'
},
{t: toMS(2, 46)
,name: 'Car battery'
},
{t: toMS(2, 21)
,name: '9x39 mm SP-6'},

{t: toMS(2,0)
,name: '5.56x45 mm M856A1'},

{t: toMS(1, 58)
,name: '7.62x54R SNB'},

{t: toMS(1, 56)
,name: '5.45x39 mm PP'},

{t: toMS(1, 52)
,name: 'Gunpowder "Hawk" (lvl2)'},

{t: toMS(1, 43)
,name: '.366 TKM AP'},

{t: toMS(1, 37)
,name: 'Gunpowder "Eagle"'},

{t: toMS(1, 29)
,name: '9x19 mm AP 6.3'},

{t: toMS(1, 23)
,name: 'AK-74M 5.45x39 assault rifle'},

{t: toMS(1, 20)
,name: 'Electric motor'},

{t: toMS(1, 17)
,name: 'Zarya stun grenade'},

{t: toMS(1, 13)
,name: 'Rechargeable battery'},

{t: toMS(2, 4)
,name: 'Capacitors'},

{t: toMS(1, 58)
,name: 'Wires'},

{t: toMS(1, 43)
,name: '9x18 PM mm RG028 gzh'},

{t: toMS(1, 31)
,name: '12/70 8.5 mm "Magnum" Buckshot'},

{t: toMS(1, 29)
,name: 'Gunpowder "Kite"'},

{t: toMS(1, 18)
,name: 'Weapon parts'},

{t: toMS(1, 6)
,name: 'VOG-25 Khattabka grenade'},

{t: toMS(0, 35)
,name: 'Powercord'},

{t: toMS(0, 35)
,name: 'Gunpowder "Hawk"'},

{t: toMS(0, 33),
name: 'Printed circuit board'},

{t: toMS(0, 22)
,name: 'Broken LCD'}
        ]},
      {id: "medstation",
      	name: "Medstation",
        crafts: [
        	{id: "medikit", name: "AI-2 medikit", t: toMS(0,22)},
          {id: "salewa", name: "Salewa FIRST AID KIT",  t: toMS(0,22)},
          {id: "bloodset", name: "Medical Bloodset",  t: toMS(0,27)},
          {id: "meds", name: "Pile of meds",  t: toMS(0,48)},
          {id: "sj1", name: "Combat stimulant injector SJ1 TGLabs",  t: toMS(0,49)},
          {id: "ifak", name: "IFAK personal tactical first aid kit",  t: toMS(0, 50)},
          {id: "morphine", name: "Morphine injector",  t: toMS(1,12)},
          {id: "defib", name: "Portable defibrillator",  t: toMS(5,15)},
          {id: "Vaseline", name: "Vaseline",  t: toMS(0, 55)},
          {id: "grizzly", name: "Grizzly First Aid Kit",  t: toMS(0, 58)},
          {id: "sugical", name: "Surv12 field surgical kit",  t: toMS(1,16)},
          {id: "Propital", name: "Propital",  t: toMS(1, 21)},
          {id: "sj6", name: "Combat stimulant injector SJ6 TGLabs",  t: toMS(1, 25)}
        ]},
      {id: "nutrition",
      	name: "Nutrition unit",
        crafts: [
          {t: toMS(0, 48), id: "lunchbox", name: "Iskra lunch box"},
          {t: toMS(1, 11), name: "Slickers bar", id:'slickers'},
          {t: toMS(1,18), id: 'stew', name: "Can of beef stew"},
          {t: toMS(1, 21), id: 'milk', name: "Condensed milk"},
          {t: toMS(1, 23), id: 'sugar', name: "Pack of sugar"},
          {t: toMS(1, 41), id: 'wilson', name: "Wilston cigarettes"},
          {t: toMS(1, 48), id: 'max', name: "Max energy"},
          {t: toMS(1, 35), id: 'vodka', name: "Bottle of vodka Tarkovskaya"},
          {t: toMS(1, 5), id: 'aqua', name: "Water bottle with a filter Aquamari"},
          {t: toMS(5, 15), id: 'hotrod', name: "Hot Rod"}
        ]},
    ];

class Timer extends React.Component {
	constructor(props) {
  	super(props);
    this.state = {
    	id: props.name,
    	remaining: props.remaining,
      hideout: props.hideout,
      name: props.name,
      end: props.end,
      done: false,
      stopTimer: props.stopTimer
    };
  }
  
  componentDidMount() {
  	var interval = setInterval(this.timer.bind(this), 1000);
    var state = this.state;
    state.interval = interval;
    this.setState(state);
  }
  
  componentWillUnmount() {
  	clearInterval(this.state.interval);
  }
  
  timer() {
  	if (this.state.done)
    	return;
  	var now = new Date().getTime();
    var distance = this.state.end - now;
    var done = this.state.done;
    
    if (distance < 0) {
    	distance = 0;
      done = true;
      clearInterval(this.state.interval);
      notifyMe(this.state.name + " is done crafting.");
    }
  	this.setState({remaining: distance, done: done});
  }
  
  handleClick(e) {
  	this.state.stopTimer(this.state.name, this.state.hideout);
  }
  
  render() {
  	return (
    	<li key={this.state.name}>
        <label>
          [<a href="#"
            onClick={this.handleClick.bind(this)}>x</a>]&nbsp;
          <span className={this.state.done ? "done" : ""}>{this.state.name} ({FMT_TIME(this.state.remaining)})</span>
        </label>
      </li>
    )
  }
}
    
class TimerApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	timers: [],
      crafting: []
    }
    
    //this.stopTimer.bind(this);
  }
  
  startTimer (hideout, craft) {
  	var state = this.state;
    
    if (this.state.crafting.indexOf(hideout) >= 0){
    	return;
      }
    craft.remaining = craft.t;
    craft.end = new Date().getTime() + craft.t; 
    craft.hideout = hideout;
    
    state.crafting.push(hideout);
    state.timers.push(craft);
    
  	this.setState(state)
  	return;
  }
  
  stopTimer (name, hideout) {
    var state = this.state;
		
    state.crafting = state.crafting.filter(v => (
   		v != hideout
    ));
    
    state.timers = state.timers.filter(v => (
    	v.name != name
    ));    
    this.setState(state);
  }
  
  render() {
    return (
      <div>
        <h2>Currently Crafting:</h2>
        <ol>
          {this.state.timers.map(timer => (
            <Timer key={timer.name}
              id={timer.name}
              name={timer.name} 
              hideout={timer.hideout}
              remaining={timer.t}
              end={timer.end}
              stopTimer={this.stopTimer.bind(this)}></Timer>
          ))}
        </ol>
        
        <h2>Available:</h2>
        <ul>
          {BUILD_TIMERS.map(hideout => (
          	<li key={hideout.id}
              className={this.state.crafting.indexOf(hideout.id) >= 0 ? "crafting": ""}>
              <h3>{hideout.name}</h3>
              <ul>
              {hideout.crafts.map(craft => (
                 <li key={craft.name}>
                   [<a href="#" onClick={(e) => this.startTimer(hideout.id, craft)}>+</a>]&nbsp;
                   {craft.name} {FMT_TIME(craft.t)}</li>
              ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<TimerApp />, document.querySelector("#app"))
