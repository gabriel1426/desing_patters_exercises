import {RobotDirector} from "../director/robotDirector";
import {RobotBuilder} from "../builder/robotBuilder";


const director = new RobotDirector();

const builder = new RobotBuilder();

const robot1 = director.createRobotModel1(builder);
robot1.printRobot();

console.log('----------------------');
console.log('----------------------');

const robot2 = director.createRobotModel2(builder);
robot2.printRobot();
