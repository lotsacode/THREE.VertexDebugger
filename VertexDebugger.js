function VertexDebugger(mesh, renderer) {
	this.divs = [];
	// Add container div
	this.container = document.createElement('div');
	this.container.style.overflow = "hidden";
	this.container.style.position = "absolute";
	this.container.style.width = renderer.domElement.width + "px";
	this.container.style.height = renderer.domElement.height + "px";
	document.body.appendChild(this.container);
	// Add vertex divs
	for (var i = 0; i < mesh.geometry.vertices.length; i++) {
		var div = document.createElement('div');
		this.divs.push(div);
	  div.style.position = "absolute";
		div.style.background = "rgba(0,0,0,0.66)";
		div.style.borderTopRightRadius = "7px";
		div.style.borderBottomRightRadius = "7px";
		div.style.borderBottomLeftRadius = "7px";
		div.style.overflow = "hidden";
		div.style.padding = "5px";
		div.style.fontSize = "9px";
		div.style.color = "white";
		this.container.appendChild(div);
	}
	// Call this in your render loop
	this.update = function() {
		this.container.style.width = renderer.domElement.width + "px";
		this.container.style.height = renderer.domElement.height + "px";
		for (var i = 0; i < mesh.geometry.vertices.length; i++) {
			var vertex = mesh.geometry.vertices[i].clone().applyMatrix4(mesh.matrix);
			var width = window.innerWidth, height = window.innerHeight;
			var widthHalf = width / 2, heightHalf = height / 2;
			var pos = vertex.clone();
			pos.project(camera);
			pos.x = ( pos.x * widthHalf ) + widthHalf;
			pos.y = - ( pos.y * heightHalf ) + heightHalf;
			this.divs[i].innerHTML =
				"index=" + i
				+ "<br>x=" + vertex.x.toFixed(1)
			  + "<br>y=" + vertex.y.toFixed(1)
				+ "<br>z=" + vertex.z.toFixed(1);
			this.divs[i].style.left = pos.x + 'px';
			this.divs[i].style.top = pos.y + 'px';
		};
	}
}
