import { IAnimation, ANIMATION_UID } from "./animation-types";
import { getObjectElementById } from "webslider-sdk/lib/utils/extensions-utils";
import { logger } from "webslider-sdk/lib/utils/logger/logger";

/**
 * Animation implementation for Player
 * Function returns implementation for animations lifecycle methods:
 * init, rootStart, rootStop, start, stop, destroy, update, pause, resume, preload
 */
export function animation() {
  let element: HTMLDivElement;
  let debugInfoHolder: HTMLDivElement;
  let timeHolder: HTMLDivElement;

  function init(config: IAnimation) {
    logger.animation.debug(`${ANIMATION_UID} init`);

    element = getObjectElementById(config.itemId!)!;

    debugInfoHolder = document.createElement("div");
    debugInfoHolder.style.background = "rgba(0,0,0,0.5)";
    debugInfoHolder.style.color = "white";
    debugInfoHolder.style.position = "absolute";
    debugInfoHolder.style.top = "0px";

    timeHolder = document.createElement("div");
    debugInfoHolder.appendChild(timeHolder);
  }

  function destroy(config: any) {
    logger.animation.debug(`${ANIMATION_UID} destroy`);
  }

  function rootStart(config: any) {
    logger.animation.debug(`${ANIMATION_UID} rootStart`);
  }

  function rootStop(config: any) {
    logger.animation.debug(`${ANIMATION_UID} rootStop`);
  }

  function start(config: any, isManual?: boolean) {
    logger.animation.debug(`${ANIMATION_UID}  start`);

    element.style.border = "5px solid red";

    element.appendChild(debugInfoHolder);
  }

  function stop(config: any, isManual?: boolean, isReverse?: boolean) {
    logger.animation.debug(`${ANIMATION_UID} stop`);

    element.style.border = "initial";

    element.removeChild(debugInfoHolder);
  }

  function update(config: any, time: number, isManual?: boolean) {
    logger.animation.debug(`${ANIMATION_UID} update`);

    timeHolder.innerHTML =
      "Time: " + time.toFixed(2) + (isManual ? "(manual seek)" : "");
  }

  function pause(config: any) {
    logger.animation.debug(`${ANIMATION_UID} pause`);
  }

  function resume(config: any) {
    logger.animation.debug(`${ANIMATION_UID} resume`);
  }

  return {
    start,
    stop,
    init,
    destroy,
    update,
    pause,
    resume,
    rootStart,
    rootStop,
  };
}
