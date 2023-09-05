type Horizontal = "left" | "center" | "right";
type Vertical = "top" | "center" | "bottom";

type ToastProps = {
  position: Exclude<`${Horizontal}-${Vertical}`, "center-center"> | "center";
};

function Toast({ position }: ToastProps) {
  return (
    <div>
      <h2>{position}</h2>
    </div>
  );
}

export default Toast;
