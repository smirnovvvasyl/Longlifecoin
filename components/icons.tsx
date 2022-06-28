interface Props {
  name: string;
  color: string;
  size: number;
  className?: string;
  onClick?: () => void;
}

export default function Icon({ name, color, size, className, onClick }: Props) {
  let __html = '';
  const icons =  appIcons as any;
  if (icons[name]) {
    __html = icons[name](size, color);
  }
  const iconHtml = { __html };
  return (<span className={ 'inline-block ' + className } dangerouslySetInnerHTML={iconHtml} onClick={onClick} />);
}

export function getColor(color: string | null | undefined): string {
  if (color === 'primary') {
    return '#07A39D';
  } else if (color === 'secondary') {
    return '#0A2540';
  } else if (color === 'warning') {
    return '#F18F01';
  } else if (color === 'success') {
    return '#74B06F';
  } else if (color === 'danger') {
    return '#E54D4D';
  } else if (color === 'white') {
    return '#FFFFFF';
  } else if (color === 'black') {
    return '#000000';
  } else if (color === 'gray') {
    return '#2C2C2C';
  } else {
    return color || '#07A39D';
  }
}

export const appIcons = {
  search: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 21L16.65 16.65" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  check: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L9 17L4 12" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  check_circle: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22 4L12 14.01L9 11.01" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  check_square: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 11L12 14L22 4" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  award: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  send: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 2L11 13" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  sidebar: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 3V21" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  clock: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 6V12L16 14" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  close: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6 6L18 18" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  contractor: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17 11L19 13L23 9" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  file_text: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 2V8H20" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 13H8" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 17H8" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 9H9H8" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  lead: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22 12H18" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6 12H2" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 6V2" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 22V18" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  message: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  filter: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  flag: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4 22V15" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  chevron: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  accurate: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  arrow_right: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 5L19 12L12 19" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  bell: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  bookmark: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  calendar: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 2V6" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 2V6" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3 10H21" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  camera: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  clip: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.44 11.05L12.25 20.24C11.1242 21.3658 9.59723 21.9983 8.00505 21.9983C6.41286 21.9983 4.88589 21.3658 3.76005 20.24C2.6342 19.1141 2.00171 17.5872 2.00171 15.995C2.00171 14.4028 2.6342 12.8758 3.76005 11.75L12.95 2.55998C13.7006 1.80942 14.7186 1.38776 15.78 1.38776C16.8415 1.38776 17.8595 1.80942 18.61 2.55998C19.3606 3.31054 19.7823 4.32852 19.7823 5.38998C19.7823 6.45144 19.3606 7.46942 18.61 8.21998L9.41005 17.41C9.03476 17.7853 8.52577 17.9961 7.99505 17.9961C7.46432 17.9961 6.95533 17.7853 6.58005 17.41C6.20476 17.0347 5.99393 16.5257 5.99393 15.995C5.99393 15.4643 6.20476 14.9553 6.58005 14.58L15.07 6.09998" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  customer: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  dashboard: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 7H7V16H10V7Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17 7H14V12H17V7Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  edit: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  external_link: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15 3H21V9" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 14L21 3" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  hiring: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  home: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 22V12H15V22" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  ideaboard: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 3H3V10H10V3Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 3H14V10H21V3Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 14H14V21H21V14Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 14H3V21H10V14Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  image: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 15L16 10L5 21" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  info: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 16V12" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 8H12.01" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  layout: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3 9H21" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 21V9" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  lock: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  logout: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 17L21 12L16 7" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 12H9" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  marketing: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.21 15.89C20.5738 17.3945 19.5788 18.7202 18.3119 19.7513C17.0449 20.7824 15.5447 21.4874 13.9424 21.8048C12.3401 22.1222 10.6844 22.0422 9.12012 21.5718C7.55585 21.1015 6.1306 20.2551 4.969 19.1067C3.80739 17.9583 2.94479 16.5428 2.45661 14.984C1.96843 13.4252 1.86954 11.7705 2.16857 10.1647C2.46761 8.5588 3.15547 7.05064 4.17202 5.77205C5.18857 4.49345 6.50286 3.48333 7.99998 2.83002" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V12H22Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  marketplace: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3 6H21" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  menu: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8H21" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3 16H17" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3 23H21" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  money: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1V23" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  option: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  plus_square: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 8V16" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 12H16" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  project: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  review: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  scan: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  setting: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15V15Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  trash: (size = 24, color?: string) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6H5H21" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 11V17" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 11V17" stroke="${getColor(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
};
