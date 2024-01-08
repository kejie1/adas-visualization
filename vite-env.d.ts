/*
 * @Author: ChuandongHuang chuandong_huang@human-horizons.com
 * @Date: 2024-01-08 10:39:48
 * @LastEditors: ChuandongHuang chuandong_huang@human-horizons.com
 * @LastEditTime: 2024-01-08 10:40:00
 * @Description: 
 */
/// <reference types="vite/client" />
 
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // 更多环境变量...
  }
   
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }