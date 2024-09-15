let tetrahedron;
function setup() {
  createCanvas(300, 300, WEBGL);
 
  tetrahedron = new p5.Geometry();
 
  // Give each geometry a unique gid
  tetrahedron.gid = 'tetrahedron';
 
  // Add four points of the tetrahedron
 
  let radius = 50;
  // A 2D triangle:
  tetrahedron.vertices.push(createVector(radius, 0, 0));
  tetrahedron.vertices.push(createVector(radius, 0, 0).rotate(TWO_PI / 3));
  tetrahedron.vertices.push(createVector(radius, 0, 0).rotate(TWO_PI * 2 / 3));
  // Add a tip in the z axis:
  tetrahedron.vertices.push(createVector(0, 0, radius));
 
  // Create the four faces by connecting the sets of three points
  tetrahedron.faces.push([0, 1, 2]);
  tetrahedron.faces.push([0, 1, 3]);
  tetrahedron.faces.push([0, 2, 3]);
  tetrahedron.faces.push([1, 2, 3]);
}
function draw() {
  background(200);
  strokeWeight(2);
  orbitControl();
  //rotateY(millis() * 0.001);
  model(tetrahedron);
}