import { Subscriber } from "./Subscriber";
import { YoutubeChannel } from "./YoutubeChannel";

const channel = new YoutubeChannel();
const subscriber1 = new Subscriber(channel);
const subscriber2 = new Subscriber(channel);

channel.Attacth(subscriber1);
channel.Attacth(subscriber2);

channel.AddNewVideo('about observer pattern')