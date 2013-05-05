/* generated by stasc 1.3 */
Clear=function(){
	var n0=document.createElementNS('http://www.w3.org/2000/svg','g');
	return n0;
};
End=function(){
	var n0=document.createElementNS('http://www.w3.org/2000/svg','g');
	var n1=document.createElementNS('http://www.w3.org/2000/svg','g');
	n1.setAttribute('transform','translate(265, 180) scale(-1, 1)');
	Object.defineProperty(n0,'Lost',{
		get:function(){return n1;}
	});
	n0.appendChild(n1);
	var n2=document.createElementNS('http://www.w3.org/2000/svg','text');
	n2.setAttribute('x','160');
	n2.setAttribute('y','220');
	n2.setAttribute('text-anchor','middle');
	n2.setAttribute('font-size','14');
	n2.setAttribute('fill','white');
	n2.appendChild(document.createTextNode('Game Over'));
	n0.appendChild(n2);
	var n3=document.createElementNS('http://www.w3.org/2000/svg','text');
	n3.setAttribute('x','160');
	n3.setAttribute('y','250');
	n3.setAttribute('text-anchor','middle');
	n3.setAttribute('font-size','32');
	n3.setAttribute('fill','White');
	Object.defineProperty(n0, 'Numbers',{
		set:function(v){n3.textContent=v;},
		get:function(){return n3.textContent;}
	});
	if(0<arguments.length){
		n0.Numbers=arguments[0];
	}
	n0.appendChild(n3);
	var n4=document.createElementNS('http://www.w3.org/2000/svg','text');
	n4.setAttribute('x','160');
	n4.setAttribute('y','270');
	n4.setAttribute('text-anchor','middle');
	n4.setAttribute('font-size','14');
	n4.setAttribute('fill','White');
	n4.setAttribute('text-decoration','underline');
	n4.setAttribute('style','cursor:pointer;');
	n4.setAttribute('onclick','start();');
	n4.appendChild(document.createTextNode('Replay'));
	n0.appendChild(n4);
	var n5=document.createElementNS('http://www.w3.org/2000/svg','g');
	n5.setAttribute('transform','translate(55, 300)');
	Object.defineProperty(n0,'Got',{
		get:function(){return n5;}
	});
	n0.appendChild(n5);
	return n0;
};
Off=function(){
	var n0=document.createElementNS('http://www.w3.org/2000/svg','g');
	var n1=document.createElementNS('http://www.w3.org/2000/svg','circle');
	n1.setAttribute('stroke','black');
	n1.setAttribute('fill','none');
	n1.setAttribute('cy','0');
	n1.setAttribute('r','15');
	Object.defineProperty(n0, 'X',{
		set:function(v){n1.setAttribute('cx',v);},
		get:function(){return n1.getAttribute('cx');}
	});
	if(0<arguments.length){
		n0.X=arguments[0];
	}
	n0.appendChild(n1);
	return n0;
};
On=function(){
	var n0=document.createElementNS('http://www.w3.org/2000/svg','g');
	var n1=document.createElementNS('http://www.w3.org/2000/svg','circle');
	n1.setAttribute('stroke','black');
	n1.setAttribute('fill','yellow');
	n1.setAttribute('cy','0');
	n1.setAttribute('r','15');
	Object.defineProperty(n0, 'X',{
		set:function(v){n1.setAttribute('cx',v);},
		get:function(){return n1.getAttribute('cx');}
	});
	if(0<arguments.length){
		n0.X=arguments[0];
	}
	n0.appendChild(n1);
	return n0;
};
Score=function(){
	var n0=document.createElementNS('http://www.w3.org/2000/svg','g');
	var n1=document.createElementNS('http://www.w3.org/2000/svg','g');
	n1.setAttribute('transform','translate(265, 180) scale(-1, 1)');
	Object.defineProperty(n0,'Lost',{
		get:function(){return n1;}
	});
	n0.appendChild(n1);
	var n2=document.createElementNS('http://www.w3.org/2000/svg','text');
	n2.setAttribute('x','160');
	n2.setAttribute('y','250');
	n2.setAttribute('text-anchor','middle');
	n2.setAttribute('font-size','32');
	n2.setAttribute('fill','white');
	Object.defineProperty(n0, 'Numbers',{
		set:function(v){n2.textContent=v;},
		get:function(){return n2.textContent;}
	});
	if(0<arguments.length){
		n0.Numbers=arguments[0];
	}
	n0.appendChild(n2);
	var n3=document.createElementNS('http://www.w3.org/2000/svg','g');
	n3.setAttribute('transform','translate(55, 300)');
	Object.defineProperty(n0,'Got',{
		get:function(){return n3;}
	});
	n0.appendChild(n3);
	return n0;
};
Table=function(){
	var n0=document.createElementNS('http://www.w3.org/2000/svg','svg');
	n0.setAttribute('width','320');
	n0.setAttribute('height','480');
	var n1=document.createElementNS('http://www.w3.org/2000/svg','rect');
	n1.setAttribute('x','0');
	n1.setAttribute('y','0');
	n1.setAttribute('fill','black');
	n1.setAttribute('width','320');
	n1.setAttribute('height','480');
	n0.appendChild(n1);
	var n2=document.createElementNS('http://www.w3.org/2000/svg','rect');
	n2.setAttribute('x','5');
	n2.setAttribute('y','5');
	n2.setAttribute('fill','royalblue');
	n2.setAttribute('width','310');
	n2.setAttribute('height','470');
	n0.appendChild(n2);
	var n3=document.createElementNS('http://www.w3.org/2000/svg','rect');
	n3.setAttribute('x','100');
	n3.setAttribute('y','0');
	n3.setAttribute('fill','royalblue');
	n3.setAttribute('width','120');
	n3.setAttribute('height','480');
	n0.appendChild(n3);
	var n4=document.createElementNS('http://www.w3.org/2000/svg','circle');
	n4.setAttribute('fill','lightgrey');
	n4.setAttribute('stroke','black');
	n4.setAttribute('cx','160');
	n4.setAttribute('cy','80');
	n4.setAttribute('r','25');
	Object.defineProperty(n0, 'FoeX',{
		set:function(v){n4.setAttribute('cx',v);},
		get:function(){return n4.getAttribute('cx');}
	});
	n0.appendChild(n4);
	var n5=document.createElementNS('http://www.w3.org/2000/svg','circle');
	n5.setAttribute('visibility','hidden');
	n5.setAttribute('fill','yellow');
	n5.setAttribute('stroke','black');
	n5.setAttribute('cx','160');
	n5.setAttribute('cy','240');
	n5.setAttribute('r','20');
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
	n6.setAttribute('stroke','black');
	n6.setAttribute('cx','160');
	n6.setAttribute('cy','400');
	n6.setAttribute('r','25');
	Object.defineProperty(n0, 'YouX',{
		set:function(v){n6.setAttribute('cx',v);},
		get:function(){return n6.getAttribute('cx');}
	});
	n0.appendChild(n6);
	var n7=document.createElementNS('http://www.w3.org/2000/svg','g');
	var n8=document.createElementNS('http://www.w3.org/2000/svg','text');
	n8.setAttribute('x','160');
	n8.setAttribute('y','240');
	n8.setAttribute('text-anchor','middle');
	n8.setAttribute('font-size','28');
	n8.setAttribute('fill','white');
	n8.appendChild(document.createTextNode('SVGAirHockey'));
	n7.appendChild(n8);
	var n9=document.createElementNS('http://www.w3.org/2000/svg','text');
	n9.setAttribute('x','160');
	n9.setAttribute('y','260');
	n9.setAttribute('text-anchor','middle');
	n9.setAttribute('font-size','14');
	n9.setAttribute('fill','white');
	n9.setAttribute('text-decoration','underline');
	n9.setAttribute('style','cursor:pointer;');
	n9.setAttribute('onclick','start();');
	n9.appendChild(document.createTextNode('Start'));
	n7.appendChild(n9);
	Object.defineProperty(n0,'Overlay',{
		set:function(v){n0.replaceChild(v,n7);n7=v;},
		get:function(){return n7;}
	});
	n0.appendChild(n7);
	return n0;
};
