let scene, camera, renderer, cube;

function init(){
    scene  = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, 
    window.innerWidth / window.innerHeight,
    0.1,
    1000
    );
    
    renderer = new THREE.WebGLRenderer({ antialias: true });
    
    document.body.appendChild(renderer.domElement);
    
    // geometry
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const geometryPlane = new THREE.BoxGeometry( 2, 2, 2 );
    
    // materials
    const material = new THREE.MeshStandardMaterial( {color: 0x0000ff} );
    const red = new THREE.MeshStandardMaterial( {color: 0xff0000} );
    
    // Objects
    plane = new THREE.Mesh (geometryPlane, red);
    scene.add(plane)
    
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    //Lights

    const Ambientlight = new THREE.AmbientLight();
    scene.add(Ambientlight)
    const Pointlight = new THREE.PointLight();
    scene.add(Pointlight)

    //Light Position

    Pointlight.position.x = 2
    Pointlight.position.z = 2
    Pointlight.intensity = 2
    
    // Positions
    plane.rotation.x = 9.5
    
    plane.scale.x = 2
    plane.scale.y = 0.05

    plane.position.y = -1


    cube.rotation.x = 9.5
    cube.position.y = -0.5

    camera.position.z = 5;
}

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false)


init();

function animate(){
    requestAnimationFrame(animate)

    cube.rotation.y += 0.01

    renderer.render(scene, camera)
}

animate()