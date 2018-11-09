/**
 * 验证js
 * @author lk 2018-11-08
 */
export function isvalidUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
