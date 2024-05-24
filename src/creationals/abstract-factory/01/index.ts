import {Post} from "./post";
import {FacebookFactory} from "./factories/facebook/facebook-factory";
import {LinkedLnFactory} from "./factories/linkedln/linkedln.factory";
import {SlackFactory} from "./factories/slack/slack-factory";

const post = new Post("este es el mensaje que vamos a publicar");

post.send(new FacebookFactory());
post.send(new LinkedLnFactory());
post.send(new SlackFactory());
