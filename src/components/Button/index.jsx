import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  children,
  className,
  directional = false,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Component = "button";
  const props = {
    onClick,
    ...passProps,
  };

  // Remove event listeners when btn is clicked

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = "a";
  }

  const classes = cx("wrapper", {
    [className]: className,
    directional,
  });
  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
      {children}
    </Component>
  );
}

export default Button;
