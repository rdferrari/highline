// Garden Gnome Software - Skin
// Pano2VR 5.1/15722
// Filename: Slack-Project.ggsk
// Generated sex mai 19 09:59:26 2017

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='bt-play-video') {
			this.__div=document.createElement('div');
			this.__div.ggId="bt-play-video";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 207px;';
			hs+='position : absolute;';
			hs+='top : 219px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openUrl("https:\/\/player.vimeo.com\/video\/217431547","_self");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._svg_1=document.createElement('div');
			this._svg_1__img=document.createElement('img');
			this._svg_1__img.className='ggskin ggskin_svg';
			this._svg_1__img.setAttribute('src',basePath + 'images/svg_1.svg');
			this._svg_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_1__img['ondragstart']=function() { return false; };
			this._svg_1.appendChild(this._svg_1__img);
			this._svg_1.ggId="Svg 1";
			this._svg_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_1.ggVisible=true;
			this._svg_1.className='ggskin ggskin_svg ';
			this._svg_1.ggType='svg';
			hs ='';
			hs+='height : 160px;';
			hs+='left : -60px;';
			hs+='position : absolute;';
			hs+='top : -53px;';
			hs+='visibility : inherit;';
			hs+='width : 111px;';
			hs+='pointer-events:auto;';
			this._svg_1.setAttribute('style',hs);
			this._svg_1.style[domTransform + 'Origin']='50% 50%';
			me._svg_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_1.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._svg_1);
		} else
		if (hotspot.skinid=='node-meio') {
			this.__div=document.createElement('div');
			this.__div.ggId="node-meio";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 270px;';
			hs+='position : absolute;';
			hs+='top : 156px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node5}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._svg_33=document.createElement('div');
			this._svg_33__img=document.createElement('img');
			this._svg_33__img.className='ggskin ggskin_svg';
			this._svg_33__img.setAttribute('src',basePath + 'images/svg_33.svg');
			this._svg_33__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_33__img['ondragstart']=function() { return false; };
			this._svg_33.appendChild(this._svg_33__img);
			this._svg_33.ggId="Svg 3";
			this._svg_33.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_33.ggVisible=true;
			this._svg_33.className='ggskin ggskin_svg ';
			this._svg_33.ggType='svg';
			hs ='';
			hs+='height : 44px;';
			hs+='left : -22px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 44px;';
			hs+='pointer-events:auto;';
			this._svg_33.setAttribute('style',hs);
			this._svg_33.style[domTransform + 'Origin']='50% 50%';
			me._svg_33.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_33.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_33.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._svg_33);
			this._svg_43=document.createElement('div');
			this._svg_43__img=document.createElement('img');
			this._svg_43__img.className='ggskin ggskin_svg';
			this._svg_43__img.setAttribute('src',basePath + 'images/svg_43.svg');
			this._svg_43__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_43__img['ondragstart']=function() { return false; };
			this._svg_43.appendChild(this._svg_43__img);
			this._svg_43.ggId="Svg 4";
			this._svg_43.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_43.ggVisible=true;
			this._svg_43.className='ggskin ggskin_svg ';
			this._svg_43.ggType='svg';
			hs ='';
			hs+='height : 48px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			hs+='pointer-events:auto;';
			this._svg_43.setAttribute('style',hs);
			this._svg_43.style[domTransform + 'Origin']='50% 50%';
			me._svg_43.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_43.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_43.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._svg_43);
		} else
		if (hotspot.skinid=='node-lado-1') {
			this.__div=document.createElement('div');
			this.__div.ggId="node-lado-1";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 270px;';
			hs+='position : absolute;';
			hs+='top : 156px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node3}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._svg_32=document.createElement('div');
			this._svg_32__img=document.createElement('img');
			this._svg_32__img.className='ggskin ggskin_svg';
			this._svg_32__img.setAttribute('src',basePath + 'images/svg_32.svg');
			this._svg_32__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_32__img['ondragstart']=function() { return false; };
			this._svg_32.appendChild(this._svg_32__img);
			this._svg_32.ggId="Svg 3";
			this._svg_32.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_32.ggVisible=true;
			this._svg_32.className='ggskin ggskin_svg ';
			this._svg_32.ggType='svg';
			hs ='';
			hs+='height : 44px;';
			hs+='left : -22px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 44px;';
			hs+='pointer-events:auto;';
			this._svg_32.setAttribute('style',hs);
			this._svg_32.style[domTransform + 'Origin']='50% 50%';
			me._svg_32.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_32.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_32.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._svg_32);
			this._svg_42=document.createElement('div');
			this._svg_42__img=document.createElement('img');
			this._svg_42__img.className='ggskin ggskin_svg';
			this._svg_42__img.setAttribute('src',basePath + 'images/svg_42.svg');
			this._svg_42__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_42__img['ondragstart']=function() { return false; };
			this._svg_42.appendChild(this._svg_42__img);
			this._svg_42.ggId="Svg 4";
			this._svg_42.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_42.ggVisible=true;
			this._svg_42.className='ggskin ggskin_svg ';
			this._svg_42.ggType='svg';
			hs ='';
			hs+='height : 48px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			hs+='pointer-events:auto;';
			this._svg_42.setAttribute('style',hs);
			this._svg_42.style[domTransform + 'Origin']='50% 50%';
			me._svg_42.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_42.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_42.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._svg_42);
		} else
		if (hotspot.skinid=='node-lado-2') {
			this.__div=document.createElement('div');
			this.__div.ggId="node-lado-2";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 270px;';
			hs+='position : absolute;';
			hs+='top : 156px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node4}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._svg_31=document.createElement('div');
			this._svg_31__img=document.createElement('img');
			this._svg_31__img.className='ggskin ggskin_svg';
			this._svg_31__img.setAttribute('src',basePath + 'images/svg_31.svg');
			this._svg_31__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_31__img['ondragstart']=function() { return false; };
			this._svg_31.appendChild(this._svg_31__img);
			this._svg_31.ggId="Svg 3";
			this._svg_31.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_31.ggVisible=true;
			this._svg_31.className='ggskin ggskin_svg ';
			this._svg_31.ggType='svg';
			hs ='';
			hs+='height : 44px;';
			hs+='left : -22px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 44px;';
			hs+='pointer-events:auto;';
			this._svg_31.setAttribute('style',hs);
			this._svg_31.style[domTransform + 'Origin']='50% 50%';
			me._svg_31.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_31.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_31.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._svg_31);
			this._svg_41=document.createElement('div');
			this._svg_41__img=document.createElement('img');
			this._svg_41__img.className='ggskin ggskin_svg';
			this._svg_41__img.setAttribute('src',basePath + 'images/svg_41.svg');
			this._svg_41__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_41__img['ondragstart']=function() { return false; };
			this._svg_41.appendChild(this._svg_41__img);
			this._svg_41.ggId="Svg 4";
			this._svg_41.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_41.ggVisible=true;
			this._svg_41.className='ggskin ggskin_svg ';
			this._svg_41.ggType='svg';
			hs ='';
			hs+='height : 48px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			hs+='pointer-events:auto;';
			this._svg_41.setAttribute('style',hs);
			this._svg_41.style[domTransform + 'Origin']='50% 50%';
			me._svg_41.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_41.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_41.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._svg_41);
		} else
		if (hotspot.skinid=='node-lado-baixo') {
			this.__div=document.createElement('div');
			this.__div.ggId="node-lado-baixo";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 270px;';
			hs+='position : absolute;';
			hs+='top : 156px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node2}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._svg_30=document.createElement('div');
			this._svg_30__img=document.createElement('img');
			this._svg_30__img.className='ggskin ggskin_svg';
			this._svg_30__img.setAttribute('src',basePath + 'images/svg_30.svg');
			this._svg_30__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_30__img['ondragstart']=function() { return false; };
			this._svg_30.appendChild(this._svg_30__img);
			this._svg_30.ggId="Svg 3";
			this._svg_30.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_30.ggVisible=true;
			this._svg_30.className='ggskin ggskin_svg ';
			this._svg_30.ggType='svg';
			hs ='';
			hs+='height : 44px;';
			hs+='left : -22px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 44px;';
			hs+='pointer-events:auto;';
			this._svg_30.setAttribute('style',hs);
			this._svg_30.style[domTransform + 'Origin']='50% 50%';
			me._svg_30.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_30.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_30.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._svg_30);
			this._svg_40=document.createElement('div');
			this._svg_40__img=document.createElement('img');
			this._svg_40__img.className='ggskin ggskin_svg';
			this._svg_40__img.setAttribute('src',basePath + 'images/svg_40.svg');
			this._svg_40__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_40__img['ondragstart']=function() { return false; };
			this._svg_40.appendChild(this._svg_40__img);
			this._svg_40.ggId="Svg 4";
			this._svg_40.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_40.ggVisible=true;
			this._svg_40.className='ggskin ggskin_svg ';
			this._svg_40.ggType='svg';
			hs ='';
			hs+='height : 48px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			hs+='pointer-events:auto;';
			this._svg_40.setAttribute('style',hs);
			this._svg_40.style[domTransform + 'Origin']='50% 50%';
			me._svg_40.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_40.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_40.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._svg_40);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="node-drone";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 270px;';
			hs+='position : absolute;';
			hs+='top : 156px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node1}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._svg_3=document.createElement('div');
			this._svg_3__img=document.createElement('img');
			this._svg_3__img.className='ggskin ggskin_svg';
			this._svg_3__img.setAttribute('src',basePath + 'images/svg_3.svg');
			this._svg_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_3__img['ondragstart']=function() { return false; };
			this._svg_3.appendChild(this._svg_3__img);
			this._svg_3.ggId="Svg 3";
			this._svg_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_3.ggVisible=true;
			this._svg_3.className='ggskin ggskin_svg ';
			this._svg_3.ggType='svg';
			hs ='';
			hs+='height : 44px;';
			hs+='left : -22px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 44px;';
			hs+='pointer-events:auto;';
			this._svg_3.setAttribute('style',hs);
			this._svg_3.style[domTransform + 'Origin']='50% 50%';
			me._svg_3.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_3.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_3.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._svg_3);
			this._svg_4=document.createElement('div');
			this._svg_4__img=document.createElement('img');
			this._svg_4__img.className='ggskin ggskin_svg';
			this._svg_4__img.setAttribute('src',basePath + 'images/svg_4.svg');
			this._svg_4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_4__img['ondragstart']=function() { return false; };
			this._svg_4.appendChild(this._svg_4__img);
			this._svg_4.ggId="Svg 4";
			this._svg_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_4.ggVisible=true;
			this._svg_4.className='ggskin ggskin_svg ';
			this._svg_4.ggType='svg';
			hs ='';
			hs+='height : 48px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			hs+='pointer-events:auto;';
			this._svg_4.setAttribute('style',hs);
			this._svg_4.style[domTransform + 'Origin']='50% 50%';
			me._svg_4.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_4.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_4.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._svg_4);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};