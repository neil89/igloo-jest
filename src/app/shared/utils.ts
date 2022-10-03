export class Utils {

  public static convertDateToES(d: Date, dateOnly: boolean = true): string {

    const isoDate = d.toISOString().split('T');
    const date = isoDate[0].split('-').reverse().join('/');

    if( !dateOnly ) {
      return `${date} ${isoDate[1].slice(0, -1)}`;
    }

    return date;
  }
}
