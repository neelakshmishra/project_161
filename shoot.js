AFRAME.registerComponent("bullets",{
    inti:function(){
       this.showBullet() 
    },
    showBullet:function(){
       window.addEventListener("keydown",(e)=>{
         if(e.key==='z'){
            var bullet = document.createElement("a-entity");
            
            bullet.setAttribute("geometry",{
                primitive:"sphere",
                radius:0.1
            })
            bullet.setAttribute("material","color","black");
            
            var cam = document.querySelector("#camera")
            pos = cam.getAttribute("position")
            bullet.setAttribute("position",{
                x:pos.x,
                y:pos.y,
                z:pos.z,
            })
           
            var camera = document.querySelector("#camera").object3D //This will help to open the Three.js scene
            var direction = new THREE.Vector3();
            camera.getWorldDirection(direction);
           
            bullet.setAttribute("velocity",direction.multiplyScalar(-10))
            //To increase the bullet speed, we can multiply the direction vector with a number using multiplyScalar.
           
            var scene = document.querySelector("#scene");
            scene.appendChild(bullet)
            
         }
       })
    }
})