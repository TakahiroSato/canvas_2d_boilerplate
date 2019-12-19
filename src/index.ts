import { context, event, keyCode } from "./util";

context.init("canvas2d");
event.init();

event.keyDownEventListeners.push({
    key: keyCode.space,
    listener: (e: KeyboardEvent) => {
        console.log(e);
    }
});

event.addMouseDownEvent((e: MouseEvent) => {
    console.log(e);
});

const animation = () => {
    context.c2d.fillBackground("#0000ff");
    context.c2d.drawText("it works!", 5, 5, "#ffffff", 20);
    requestAnimationFrame(animation);
}
animation();