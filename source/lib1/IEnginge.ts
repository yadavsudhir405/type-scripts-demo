import IEngineStartParam from "../lib1/IEngineStartParam"
interface IEngine {
    start(callback: IEngineStartParam, status: boolean, engineType: string) : void;
    stop() : void;
}
class FerrariEngine implements IEngine{
    start(callback: IEngineStartParam, status: boolean, engineType: string): void {
        callback(status, engineType);
    }

    stop(): void {
        console.log("Stopping the Engine");
    }
}
export { IEngine, FerrariEngine}