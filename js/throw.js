AFRAME.registerComponent("bowling-balls",{
    init:function(){
        this.throwBowlingBall()
    },
    throwBowlingBall:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key=="z"||e.key=="Z"){
                const ball = document.createElement("a-entity")
                ball.setAttribute("gltf-model", "./models/bowling_ball/scene.gltf")
                ball.setAttribute("scale",{x:3,y:3,z:3})
                const cam = document.querySelector("#camera")
                const pos = cam.getAttribute("position") 
                ball.setAttribute("position",{x:pos.x,y:pos.y-1.2,z:pos.z})

                var camera = document.querySelector("#camera").object3D;
                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction)

                ball.setAttribute("velocity",direction.multiplyScalar(-7))

                const scene = document.querySelector("#scene")
                scene.appendChild(ball)
            }
        })
    }
})