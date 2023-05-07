import { useEffect, useRef } from "react";

function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.border = "1px solid black";
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.beginPath();
        ctx.arc(250, 150, 130, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(250, 210, 20, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(230, 278);
        ctx.lineTo(230, 350);
        ctx.moveTo(270, 278);
        ctx.lineTo(270, 350);
        ctx.strokeStyle = "black";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(230, 350);
        ctx.quadraticCurveTo(230, 410, 300, 408);
        ctx.lineTo(450, 408);
        ctx.quadraticCurveTo(480, 410, 480, 440);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(270, 350);
        ctx.quadraticCurveTo(270, 370, 300, 368);
        ctx.lineTo(450, 368);
        ctx.quadraticCurveTo(520, 370, 520, 440);
        ctx.lineTo(520, 500);
        ctx.moveTo(480, 440);
        ctx.lineTo(480, 500);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(520, 500);
        ctx.arc(500, 500, 20, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(520, 600);
        ctx.lineTo(120, 650);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(120, 650);
        ctx.arc(90, 650, 30, 0, 1 * Math.PI);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(100, 679);
        ctx.lineTo(490, 630);
        ctx.moveTo(520, 600);
        ctx.arc(490, 600, 29.5, 0, Math.PI / 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(60, 650);
        ctx.lineTo(520, 600);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(150, 672);
        ctx.lineTo(150, 800);
        ctx.lineTo(170, 800);
        ctx.lineTo(170, 669);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(420, 640);
        ctx.lineTo(420, 768);
        ctx.lineTo(440, 768);
        ctx.lineTo(440, 637);
        ctx.stroke();
      }
    }
  }, []);

  return <canvas ref={canvasRef} width={600} height={820} />;
}

export default Canvas;
