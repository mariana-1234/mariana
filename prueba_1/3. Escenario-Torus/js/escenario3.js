//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xA7D7EB);


//camaras
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.fog = new THREE.Fog(0xffffff, 3, 7);
//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//geometrias
const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const material = new THREE.MeshBasicMaterial( {color: 0x000000} );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

//posición
camera.position.z = 5;

//animación
function animate() {
    requestAnimationFrame(animate);
    capsule.rotation.y -= 0.01;
    renderer.render(scene, camera);
}
animate();