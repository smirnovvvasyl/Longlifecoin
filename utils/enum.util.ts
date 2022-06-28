export function enumToLabel(source, labels?) {
  if (labels) {
    return labels[source];
  }
  if (source === '') {
    return '';
  }
  const list = source.split('_');
  return list.map(item => {
    const labelItem = item.toLowerCase();
    return labelItem[0].toUpperCase() + labelItem.slice(1);
  }).join(' ');
}
