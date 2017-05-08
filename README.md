# VertexDebugger

Vertex debugger for ThreeJS

![alt text](https://raw.githubusercontent.com/lotsacode/THREE.VertexDebugger/master/preview.png)

# Usage
Add the script to your page

    <script src="/path/to/VertexDebugger.js"></script>

Initialize it 

    var vd = new VertexDebugger(mesh, renderer);

Add this line to your render loop

    vd.update();

# Notes

I don't recommend using this with a mesh that has lots of vertices.

The boxes are rendered with HTML elements. Depending on your HTML/CSS setup there might be some issues. Feel free to edit the code to fit your page. It's around 50 lines.

I haven't tested how it behaves after resizing the canvas.

The x,y,z-coordinates are relative to world space.
