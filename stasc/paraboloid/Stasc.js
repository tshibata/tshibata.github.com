/* generated by stasc 1.41 */
Block=function(){
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
	var n1=document.createElementNS('http://www.w3.org/2000/svg','circle');
	n1.setAttribute('stroke','none');
	n1.setAttribute('cx','0');
	n1.setAttribute('cy','0');
	n1.setAttribute('r','10');
	n1.setAttribute('opacity','1');
	var mYellow='0';
	if(2<arguments.length){
		mYellow=arguments[2];
	}
	Object.defineProperty(n0, 'Yellow',{
		set:function(v){mYellow=v;n1.setAttribute('fill','#F'+mYellow+'0');},
		get:function(){return mYellow;}
	});
	n1.setAttribute('fill','#F'+mYellow+'0');
	Object.defineProperty(n0, 'R',{
		set:function(v){n1.setAttribute('r',v);},
		get:function(){return n1.getAttribute('r');}
	});
	Object.defineProperty(n0, 'Opacity',{
		set:function(v){n1.setAttribute('opacity',v);},
		get:function(){return n1.getAttribute('opacity');}
	});
	n0.appendChild(n1);
	var n2=document.createElementNS('http://www.w3.org/2000/svg','text');
	n2.setAttribute('x','0');
	n2.setAttribute('y','0');
	n2.setAttribute('text-anchor','middle');
	n2.setAttribute('font-size','12');
	n2.setAttribute('font-family','Monospace');
	n2.setAttribute('fill','white');
	Object.defineProperty(n0, 'Text',{
		set:function(v){n2.textContent=v;},
		get:function(){return n2.textContent;}
	});
	n0.appendChild(n2);
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
	n1.setAttribute('y','240');
	n1.setAttribute('text-anchor','middle');
	n1.setAttribute('font-size','28');
	n1.setAttribute('font-family','Helvetica');
	n1.setAttribute('fill','white');
	n1.appendChild(document.createTextNode('Game Over'));
	n0.appendChild(n1);
	var n2=document.createElementNS('http://www.w3.org/2000/svg','text');
	n2.setAttribute('x','160');
	n2.setAttribute('y','270');
	n2.setAttribute('text-anchor','middle');
	n2.setAttribute('font-size','14');
	n2.setAttribute('font-family','Helvetica');
	n2.setAttribute('fill','White');
	n2.setAttribute('text-decoration','underline');
	n2.setAttribute('style','cursor:pointer;');
	n2.setAttribute('onclick','start();');
	n2.appendChild(document.createTextNode('Replay'));
	n0.appendChild(n2);
	return n0;
};
Screen=function(){
	var n0=document.createElementNS('http://www.w3.org/2000/svg','svg');
	n0.setAttribute('width','320');
	n0.setAttribute('height','460');
	n0.setAttribute('viewBox','0 0 320 460');
	n0.setAttribute('viewPort','0 0 320 460');
	n0.setAttribute('style','margin: 0; padding: 0;');
	var n1=document.createElementNS('http://www.w3.org/2000/svg','rect');
	n1.setAttribute('x','0');
	n1.setAttribute('y','0');
	n1.setAttribute('fill','black');
	n1.setAttribute('width','320');
	n1.setAttribute('height','460');
	n0.appendChild(n1);
	var n2=document.createElementNS('http://www.w3.org/2000/svg','circle');
	n2.setAttribute('visibility','hidden');
	n2.setAttribute('fill','white');
	n2.setAttribute('cx','160');
	n2.setAttribute('cy','240');
	n2.setAttribute('r','10');
	Object.defineProperty(n0, 'PuckVisibility',{
		set:function(v){n2.setAttribute('visibility',v);},
		get:function(){return n2.getAttribute('visibility');}
	});
	Object.defineProperty(n0, 'PuckX',{
		set:function(v){n2.setAttribute('cx',v);},
		get:function(){return n2.getAttribute('cx');}
	});
	Object.defineProperty(n0, 'PuckY',{
		set:function(v){n2.setAttribute('cy',v);},
		get:function(){return n2.getAttribute('cy');}
	});
	n0.appendChild(n2);
	var n3=document.createElementNS('http://www.w3.org/2000/svg','circle');
	n3.setAttribute('fill','lightgrey');
	n3.setAttribute('cx','160');
	n3.setAttribute('cy','430');
	n3.setAttribute('r','50');
	Object.defineProperty(n0, 'YouX',{
		set:function(v){n3.setAttribute('cx',v);},
		get:function(){return n3.getAttribute('cx');}
	});
	n0.appendChild(n3);
	var n4=document.createElementNS('http://www.w3.org/2000/svg','g');
	Object.defineProperty(n0,'Stage',{
		set:function(v){n0.replaceChild(v,n4);n4=v;},
		get:function(){return n4;}
	});
	n0.appendChild(n4);
	var n5=document.createElementNS('http://www.w3.org/2000/svg','g');
	var n6=document.createElementNS('http://www.w3.org/2000/svg','text');
	n6.setAttribute('x','160');
	n6.setAttribute('y','240');
	n6.setAttribute('text-anchor','middle');
	n6.setAttribute('font-size','28');
	n6.setAttribute('font-family','Helvetica');
	n6.setAttribute('fill','white');
	n6.appendChild(document.createTextNode('Paraboloid'));
	n5.appendChild(n6);
	var n7=document.createElementNS('http://www.w3.org/2000/svg','text');
	n7.setAttribute('x','160');
	n7.setAttribute('y','270');
	n7.setAttribute('text-anchor','middle');
	n7.setAttribute('font-size','14');
	n7.setAttribute('font-family','Helvetica');
	n7.setAttribute('fill','white');
	n7.setAttribute('text-decoration','underline');
	n7.setAttribute('style','cursor:pointer;');
	n7.setAttribute('onclick','start();');
	n7.appendChild(document.createTextNode('Start'));
	n5.appendChild(n7);
	Object.defineProperty(n0,'Title',{
		set:function(v){n0.replaceChild(v,n5);n5=v;},
		get:function(){return n5;}
	});
	n0.appendChild(n5);
	var n8=document.createElementNS('http://www.w3.org/2000/svg','rect');
	n8.setAttribute('x','0');
	n8.setAttribute('y','430');
	n8.setAttribute('fill','black');
	n8.setAttribute('width','320');
	n8.setAttribute('height','30');
	n0.appendChild(n8);
	var n9=document.createElementNS('http://www.w3.org/2000/svg','text');
	n9.setAttribute('x','0');
	n9.setAttribute('y','455');
	n9.setAttribute('text-anchor','start');
	n9.setAttribute('font-size','24');
	n9.setAttribute('font-family','Monospace');
	n9.setAttribute('fill','white');
	Object.defineProperty(n0, 'Score',{
		set:function(v){n9.textContent=v;},
		get:function(){return n9.textContent;}
	});
	n0.appendChild(n9);
	var n10=document.createElementNS('http://www.w3.org/2000/svg','text');
	n10.setAttribute('x','320');
	n10.setAttribute('y','455');
	n10.setAttribute('text-anchor','end');
	n10.setAttribute('font-size','24');
	n10.setAttribute('font-family','Monospace');
	n10.setAttribute('fill','white');
	Object.defineProperty(n0, 'Time',{
		set:function(v){n10.textContent=v;},
		get:function(){return n10.textContent;}
	});
	n0.appendChild(n10);
	return n0;
};
Stage=function(){
	var n0=document.createElementNS('http://www.w3.org/2000/svg','g');
	var n1=document.createElementNS('http://www.w3.org/2000/svg','text');
	n1.setAttribute('x','160');
	n1.setAttribute('y','20');
	n1.setAttribute('text-anchor','middle');
	n1.setAttribute('font-size','18');
	n1.setAttribute('font-family','Helvetica');
	n1.setAttribute('fill','white');
	Object.defineProperty(n0, 'Text',{
		set:function(v){n1.textContent=v;},
		get:function(){return n1.textContent;}
	});
	if(0<arguments.length){
		n0.Text=arguments[0];
	}
	n0.appendChild(n1);
	return n0;
};
