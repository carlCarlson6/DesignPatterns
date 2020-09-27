import { IObservable } from "./IObservable";
import { IObserver } from "./IObserver";

export class YoutubeChannel implements IObservable {
    private channelSubscribers: Array<IObserver> = [];
    private lastVideoPosted: string = '';

    Attacth(observer: IObserver): void {
        this.channelSubscribers.push(observer);
    }

    Detach(obsever: IObserver): void {
        // deletes the observer;
        // TODO
        throw new Error("Method not implemented.");
    }

    Notify(): void {
        for (let subscriber of this.channelSubscribers) {
            subscriber.Update();
        }
    }

    AddNewVideo(titile: string): void {
        this.lastVideoPosted = titile;
        console.log('new youtube video added to channel')
        this.Notify();
    }

    get lastVideoTitle(): string {
        return this.lastVideoPosted;
    }

}