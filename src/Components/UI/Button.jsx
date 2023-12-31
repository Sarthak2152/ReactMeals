function Button({ className, children, textOnly, ...props }) {
  let styles = "";
  if (textOnly) styles += " text-[#ffc404] text-lg ";
  else styles += " px-8 py-2 bg-[#ffc404]  text-[#1f1a09] text-lg rounded-md ";

  styles += ` ${className}`;
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}

export default Button;
