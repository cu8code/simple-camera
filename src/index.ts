import Start from "./modules/start";
import Stop from "./modules/stop";
import { Dimension, Option } from "./types";

export default class SimpleCamera {
  readonly CAM_NAME = "SIMP_CAM";

  rootElement: HTMLElement | null;
  displayElement: HTMLVideoElement;
  buttonElement: HTMLElement;

  private isON: boolean = false;
  dimension: Dimension;
  buttonDimension: Dimension;
  border: string;
  style: string | undefined;

  stop = Stop;
  start = Start;

  constructor(options: Option) {
    this.rootElement = options.rootElement;
    if (this.rootElement == undefined) {
      throw new Error(
        "initilization failed || please provie proper rootElement"
      );
    }

    this.border = options.border ?? "";
    this.style = options.style;

    this.dimension = options.dimension ?? {
      height: 400,
      width: 400,
    };

    this.buttonDimension = {
      height: 100,
      width: 100,
    };

    this.rootElement.innerHTML = `
      <div id="${this.CAM_NAME} style=${
      this.style ?? "display:flex;border:${this.border}"
    }>
        <video id="${this.CAM_NAME}-video" style="width:${
      this.dimension.width
    }px;height:${this.dimension.height}px" autoplay></video>
        <center>
          <div id="${this.CAM_NAME}-button""width:${
      this.buttonDimension.width
    }px;height:${this.buttonDimension.height}px"></div>
        </center>
      </div>
    `;

    this.displayElement = document.getElementById(
      `${this.CAM_NAME}-video`
    ) as HTMLVideoElement;
    this.buttonElement = document.getElementById(
      `${this.CAM_NAME}-button`
    ) as HTMLElement;
  }
}
