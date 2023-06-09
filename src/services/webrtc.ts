import { RefObject } from "react";

export class WebRTCConnection {
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;

  constructor() {
    this.localStream = null;
    this.remoteStream = null;
  }

  async getUserCamera(htmlVideoRef: RefObject<HTMLVideoElement>) {
    try {
      if (!htmlVideoRef) return;

      this.localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      htmlVideoRef.current!.srcObject = this.localStream;
    } catch (error) {
      console.log("Error:", error);
    }
  }
}
