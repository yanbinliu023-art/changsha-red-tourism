import { DATA_SOURCE_NOTE, type RoutePlan } from '../types/tourism'

export const routePlans: RoutePlan[] = [
  {
    id: 'city-half-day',
    name: '长沙市区红色研学半日线',
    duration: '约半日',
    audience: '高校课程实践小组',
    theme: '城市记忆与青年理想',
    stops: ['湖南第一师范学院旧址', '橘子洲片区', '湖南烈士公园'],
    highlights: ['交通便利', '适合步行与公共交通衔接', '便于课堂展示'],
    dataSource: DATA_SOURCE_NOTE,
  },
  {
    id: 'suburban-day',
    name: '长沙周边红色资源一日线',
    duration: '约1日',
    audience: '研学团队与课程调研小组',
    theme: '革命人物与乡村红色文旅',
    stops: ['杨开慧纪念馆', '刘少奇故里'],
    highlights: ['主题集中', '适合比较城乡资源开发差异', '强调保护性利用'],
    dataSource: DATA_SOURCE_NOTE,
  },
]
