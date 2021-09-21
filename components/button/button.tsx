/*
 * @Description:
 * @Author: changqing
 * @Date: 2021-09-21 16:03:53
 * @LastEditTime: 2021-09-21 18:21:51
 * @LastEditors: changqing
 * @Usage:
 */
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;
  return <button type="button">{children}</button>;
};
export default Button;
// 如果你导出的是type，会保证在编译去掉，可以进行更好的优化
export type { ButtonProps };
