export function timeAgo (date) {
  const time = (new Date(date)).getTime() / 1000;
  const between = Date.now() / 1000 - time;
  if (between < 3600) {
    return pluralize(~~(between / 60), ' 分钟前');
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' 小时前');
  } else {
    return pluralize(~~(between / 86400), ' 天前');
  }
}

function pluralize (time, label) {
  return time + label;
}