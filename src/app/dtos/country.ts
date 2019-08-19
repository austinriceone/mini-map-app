export class Country {
    name: string;
    region: string;
    currencyCode: string;
    currencyName: string;
    latitude: number;
    longitude: number;
    alpha2Code: string;
    alpha3Code: string;
    nativeName: string;
    subRegion: string;
    area: number;
    numericCode: string;
    nativeLanguage: string;
    currencySymbol: string;
    flagImage: string;

    constructor(data) {
        this.name = data.Name;
        this.region = data.Region;
        this.currencyCode = data.CurrencyCode;
        this.latitude = Number(data.Latitude);
        this.longitude = Number(data.Longitude);
        this.alpha2Code = data.Alpha2Code;
        this.alpha3Code = data.Alpha3Code;
        this.nativeName = data.NativeName;
        this.subRegion = data.SubRegion;
        this.area = data.Area;
        this.numericCode = data.NumericCode;
        this.nativeLanguage = data.NativeLanguage;
        this.currencyName = data.CurrencyName;
        this.currencySymbol = data.CurrencySymbol;
        this.flagImage = data.Flag;
    }
}
