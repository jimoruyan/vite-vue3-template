
export function formatTime(time, fmt) {
  const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  const date = new Date(time)
  const year = date.getFullYear()
  const month = addZero(date.getMonth() + 1)
  const day = addZero(date.getDate())
  const hour = addZero(date.getHours())
  const minute = addZero(date.getMinutes())
  const second = addZero(date.getSeconds())
  const weekday = weekdays[date.getDay()]
  if (fmt === 'YMD') { // 年月日
    return `${year}-${month}-${day}`
  } else if (fmt === 'HMS') { // 时分秒
    return `${hour}:${minute}:${second}`
  } else if (fmt === 'WEEK') { // 周
    return weekday
  } else {
    return ''
  }
}
// 小于10补0
export function addZero(num) {
  return num > 9 ? num : `0${num}`
}
