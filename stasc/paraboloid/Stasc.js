/* generated by stasc 1.5 */
Arrow=function(){
	var n0=document.createElementNS('http://www.w3.org/2000/svg','path');
	n0.setAttribute('stroke','white');
	n0.setAttribute('stroke-width','5');
	n0.setAttribute('fill','none');
	n0.setAttribute('marker-end','url(#arrow)');
	Object.defineProperty(n0, 'Path',{
		set:function(v){n0.setAttribute('d',v);},
		get:function(){return n0.getAttribute('d');}
	});
	if(0<arguments.length){
		n0.Path=arguments[0];
	}
	return n0;
};
Clear=function(){
	var n0=document.createElementNS('http://www.w3.org/2000/svg','g');
	return n0;
};
End=function(){
	var n0=document.createElementNS('http://www.w3.org/2000/svg','g');
	var n1=document.createElementNS('http://www.w3.org/2000/svg','text');
	n1.setAttribute('x','160');
	n1.setAttribute('y','220');
	n1.setAttribute('text-anchor','middle');
	n1.setAttribute('font-size','28');
	n1.setAttribute('font-family','Helvetica');
	n1.setAttribute('fill','white');
	n1.appendChild(document.createTextNode('Game Over'));
	n0.appendChild(n1);
	var n2=document.createElementNS('http://www.w3.org/2000/svg','text');
	n2.setAttribute('x','160');
	n2.setAttribute('y','250');
	n2.setAttribute('text-anchor','end');
	n2.setAttribute('font-size','14');
	n2.setAttribute('font-family','Helvetica');
	n2.setAttribute('fill','white');
	n2.appendChild(document.createTextNode('All Time Best:'));
	n0.appendChild(n2);
	var n3=document.createElementNS('http://www.w3.org/2000/svg','text');
	n3.setAttribute('x','160');
	n3.setAttribute('y','250');
	n3.setAttribute('text-anchor','start');
	n3.setAttribute('font-size','14');
	n3.setAttribute('font-family','Helvetica');
	n3.setAttribute('fill','white');
	Object.defineProperty(n0, 'AlltimeBest',{
		set:function(v){n3.textContent=v;},
		get:function(){return n3.textContent;}
	});
	n0.appendChild(n3);
	var n4=document.createElementNS('http://www.w3.org/2000/svg','text');
	n4.setAttribute('x','160');
	n4.setAttribute('y','270');
	n4.setAttribute('text-anchor','end');
	n4.setAttribute('font-size','14');
	n4.setAttribute('font-family','Helvetica');
	n4.setAttribute('fill','white');
	n4.appendChild(document.createTextNode('Today\'s Best:'));
	n0.appendChild(n4);
	var n5=document.createElementNS('http://www.w3.org/2000/svg','text');
	n5.setAttribute('x','160');
	n5.setAttribute('y','270');
	n5.setAttribute('text-anchor','start');
	n5.setAttribute('font-size','14');
	n5.setAttribute('font-family','Helvetica');
	n5.setAttribute('fill','white');
	Object.defineProperty(n0, 'TodaysBest',{
		set:function(v){n5.textContent=v;},
		get:function(){return n5.textContent;}
	});
	n0.appendChild(n5);
	var n6=document.createElementNS('http://www.w3.org/2000/svg','text');
	n6.setAttribute('x','160');
	n6.setAttribute('y','320');
	n6.setAttribute('text-anchor','middle');
	n6.setAttribute('font-size','20');
	n6.setAttribute('font-family','Helvetica');
	n6.setAttribute('fill','White');
	n6.setAttribute('text-decoration','underline');
	n6.setAttribute('style','cursor:pointer;');
	n6.setAttribute('onclick','start();');
	n6.appendChild(document.createTextNode('Replay'));
	n0.appendChild(n6);
	var n7=document.createElementNS('http://www.w3.org/2000/svg','a');
	n7.setAttributeNS('http://www.w3.org/1999/xlink','href','help.html');
	var n8=document.createElementNS('http://www.w3.org/2000/svg','text');
	n8.setAttribute('x','160');
	n8.setAttribute('y','350');
	n8.setAttribute('text-anchor','middle');
	n8.setAttribute('font-size','20');
	n8.setAttribute('font-family','Helvetica');
	n8.setAttribute('fill','white');
	n8.setAttribute('text-decoration','underline');
	n8.appendChild(document.createTextNode('Help'));
	n7.appendChild(n8);
	n0.appendChild(n7);
	return n0;
};
Orange=function(){
	var n0=document.createElementNS('http://www.w3.org/2000/svg','g');
	var mX='0';
	if(0<arguments.length){
		mX=arguments[0];
	}
	Object.defineProperty(n0, 'X',{
		set:function(v){mX=v;n0.setAttribute('transform','translate('+mX+' '+mY+')');},
		get:function(){return mX;}
	});
	var mY='0';
	if(1<arguments.length){
		mY=arguments[1];
	}
	Object.defineProperty(n0, 'Y',{
		set:function(v){mY=v;n0.setAttribute('transform','translate('+mX+' '+mY+')');},
		get:function(){return mY;}
	});
	n0.setAttribute('transform','translate('+mX+' '+mY+')');
	Object.defineProperty(n0, 'Opacity',{
		set:function(v){n0.setAttribute('opacity',v);},
		get:function(){return n0.getAttribute('opacity');}
	});
	var n1=document.createElementNS('http://www.w3.org/2000/svg','circle');
	n1.setAttribute('fill','#FF7F00');
	n1.setAttribute('stroke','none');
	n1.setAttribute('cx','0');
	n1.setAttribute('cy','0');
	n1.setAttribute('r','10');
	n1.setAttribute('opacity','1');
	Object.defineProperty(n0, 'R',{
		set:function(v){n1.setAttribute('r',v);},
		get:function(){return n1.getAttribute('r');}
	});
	n0.appendChild(n1);
	var n2=document.createElementNS('http://www.w3.org/2000/svg','line');
	n2.setAttribute('x1','0');
	n2.setAttribute('y1','-7');
	n2.setAttribute('x2','0');
	n2.setAttribute('y2','7');
	n2.setAttribute('stroke','black');
	n2.setAttribute('stroke-width','4');
	n0.appendChild(n2);
	var n3=document.createElementNS('http://www.w3.org/2000/svg','line');
	n3.setAttribute('x1','-7');
	n3.setAttribute('y1','0');
	n3.setAttribute('x2','7');
	n3.setAttribute('y2','0');
	n3.setAttribute('stroke','black');
	n3.setAttribute('stroke-width','4');
	n0.appendChild(n3);
	var n4=document.createElementNS('http://www.w3.org/2000/svg','text');
	n4.setAttribute('x','0');
	n4.setAttribute('y','0');
	n4.setAttribute('text-anchor','middle');
	n4.setAttribute('font-size','12');
	n4.setAttribute('font-family','Monospace');
	n4.setAttribute('fill','white');
	Object.defineProperty(n0, 'Text',{
		set:function(v){n4.textContent=v;},
		get:function(){return n4.textContent;}
	});
	n0.appendChild(n4);
	return n0;
};
Red=function(){
	var n0=document.createElementNS('http://www.w3.org/2000/svg','g');
	var mX='0';
	if(0<arguments.length){
		mX=arguments[0];
	}
	Object.defineProperty(n0, 'X',{
		set:function(v){mX=v;n0.setAttribute('transform','translate('+mX+' '+mY+')');},
		get:function(){return mX;}
	});
	var mY='0';
	if(1<arguments.length){
		mY=arguments[1];
	}
	Object.defineProperty(n0, 'Y',{
		set:function(v){mY=v;n0.setAttribute('transform','translate('+mX+' '+mY+')');},
		get:function(){return mY;}
	});
	n0.setAttribute('transform','translate('+mX+' '+mY+')');
	Object.defineProperty(n0, 'Opacity',{
		set:function(v){n0.setAttribute('opacity',v);},
		get:function(){return n0.getAttribute('opacity');}
	});
	var n1=document.createElementNS('http://www.w3.org/2000/svg','circle');
	n1.setAttribute('fill','#FF0000');
	n1.setAttribute('stroke','none');
	n1.setAttribute('cx','0');
	n1.setAttribute('cy','0');
	n1.setAttribute('r','10');
	n1.setAttribute('opacity','1');
	Object.defineProperty(n0, 'R',{
		set:function(v){n1.setAttribute('r',v);},
		get:function(){return n1.getAttribute('r');}
	});
	n0.appendChild(n1);
	var n2=document.createElementNS('http://www.w3.org/2000/svg','line');
	n2.setAttribute('x1','-6');
	n2.setAttribute('y1','-4');
	n2.setAttribute('x2','6');
	n2.setAttribute('y2','-4');
	n2.setAttribute('stroke','black');
	n2.setAttribute('stroke-width','4');
	n0.appendChild(n2);
	var n3=document.createElementNS('http://www.w3.org/2000/svg','line');
	n3.setAttribute('x1','-6');
	n3.setAttribute('y1','4');
	n3.setAttribute('x2','6');
	n3.setAttribute('y2','4');
	n3.setAttribute('stroke','black');
	n3.setAttribute('stroke-width','4');
	n0.appendChild(n3);
	var n4=document.createElementNS('http://www.w3.org/2000/svg','text');
	n4.setAttribute('x','0');
	n4.setAttribute('y','0');
	n4.setAttribute('text-anchor','middle');
	n4.setAttribute('font-size','12');
	n4.setAttribute('font-family','Monospace');
	n4.setAttribute('fill','white');
	Object.defineProperty(n0, 'Text',{
		set:function(v){n4.textContent=v;},
		get:function(){return n4.textContent;}
	});
	n0.appendChild(n4);
	return n0;
};
Screen=function(){
	var n0=document.createElementNS('http://www.w3.org/2000/svg','svg');
	n0.setAttribute('width','320');
	n0.setAttribute('height','460');
	n0.setAttribute('viewBox','0 0 320 460');
	n0.setAttribute('viewPort','0 0 320 460');
	n0.setAttribute('style','margin: 0; padding: 0;');
	Object.defineProperty(n0, 'Position',{
		set:function(v){n0.style.position=v;},
		get:function(){return n0.style.position;}
	});
	Object.defineProperty(n0, 'Left',{
		set:function(v){n0.style.left=v;},
		get:function(){return n0.style.left;}
	});
	Object.defineProperty(n0, 'Top',{
		set:function(v){n0.style.top=v;},
		get:function(){return n0.style.top;}
	});
	Object.defineProperty(n0, 'Width',{
		set:function(v){n0.setAttribute('width',v);},
		get:function(){return n0.getAttribute('width');}
	});
	Object.defineProperty(n0, 'Height',{
		set:function(v){n0.setAttribute('height',v);},
		get:function(){return n0.getAttribute('height');}
	});
	var n1=document.createElementNS('http://www.w3.org/2000/svg','defs');
	var n2=document.createElementNS('http://www.w3.org/2000/svg','marker');
	n2.setAttribute('id','arrow');
	n2.setAttribute('markerUnits','strokeWidth');
	n2.setAttribute('markerWidth','4');
	n2.setAttribute('markerHeight','4');
	n2.setAttribute('viewBox','0 0 4 4');
	n2.setAttribute('refX','3');
	n2.setAttribute('refY','2');
	n2.setAttribute('orient','auto');
	var n3=document.createElementNS('http://www.w3.org/2000/svg','polygon');
	n3.setAttribute('points','4,2 0,4 0,0');
	n3.setAttribute('fill','white');
	n2.appendChild(n3);
	n1.appendChild(n2);
	n0.appendChild(n1);
	var n4=document.createElementNS('http://www.w3.org/2000/svg','rect');
	n4.setAttribute('x','0');
	n4.setAttribute('y','0');
	n4.setAttribute('fill','black');
	n4.setAttribute('width','320');
	n4.setAttribute('height','460');
	n0.appendChild(n4);
	var n5=document.createElementNS('http://www.w3.org/2000/svg','circle');
	n5.setAttribute('visibility','hidden');
	n5.setAttribute('fill','white');
	n5.setAttribute('cx','160');
	n5.setAttribute('cy','240');
	n5.setAttribute('r','10');
	Object.defineProperty(n0, 'PuckVisibility',{
		set:function(v){n5.setAttribute('visibility',v);},
		get:function(){return n5.getAttribute('visibility');}
	});
	Object.defineProperty(n0, 'PuckX',{
		set:function(v){n5.setAttribute('cx',v);},
		get:function(){return n5.getAttribute('cx');}
	});
	Object.defineProperty(n0, 'PuckY',{
		set:function(v){n5.setAttribute('cy',v);},
		get:function(){return n5.getAttribute('cy');}
	});
	n0.appendChild(n5);
	var n6=document.createElementNS('http://www.w3.org/2000/svg','circle');
	n6.setAttribute('fill','lightgrey');
	n6.setAttribute('cx','160');
	n6.setAttribute('cy','430');
	n6.setAttribute('r','50');
	Object.defineProperty(n0, 'YouX',{
		set:function(v){n6.setAttribute('cx',v);},
		get:function(){return n6.getAttribute('cx');}
	});
	n0.appendChild(n6);
	var n7=document.createElementNS('http://www.w3.org/2000/svg','rect');
	n7.setAttribute('x','0');
	n7.setAttribute('y','430');
	n7.setAttribute('fill','black');
	n7.setAttribute('width','320');
	n7.setAttribute('height','30');
	n0.appendChild(n7);
	var n8=document.createElementNS('http://www.w3.org/2000/svg','g');
	Object.defineProperty(n0,'Stage',{
		set:function(v){n0.replaceChild(v,n8);n8=v;},
		get:function(){return n8;}
	});
	n0.appendChild(n8);
	var n9=document.createElementNS('http://www.w3.org/2000/svg','g');
	var n10=document.createElementNS('http://www.w3.org/2000/svg','text');
	n10.setAttribute('x','160');
	n10.setAttribute('y','250');
	n10.setAttribute('text-anchor','end');
	n10.setAttribute('font-size','14');
	n10.setAttribute('font-family','Helvetica');
	n10.setAttribute('fill','white');
	n10.appendChild(document.createTextNode('All Time Best:'));
	n9.appendChild(n10);
	var n11=document.createElementNS('http://www.w3.org/2000/svg','text');
	n11.setAttribute('x','160');
	n11.setAttribute('y','250');
	n11.setAttribute('text-anchor','start');
	n11.setAttribute('font-size','14');
	n11.setAttribute('font-family','Helvetica');
	n11.setAttribute('fill','white');
	Object.defineProperty(n9, 'AlltimeBest',{
		set:function(v){n11.textContent=v;},
		get:function(){return n11.textContent;}
	});
	n9.appendChild(n11);
	var n12=document.createElementNS('http://www.w3.org/2000/svg','text');
	n12.setAttribute('x','160');
	n12.setAttribute('y','270');
	n12.setAttribute('text-anchor','end');
	n12.setAttribute('font-size','14');
	n12.setAttribute('font-family','Helvetica');
	n12.setAttribute('fill','white');
	n12.appendChild(document.createTextNode('Today\'s Best:'));
	n9.appendChild(n12);
	var n13=document.createElementNS('http://www.w3.org/2000/svg','text');
	n13.setAttribute('x','160');
	n13.setAttribute('y','270');
	n13.setAttribute('text-anchor','start');
	n13.setAttribute('font-size','14');
	n13.setAttribute('font-family','Helvetica');
	n13.setAttribute('fill','white');
	Object.defineProperty(n9, 'TodaysBest',{
		set:function(v){n13.textContent=v;},
		get:function(){return n13.textContent;}
	});
	n9.appendChild(n13);
	var n14=document.createElementNS('http://www.w3.org/2000/svg','text');
	n14.setAttribute('x','160');
	n14.setAttribute('y','320');
	n14.setAttribute('text-anchor','middle');
	n14.setAttribute('font-size','20');
	n14.setAttribute('font-family','Helvetica');
	n14.setAttribute('fill','white');
	n14.setAttribute('text-decoration','underline');
	n14.setAttribute('style','cursor:pointer;');
	n14.setAttribute('onclick','start();');
	n14.appendChild(document.createTextNode('Start'));
	n9.appendChild(n14);
	var n15=document.createElementNS('http://www.w3.org/2000/svg','a');
	n15.setAttributeNS('http://www.w3.org/1999/xlink','href','help.html');
	var n16=document.createElementNS('http://www.w3.org/2000/svg','text');
	n16.setAttribute('x','160');
	n16.setAttribute('y','350');
	n16.setAttribute('text-anchor','middle');
	n16.setAttribute('font-size','20');
	n16.setAttribute('font-family','Helvetica');
	n16.setAttribute('fill','white');
	n16.setAttribute('text-decoration','underline');
	n16.appendChild(document.createTextNode('Help'));
	n15.appendChild(n16);
	n9.appendChild(n15);
	Object.defineProperty(n0,'Title',{
		set:function(v){n0.replaceChild(v,n9);n9=v;},
		get:function(){return n9;}
	});
	n0.appendChild(n9);
	var n17=document.createElementNS('http://www.w3.org/2000/svg','text');
	n17.setAttribute('x','320');
	n17.setAttribute('y','20');
	n17.setAttribute('text-anchor','end');
	n17.setAttribute('font-size','18');
	n17.setAttribute('font-family','Monospace');
	n17.setAttribute('fill','white');
	Object.defineProperty(n0, 'Score',{
		set:function(v){n17.textContent=v;},
		get:function(){return n17.textContent;}
	});
	n0.appendChild(n17);
	var n18=document.createElementNS('http://www.w3.org/2000/svg','text');
	n18.setAttribute('x','0');
	n18.setAttribute('y','20');
	n18.setAttribute('text-anchor','start');
	n18.setAttribute('font-size','18');
	n18.setAttribute('font-family','Monospace');
	n18.setAttribute('fill','white');
	Object.defineProperty(n0, 'Time',{
		set:function(v){n18.textContent=v;},
		get:function(){return n18.textContent;}
	});
	n0.appendChild(n18);
	return n0;
};
Stage=function(){
	var n0=document.createElementNS('http://www.w3.org/2000/svg','g');
	var n1=document.createElementNS('http://www.w3.org/2000/svg','text');
	n1.setAttribute('x','0');
	n1.setAttribute('y','450');
	n1.setAttribute('text-anchor','start');
	n1.setAttribute('font-size','24');
	n1.setAttribute('font-family','Helvetica');
	n1.setAttribute('fill','white');
	n1.appendChild(document.createTextNode('Paraboloid'));
	n0.appendChild(n1);
	var n2=document.createElementNS('http://www.w3.org/2000/svg','text');
	n2.setAttribute('x','320');
	n2.setAttribute('y','450');
	n2.setAttribute('text-anchor','end');
	n2.setAttribute('font-size','24');
	n2.setAttribute('font-family','Helvetica');
	n2.setAttribute('fill','white');
	Object.defineProperty(n0, 'Text',{
		set:function(v){n2.textContent=v;},
		get:function(){return n2.textContent;}
	});
	if(0<arguments.length){
		n0.Text=arguments[0];
	}
	n0.appendChild(n2);
	var n3=document.createElementNS('http://www.w3.org/2000/svg','g');
	Object.defineProperty(n0,'Field',{
		get:function(){return n3;}
	});
	n0.appendChild(n3);
	return n0;
};
Yellow=function(){
	var n0=document.createElementNS('http://www.w3.org/2000/svg','g');
	var mX='0';
	if(0<arguments.length){
		mX=arguments[0];
	}
	Object.defineProperty(n0, 'X',{
		set:function(v){mX=v;n0.setAttribute('transform','translate('+mX+' '+mY+')');},
		get:function(){return mX;}
	});
	var mY='0';
	if(1<arguments.length){
		mY=arguments[1];
	}
	Object.defineProperty(n0, 'Y',{
		set:function(v){mY=v;n0.setAttribute('transform','translate('+mX+' '+mY+')');},
		get:function(){return mY;}
	});
	n0.setAttribute('transform','translate('+mX+' '+mY+')');
	Object.defineProperty(n0, 'Opacity',{
		set:function(v){n0.setAttribute('opacity',v);},
		get:function(){return n0.getAttribute('opacity');}
	});
	var n1=document.createElementNS('http://www.w3.org/2000/svg','circle');
	n1.setAttribute('fill','#FFFF00');
	n1.setAttribute('stroke','none');
	n1.setAttribute('cx','0');
	n1.setAttribute('cy','0');
	n1.setAttribute('r','10');
	n1.setAttribute('opacity','1');
	Object.defineProperty(n0, 'R',{
		set:function(v){n1.setAttribute('r',v);},
		get:function(){return n1.getAttribute('r');}
	});
	n0.appendChild(n1);
	var n2=document.createElementNS('http://www.w3.org/2000/svg','line');
	n2.setAttribute('x1','-5');
	n2.setAttribute('y1','-5');
	n2.setAttribute('x2','5');
	n2.setAttribute('y2','5');
	n2.setAttribute('stroke','black');
	n2.setAttribute('stroke-width','4');
	n0.appendChild(n2);
	var n3=document.createElementNS('http://www.w3.org/2000/svg','line');
	n3.setAttribute('x1','5');
	n3.setAttribute('y1','-5');
	n3.setAttribute('x2','-5');
	n3.setAttribute('y2','5');
	n3.setAttribute('stroke','black');
	n3.setAttribute('stroke-width','4');
	n0.appendChild(n3);
	var n4=document.createElementNS('http://www.w3.org/2000/svg','text');
	n4.setAttribute('x','0');
	n4.setAttribute('y','0');
	n4.setAttribute('text-anchor','middle');
	n4.setAttribute('font-size','12');
	n4.setAttribute('font-family','Monospace');
	n4.setAttribute('fill','white');
	Object.defineProperty(n0, 'Text',{
		set:function(v){n4.textContent=v;},
		get:function(){return n4.textContent;}
	});
	n0.appendChild(n4);
	return n0;
};
