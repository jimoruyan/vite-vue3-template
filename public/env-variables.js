/*
 * @description:  环境变量的引用，直接使用vue cli自带的env文件，没办法将变量提取出来
 *                这里使用通过一个js文件引用，其他代码使用都通过此文件使用环境变量，部署环境可以实现动态修改
 *
 * @author:
 * @since:
 * @version: 1.0
 */
export default  {
  // 项目名称
  title: import.meta.env.VITE_GLOB_APP_TITLE,
  // 接口IP地址
  baseURL: import.meta.env.VITE_GLOB_BASE_URL,
  // 体验账号
  userName: import.meta.env.VITE_GLOB_USER_NAME,
  // 体验密码
  pwd: import.meta.env.VITE_GLOB_USER_PWD,
  // swagger地址
  swaggerURL: import.meta.env.VITE_GLOB_SWAGGER_URL,
}
