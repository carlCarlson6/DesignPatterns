import { IObservable } from "./IObservable";
import { IObserver } from "./IObserver";
import { YoutubeChannel } from "./YoutubeChannel";

export class Subscriber implements IObserver {
    constructor(private observable: IObservable) { }

    Update() {
        console.log('new video posted');
        console.log('with title:', (this.observable as YoutubeChannel).lastVideoTitle)
    }

}