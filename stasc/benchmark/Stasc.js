/* generated by stasc 1.3 */
Base=function(){
	var n0=document.createElement('div');
	var n1=document.createElement('span');
	n1.setAttribute('style','color:white;');
	n1.appendChild(document.createTextNode('StascBench ver. 0.02'));
	Object.defineProperty(n0,'Content',{
		set:function(v){n0.replaceChild(v,n1);n1=v;},
		get:function(){return n1;}
	});
	n0.appendChild(n1);
	return n0;
};
Field=function(){
	var n0=document.createElementNS('http://www.w3.org/2000/svg','svg');
	n0.setAttribute('overflow','hidden');
	n0.setAttribute('viewBox','0 0 640 360');
	n0.setAttribute('viewPort','0 0 640 360');
	n0.setAttribute('width','640');
	n0.setAttribute('height','360');
	var n1=document.createElementNS('http://www.w3.org/2000/svg','rect');
	n1.setAttribute('x','0');
	n1.setAttribute('y','0');
	n1.setAttribute('fill','darkkhaki');
	n1.setAttribute('width','640');
	n1.setAttribute('height','360');
	n0.appendChild(n1);
	var n2=document.createElementNS('http://www.w3.org/2000/svg','g');
	Object.defineProperty(n0,'Air',{
		get:function(){return n2;}
	});
	n0.appendChild(n2);
	return n0;
};
Fire=function(){
	var n0=document.createElementNS('http://www.w3.org/2000/svg','circle');
	n0.setAttribute('visibility','visible');
	n0.setAttribute('fill','red');
	n0.setAttribute('stroke','black');
	n0.setAttribute('r','5');
	Object.defineProperty(n0, 'X',{
		set:function(v){n0.setAttribute('cx',v);},
		get:function(){return n0.getAttribute('cx');}
	});
	if(0<arguments.length){
		n0.X=arguments[0];
	}
	Object.defineProperty(n0, 'Y',{
		set:function(v){n0.setAttribute('cy',v);},
		get:function(){return n0.getAttribute('cy');}
	});
	if(1<arguments.length){
		n0.Y=arguments[1];
	}
	return n0;
};
Report=function(){
	var n0=document.createElement('table');
	var n1=document.createElement('tbody');
	n1.setAttribute('style','color:white;');
	var n2=document.createElement('tr');
	var n3=document.createElement('td');
	n3.appendChild(document.createTextNode('Aerial'));
	n2.appendChild(n3);
	var n4=document.createElement('td');
	Object.defineProperty(n0, 'Aerial',{
		set:function(v){n4.textContent=v;},
		get:function(){return n4.textContent;}
	});
	n2.appendChild(n4);
	n1.appendChild(n2);
	var n5=document.createElement('tr');
	var n6=document.createElement('td');
	n6.appendChild(document.createTextNode('Barrage'));
	n5.appendChild(n6);
	var n7=document.createElement('td');
	Object.defineProperty(n0, 'Barrage',{
		set:function(v){n7.textContent=v;},
		get:function(){return n7.textContent;}
	});
	n5.appendChild(n7);
	n1.appendChild(n5);
	var n8=document.createElement('tr');
	var n9=document.createElement('td');
	n9.appendChild(document.createTextNode('Geometric Mean'));
	n8.appendChild(n9);
	var n10=document.createElement('td');
	Object.defineProperty(n0, 'Mean',{
		set:function(v){n10.textContent=v;},
		get:function(){return n10.textContent;}
	});
	n8.appendChild(n10);
	n1.appendChild(n8);
	n0.appendChild(n1);
	return n0;
};
Sky=function(){
	var n0=document.createElementNS('http://www.w3.org/2000/svg','svg');
	n0.setAttribute('overflow','hidden');
	n0.setAttribute('viewBox','0 0 640 360');
	n0.setAttribute('viewPort','0 0 640 360');
	n0.setAttribute('width','640');
	n0.setAttribute('height','360');
	var n1=document.createElementNS('http://www.w3.org/2000/svg','rect');
	n1.setAttribute('x','0');
	n1.setAttribute('y','0');
	n1.setAttribute('fill','royalblue');
	n1.setAttribute('width','640');
	n1.setAttribute('height','360');
	n0.appendChild(n1);
	var n2=document.createElementNS('http://www.w3.org/2000/svg','defs');
	var n3=document.createElementNS('http://www.w3.org/2000/svg','filter');
	n3.setAttribute('id','10');
	var n4=document.createElementNS('http://www.w3.org/2000/svg','feTurbulence');
	n4.setAttribute('type','turbulence');
	n4.setAttribute('baseFrequency','0.001');
	n4.setAttribute('numOctaves','5');
	n4.setAttribute('seed','10');
	n4.setAttribute('stitchTiles','noStitch');
	n4.setAttribute('result','t');
	Object.defineProperty(n0, 'Seed',{
		set:function(v){n4.setAttribute('seed',v);},
		get:function(){return n4.getAttribute('seed');}
	});
	n3.appendChild(n4);
	var n5=document.createElementNS('http://www.w3.org/2000/svg','feColorMatrix');
	n5.setAttribute('in','t');
	n5.setAttribute('values','0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,1, 0,0,0,2,-1');
	n5.setAttribute('result','m');
	n3.appendChild(n5);
	n2.appendChild(n3);
	var n6=document.createElementNS('http://www.w3.org/2000/svg','filter');
	n6.setAttribute('id','100');
	var n7=document.createElementNS('http://www.w3.org/2000/svg','feTurbulence');
	n7.setAttribute('type','turbulence');
	n7.setAttribute('baseFrequency','0.001');
	n7.setAttribute('numOctaves','5');
	n7.setAttribute('seed','100');
	n7.setAttribute('stitchTiles','noStitch');
	n7.setAttribute('result','t');
	Object.defineProperty(n0, 'Seed2',{
		set:function(v){n7.setAttribute('seed',v);},
		get:function(){return n7.getAttribute('seed');}
	});
	n6.appendChild(n7);
	var n8=document.createElementNS('http://www.w3.org/2000/svg','feColorMatrix');
	n8.setAttribute('in','t');
	n8.setAttribute('values','0,0,0,0,1, 0,0,0,0,1, 0,0,0,0,1, 0,0,0,2,-1');
	n8.setAttribute('result','m');
	n6.appendChild(n8);
	n2.appendChild(n6);
	n0.appendChild(n2);
	var n9=document.createElementNS('http://www.w3.org/2000/svg','g');
	n9.setAttribute('transform','translate(320 180)');
	var n10=document.createElementNS('http://www.w3.org/2000/svg','g');
	n10.setAttribute('filter','url(#10)');
	n10.setAttribute('transform','scale(1)');
	n10.setAttribute('opacity','1');
	Object.defineProperty(n0, 'Transform',{
		set:function(v){n10.setAttribute('transform',v);},
		get:function(){return n10.getAttribute('transform');}
	});
	Object.defineProperty(n0, 'Opacity',{
		set:function(v){n10.setAttribute('opacity',v);},
		get:function(){return n10.getAttribute('opacity');}
	});
	var n11=document.createElementNS('http://www.w3.org/2000/svg','rect');
	n11.setAttribute('x','-320');
	n11.setAttribute('y','-180');
	n11.setAttribute('width','640');
	n11.setAttribute('height','360');
	Object.defineProperty(n0, 'X',{
		set:function(v){n11.setAttribute('x',v);},
		get:function(){return n11.getAttribute('x');}
	});
	Object.defineProperty(n0, 'Y',{
		set:function(v){n11.setAttribute('y',v);},
		get:function(){return n11.getAttribute('y');}
	});
	Object.defineProperty(n0, 'W',{
		set:function(v){n11.setAttribute('width',v);},
		get:function(){return n11.getAttribute('width');}
	});
	Object.defineProperty(n0, 'H',{
		set:function(v){n11.setAttribute('height',v);},
		get:function(){return n11.getAttribute('height');}
	});
	n10.appendChild(n11);
	n9.appendChild(n10);
	var n12=document.createElementNS('http://www.w3.org/2000/svg','g');
	n12.setAttribute('filter','url(#100)');
	n12.setAttribute('transform','scale(1)');
	n12.setAttribute('opacity','1');
	Object.defineProperty(n0, 'Transform2',{
		set:function(v){n12.setAttribute('transform',v);},
		get:function(){return n12.getAttribute('transform');}
	});
	Object.defineProperty(n0, 'Opacity2',{
		set:function(v){n12.setAttribute('opacity',v);},
		get:function(){return n12.getAttribute('opacity');}
	});
	var n13=document.createElementNS('http://www.w3.org/2000/svg','rect');
	n13.setAttribute('x','-320');
	n13.setAttribute('y','-180');
	n13.setAttribute('width','640');
	n13.setAttribute('height','360');
	Object.defineProperty(n0, 'X2',{
		set:function(v){n13.setAttribute('x',v);},
		get:function(){return n13.getAttribute('x');}
	});
	Object.defineProperty(n0, 'Y2',{
		set:function(v){n13.setAttribute('y',v);},
		get:function(){return n13.getAttribute('y');}
	});
	Object.defineProperty(n0, 'W2',{
		set:function(v){n13.setAttribute('width',v);},
		get:function(){return n13.getAttribute('width');}
	});
	Object.defineProperty(n0, 'H2',{
		set:function(v){n13.setAttribute('height',v);},
		get:function(){return n13.getAttribute('height');}
	});
	n12.appendChild(n13);
	n9.appendChild(n12);
	n0.appendChild(n9);
	return n0;
};
