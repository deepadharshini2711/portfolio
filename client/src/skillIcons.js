import { FaJava } from 'react-icons/fa';
import {
  SiPython, SiHtml5, SiCss, SiJavascript, SiSpringboot, SiMongodb, SiExpress, SiReact,
  SiNodedotjs, SiMysql, SiSqlite, SiGit, SiGithub, SiPostman,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';
import {
  LuBoxes, LuShieldCheck, LuWorkflow, LuListChecks, LuDatabase, LuNetwork, LuTable,
  LuMonitorCog, LuLightbulb, LuCode,
} from 'react-icons/lu';

// color: null = follow the theme text color (for black/white logos)
const map = {
  java: [FaJava, '#f89820'],
  python: [SiPython, '#3776ab'],
  oop: [LuBoxes, '#a78bfa'],
  'exception handling': [LuShieldCheck, '#f43f5e'],
  multithreading: [LuWorkflow, '#22d3ee'],
  html: [SiHtml5, '#e34f26'],
  css: [SiCss, '#1572b6'],
  javascript: [SiJavascript, '#f7df1e'],
  'spring boot': [SiSpringboot, '#6db33f'],
  'rest apis': [TbApi, '#06b6d4'],
  'crud operations': [LuListChecks, '#10b981'],
  mongodb: [SiMongodb, '#47a248'],
  'express.js': [SiExpress, null],
  'react.js': [SiReact, '#61dafb'],
  'node.js': [SiNodedotjs, '#5fa04e'],
  mysql: [SiMysql, '#5b9bd5'],
  sqlite: [SiSqlite, '#3b9bd9'],
  sql: [LuDatabase, '#f59e0b'],
  'data structures & algorithms': [LuNetwork, '#ec4899'],
  dbms: [LuTable, '#8b5cf6'],
  'operating systems': [LuMonitorCog, '#0ea5e9'],
  'problem solving': [LuLightbulb, '#facc15'],
  git: [SiGit, '#f05032'],
  github: [SiGithub, null],
  'vs code': [VscVscode, '#007acc'],
  postman: [SiPostman, '#ff6c37'],
};

export function getSkillIcon(name) {
  const [Icon, color] = map[name.toLowerCase()] || [LuCode, '#8b5cf6'];
  return { Icon, color };
}
