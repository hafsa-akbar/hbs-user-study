var WORK_SERVER="https://edge-mcdn.secure.yahoo.com/ybar/exp.json",TIMEOUT=2e3,Cerebro=function(){function e(){this.uploadType="individual",this.expCount=0,this.pending={},this.complete=0}return e.runExperiment=function(){(new e)._fetchWork()},e.sendBeacon=function(){},e.prototype._extractResourceTiming=function(n){},e.prototype._extractHeader=function(n,e){},e.prototype._fetchWork=function(){var n=this,r=!1;new Promise(function(n,t){var o=setTimeout(function(){},TIMEOUT);fetch(WORK_SERVER).then(function(e){clearTimeout(o),r||n(e)}).catch(function(e){})}).then(function(e){return e.json()}).then(function(e){n._parseWork(e)}).catch(function(e){})},e.prototype._parseWork=function(e){var n=e.expCount,t=e.selection,o=(this.uploadType=e.uploadType,[]),r=[];if(0===n)console.log("not marked any experiments to run as expCount is 0");else{if(n>=e.expList.length)console.log("marked all experiments to run as expCount >= expList length"),r=e.expList;else if("random"===t){console.log("marked "+n+" random experiments to run");for(var i=0;i<n;i++){var s=Math.floor(Math.random()*(e.expList.length+1));s===e.expList.length&&(s-=1),r.push(e.expList[s])}}else if("ordered"===t){console.log("marked "+n+" ordered experiments to run");var a=Math.floor(Math.random()*(e.expList.length+1));a===e.expList.length&&(a-=1);for(i=0;i<n;i++)a+i>=e.expList.length&&(a=-1*i),r.push(e.expList[a+i])}else if("individual"===t)if(console.log("marked "+n+" individual experiments to run"),100*Math.random()<e.runProb)for(var u=0,c=e.expList;u<c.length;u++){var l=c[u];r.push(l)}for(var p=0,d=r;p<d.length;p++)for(l=d[p],i=0;i<l.trials;i++){var f=Math.ceil(99999999999999*Math.random()).toString(36),f=l.target.replace("<RAND>",f),h=new RegExp(l.beaconRegex,"gi").exec(f),m=[],g=[];l.requestHeaders&&(m=l.requestHeaders),l.parseHeaders&&(g=l.parseHeaders),null!==h&&null!==h[1]?o.push([f,h[1],l.timeout,m,g,l.name,l.uploadEndpoints]):o.push([f,l.name,l.timeout,m,g,l.name,l.uploadEndpoints]),this.expCount++}t=100;100*Math.random()<=(t=e.runProb?e.runProb:t)?(console.log("sending beacons to targets"),this._sendBeacons(o)):console.log("not sending beacons")}},e.prototype._sendBeacons=function(e){},e.prototype._sendClientMeasurements=function(e,n,t,o,r,i,s){},e}();Cerebro.runExperiment();