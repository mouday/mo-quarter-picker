// 季节对应筛选项
export const quarter_options = [
  {
    label: 'Q1',
    value: 1,
    months: [1, 2, 3]
  },
  {
    label: 'Q2',
    value: 2,
    months: [4, 5, 6]
  },
  {
    label: 'Q3',
    value: 3,
    months: [7, 8, 9]
  },
  {
    label: 'Q4',
    value: 4,
    months: [10, 11, 12]
  }
];

/**
 * 获取季度对应的月份
 * @returns
 */
export function getQuarterOptionMonths(value) {
  for (let item of quarter_options) {
    if (item.value == value) {
      return item.months;
    }
  }
}

/**
 * 获取日期对应季度
 * @returns
 */
export function getQuarterItemOfMonth(month) {
  for (let item of quarter_options) {
    if (item.months.includes(month)) {
      return item;
    }
  }
}
