import React, { Component } from 'react'
import Matter from 'matter-js'

var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Composites = Matter.Composites,
    Composite = Matter.Composite,
    Mouse = Matter.Mouse,
    Constraint = Matter.Constraint,
    Body = Matter.Body;

var engine = Engine.create({

});
export default class SimpleObs extends Component {
    methodDv = React.createRef();
    car;
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

        this.car = Composites.car(190, 100, 100, 45, 30);
        var boxes = Composites.stack(500, 80, 3, 1, 10, 0, function (x, y) {
            return Bodies.rectangle(x, y, 50, 40);
        });
        var chain = Composites.chain(boxes, 0.5, 0, -0.5, 0, { stiffness: 1 });
        Composite.add(boxes, Constraint.create({
            bodyA: boxes.bodies[0],
            pointB: { x: 500, y: 15 },
            stiffness: 0.8
        }));
        World.add(engine.world, [this.car, boxes, Bodies.rectangle(400, 0, 810, 30, { isStatic: true }),
        Bodies.rectangle(400, 400, 810, 30, { isStatic: true }),
        Bodies.rectangle(800, 200, 30, 420, { isStatic: true }),
        Bodies.rectangle(0, 200, 30, 420, { isStatic: true })]);

        Engine.run(engine);
        Render.run(render);
    }

    moveForward = () => {
        Body.applyForce(this.car.bodies[0], { x: this.car.bodies[0].position.x, y: this.car.bodies[0].position.y }, { x: 0.5, y: 0 });
    }


    render() {
        return (
            <div>
                <button onClick={this.moveForward}>Move Forward</button>
                <div ref={this.methodDv} >

                </div></div>
        )
    }
}
