(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/Lights-Out.a1bd7e6b.png"},,,function(e,t,n){e.exports=n(18)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(2),o=n.n(s),i=(n(15),n(3)),l=n(4),c=n(7),u=n(5),h=n(8),d=(n(16),function(e){return r.a.createElement("div",null,r.a.createElement("div",null,e.board.slice(0,5)),r.a.createElement("div",null,e.board.slice(5,10)),r.a.createElement("div",null,e.board.slice(10,15)),r.a.createElement("div",null,e.board.slice(15,20)),r.a.createElement("div",null,e.board.slice(20)))}),m=(n(17),n(6)),g=n.n(m),f=function(e){var t=e.solution.split("").sort().filter(function(e,t,n){return e!=n[t+1]&&e!=n[t-1]}),n="No special solution message";return n=t.length<e.solution.length?"There was a quicker solution. There's no need to press a button twice.":"Well done! You pressed each of these lights: "+t+" once. Genius!",r.a.createElement("div",null,r.a.createElement("p",{className:"colourChange"},"Congratulations! You have turned off all the lights"),r.a.createElement("p",null,n),r.a.createElement("p",null,"Press a level button to select a new puzzle"),r.a.createElement("img",{className:"congratSpin",src:g.a,alt:"Congratulations!"}))},b=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Control Panel"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.changeEasy()}},"Another (Easy)"),r.a.createElement("button",{onClick:function(){return e.changeMed()}},"Another (Medium)"),r.a.createElement("button",{onClick:function(){return e.changeHard()}},"Another (Hard)")),r.a.createElement("p",null,"Current state: ",e.onOffString," ",r.a.createElement("br",null),"Lights pressed: ",e.buttonsPressed),r.a.createElement("button",{onClick:e.resetBoard},"Reset to start position"),r.a.createElement("p",null,"Score: ",e.score))},p={easy:["0000000100011100010000000","0000000100011000001100010","0000000110011110111100110","0000011011000001000111011","0000010101101011010100000","0000010001011100000011011","0100011000001000001100010","0101011111011101111101010","0101011011000001101101010","0111010001101011000101110","0111010101110111010101110","0000000000101010000000000","0010001110000000111000100","1100000100000100000100001","0000000010011110111010000"],medium:["1010100000101010000010101","0101010001000001000101010","0010000000101010000000100","1111111111000001111111111","0010000100110110010000100","0000100010001000100010000","1010110101000001010110101","1111110001011101000111111","0100010100010100010100010","0011101011101011101011100","0000000000101011000111011","1111101110011101111111111","0010000100000000010000100","0000001010001000010000100","0000000000110110000000000"],hard:["0000001110011100111000000","0000000101000001010000000","0000100001000010000000000","0000001010000000101000000","0010001010101010101000100","1000101010001000000000000","1000101010000000101010001","1111111111110111111111111","1101111011110110111001110","0011001000001000001001100","0001000110001000110001000","1000100000001000000000000","0000000000001000000001010","1000000000000000000000001","0000010001000000000000000","0000000010000000000000000","0000000000001000000000000","0000000000000000000011011"]},E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={boardLights:"0000000100011100010000000",startPos:"0000000100011100010000000",lightsPressed:"",numOfLights:5,keys:"ABCDEFGHIJKLMNOPQRSTUVWXY"},n.resetToStart=function(){n.setState({boardLights:n.state.startPos,lightsPressed:"",numOfLights:n.countLights(n.state.startPos)})},n.countLights=function(e){return e.split("").map(function(e){return parseInt(e)}).reduce(function(e,t){return e+t})},n.boardChangeHandler=function(e){var t=function(e){return"0"===e?"1":"0"},a=n.state.boardLights.split("");a[e]=t(a[e]),e>4&&(a[e-5]=t(a[e-5])),e<20&&(a[e+5]=t(a[e+5])),e%5!==4&&(a[e+1]=t(a[e+1])),e%5!==0&&(a[e-1]=t(a[e-1])),n.setState({boardLights:a.join(""),lightsPressed:n.state.lightsPressed+n.state.keys[e],numOfLights:n.countLights(a.join(""))})},n.newBoard=function(e){var t=Math.floor(Math.random()*p[e].length);n.setState({boardLights:p[e][t],startPos:p[e][t],lightsPressed:"",numOfLights:n.countLights(p[e][t])})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.boardLights.split("").map(function(t,n){return"0"===t?r.a.createElement("button",{key:e.state.keys[n],className:"lightOff",onClick:function(){return e.boardChangeHandler(n)}},e.state.keys[n]):r.a.createElement("button",{key:e.state.keys[n],className:"lightOn",onClick:function(){return e.boardChangeHandler(n)}},e.state.keys[n])});return r.a.createElement("div",{className:"App"},r.a.createElement(b,{onOffString:this.state.boardLights,buttonsPressed:this.state.lightsPressed,score:this.state.numOfLights,changeEasy:function(){return e.newBoard("easy")},changeMed:function(){return e.newBoard("medium")},changeHard:function(){return e.newBoard("hard")},resetBoard:this.resetToStart}),0===this.state.numOfLights?r.a.createElement(f,{solution:this.state.lightsPressed}):r.a.createElement(d,{board:t}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.e8e54c1b.chunk.js.map