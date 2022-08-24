//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);


//camaras
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.fog = new THREE.Fog(0xffffff, 30, 40);
//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//geometrias
const points = [];
for ( let i = 0; i < 10; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
const geometry = new THREE.LatheGeometry( points );
const material = new THREE.MeshBasicMaterial( { color: 0xF5283D } );
const lathe = new THREE.Mesh( geometry, material );
scene.add( lathe );

//posición
camera.position.z = 35;

//animación
function animate() {
    requestAnimationFrame(animate);
    lathe.rotation.y += 0.03;
    lathe.rotation.x += 0.02;
    
    renderer.render(scene, camera);
}
animate();