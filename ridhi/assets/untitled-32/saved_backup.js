(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"saved_backup_atlas_", frames: [[278,1284,38,17],[318,1284,16,16],[0,0,960,640],[0,1284,128,127],[0,642,960,640],[130,1284,107,102],[239,1284,37,36]]}
];


// symbols:



(lib.CachedBmp_30 = function() {
	this.initialize(ss["saved_backup_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["saved_backup_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bottom_layer = function() {
	this.initialize(ss["saved_backup_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer1 = function() {
	this.initialize(ss["saved_backup_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer1_1 = function() {
	this.initialize(ss["saved_backup_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Layer2 = function() {
	this.initialize(ss["saved_backup_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Layer3 = function() {
	this.initialize(ss["saved_backup_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bottom_layer();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,960,640), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_30();
	this.instance.setTransform(-12.6,-3.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-9.9,y:-4.45},0).wait(1).to({x:-7.15,y:-5.65},0).wait(1).to({x:-4.45,y:-6.8},0).wait(1).to({x:-1.75,y:-8},0).wait(1).to({x:0.95,y:-9.2},0).wait(1).to({x:3.7,y:-10.4},0).wait(1).to({x:6.4,y:-11.6},0).wait(1).to({x:9.1,y:-12.8},0).wait(1).to({x:11.85,y:-13.95},0).wait(1).to({x:14.55,y:-15.15},0).wait(1).to({x:17.25,y:-16.35},0).wait(1).to({x:20,y:-17.55},0).wait(1).to({x:22.7,y:-18.75},0).wait(1).to({x:25.4,y:-19.95},0).wait(1).to({x:28.1,y:-21.1},0).wait(1).to({x:30.85,y:-22.3},0).wait(1).to({x:33.55,y:-23.5},0).wait(1).to({x:36.25,y:-24.7},0).wait(1).to({x:39,y:-25.9},0).wait(1).to({x:41.7,y:-27.1},0).wait(1).to({x:44.4,y:-28.25},0).wait(1).to({x:47.1,y:-29.45},0).wait(1).to({x:49.85,y:-30.65},0).wait(1).to({x:52.55,y:-31.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-31.8,84.19999999999999,37.1);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,8,8), null);


(lib.logo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Layer3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo3, new cjs.Rectangle(0,0,37,36), null);


(lib.logo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Layer2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo2, new cjs.Rectangle(0,0,107,102), null);


(lib.logo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Layer1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo1, new cjs.Rectangle(0,0,128,127), null);


(lib.Symbol8copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_104 = function() {
		this.gotoAndPlay(1)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(104).call(this.frame_104).wait(1));

	// Layer_1
	this.instance = new lib.Symbol7();
	this.instance.setTransform(16.5,6.05,1,1,0,0,0,3.9,2.8);
	this.instance.alpha = 0.1094;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).to({regX:0,regY:0,x:12.6,y:3.25,alpha:1},4).wait(8).to({regX:3.9,regY:2.8,x:16.5,y:6.05},0).to({alpha:0.0703},4).wait(1).to({alpha:0},0).wait(62));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-2.1,21.9,10.6);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_102 = function() {
		this.gotoAndPlay(1)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(102).call(this.frame_102).wait(1));

	// Layer_1
	this.instance = new lib.Symbol7();
	this.instance.setTransform(16.5,6.05,1,1,0,0,0,3.9,2.8);
	this.instance.alpha = 0.1094;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,x:12.6,y:3.25,alpha:1},4).wait(8).to({regX:3.9,regY:2.8,x:16.5,y:6.05},0).to({alpha:0.0703},4).wait(1).to({alpha:0},0).wait(86));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-2.1,21.9,10.6);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_47 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47).wait(1));

	// Layer_1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(4.1,4.1,1,1,0,0,0,4.1,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({alpha:0.2813},4).to({alpha:1},5).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8,8);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Layer_1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(4.1,4.1,1,1,0,0,0,4.1,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({alpha:0.2813},4).to({alpha:1},5).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8,8);


// stage content:
(lib.saved_backup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.logo2();
	this.instance.setTransform(465.4,308.95,1,1,-150.0008,0,0,53.5,51);
	this.instance.alpha = 0.1914;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({rotation:0,x:465.5,y:309,alpha:1},4).wait(11).to({rotation:-150.0008,x:465.4,y:308.95,alpha:0.1914},4).to({_off:true},1).wait(16));

	// Layer_3
	this.instance_1 = new lib.logo3();
	this.instance_1.setTransform(467.5,365.05,0.2378,0.2378,0,0,0,18.5,18.1);
	this.instance_1.alpha = 0.0391;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({regY:18,scaleX:1,scaleY:1,y:365,alpha:1},3).wait(11).to({y:433},4).to({y:503},3).to({y:578},2).wait(1).to({y:603},0).to({_off:true},1).wait(9));

	// Layer_1
	this.instance_2 = new lib.logo1();
	this.instance_2.setTransform(465,310.55,0.1289,0.1289,0,0,0,64,63.6);
	this.instance_2.alpha = 0.0313;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({regY:63.5,scaleX:1,scaleY:1,y:310.5,alpha:1},4).wait(13).to({regY:63.6,scaleX:0.1289,scaleY:0.1289,y:310.55,alpha:0.0313},4).to({_off:true},1).wait(16));

	// stars
	this.instance_3 = new lib.Symbol8copy();
	this.instance_3.setTransform(480.9,29.8,1,1,0,0,0,127.8,59);

	this.instance_4 = new lib.Symbol8();
	this.instance_4.setTransform(186.4,-31.65,1,1,0,0,0,22.9,-1.4);

	this.instance_5 = new lib.Symbol4();
	this.instance_5.setTransform(583.8,140.15,0.2218,0.2056,0,180,0,4.8,3.6);

	this.instance_6 = new lib.Symbol4();
	this.instance_6.setTransform(618.75,167.2,0.086,0.0797,0,180,0,4,3.8);

	this.instance_7 = new lib.Symbol4();
	this.instance_7.setTransform(823.2,81.35,0.2866,0.2656,0,180,0,4.2,4);

	this.instance_8 = new lib.Symbol4();
	this.instance_8.setTransform(859.85,22.85,0.2866,0.2656,0,180,0,4.2,4);

	this.instance_9 = new lib.Symbol4();
	this.instance_9.setTransform(926.55,15.95,0.2866,0.2656,0,180,0,4.2,4);

	this.instance_10 = new lib.Symbol4();
	this.instance_10.setTransform(444.75,13.75,0.2866,0.2656,0,180,0,4.2,4);

	this.instance_11 = new lib.Symbol4();
	this.instance_11.setTransform(711.5,28.85,0.2866,0.2656,0,180,0,4.2,4);

	this.instance_12 = new lib.Symbol4();
	this.instance_12.setTransform(887.35,215.5,0.2866,0.2656,0,180,0,4.2,4);

	this.instance_13 = new lib.Symbol4();
	this.instance_13.setTransform(720.4,79.15,0.2866,0.2656,0,180,0,4.2,4);

	this.instance_14 = new lib.Symbol4();
	this.instance_14.setTransform(805.05,122.35,0.2866,0.2656,0,180,0,4.2,4);

	this.instance_15 = new lib.Symbol4();
	this.instance_15.setTransform(409.45,52.35,0.2866,0.2656,0,180,0,4.2,4);

	this.instance_16 = new lib.Symbol4();
	this.instance_16.setTransform(585.25,33.25,0.2866,0.2656,0,180,0,4.2,4);

	this.instance_17 = new lib.Symbol4();
	this.instance_17.setTransform(132.95,66.05,0.2866,0.2656,0,180,0,4.2,4);

	this.instance_18 = new lib.Symbol4();
	this.instance_18.setTransform(121.25,124.55,0.2866,0.2656,0,180,0,4.2,4);

	this.instance_19 = new lib.Symbol4();
	this.instance_19.setTransform(179.85,31.05,0.2866,0.2656,0,180,0,4.2,4);

	this.instance_20 = new lib.Symbol4();
	this.instance_20.setTransform(629.4,106,0.2866,0.2656,0,180,0,4.2,4);

	this.instance_21 = new lib.Symbol4();
	this.instance_21.setTransform(593.55,192.8,0.2866,0.2656,0,180,0,4.2,4);

	this.instance_22 = new lib.Symbol4();
	this.instance_22.setTransform(494.45,44.2,0.2866,0.2656,0,180,0,4.2,4);

	this.instance_23 = new lib.Symbol4();
	this.instance_23.setTransform(666.85,138.75,0.2866,0.2656,0,180,0,4.2,4);

	this.instance_24 = new lib.Symbol4();
	this.instance_24.setTransform(224.85,105.5,0.2866,0.2656,0,180,0,4.2,4);

	this.instance_25 = new lib.Symbol4();
	this.instance_25.setTransform(179.85,84.7,0.2866,0.2656,0,180,0,4.2,4);

	this.instance_26 = new lib.Symbol4();
	this.instance_26.setTransform(510.8,147.75,0.2866,0.2656,0,180,0,4.2,4);

	this.instance_27 = new lib.Symbol3copy();
	this.instance_27.setTransform(645.65,25.8,1,1,0,0,0,4.1,4.1);

	this.instance_28 = new lib.Symbol3copy();
	this.instance_28.setTransform(914.7,71.2,1,1,0,0,0,4.1,4.1);

	this.instance_29 = new lib.Symbol3copy();
	this.instance_29.setTransform(341.75,4.1,1,1,0,0,0,4.1,4.1);

	this.instance_30 = new lib.Symbol3copy();
	this.instance_30.setTransform(296.45,189.75,1,1,0,0,0,4.1,4.1);

	this.instance_31 = new lib.Symbol3copy();
	this.instance_31.setTransform(59.1,-18.35,1,1,0,0,0,4.1,4.1);

	this.instance_32 = new lib.Symbol3();
	this.instance_32.setTransform(293.75,277.55,0.3415,0.3293,0,0,0,4.1,4.1);

	this.instance_33 = new lib.Symbol3();
	this.instance_33.setTransform(750.65,195.2,0.3415,0.3293,0,0,0,4.1,4.1);

	this.instance_34 = new lib.Symbol3();
	this.instance_34.setTransform(780.25,23.05,0.3415,0.3293,0,0,0,4.1,4.1);

	this.instance_35 = new lib.Symbol3();
	this.instance_35.setTransform(384.8,105.7,0.3415,0.3293,0,0,0,4.1,4.1);

	this.instance_36 = new lib.Symbol3();
	this.instance_36.setTransform(554.85,76.65,0.3415,0.3293,0,0,0,4.1,4.1);

	this.instance_37 = new lib.Symbol3();
	this.instance_37.setTransform(452.5,203.6,0.3415,0.3293,0,0,0,4.1,4.1);

	this.instance_38 = new lib.Symbol3();
	this.instance_38.setTransform(200.95,149.4,0.3415,0.3293,0,0,0,4.1,4.1);

	this.instance_39 = new lib.Symbol3();
	this.instance_39.setTransform(222.25,54.75,0.3415,0.3293,0,0,0,4.1,4.1);

	this.instance_40 = new lib.Symbol3();
	this.instance_40.setTransform(85.6,103,0.3415,0.3293,0,0,0,4.1,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},7).wait(38));

	// lower_buildings
	this.instance_41 = new lib.Symbol9();
	this.instance_41.setTransform(480,456.1,1,1,0,0,0,480,320);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).to({y:319.7},4).wait(41));

	// bg_psd
	this.instance_42 = new lib.Layer1_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,289.8,480,486.3);
// library properties:
lib.properties = {
	id: '2C4BAB120E5DF749B0F51D6BF01C741A',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/saved_backup_atlas_.png", id:"saved_backup_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2C4BAB120E5DF749B0F51D6BF01C741A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;