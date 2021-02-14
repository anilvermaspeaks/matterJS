import React, { Component } from 'react'
import Matter from 'matter-js'

var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies

var engine = Engine.create({

});
export default class SimpleObs extends Component {
    methodDv = React.createRef();

    componentDidMount() {

        //create renderer on screen
        var render = Render.create({
            element: this.methodDv.current,
            engine: engine,
            options: {
                width: 800,
                height: 400,
                wireframes: false,
            }
        });

        var boxA = Bodies.rectangle(200, 60, 80, 80);
        var ballA = Bodies.circle(180, 100, 40, 10);
        var ballB = Bodies.circle(230, 40, 40, 10);
        var ballC = Bodies.rectangle(260, 60, 80, 70, {
            //isStatic: true,
            restitution: 1,
            render: { fillStyle: 'blue' }
        })
        var ground = Bodies.rectangle(400, 380, 800, 70, { isStatic: true });

        World.add(engine.world, [ground, boxA, ballA, ballB, ballC]);

        Engine.run(engine);
        Render.run(render);
    }

    addItem() {
        var ballD = Bodies.circle(230, 40, 40, 10);
        World.add(engine.world, [ballD]);
    }
    rotate() {
        Matter.Composite.rotate(engine.world, Math.PI / 4, { x: 400, y: 200 });
    }
    render() {
        return (
            <div>    <button onClick={this.addItem}>Add Cicle</button>
                <button onClick={this.rotate}>Rotate</button>
                <div ref={this.methodDv} >

                </div></div>
        )
    }
}
