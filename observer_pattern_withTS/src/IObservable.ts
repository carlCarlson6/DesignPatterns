import { IObserver } from "./IObserver";

export interface IObservable {
    Attacth(observer: IObserver): void;
    Detach(obsever: IObserver): void;
    Notify(): void;
}