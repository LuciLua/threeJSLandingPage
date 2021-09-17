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
    const SphereGeometry = new THREE.SphereGeometry(0.615, 0.632, 0.616);
    
    // texture
    const texture = new THREE.TextureLoader().load('img/grasslight-big.jpg')
    const myface = new THREE.TextureLoader().load('img/luci2.png')

    // materials
    const material = new THREE.MeshStandardMaterial( {color: 0xffff00} );
    const red = new THREE.MeshStandardMaterial( {color: 0xff0000} );
    const grama = new THREE.MeshStandardMaterial( {map: texture} );
    const chara = new THREE.MeshStandardMaterial( {
        map: myface,
        alpha: true,
        transparent: true,
 
    } );
    

    // Objects
    plane = new THREE.Mesh (geometryPlane, red);
    scene.add(plane)
    
    cube = new THREE.Mesh( geometry, chara );
    scene.add( cube );

    wall = new THREE.Mesh( geometryPlane, grama );
    scene.add( wall );

    ball = new THREE.Mesh( SphereGeometry, material);
    scene.add(ball);

    //Lights

    const Ambientlight = new THREE.AmbientLight();
    scene.add(Ambientlight)
    const Pointlight = new THREE.PointLight();
    scene.add(Pointlight)

    //Light Position

    Pointlight.position.x = 1
    Pointlight.position.z = 1
    Pointlight.intensity = 2
    Pointlight.distance = 10
    
    // Positions
    plane.rotation.x = 9.5
    
    plane.scale.x = 2
    plane.scale.y = 0.05

    plane.position.y = -1
    
    cube.rotation.z = 110
    cube.rotation.x = 9.5
    cube.position.y = -0.5
    
    wall.rotation.x = 10.5
    wall.scale.y = 0.1
    wall.scale.x = 2
    wall.position.z = -1;


    ball.position.z = -1
    ball.position.x = 4

    camera.position.z = 5;

    window.addEventListener('mousemove', function(){ 
        ball.position.x += 0.01
    })
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
    ball.rotation.x += 0.01

    renderer.render(scene, camera)
}

animate()