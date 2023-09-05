type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <div>
      <button className={`button-class-${variant}`} {...rest}>
        {children}
      </button>
    </div>
  );
}

export default Button;
