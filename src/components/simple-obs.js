import React, { Component } from 'react'
import Matter from 'matter-js'

export default class SimpleObs extends Component {
    simDivObj = React.createRef();

    componentDidMount() {

        var Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World,
            Bodies = Matter.Bodies

        var engine = Engine.create({

        });
        //create renderer on screen
        var render = Render.create({
            element: this.simDivObj.current,
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
    render() {
        return (
            <div ref={this.simDivObj} >

            </div>
        )
    }
}
