export function getMedia (x: Array<number>) {
  let Media = x;
  let Media2 = 0;

 for(let i=0; i < Media.length; i++ ) {
    Media2 = Media2 + Media[i];
  }

  Media2 = Math.round((Media2/ Media.length)* 100) /100;

  return Media2;
}

