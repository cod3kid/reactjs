type InputProps = React.ComponentProps<"input">;
function Input(props: InputProps) {
  return (
    <div>
      <input {...props} />
    </div>
  );
}

export default Input;
